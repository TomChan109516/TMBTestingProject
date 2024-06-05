namespace VICSS.Service.Appointment.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.DataAccess.Entities.Appointment;
    using VICSS.Service.Appointment.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Service.Models.Appointment;
    using System.Net;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Shared.Models.Kafka;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using System.Text.Json;
    using VICSS.Shared.Models.Inspection;
    using System.Reflection;

    public class CreateAppointmentHandler : IRequestHandler<CreateAppointmentRequestDto, CreateAppointmentResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<AppointmentDBContext, Appointment> genericRepository;
        private readonly IUnitOfWork<AppointmentDBContext> unitOfWork;
        private readonly IKafkaProducer producer;
        private readonly IKafkaConsumer consumer;
        private readonly IConfiguration config;
        private readonly ILogger<CreateAppointmentHandler> logger;

        public CreateAppointmentHandler(IMapper mapper, IGenericRepository<AppointmentDBContext, Appointment> genericRepository, IUnitOfWork<AppointmentDBContext> unitOfWork, IKafkaProducer producer, IKafkaConsumer consumer, IConfiguration config, ILogger<CreateAppointmentHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.producer = producer;
            this.consumer = consumer;
            this.config = config;
            this.logger = logger;
        }

        public async Task<CreateAppointmentResponseDto> Handle(CreateAppointmentRequestDto request, CancellationToken cancellationToken)
        {
            CreateAppointmentResponseDto createAppointmentResponseDto = new CreateAppointmentResponseDto();
            Appointment appointments = new Appointment();
            string trackingId = Guid.NewGuid().ToString();

            try
            {

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "CreateAppointmentHandler", "CreateAppointmentHandler initiated");

                if (request != null)
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "CreateAppointmentHandler", "Appointment creation started");

                    appointments = mapper.Map<Appointment>(request);
                    // Non-Nullable
                    appointments.InspectionTypeId = request.createAppointmentDto.PrimaryExamCodeId.FirstOrDefault();
                    appointments.AppointmentId = Guid.NewGuid().ToString();
                    appointments.VehicleInspectionId = Guid.NewGuid().ToString();
                    appointments.AppointmentCreateDateTime = DateTime.UtcNow;
                    appointments.RecheckAppointmentIndicator = CommonConstants.No.ToString();
                    appointments.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
                    appointments.LastRecordTransactionDateTime = DateTime.UtcNow;
                    appointments.LastRecordTransactionUserId = request.createAppointmentDto.UserId;
                    appointments.AppointmentAdditionalInformation = string.Empty;
                    appointments.SecurityCode = string.Empty;
                    appointments.AppointmentStatus = CommonConstants.AppointmentStatus;
                    //Nullable
                    appointments.ExternalAppointmentNumber = await GenerateAppointmentNumber();
                    appointments.AppointmentBillDateTime = DateTime.UtcNow;
                    appointments.AppointmentConfirmationDateTime = DateTime.UtcNow;
                    appointments.ExactScheduleInspectionDateTime = request.createAppointmentDto.InspectionDateTime;
                    appointments.InspectionDateTime = request.createAppointmentDto.InspectionDateTime;
                    appointments.Payment = new Payment()
                    {
                        PaymentId = Guid.NewGuid().ToString(),
                        PaymentTypeCode = string.Empty,
                        PaymentTransactionNumber = string.Empty,
                        PaymentAmount = request.createAppointmentDto.ExamFee,
                        PaymentStatusCode = string.Empty,
                        CenterId = request.createAppointmentDto.CentreId,
                        InspectionFeeWaiveActiveIndicator = CommonConstants.No,
                        NoFeeAppointmentIndicator = CommonConstants.No,
                        LastRecordTransactionDateTime = DateTime.UtcNow,
                        LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                        LastRecordTransactionUserId = request.createAppointmentDto.UserId
                    };
                    appointments.PaymentId = appointments.Payment.PaymentId;

                    var taskInspectionStatus = Task.Run(() => CreateInspectionForAppointments(new InspectionCreatedDto
                                  (appointments.VehicleInspectionId, request.createAppointmentDto.PrimaryExamCodeId,
                                  request.createAppointmentDto.VehicleId, request.createAppointmentDto.LaneId, request.createAppointmentDto.UserId), trackingId));
                    taskInspectionStatus.Wait(cancellationToken);
                    var InspectionStatus = taskInspectionStatus.Result;
                    if (InspectionStatus.Status == HttpStatusCode.OK)
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "CreateAppointmentHandler", "Inspection Created");
                        await genericRepository.Add(appointments);
                        bool dataSaved = await unitOfWork.SaveChanges();
                        if (dataSaved)
                        {
                            createAppointmentResponseDto.AppointmentDetailsResponseDtos = mapper.Map<AppointmentDetailsResponseDto>(appointments);
                            createAppointmentResponseDto.HttpStatusCode = HttpStatusCode.OK;
                            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "CreateAppointmentHandler", "Appointment Created");
                        }
                        else
                        {
                            createAppointmentResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                            createAppointmentResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                            // To Do Rollback functionality
                        }
                    }
                    else
                    {
                        createAppointmentResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                        createAppointmentResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                    }
                }
                else
                {
                    createAppointmentResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }

            }
            catch (Exception ex)
            {
                createAppointmentResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                createAppointmentResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "CreateAppointmentHandler", ex.ToString());
            }

            return createAppointmentResponseDto;
        }

        private async Task<string> GenerateAppointmentNumber()
        {
            return DateTime.UtcNow.ToString(CommonConstants.AppointmentNumber);
        }

        private async Task<KafkaResponseInspectionDto> CreateInspectionForAppointments(InspectionCreatedDto inspectionCreatedDto, string trackingId)
        {
            KafkaRequestInspectionDto KafkaRequestInspectionTypeIdDto = new KafkaRequestInspectionDto(trackingId, inspectionCreatedDto);
            KafkaResponseInspectionDto KafkaResponseInspectionTypeIdDto = new KafkaResponseInspectionDto();

            string producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            string consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            string userId = config.GetValue<string>("KafkaConfig:UserName");
            string password = config.GetValue<string>("KafkaConfig:Password");

            var producerConfig = await producer.GetKafkaProducerConfig(producerServer, userId, password);
            await producer.ProduceMessage(producerConfig, KafkaRequestInspectionTypeIdDto, KafkaRequestInspectionTypeIdDto.TrackingUuid, KafkaTopicsConstant.GetInspectionCreationStatusProducerTopic);
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "CreateInspectionForAppointments", "Inspection Creation request sent");


            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, userId, password, String.Format("{0}-{1}", KafkaConsumerGroupConstant.GetInspectionCreationStatusConsumerGroupForResponse, KafkaRequestInspectionTypeIdDto.TrackingUuid));
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, KafkaRequestInspectionTypeIdDto.TrackingUuid, KafkaTopicsConstant.GetInspectionCreationStatusConsumerTopic, CancellationToken.None);

            KafkaResponseInspectionTypeIdDto = JsonSerializer.Deserialize<KafkaResponseInspectionDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName,
                "CreateInspectionForAppointments", "Inspection Creation request recieved");

            return KafkaResponseInspectionTypeIdDto;
        }
    }
}
