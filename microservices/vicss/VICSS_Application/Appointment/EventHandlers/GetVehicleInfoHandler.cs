namespace VICSS.Service.Appointment.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using Models.Kafka;
    using System.Net;
    using System.Text.Json;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Appointment;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.InternalAPICall.Interface;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Appointment.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;
    using VICSS.Shared.Models.Kafka;
    using VICSS.Shared.Models.Vehicle;

    public class GetVehicleInfoHandler : IRequestHandler<GetVehicleInfoRequestDto, GetVehicleAndAppointmentDetails>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<AppointmentDBContext, Appointment> genericRepository;
        private readonly IKafkaProducer producer;
        private readonly IKafkaConsumer consumer;
        private readonly IConfiguration config;
        private readonly IInternalServiceAPICall communication;
        private readonly ILogger<GetVehicleInfoHandler> logger;


        public GetVehicleInfoHandler(IMapper mapper,
            IGenericRepository<AppointmentDBContext,
                Appointment> genericRepository,
            IInternalServiceAPICall communication,
            IKafkaProducer producer,
            IKafkaConsumer consumer,
            IConfiguration config, ILogger<GetVehicleInfoHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.communication = communication;
            this.producer = producer;
            this.consumer = consumer;
            this.config = config;
            this.logger = logger;
        }

        public async Task<GetVehicleAndAppointmentDetails> Handle(GetVehicleInfoRequestDto request, CancellationToken cancellationToken)
        {
            string trackingId = Guid.NewGuid().ToString();

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "GetVehicleInfoHandler", $"Hurray new Work has come at {DateTime.Now.ToString("HH:mm:ss tt")}");

            GetVehicleAndAppointmentDetails response = new();
            //Get VehicleID
            try
            {
                if (request.AppointmentNumber != null)
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "GetVehicleInfoHandler", $"DB Work will start to get Appointment details at {DateTime.Now.ToString("HH:mm:ss tt")}");
                    var appointments = await genericRepository.GetByQuery(i => i.ExternalAppointmentNumber == request.AppointmentNumber);
                    var appointment = appointments.FirstOrDefault();                   

                    if (appointment != null)
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "GetVehicleInfoHandler", $"DB Work Finished at {DateTime.Now.ToString("HH:mm:ss tt")}");

                        var vehicleId = appointment.VehicleId;

                        if (!String.IsNullOrEmpty(appointment.VehicleInspectionId))
                        {
                            List<string> inspectionId = [appointment.VehicleInspectionId];

                            var vehicleData = await KafkaPostingandConsume(vehicleId);
                            if (vehicleData != null)
                            {
                                response = mapper.Map<GetVehicleAndAppointmentDetails>(vehicleData);
                                var result = await GetInspectionForAppointments(inspectionId);
                                List<string> examCodes = new List<string>();
                                if (result.Count > 0)
                                {
                                    foreach (var i in result)
                                    {
                                        foreach (var code in i.inspectionExamCodeDtos)
                                            examCodes.Add(code.InspectionExamCode);
                                    }
                                    response.ExamCode = string.Join(",", examCodes);
                                }

                                response.InspectionId = appointment.VehicleInspectionId;
                                response.AppointmentDate = appointment.InspectionDateTime;
                                response.HttpStatusCode = HttpStatusCode.OK;
                            }
                            else
                            {
                                response.HttpStatusCode = HttpStatusCode.NotFound;
                            }
                        }
                        else
                        {
                            response.HttpStatusCode = HttpStatusCode.NotFound;
                        }
                    }
                    else
                    {
                        response.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
            }
            catch (Exception ex)
            {

                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.ErrorMessage;
            }
            return response;
        }

        private async Task<VehicleParticularDetailsByVehicleIdDto> KafkaPostingandConsume(string vehicleId)
        {
            if (config.GetValue<string>("KafkaEnabled") == "true")
            {
                string producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
                string consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
                string userId = config.GetValue<string>("KafkaConfig:UserName");
                string password = config.GetValue<string>("KafkaConfig:Password");

                //Create KAFKA Dto
                KafkaRequestVehicleDto kafkaRequestvehicleDto = new(Guid.NewGuid().ToString(), vehicleId);

                //Produce message
                var producerConfig = await producer.GetKafkaProducerConfig(producerServer, userId, password);
                await producer.ProduceMessage(producerConfig, kafkaRequestvehicleDto, kafkaRequestvehicleDto.trackingUuid, KafkaTopicsConstant.GetVehicleInfoByIdProducerTopic);


                //Wait for response and consume message                
                var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, userId, password, String.Format("{0}-{1}", KafkaConsumerGroupConstant.GetVehicleByidConsumerGroupForResponse, kafkaRequestvehicleDto.trackingUuid));
                consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
                var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestvehicleDto.trackingUuid, KafkaTopicsConstant.GetVehicleInfoByIdConsumerTopic, CancellationToken.None);


                //Serialize the Response

                return consumedMessage == string.Empty ?
                    new VehicleParticularDetailsByVehicleIdDto() :
                    JsonSerializer.Deserialize<KafkaVehicleParticularResponseDto>((string)consumedMessage).VehicleParticularDetailsByVehicleId;
            }
            else
            {
                var content = await communication.CallInternalAPI(HttpMethod.Get, $"vehicleparticularsbyvehicleid/{vehicleId}");

                if (!string.IsNullOrEmpty(content))
                {
                    var vehicleDetails = JsonSerializer.Deserialize<GetVehicleParticularsResponseDto>(content);
                    return vehicleDetails.vehicleDetails.FirstOrDefault();

                }

                return null!;
            }

        }
        private async Task<List<InspectionDetailsDto>> GetInspectionForAppointments(List<string> inspectionId)
        {
            if (config.GetValue<string>("KafkaEnabled") == "true")
            {
                KafkaRequestInspectionDetailsByIdDto kafkaRequestInspectionDetailsByIdDto = new KafkaRequestInspectionDetailsByIdDto(Guid.NewGuid().ToString(), inspectionId);
                KafkaResponseInspectionDetailsByIdDto kafkaResponseInspectionDetailsByIdDto = new KafkaResponseInspectionDetailsByIdDto();

                string producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
                string consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
                string userId = config.GetValue<string>("KafkaConfig:UserName");
                string password = config.GetValue<string>("KafkaConfig:Password");

                var producerConfig = await producer.GetKafkaProducerConfig(producerServer, userId, password);
                await producer.ProduceMessage(producerConfig, kafkaRequestInspectionDetailsByIdDto, kafkaRequestInspectionDetailsByIdDto.TrackingUuid, KafkaTopicsConstant.GetInspectionByIdProducerTopic);

                //Wait for response and consume message
                var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, userId, password, String.Format("{0}-{1}", KafkaConsumerGroupConstant.GetInspectionByidConsumerGroupForResponse, kafkaRequestInspectionDetailsByIdDto.TrackingUuid));
                consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
                var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestInspectionDetailsByIdDto.TrackingUuid, KafkaTopicsConstant.GetInspectionByIdConsumerTopic, CancellationToken.None);

                kafkaResponseInspectionDetailsByIdDto = JsonSerializer.Deserialize<KafkaResponseInspectionDetailsByIdDto>((string)consumedMessage);

                return kafkaResponseInspectionDetailsByIdDto.InspectionDetailsDtos;
            }
            else
            {
                var jsonContent = JsonSerializer.Serialize(inspectionId);
                var content = await communication.CallInternalAPI(HttpMethod.Post, "inspectiondetails", jsonContent);
                if (!string.IsNullOrEmpty(content))
                {
                    var response = JsonSerializer.Deserialize<GetInspectionDetailsByInspectionIdResponseDto>(content);
                    return response.InspectionDetailsDtos;
                }
                return null!;
            }
        }

    }
}
