namespace VICSS.Service.CentreManagement.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using System.Reflection;
    using System.Text.Json;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Centre;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.CentreManagement.Domain;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;
    using VICSS.Shared.Models.Kafka;
    using VICSS.Shared.Models.LaneConfiguration;

    public class GetExamsByCentreAndLaneHandler : IRequestHandler<GetExamCodeRequestDto, GetExamCodeResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<CentreDBContext, Centre> genericRepository;
        private readonly IKafkaProducer producer;
        private readonly IKafkaConsumer consumer;
        private readonly IConfiguration config;
        private readonly string kafkaUserName;
        private readonly string kafkaPassword;
        private readonly ILogger<GetExamsByCentreAndLaneHandler> logger;

        public GetExamsByCentreAndLaneHandler(IMapper mapper, IGenericRepository<CentreDBContext, Centre> genericRepository, IKafkaProducer producer, IKafkaConsumer consumer, IConfiguration config, ILogger<GetExamsByCentreAndLaneHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.producer = producer;
            this.consumer = consumer;
            this.config = config;
            kafkaUserName = config.GetValue<string>("KafkaConfig:UserName");
            kafkaPassword = config.GetValue<string>("KafkaConfig:Password");
            this.logger = logger;
        }

        public async Task<GetExamCodeResponseDto> Handle(GetExamCodeRequestDto request, CancellationToken cancellationToken)
        {
            GetExamCodeResponseDto getExamCodeResponseDto = new GetExamCodeResponseDto();
            List<Centre> centres = new List<Centre>();
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "GetExamsByCentreAndLaneHandler", "GetExamsByCentreAndLaneHandler initiated");

                if (request.centreId != null)
                {

                    centres = (List<Centre>)await genericRepository.GetByQuery(x => x.CentreId == request.centreId);

                    if (centres.Count > 0)
                    {
                        var taskLanesIdAndInspectionIdData = Task.Run(() => GetLanesAndInspectionIds(request.centreId, trackingId));
                        var taskExamCodeData = Task.Run(() => GetExamCode(CommonConstants.ActiveStatus, trackingId));


                        taskLanesIdAndInspectionIdData.Wait(cancellationToken);
                        taskExamCodeData.Wait(cancellationToken);


                        var laneAndInspectionData = taskLanesIdAndInspectionIdData.Result;
                        var examCodeData = taskExamCodeData.Result;

                        if (laneAndInspectionData != null && examCodeData != null)
                        {
                            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, MethodBase.GetCurrentMethod()?.Name, "Data Recieved for Lane inspection and exam code.");

                            getExamCodeResponseDto.ExamCodeDetails =
                                (from lanes in laneAndInspectionData
                                 join exam in examCodeData on lanes.InspectionTypeId equals exam.InspectionTypeId
                                 select new ExamCodeDetailsDto
                                 {
                                     LaneId = lanes.LaneId,
                                     InspectionTypeId = lanes.InspectionTypeId,
                                     ExamCode = exam.ExamCode,
                                     ExamClass = exam.ExamClass,
                                     InspectionTypeName = exam.InspectionTypeName,
                                     InspectionTypeDescription = exam.InspectionTypeDescription,
                                     ExamFee = exam.ExamFee,
                                 }).ToList();

                            getExamCodeResponseDto.HttpStatusCode = HttpStatusCode.OK;
                        }
                    }
                    else
                    {
                        getExamCodeResponseDto.HttpStatusCode = HttpStatusCode.NotFound;

                        //To Do
                    }
                }
                else
                {
                    getExamCodeResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception ex)
            {
                getExamCodeResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                //getExamCodeResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                getExamCodeResponseDto.ErrorMessage = ex.Message.ToString();

                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "GetExamsByCentreAndLaneHandler", ex.ToString());
                //To Do
            }

            return getExamCodeResponseDto;
        }

        private async Task<List<ExamCodeByLaneIdDto>> GetLanesAndInspectionIds(string centreId,string trackingId)
        {
            string producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            string consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");

            KafkaRequestExamIdByLanesIdDto kafkaRequestExamIdByLanesIdDto = new KafkaRequestExamIdByLanesIdDto(trackingId, centreId);

            //Produce message
            var producerConfig = await producer.GetKafkaProducerConfig(producerServer, kafkaUserName, kafkaPassword);
            await producer.ProduceMessage(producerConfig, kafkaRequestExamIdByLanesIdDto, kafkaRequestExamIdByLanesIdDto.TrackingUuid, KafkaTopicsConstant.GetExamByLaneidConsumerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "GetLanesAndInspectionIds", "Request produced from GetLanesAndInspectionIds.");

            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, kafkaUserName, kafkaPassword,String.Format("{0}-{1}",KafkaConsumerGroupConstant.GetExamByLaneIdConsumerGroupForResponse, kafkaRequestExamIdByLanesIdDto.TrackingUuid));
            //test change
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestExamIdByLanesIdDto.TrackingUuid, KafkaTopicsConstant.GetExamByLaneidProducerTopic, CancellationToken.None);

            KafkaResponseExamIdByLanesIdDto kafkaResponseExamIdByLanesIdDto = JsonSerializer.Deserialize<KafkaResponseExamIdByLanesIdDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "GetLanesAndInspectionIds", "Response recieved at GetLanesAndInspectionIds.");

            return kafkaResponseExamIdByLanesIdDto.ExamCodeByLanesId;
        }

        private async Task<List<ExamCodeDto>> GetExamCode(string status,string trackingId)
        {
            KafkaRequestExamCodeDto kafkaRequestExamCodeDto = new KafkaRequestExamCodeDto(trackingId, status);
            KafkaResponseExamCodeDto kafkaResponseExamCodeDto = new KafkaResponseExamCodeDto();

            string producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            string consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");

            var producerConfig = await producer.GetKafkaProducerConfig(producerServer, kafkaUserName, kafkaPassword);
            await producer.ProduceMessage(producerConfig, kafkaRequestExamCodeDto, kafkaRequestExamCodeDto.TrackingUuid, KafkaTopicsConstant.GetExamCodesProducerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "GetExamCode", "Request produced from GetExamCode.");

            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, kafkaUserName, kafkaPassword,string.Format("{0}-{1}", KafkaConsumerGroupConstant.GetExamCodeConsumerGroupForResponse, trackingId));
            //test change
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestExamCodeDto.TrackingUuid, KafkaTopicsConstant.GetExamCodesConsumerTopic, CancellationToken.None);

             kafkaResponseExamCodeDto = JsonSerializer.Deserialize<KafkaResponseExamCodeDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "GetExamCode", "Response recieved at GetExamCode.");

            return kafkaResponseExamCodeDto.ExamCodes;
        }
    }
}
