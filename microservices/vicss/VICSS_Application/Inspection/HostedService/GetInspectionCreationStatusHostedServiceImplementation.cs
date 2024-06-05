namespace VICSS.Service.Inspection.HostedService
{
    using Confluent.Kafka;
    using MediatR;
    using System.Text.Json;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;

    public class GetInspectionCreationStatusHostedServiceImplementation : HostedServiceAbstract
    {
        private readonly string ConsumerServer;
        private readonly string ProducerServer;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly string kafkaUserName;
        private readonly string kafkaPassword;
        private readonly ILogger<GetInspectionCreationStatusHostedServiceImplementation> logger;

        public GetInspectionCreationStatusHostedServiceImplementation(IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, IServiceScopeFactory scopeFactory, ILogger<GetInspectionCreationStatusHostedServiceImplementation> logger)
        {
            this.consumer = consumer;
            this.scopeFactory = scopeFactory;
            this.producer = kafkaProducer;

            ConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            ProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            kafkaUserName = config.GetValue<string>("KafkaConfig:UserName");
            kafkaPassword = config.GetValue<string>("KafkaConfig:Password");
            this.logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {

            IConsumer<Ignore, string>? consumerInspection;

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetInspectionCreationStatusHostedServiceImplementation", "GetInspectionCreationStatusHostedServiceImplementation initiated");

                var consumerConfig = await consumer.GetKafkaConsumerConfig(ConsumerServer, kafkaUserName, kafkaPassword, KafkaConsumerGroupConstant.GetInspectionCreationStatusConsumerGroupForRequest);

                consumerInspection = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();

                consumerInspection.Subscribe(KafkaTopicsConstant.GetInspectionCreationStatusProducerTopic);

                _ = Task.Run(() =>
                {

                    while (!cancellationToken.IsCancellationRequested)
                    {
                        try
                        {
                            var consumeResult = consumerInspection.Consume(cancellationToken);
                            var message = consumeResult.Message.Value;

                            //Do the work
                            if (message != null)
                            {

                                Task.Run(async () =>
                                {
                                    using (var scope = scopeFactory.CreateScope())
                                    {
                                        KafkaRequestInspectionDto receivedMessage = JsonSerializer.Deserialize<KafkaRequestInspectionDto>((string)message);
                                        var mediator = scope.ServiceProvider.GetRequiredService<IMediator>();
                                        var result = await mediator.Send(new InspectionRequestDto(receivedMessage.InspectionCreatedDtos), CancellationToken.None);
                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, receivedMessage.TrackingUuid, CommonConstants.InspectionServiceName, "GetInspectionCreationStatusHostedServiceImplementation", "Message recieved");
                                        consumerInspection.Commit(consumeResult);

                                        KafkaResponseInspectionDto responseMessage = new KafkaResponseInspectionDto();
                                        responseMessage.Status = result.HttpStatusCode;
                                        responseMessage.TrackingUuid = receivedMessage.TrackingUuid;

                                        ////Produce Message
                                        var producerConfig = await producer.GetKafkaProducerConfig(ProducerServer, kafkaUserName, kafkaPassword);
                                        await producer.ProduceMessage(producerConfig, responseMessage, receivedMessage.TrackingUuid, KafkaTopicsConstant.GetInspectionCreationStatusConsumerTopic);
                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, receivedMessage.TrackingUuid, CommonConstants.InspectionServiceName, "GetInspectionCreationStatusHostedServiceImplementation", "Message sent");
                                    }

                                }).Wait();
                            }

                            Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                        }
                        catch (Exception ex)
                        {
                            //To Do
                            logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetInspectionCreationStatusHostedServiceImplementation", ex.ToString());
                        }
                    }

                    //_consumer.Close();
                });
            }
            catch(Exception ex) 
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetInspectionCreationStatusHostedServiceImplementation", ex.ToString());
            }
        }

    }
}
