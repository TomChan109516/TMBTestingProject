namespace VICSS.Service.Inspection.HostedService
{
    using Confluent.Kafka;
    using System.Diagnostics.CodeAnalysis;
    using System.Text.Json;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Artu.HostedService;
    using VICSS.Shared.Models.Artu;

    [ExcludeFromCodeCoverage]
    public class GetTestAcknowledgementHostedService : HostedServiceAbstract
    {

        private readonly string StartInspectionConsumerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;

        public GetTestAcknowledgementHostedService(IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, IServiceScopeFactory scopeFactory)
        {
            this.consumer = consumer;
            this.scopeFactory = scopeFactory;
            this.producer = kafkaProducer;
            StartInspectionConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? consumer1;
            var consumerConfig = await consumer.GetKafkaConsumerConfig(StartInspectionConsumerServer, userId, password, KafkaConsumerGroupConstant.GetArtuTestResultConsumerGroupForResponse);
            consumer1 = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();
            consumer1.Subscribe(KafkaTopicsConstant.GetArtuTestResultConsumerTopic);

            _ = Task.Run(() =>
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    try
                    {
                        var consumeResult = consumer1.Consume(cancellationToken);
                        var message = consumeResult.Message.Value;

                        if (message != null)
                        {
                            Task.Run(async () =>
                            {
                                using (var scope = scopeFactory.CreateScope())
                                {
                                    //De-serialize KAFKA Message
                                    GetArtuMessageResponseDto receivedMessage = JsonSerializer.Deserialize<GetArtuMessageResponseDto>(message);

                                    var code = receivedMessage.code;
                                    var msg = receivedMessage.message;

                                    //COMMIT AND RESPONSE TO THE MESSAGE.
                                    consumer1.Commit(consumeResult);
                                }
                            }).Wait();
                        }

                        Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }
                }
            });


        }
    }
}