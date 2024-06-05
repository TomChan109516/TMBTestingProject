namespace VICSS.Service.Appointment.EventHandlers
{
    using System.Net;
    using System.Reflection;
    using System.Text.Json;
    using MediatR;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Appointment;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Appointment.Domain;
    using VICSS.Service.Models.Appointment;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;
    using VICSS.Shared.Models.Kafka;

    public class GetRecentAppointmentsHandler : IRequestHandler<GetRecentAppointmentsRequestDto, GetRecentAppointmentsResponseDto>
    {
        private readonly IGenericRepository<AppointmentDBContext, Appointment> genericRepository;
        private readonly IKafkaProducer producer;
        private readonly IKafkaConsumer consumer;
        private readonly IConfiguration config;
        private readonly ILogger<GetRecentAppointmentsHandler> logger;


        public GetRecentAppointmentsHandler(IGenericRepository<AppointmentDBContext, Appointment> genericRepository, IKafkaProducer producer, IKafkaConsumer consumer, IConfiguration config, ILogger<GetRecentAppointmentsHandler> logger)
        {
            this.genericRepository = genericRepository;
            this.producer = producer;
            this.consumer = consumer;
            this.config = config;
            this.logger = logger;
        }

        public async Task<GetRecentAppointmentsResponseDto> Handle(GetRecentAppointmentsRequestDto request, CancellationToken cancellationToken)
        {
            string trackingId = Guid.NewGuid().ToString();
            
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetRecentAppointmentsHandler", "GetRecentAppointmentsHandler initiated");

            GetRecentAppointmentsResponseDto getRecentAppointmentsResponseDto = new GetRecentAppointmentsResponseDto();
            List<Appointment> appointments = new List<Appointment>();
            try
            {
                if (request.vehicleId != null)
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetRecentAppointmentsHandler", "GetRecentAppointmentsHandler initiated");

                    appointments = (List<Appointment>)await genericRepository.GetByQuery(x => x.VehicleId == request.vehicleId, param1 => param1.Payment);

                    if (appointments.Count > 0)
                    {                        
                        var taskCentreData = Task.Run(() => GetCentres(CommonConstants.AllStatus, trackingId));
                        var taskInspectionData = Task.Run(() => GetInspectionForAppointments(appointments.Select(x => x.VehicleInspectionId).ToList(), trackingId));

                        taskCentreData.Wait(cancellationToken);
                        taskInspectionData.Wait(cancellationToken);


                        var centreData = taskCentreData.Result;
                        var inspectionData = taskInspectionData.Result;

                        if(centreData != null || inspectionData != null) 
                        {
                            getRecentAppointmentsResponseDto.appointmentDetails = (from appointment in appointments
                                              join centre in centreData on appointment.CentreId equals centre.CentreId
                                              join inspection in inspectionData on appointment.VehicleInspectionId equals inspection.InspectionId
                                              select new RecentAppointmentsDetailsDto
                                              {
                                                  AppointmentCreateDateTime =  appointment.AppointmentCreateDateTime,
                                                  VehicleId =  appointment.VehicleId,
                                                  CentreCode = centre.CentreCode,
                                                  NoFeeAppointmentIndicator =  appointment.Payment.NoFeeAppointmentIndicator,
                                                  InspectionEndResult = inspection.InspectionResult,
                                                  ExamCode =String.Join(CommonConstants.CommaSeparator, inspection.inspectionExamCodeDtos.Select(x => x.InspectionExamCode)).Trim(CommonConstants.CommaSeparator),
                                              }).ToList();

                            getRecentAppointmentsResponseDto.HttpStatusCode = HttpStatusCode.OK;
                        }
                        else
                        {
                            getRecentAppointmentsResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                        }
                    }
                    else
                    {                        
                        getRecentAppointmentsResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
            }
            catch (Exception ex)
            {                
                getRecentAppointmentsResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                //getRecentAppointmentsResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                getRecentAppointmentsResponseDto.ErrorMessage = ex.Message.ToString();
                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetRecentAppointmentsHandler", ex.ToString());

            }

            return getRecentAppointmentsResponseDto;
        }

        private async Task<List<CentresDto>> GetCentres(string status , string trackingId)
        {
            string producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            string consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            string userId = config.GetValue<string>("KafkaConfig:UserName");
            string password = config.GetValue<string>("KafkaConfig:Password");

            KafkaRequestCentreDto kafkaRequestCentreDto = new KafkaRequestCentreDto(trackingId, status);            

            //Produce message
            var producerConfig = await producer.GetKafkaProducerConfig(producerServer, userId, password);
            await producer.ProduceMessage(producerConfig, kafkaRequestCentreDto, kafkaRequestCentreDto.TrackingUuid, KafkaTopicsConstant.GetCenterProducerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetCentres", "Message produced at GetCentres");

            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, userId, password, String.Format("{0}-{1}",KafkaConsumerGroupConstant.GetCentreConsumerGroupForResponse,trackingId));
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

            string producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            string consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            string userId = config.GetValue<string>("KafkaConfig:UserName");
            string password = config.GetValue<string>("KafkaConfig:Password");

            var producerConfig = await producer.GetKafkaProducerConfig(producerServer, userId, password);
            await producer.ProduceMessage(producerConfig, kafkaRequestInspectionDetailsByIdDto, kafkaRequestInspectionDetailsByIdDto.TrackingUuid, KafkaTopicsConstant.GetInspectionByIdProducerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetInspectionForAppointments", "Message produced at GetInspectionForAppointments");

            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, userId, password,String.Format("{0}-{1}",KafkaConsumerGroupConstant.GetInspectionByidConsumerGroupForResponse,trackingId));
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestInspectionDetailsByIdDto.TrackingUuid, KafkaTopicsConstant.GetInspectionByIdConsumerTopic, CancellationToken.None);

            kafkaResponseInspectionDetailsByIdDto = JsonSerializer.Deserialize<KafkaResponseInspectionDetailsByIdDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetInspectionForAppointments", "Message recieved at GetInspectionForAppointments");

            return kafkaResponseInspectionDetailsByIdDto.InspectionDetailsDtos;
        }

    }
}
