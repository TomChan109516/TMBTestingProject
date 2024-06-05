namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using System.Text.Json;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.Helper;
    using VICSS.Shared.Models.Artu;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;
    using VICSS.Shared.Models.Vehicle;

    public class StartInspectionHandler : IRequestHandler<StartInspectionDto, StartInspectionDtoResponse>
    {
        private readonly IMapper mapper;
        private readonly string StartInspectionConsumerServer;
        private readonly string StartInspectionProducerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IConfiguration config;
        private readonly ILogger<StartInspectionHandler> logger;
        private readonly IMediator _mediator;

        /// <summary>
        /// Initializes a new instance of the <see cref="StartInspectionHandler"/> class.
        /// </summary>
        public StartInspectionHandler(IMediator mediator, IMapper mapper, IKafkaConsumer consumer, IKafkaProducer kafkaProducer,
            IConfiguration config, ILogger<StartInspectionHandler> logger)
        {
            this._mediator = mediator;
            this.mapper = mapper;
            this.consumer = consumer;
            this.producer = kafkaProducer;
            this.config = config;
            StartInspectionConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            StartInspectionProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
            this.logger = logger;

        }

        /// <summary>
        /// Handles the request to start an inspection process.
        /// </summary>
        public async Task<StartInspectionDtoResponse> Handle(StartInspectionDto request, CancellationToken cancellationToken)
        {
            StartInspectionDtoResponse response = new();
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                if ((request.StationId == "C") && //TEMP CHECKING
                    (GlobalDataSaver.SaveActiveVeesStation != null &&
                    GlobalDataSaver.SaveActiveVeesStation.ContainsKey((request.StationId, request.LaneId)) &&
                    (string.IsNullOrEmpty(config.GetValue<string>("IsVeesEnabled")) || config.GetValue<string>("IsVeesEnabled") == "true")
                    ))
                {
                    SingletoneVehicleInfo singletoneVehicle = SingletoneVehicleInfo.Instance;
                    var values = GlobalDataSaver.SaveActiveVeesStation[(request.StationId, request.LaneId)];
                    if (values != null && values.Station == request.StationId && values.Lane_No == request.LaneId)
                    {

                        var vehicleInfo = GetVehicleInfo(trackingId, request).Result;

                        if (vehicleInfo != null)
                        {
                            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "<---------------------------------- StartInspectionHandler", "Vehicle Info Received properly from Vehicle Service ---------------------------------->");

                            var inspectionConfiguration = mapper.Map<ArtuInspectionConfiguration>(vehicleInfo);

                            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "<---------------------------------- StartInspectionHandler", "We received HLT config Data ---------------------------------->");

                            if (inspectionConfiguration != null)
                            {
                                inspectionConfiguration.AppointmentNo = request.AppointmentNumber;
                                inspectionConfiguration.LaneNo = request.LaneId;
                                inspectionConfiguration.ID = request.AppointmentNumber;
                                inspectionConfiguration.Station = request.StationId;

                                /*HT Config Data*/
                                var hltconfigResult = await _mediator.Send(new GetHeadLampConfigRequestDto(request.InspectionID), CancellationToken.None) as GetHeadLampConfigResponseDto;

                                /*NEED TO REMOVE LATER*/
                                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "<---------------------------------- StartInspectionHandler", $"NumHeadLamp data {hltconfigResult.NumHeadLamp} ---------------------------------->");
                                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "<---------------------------------- StartInspectionHandler", $"SteeringPosition data {hltconfigResult.SteeringPosition} ---------------------------------->");

                                if (hltconfigResult != null)
                                {
                                    inspectionConfiguration.VehicleHeadlampSystem = hltconfigResult.NumHeadLamp == "One Lamp" ? '0' :
                                        hltconfigResult.NumHeadLamp == "Two Lamp" ? '1' : '2';
                                    inspectionConfiguration.MainBeamAdjustable = string.IsNullOrEmpty(hltconfigResult.MainBeamAdjustable) ? 0 :
                                        hltconfigResult.MainBeamAdjustable is int ?
                                       Convert.ToInt32(hltconfigResult.MainBeamAdjustable) : inspectionConfiguration.MainBeamAdjustable;
                                    inspectionConfiguration.HeadlampMeasurementMode = hltconfigResult.HeadlightMeasuringMethod == "Manual test" ? "0" : "1"; ;
                                    inspectionConfiguration.Steering = hltconfigResult.SteeringPosition == "Left" ? '0' :
                                        hltconfigResult.SteeringPosition == "Right" ? '1' : '2';
                                }

                                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "<---------------------------------- StartInspectionHandler", "We merged HLT config Data with the Original XML ------------------------------->");

                                

                                string vehicleData = JsonSerializer.Serialize(inspectionConfiguration);

                                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "<---------------------------------- StartInspectionHandler", $"Vehicle Info properly serialized. ---------------------------------->");

                                KafKaTestRequestDto requestDto = new()
                                {
                                    eventID = Guid.NewGuid().ToString(),
                                    typeofMessage = CommonConstants.MessageTypeCode[0],
                                    xmlBody = vehicleData
                                };

                                response = ProcessMessageFromArtu(request, requestDto, trackingId).Result;

                            }
                            else
                            {
                                response.Message = CommonMessages.NoTestDataFound;
                                response.HttpStatusCode = HttpStatusCode.NotFound;
                            }
                        }
                        else
                        {
                            response.Message = CommonMessages.NoTestDataFound;
                            response.HttpStatusCode = HttpStatusCode.NotFound;
                        }
                    }
                    else
                    {
                        response.Message = CommonMessages.StationBusy;
                        response.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else if ((request.StationId == "A" || request.StationId == "B" || request.StationId == "D" || request.StationId == "E") ||
                    (!string.IsNullOrEmpty(config.GetValue<string>("IsVeesEnabled")) && config.GetValue<string>("IsVeesEnabled") == "false"))
                {

                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "<---------------------------------- StartInspectionHandler", "Skipping the VEES Status to go to next Page. ---------------------------------->");

                    response.Message = CommonMessages.ConnectionSuccessfull;
                    response.HttpStatusCode = HttpStatusCode.OK;
                }
                else
                {
                    response.Message = CommonMessages.StationBusy;
                    response.HttpStatusCode = HttpStatusCode.NotFound;
                }
            }
            catch (Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.StartInspection,
                    "<---------------------------------- StartInspectionHandler", ex.ToString());

                response.Message = CommonErrorMessage.InternalServerError;
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
            }
            return response;
        }

        private async Task<object> GetVehicleInfo(string trackingId, StartInspectionDto request)
        {
            /*Kafka Process to get Vehicle Info*/
            KafkaRequestVehicleDto kafkaRequestvehicleDto = new(Guid.NewGuid().ToString(), request.AppointmentNumber);
            var producerAppointmentConfig = await producer.GetKafkaProducerConfig(StartInspectionProducerServer, userId, password);
            await producer.ProduceMessage(producerAppointmentConfig, kafkaRequestvehicleDto, kafkaRequestvehicleDto.trackingUuid, KafkaTopicsConstant.GetVehicleDataProducerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                "<---------------------------------- StartInspectionHandler", "Produces message to appointment service ---------------------------------->");
            await Task.Delay(2000);

            var consumerConfig = await consumer.GetKafkaConsumerConfig(StartInspectionConsumerServer, userId, password, String.Format("{0}-{1}", KafkaConsumerGroupConstant.GetVehicleByAppointmentConsumerGroupForResponse, kafkaRequestvehicleDto.trackingUuid));
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestvehicleDto.trackingUuid, KafkaTopicsConstant.GetVehicleDataConsumerTopic, CancellationToken.None);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                "<---------------------------------- StartInspectionHandler", "Recieves Vehicle info from appointment service ---------------------------------->");

            var vehicleInfo = consumedMessage == string.Empty ?
                               new GetVehicleAndAppointmentDetails() :
                               JsonSerializer.Deserialize<KafkaInspectionVehicleResponseDto>
                               ((string)consumedMessage).Vehicledetails;

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                 "<---------------------------------- StartInspectionHandler", "recieved vehicle info from appointment service.---------------------------------->");

            return vehicleInfo;
        }

        private async Task<StartInspectionDtoResponse> ProcessMessageFromArtu(StartInspectionDto request, KafKaTestRequestDto requestDto, string trackingId)
        {
            StartInspectionDtoResponse response = new();

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                               "<---------------------------------- StartInspectionHandler", "created request body of kafka request dto---------------------------------->");

            var producerConfig = await producer.GetKafkaProducerConfig(StartInspectionProducerServer, userId, password);
            await producer.ProduceMessage(producerConfig, requestDto, requestDto.eventID, KafkaTopicsConstant.GetArtuStatusConsumerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
            "<---------------------------------- StartInspectionHandler", $"Sent Vehicle Information Message to Artu service: {JsonSerializer.Serialize(requestDto)}---------------------------------->");


            response.Message = CommonMessages.ConnectionSuccessfull;
            response.HttpStatusCode = HttpStatusCode.OK;
            GlobalDataSaver.SaveActiveVeesStation.Remove((request.StationId, request.LaneId));

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
            "<---------------------------------- StartInspectionHandler", $"Inspection Succesully transfered data to ARTU service. Message is {response.Message}---------------------------------->");

            return response;
        }

    }
}
