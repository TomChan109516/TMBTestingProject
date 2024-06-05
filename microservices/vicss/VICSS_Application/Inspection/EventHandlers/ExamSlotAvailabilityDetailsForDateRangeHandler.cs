namespace VICSS.Service.Inspection.EventHandlers
{
    using MediatR;
    using System.Text.Json;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Kafka;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Shared.Models.Centre;
    using System;
    using System.Net;
    using VICSS.Shared.Models.Inspection;
    using VICSS.Shared.Models.Common;

    public class ExamSlotAvailabilityDetailsForDateRangeHandler : IRequestHandler<GetExamSlotAvailabilityDetailsForDateRangeRequestDto, GetExamSlotAvailabilityDetailsForDateRangeResponseDto>
    {
        private readonly IGenericRepository<InspectionDBContext, InspectionScheduleDetail> genericRepository;
        private readonly IKafkaProducer producer;
        private readonly IKafkaConsumer consumer;
        private readonly IConfiguration config;
        private readonly ILogger<ExamSlotAvailabilityDetailsForDateRangeHandler> logger;

        public ExamSlotAvailabilityDetailsForDateRangeHandler(IGenericRepository<InspectionDBContext, InspectionScheduleDetail> genericRepository, IKafkaProducer producer, IKafkaConsumer consumer, IConfiguration config, ILogger<ExamSlotAvailabilityDetailsForDateRangeHandler> logger)
        {
            this.genericRepository = genericRepository;
            this.producer = producer;
            this.consumer = consumer;
            this.config = config;
            this.logger = logger;
        }

        public async Task<GetExamSlotAvailabilityDetailsForDateRangeResponseDto> Handle(GetExamSlotAvailabilityDetailsForDateRangeRequestDto request, CancellationToken cancellationToken)
        {
            GetExamSlotAvailabilityDetailsForDateRangeResponseDto getExamSlotAvailabilityDetailsForDateRangeResponseDto = new GetExamSlotAvailabilityDetailsForDateRangeResponseDto();
            AvailableQuotaForSelectedDateRangeResponseDto availableQuotaForSelectedDateRangeResponseDto = new AvailableQuotaForSelectedDateRangeResponseDto();
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ExamSlotAvailabilityDetailsForDateRangeHandler", "ExamSlotAvailabilityDetailsForDateRangeHandler Initiated");

                //To Do
                //This just takes quota from DB and sends to front end.
                //Additional logic will be required to find out remaining quota for a specific lane.
                //Additional logic to be added.
                if (ValidateRequest(request.availableQuotaForSelectedDateRangeRequestDto))
                {
                    //returns available quota for selected date range.Qu0ta are based on vehicle class and exam code, for specific days of week

                    DateTime startDate = request.availableQuotaForSelectedDateRangeRequestDto.FromDate;
                    DateTime endDate = request.availableQuotaForSelectedDateRangeRequestDto.ToDate;
                    List<InspectionScheduleDetail> selectedData = (List<InspectionScheduleDetail>)await genericRepository.GetByQuery(
                       query =>
                                (query.InspectionSchedules.EffectivePeriodStart.Date <= startDate.Date &&
                                  query.InspectionSchedules.EffectivePeriodEnd.Date >= startDate.Date) &&
                                (query.InspectionSchedules.EffectivePeriodStart.Date <= endDate.Date &&
                                  query.InspectionSchedules.EffectivePeriodEnd.Date >= endDate.Date),
                               param1 => param1.InspectionSchedules, param2 => param2.InspectionScheduleExamCodes, param3 => param3.InspectionScheduleVhclCls
                        );

                    if (selectedData?.Count > 0)
                    {
                        selectedData.ForEach(item =>
                        {
                            if (
                                item.InspectionScheduleVhclCls?.Where(vehicleClass => vehicleClass.VehicleClassId == request.availableQuotaForSelectedDateRangeRequestDto.VehicleClassId).Count() > 0 &&
                                item.InspectionScheduleExamCodes?.Where(vehicleExam => request.availableQuotaForSelectedDateRangeRequestDto.InspectionTypeId.Contains(vehicleExam.InspectionTypeId)).Count() > 0
                                )
                            {
                                foreach (DateTime date in EachCalendarDay(startDate, endDate))
                                {
                                    if (date.DayOfWeek.ToString().ToUpper() == item.WeekDayName.ToUpper())
                                    {
                                        availableQuotaForSelectedDateRangeResponseDto.InspectionScheduleId = item.InspectionScheduleId;
                                        availableQuotaForSelectedDateRangeResponseDto.examsAvailableDateDtos.Add(new ExamsAvailableDateDto
                                        {
                                            Quota = item.Quota,
                                            Date = date,
                                            WeekDay = item.WeekDayName,
                                            InspectionScheduleDetailsId = item.InspectionScheduleDetailsId

                                        });
                                    }
                                }

                            }
                        }
                        );
                        if (request.availableQuotaForSelectedDateRangeRequestDto?.CentreId != null)
                        {
                            var taskCentreData = Task.Run(() => GetCentresDetailsByCentreId(request.availableQuotaForSelectedDateRangeRequestDto?.CentreId,trackingId));

                            taskCentreData.Wait(cancellationToken);
                            var CentreData = taskCentreData.Result;
                            availableQuotaForSelectedDateRangeResponseDto.centresDto = CentreData;
                        }
                        getExamSlotAvailabilityDetailsForDateRangeResponseDto.availableQuotaForSelectedDateRangeResponseDtos = availableQuotaForSelectedDateRangeResponseDto;
                        getExamSlotAvailabilityDetailsForDateRangeResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        getExamSlotAvailabilityDetailsForDateRangeResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    getExamSlotAvailabilityDetailsForDateRangeResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ExamSlotAvailabilityDetailsForDateRangeHandler", "ExamSlotAvailabilityDetailsForDateRangeHandler Completed");
            }
            catch (Exception ex)
            {
                getExamSlotAvailabilityDetailsForDateRangeResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                //getExamSlotAvailabilityDetailsForDateRangeResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                getExamSlotAvailabilityDetailsForDateRangeResponseDto.ErrorMessage = ex.Message.ToString();
                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ExamSlotAvailabilityDetailsForDateRangeHandler", ex.ToString());
            }

            return getExamSlotAvailabilityDetailsForDateRangeResponseDto;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="startDate"></param>
        /// <param name="endDate"></param>
        /// <returns></returns>
        private IEnumerable<DateTime> EachCalendarDay(DateTime startDate, DateTime endDate)
        {
            for (var date = startDate.Date; date.Date <= endDate.Date; date = date.AddDays(1)) yield
            return date;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="centreId"></param>
        /// <returns></returns>
        private async Task<List<CentresDto>> GetCentresDetailsByCentreId(string centreId,string trackingId)
        {
            List<string> centreIds = new List<string> { centreId };
            KafkaRequestCentreDetailsByCentreIdDto kafkaRequestCentreDetailsByCentreIdDto = new KafkaRequestCentreDetailsByCentreIdDto(trackingId, centreIds);
            KafkaResponseCentreDetailsByCentreIdDto kafkaResponseCentreDetailsByCentreIdDto = new KafkaResponseCentreDetailsByCentreIdDto();

            string producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            string consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            string userId = config.GetValue<string>("KafkaConfig:UserName");
            string password = config.GetValue<string>("KafkaConfig:Password");

            var producerConfig = await producer.GetKafkaProducerConfig(producerServer, userId, password);
            await producer.ProduceMessage(producerConfig, kafkaRequestCentreDetailsByCentreIdDto, kafkaRequestCentreDetailsByCentreIdDto.TrackingUuid, KafkaTopicsConstant.GetCentresByIdProducerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetCentresDetailsByCentreId", "Message Sent");

            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, userId, password, String.Format("{0}-{1}", KafkaConsumerGroupConstant.GeCentresByIdConsumerGroupForResponse, kafkaRequestCentreDetailsByCentreIdDto.TrackingUuid));
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestCentreDetailsByCentreIdDto.TrackingUuid, KafkaTopicsConstant.GetCentresByIdConsumerTopic, CancellationToken.None);

            kafkaResponseCentreDetailsByCentreIdDto = JsonSerializer.Deserialize<KafkaResponseCentreDetailsByCentreIdDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetCentresDetailsByCentreId", "Message Recieved");

            return kafkaResponseCentreDetailsByCentreIdDto.CentresDto;
        }

        /// <summary>
        /// validate request
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        private bool ValidateRequest(AvailableQuotaForSelectedDateRangeRequestDto request)
        {
            bool status = false;

            if (!string.IsNullOrEmpty(request.FromDate.ToString()) &&
                !string.IsNullOrEmpty(request.ToDate.ToString()) &&
                !string.IsNullOrEmpty(request.VehicleClassId) &&
                !string.IsNullOrEmpty(request.CentreId) &&                
                (request.InspectionTypeId?.Count > 0)
                )
            {
                status = true;
            }
            return status;
        }
    }
}
