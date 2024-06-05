namespace VICSS.Service.Appointment.EventHandlers
{
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.DataAccess.Entities.Appointment;
    using VICSS.Service.Appointment.Domain;
    using VICSS.Shared.Models.Common;
    using System.Reflection;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Kafka;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using System.Text.Json;
    using VICSS.Shared.Models.Inspection;
    using VICSS.Shared.Models.LaneConfiguration;
    using System.Net;
    using VICSS.Service.Models.Appointment;

    public class GetAppointmentDetailsHandler : IRequestHandler<GetApptDetailsByApptIdRequestDto, GetApptDetailsByApptIdResponseDto>
    {
        private readonly IGenericRepository<AppointmentDBContext, Appointment> genericRepository;
        private readonly IKafkaProducer producer;
        private readonly IKafkaConsumer consumer;
        private readonly IConfiguration config;
        private readonly ILogger<GetRecentAppointmentsHandler> logger;
        private readonly string KafkaProducerServer;
        private readonly string KafkaConsumerServer;
        private readonly string kafkaUserName;
        private readonly string kafkaPassword;


        public GetAppointmentDetailsHandler(IGenericRepository<AppointmentDBContext, Appointment> genericRepository, IKafkaProducer producer, IKafkaConsumer consumer, IConfiguration config, ILogger<GetRecentAppointmentsHandler> logger)
        {
            this.genericRepository = genericRepository;
            this.producer = producer;
            this.consumer = consumer;
            this.config = config;
            this.logger = logger;
            KafkaProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            KafkaConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            kafkaUserName = config.GetValue<string>("KafkaConfig:UserName");
            kafkaPassword = config.GetValue<string>("KafkaConfig:Password");
        }

        public async Task<GetApptDetailsByApptIdResponseDto> Handle(GetApptDetailsByApptIdRequestDto request, CancellationToken cancellationToken)
        {
            string trackingId = Guid.NewGuid().ToString();
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetAppointmentDetailsHandler", "GetAppointmentDetailsHandler initiated");

            GetApptDetailsByApptIdResponseDto getApptDetailsByApptIdResponseDto = new GetApptDetailsByApptIdResponseDto();
            List<Appointment> appointments = new List<Appointment>();
            try
            {
                if (request.ExternalAppointmentNumber != null)
                {
                    appointments = (List<Appointment>)await genericRepository.GetByQuery(x => x.ExternalAppointmentNumber == request.ExternalAppointmentNumber, param1 => param1.Payment);
                    if (appointments.Count > 0)
                    {
                        var taskCentreData = Task.Run(() => GetCentres(CommonConstants.AllStatus, trackingId));
                        var taskInspectionData = Task.Run(() => GetInspectionForAppointments(appointments.Select(x => x.VehicleInspectionId).ToList(), trackingId));
                        var taskExamData = Task.Run(() => GetExamCode(CommonConstants.AllStatus, trackingId));
                        var taskLanesData = Task.Run(() => GetLanesByCentreId(appointments.Select(x => x.CentreId).ToList(), trackingId));

                        taskCentreData.Wait(cancellationToken);
                        taskInspectionData.Wait(cancellationToken);
                        taskExamData.Wait(cancellationToken);
                        taskLanesData.Wait(cancellationToken);

                        var centreData = taskCentreData.Result;
                        var inspectionData = taskInspectionData.Result;
                        var examData = taskExamData.Result;
                        var laneData = taskLanesData.Result;

                        if (centreData != null && inspectionData != null && examData != null && laneData != null)
                        {
                            getApptDetailsByApptIdResponseDto.AppointmentDetailsResponseDtos =
                                (from appointment in appointments
                                 join centre in centreData on appointment.CentreId equals centre.CentreId
                                 join inspection in inspectionData on appointment.VehicleInspectionId equals inspection.InspectionId
                                 join exam in examData on appointment.InspectionTypeId equals exam.InspectionTypeId
                                 join lane in laneData on appointment.LaneId equals lane.LaneId
                                 select new AppointmentDetailsResponseDto
                                 {
                                     AppointmentId = appointment.AppointmentId,
                                     ExternalAppointmentNumber = appointment.ExternalAppointmentNumber,
                                     AppointmentCreateDateTime = appointment.AppointmentCreateDateTime,
                                     SecurityCode = appointment.SecurityCode,
                                     AppointmentCreateSystemId = appointment.AppointmentCreateSystemId,
                                     AppointmentStatus = appointment.AppointmentStatus,
                                     HoldTimeSlot = CommonConstants.No.ToString(),
                                     NumberOfReschedules = 0,
                                     CentreCode = centre.CentreCode,
                                     Lane = lane.LaneName,
                                     PrimaryExamCode = String.Join(CommonConstants.CommaSeparator, (from InspectionExamCode in inspectionData[0].inspectionExamCodeDtos join examCodes in examData on InspectionExamCode.InspectionExamCode equals examCodes.ExamCode where examCodes.ExamClass.ToUpper().Equals(CommonConstants.Primary.ToUpper()) select InspectionExamCode.InspectionExamCode)),
                                     SupplementaryExamCode = String.Join(CommonConstants.CommaSeparator, (from InspectionExamCode in inspectionData[0].inspectionExamCodeDtos join examCodes in examData on InspectionExamCode.InspectionExamCode equals examCodes.ExamCode where examCodes.ExamClass.ToUpper().Equals(CommonConstants.Supplementary.ToUpper()) select InspectionExamCode.InspectionExamCode)),
                                     FreeOfChargeIndicator = appointment.Payment.NoFeeAppointmentIndicator.ToString(),
                                     ExamFee = (int)appointment.Payment.PaymentAmount,
                                     FeeWaiver = appointment.Payment.InspectionFeeWaiveActiveIndicator.ToString(),
                                     InspectionStatus = inspection.InspectionStatus,
                                     InspectionResult = inspection.InspectionResult.ToString(),
                                     LastUpdate = appointment.LastRecordTransactionDateTime,
                                     AppointmentContactName = appointment.AppointmentContactName,
                                     AppointmentContactNumber = appointment.AppointmentContactNumber,
                                     AppointmentRemark = appointment.AppointmentRemark,
                                 }).FirstOrDefault(x => x.ExternalAppointmentNumber == request.ExternalAppointmentNumber);

                            getApptDetailsByApptIdResponseDto.HttpStatusCode = HttpStatusCode.OK;
                        }
                        else
                        {
                            getApptDetailsByApptIdResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                        }
                    }
                    else
                    {
                        getApptDetailsByApptIdResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    getApptDetailsByApptIdResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception ex)
            {
                getApptDetailsByApptIdResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                getApptDetailsByApptIdResponseDto.ErrorMessage = ex.Message.ToString();
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetAppointmentDetailsHandler", ex.ToString());
            }
            return getApptDetailsByApptIdResponseDto;
        }

        private async Task<List<CentresDto>> GetCentres(string status, string trackingId)
        {
            KafkaRequestCentreDto kafkaRequestCentreDto = new KafkaRequestCentreDto(trackingId, status);

            //Produce message
            var producerConfig = await producer.GetKafkaProducerConfig(KafkaProducerServer, kafkaUserName, kafkaPassword);
            await producer.ProduceMessage(producerConfig, kafkaRequestCentreDto, kafkaRequestCentreDto.TrackingUuid, KafkaTopicsConstant.GetCenterProducerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetCentres", "Message produced at GetCentres");

            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(KafkaConsumerServer, kafkaUserName, kafkaPassword,string.Format(CommonConstants.DynamicConsumerGroup, KafkaConsumerGroupConstant.GetCentreConsumerGroupForResponse,trackingId));
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestCentreDto.TrackingUuid, KafkaTopicsConstant.GetCenterConsumerTopic, CancellationToken.None);

            KafkaResponseCentreDto kafkaResponseCentreDto = JsonSerializer.Deserialize<KafkaResponseCentreDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetCentres", "Message Recieved at GetCentres");

            return kafkaResponseCentreDto.centres;
        }

        private async Task<List<InspectionDetailsDto>> GetInspectionForAppointments(List<string> inspectionId, string trackingId)
        {
            KafkaRequestInspectionDetailsByIdDto kafkaRequestInspectionDetailsByIdDto = new KafkaRequestInspectionDetailsByIdDto(trackingId, inspectionId);
            KafkaResponseInspectionDetailsByIdDto kafkaResponseInspectionDetailsByIdDto = new KafkaResponseInspectionDetailsByIdDto();

            var producerConfig = await producer.GetKafkaProducerConfig(KafkaProducerServer, kafkaUserName, kafkaPassword);
            await producer.ProduceMessage(producerConfig, kafkaRequestInspectionDetailsByIdDto, kafkaRequestInspectionDetailsByIdDto.TrackingUuid, KafkaTopicsConstant.GetInspectionByIdProducerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetInspectionForAppointments", "Message produced at GetInspectionForAppointments");

            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(KafkaConsumerServer, kafkaUserName, kafkaPassword,string.Format(CommonConstants.DynamicConsumerGroup, KafkaConsumerGroupConstant.GetInspectionByidConsumerGroupForResponse,trackingId));
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestInspectionDetailsByIdDto.TrackingUuid, KafkaTopicsConstant.GetInspectionByIdConsumerTopic, CancellationToken.None);

            kafkaResponseInspectionDetailsByIdDto = JsonSerializer.Deserialize<KafkaResponseInspectionDetailsByIdDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetInspectionForAppointments", "Message recieved at GetInspectionForAppointments");

            return kafkaResponseInspectionDetailsByIdDto.InspectionDetailsDtos;
        }

        private async Task<List<ExamCodeDto>> GetExamCode(string status, string trackingId)
        {
            KafkaRequestExamCodeDto kafkaRequestExamCodeDto = new KafkaRequestExamCodeDto(trackingId, status);
            KafkaResponseExamCodeDto kafkaResponseExamCodeDto = new KafkaResponseExamCodeDto();

            var producerConfig = await producer.GetKafkaProducerConfig(KafkaProducerServer, kafkaUserName, kafkaPassword);
            await producer.ProduceMessage(producerConfig, kafkaRequestExamCodeDto, kafkaRequestExamCodeDto.TrackingUuid, KafkaTopicsConstant.GetExamCodesProducerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetExamCode", "Request produced from GetExamCode.");

            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(KafkaConsumerServer, kafkaUserName, kafkaPassword,String.Format(CommonConstants.DynamicConsumerGroup, KafkaConsumerGroupConstant.GetExamCodeConsumerGroupForResponse,trackingId));
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestExamCodeDto.TrackingUuid, KafkaTopicsConstant.GetExamCodesConsumerTopic, CancellationToken.None);

            kafkaResponseExamCodeDto = JsonSerializer.Deserialize<KafkaResponseExamCodeDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "GetExamCode", "Response recieved at GetExamCode.");

            return kafkaResponseExamCodeDto.ExamCodes;
        }

        private async Task<List<LanesByCenterIdDto>> GetLanesByCentreId(List<string> centreId, string trackingId)
        {
            List<LanesByCenterIdDto> lanesByCenterIdDtos = new List<LanesByCenterIdDto>();
            KafkaRequestLaneDetailsByCentreIdDto kafkaRequestLaneDetailsByCentreIdDto = new KafkaRequestLaneDetailsByCentreIdDto(trackingId, centreId);

            var producerConfig = await producer.GetKafkaProducerConfig(KafkaProducerServer, kafkaUserName, kafkaPassword);
            await producer.ProduceMessage(producerConfig, kafkaRequestLaneDetailsByCentreIdDto, kafkaRequestLaneDetailsByCentreIdDto.TrackingUuid, KafkaTopicsConstant.GetLaneDetailsByCentreProducerTopic);
            
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetLanesByCentreId", "Request produced from GetLanesByCentreId.");
            
            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(KafkaConsumerServer, kafkaUserName, kafkaPassword,String.Format(CommonConstants.DynamicConsumerGroup, KafkaConsumerGroupConstant.GeLaneDetailsByCentreConsumerGroupForResponse,trackingId));
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestLaneDetailsByCentreIdDto.TrackingUuid, KafkaTopicsConstant.GetLaneDetailsByCentreConsumerTopic, CancellationToken.None);

            var kafkaResponseLaneDetailsByCentreIdDto = JsonSerializer.Deserialize<KafkaResponseLaneDetailsByCentreIdDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetLanesByCentreId", "Request Recieved from GetLanesByCentreId.");

            return kafkaResponseLaneDetailsByCentreIdDto.LanesDto;
        }
    }
}
