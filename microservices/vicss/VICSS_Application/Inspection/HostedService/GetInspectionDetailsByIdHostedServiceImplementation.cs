namespace VICSS.Service.Inspection.HostedService
{
    using Confluent.Kafka;
    using Confluent.Kafka.Admin;
    using MediatR;
    using System.Reflection;
    using System.Text.Json;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;


    public class GetInspectionDetailsByIdHostedServiceImplementation : HostedServiceAbstract
    {
        private readonly string ConsumerServer;
        private readonly string ProducerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly ILogger<GetInspectionDetailsByIdHostedServiceImplementation> logger;

        public GetInspectionDetailsByIdHostedServiceImplementation(IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, IServiceScopeFactory scopeFactory, ILogger<GetInspectionDetailsByIdHostedServiceImplementation> logger)
        {
            this.consumer = consumer;
            this.scopeFactory = scopeFactory;
            this.producer = kafkaProducer;
            this.logger = logger;

            ConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            ProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {

            IConsumer<Ignore, string>? consumerGetInspectionId;

            try
            {
                var consumerConfig = await consumer.GetKafkaConsumerConfig(ConsumerServer, userId, password, KafkaConsumerGroupConstant.GetInspectionByidConsumerGroupForRequest);

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.GetInspectionDetailsByIdHostedService, "GetInspectionDetailsByIdHostedServiceImplementation", "GetInspectionDetailsByIdHostedService initiated");

                consumerGetInspectionId = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();

                consumerGetInspectionId.Subscribe(KafkaTopicsConstant.GetInspectionByIdProducerTopic);

                _ = Task.Run(() =>
                {

                    while (!cancellationToken.IsCancellationRequested)
                    {
                        try
                        {
                            var consumeResult = consumerGetInspectionId.Consume(cancellationToken);
                            var message = consumeResult.Message.Value;

                            //Do the work
                            if (message != null)
                            {

                                Task.Run(async () =>
                                {
                                    using (var scope = scopeFactory.CreateScope())
                                    {
                                        KafkaRequestInspectionDetailsByIdDto recievedMessage = JsonSerializer.Deserialize<KafkaRequestInspectionDetailsByIdDto>((string)message);
                                        var mediator = scope.ServiceProvider.GetRequiredService<IMediator>();

                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, recievedMessage.TrackingUuid, CommonConstants.GetInspectionDetailsByIdHostedService, "GetInspectionDetailsByIdHostedServiceImplementation", "Message Recieved");

                                        var result = await mediator.Send(new GetInspectionDetailsByInspectionIdRequestDto(recievedMessage.InspectionId), CancellationToken.None);

                                        consumerGetInspectionId.Commit(consumeResult);

                                        KafkaResponseInspectionDetailsByIdDto responseMessage = new KafkaResponseInspectionDetailsByIdDto();
                                        responseMessage.InspectionDetailsDtos = result.InspectionDetailsDtos;
                                        responseMessage.TrackingUuid = recievedMessage.TrackingUuid;

                                        ////Produce Message
                                        var producerConfig = await producer.GetKafkaProducerConfig(ProducerServer, userId, password);
                                        await producer.ProduceMessage(producerConfig, responseMessage, recievedMessage.TrackingUuid, KafkaTopicsConstant.GetInspectionByIdConsumerTopic);

                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, recievedMessage.TrackingUuid, CommonConstants.GetInspectionDetailsByIdHostedService, "GetInspectionDetailsByIdHostedServiceImplementation", "Message Sent");
                                    }

                                }).Wait();
                            }

                            Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                        }
                        catch (Exception ex)
                        {
                            //To Do
                            logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.GetInspectionDetailsByIdHostedService, "GetInspectionDetailsByIdHostedServiceImplementation", ex.ToString());
                        }
                    }

                    //_consumer.Close();
                });
            }
            catch(Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetInspectionDetailsByIdHostedServiceImplementation", ex.ToString());
            }
        }

    }
}
