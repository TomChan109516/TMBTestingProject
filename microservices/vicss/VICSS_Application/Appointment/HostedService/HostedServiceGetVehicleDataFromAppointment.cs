namespace VICSS.Service.Appointment.HostedService
{
    using Confluent.Kafka;
    using MediatR;
    using System.Text.Json;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Appointment.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;

    public class HostedServiceGetVehicleDataFromAppointment : HostedServiceAbstract
    {
        private readonly string consumerServer;
        private readonly string producerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly ILogger<HostedServiceGetVehicleDataFromAppointment> logger;

        public HostedServiceGetVehicleDataFromAppointment(IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, IServiceScopeFactory scopeFactory, ILogger<HostedServiceGetVehicleDataFromAppointment> logger)
        {
            this.consumer = consumer;
            this.scopeFactory = scopeFactory;
            this.logger = logger;
            this.producer = kafkaProducer;

            consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? consumerGetAppointmentNumber;
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, userId, password, KafkaConsumerGroupConstant.GetVehicleByAppointmentConsumerGroupForRequest);
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.AppointmentServiceName, "HostedServiceGetVehicleDataFromAppointment", "HostedServiceGetVehicleDataFromAppointment initiated");
            consumerGetAppointmentNumber = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();
            consumerGetAppointmentNumber.Subscribe(KafkaTopicsConstant.GetVehicleDataProducerTopic);


            _ = Task.Run(() =>
            {

                while (!cancellationToken.IsCancellationRequested)
                {
                    try
                    {

                        var consumeResult = consumerGetAppointmentNumber.Consume(cancellationToken);
                        var message = consumeResult.Message.Value;

                        //Do the work
                        if (message != null)
                        {

                            Task.Run(async () =>
                            {
                                using (var scope = scopeFactory.CreateScope())
                                {
                                    //De-serialize KAFKA Message
                                    KafkaRequestVehicleDto recievedMessage = JsonSerializer.Deserialize<KafkaRequestVehicleDto>(message);
                                    GetVehicleInfoRequestDto infoRequestDto = new(recievedMessage.vehicleId);

                                     //Call the Event for Vehicle Data

                                     var mediator = scope.ServiceProvider.GetRequiredService<IMediator>();
                                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, recievedMessage.trackingUuid, CommonConstants.AppointmentServiceName, "HostedServiceGetVehicleDataFromAppointment", "Message Recieved");
                                    var result = await mediator.Send(infoRequestDto, CancellationToken.None);
                                   
                                    consumerGetAppointmentNumber.Commit(consumeResult);
                                    KafkaInspectionVehicleResponseDto responseMessage = new KafkaInspectionVehicleResponseDto(recievedMessage.trackingUuid, result);


                                    //Produce Message
                                    var producerConfig = await producer.GetKafkaProducerConfig(producerServer, userId, password);
                                    await producer.ProduceMessage(producerConfig, responseMessage, responseMessage.trackingUuid, KafkaTopicsConstant.GetVehicleDataConsumerTopic);
                                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, recievedMessage.trackingUuid, CommonConstants.AppointmentServiceName, "HostedServiceGetVehicleDataFromAppointment", "Message Sent");
                                }

                            }).Wait();
                        }

                        Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                    }
                    catch (Exception ex)
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat,"", CommonConstants.AppointmentServiceName, "HostedServiceGetVehicleDataFromAppointment", $"An error occurred" +
                                        $"{ex.Message}");
                    }
                }

                //_consumer.Close();
            });
        }
    }
}
