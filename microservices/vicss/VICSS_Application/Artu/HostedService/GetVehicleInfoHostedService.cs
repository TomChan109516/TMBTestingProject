namespace VICSS.Service.Artu.HostedService
{
    using Confluent.Kafka;
    using NLog;
    using System.Diagnostics.CodeAnalysis;
    using System.Runtime.CompilerServices;
    using System.Text.Json;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Artu.Implementation;
    using VICSS.Shared.Models.Kafka;

    [ExcludeFromCodeCoverage]
    public class GetVehicleInfoHostedService : HostedServiceAbstract
    {

        private readonly string StartTestConsumerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();

        public GetVehicleInfoHostedService(IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, IServiceScopeFactory scopeFactory)
        {
            this.consumer = consumer;
            this.scopeFactory = scopeFactory;
            this.producer = kafkaProducer;

            StartTestConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? consumer1;
            var consumerConfig = await consumer.GetKafkaConsumerConfig(StartTestConsumerServer, userId, password, KafkaConsumerGroupConstant.GetArtuStatusConsumerGroupForResponse);
            consumer1 = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();
            consumer1.Subscribe(KafkaTopicsConstant.GetArtuStatusConsumerTopic);

            _ = Task.Run(() =>
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    logger.Info("GetVehicleInfoHostedService in Artu Hosted Service");
                    try
                    {
                        var consumeResult = consumer1.Consume(cancellationToken);
                        var message = consumeResult.Message.Value;

                        //Do the work
                        if (message != null)
                        {
                            logger.Info($"GetVehicleInfoHostedService inside Message");
                            Task.Run(async () =>
                            {
                                using (var scope = scopeFactory.CreateScope())
                                {
                                    logger.Info("GetVehicleInfoHostedService inside Task.run");
                                    //De-serialize KAFKA Message
                                    KafKaTestRequestDto recievedMessage = JsonSerializer.Deserialize<KafKaTestRequestDto>(message);

                                    //Check the Call -- AND DO WORK
                                    var genericRepository = scope.ServiceProvider.GetRequiredService<IGenericRepository<ArtuDbContext, ArtuConfig>>();

                                    logger.Info("GetVehicleInfoHostedService Start reading message");

                                    ProcessKafkaMessage processKafkaMessage = new ProcessKafkaMessage(genericRepository);
                                    var responseMessage = processKafkaMessage.ReadMessage(recievedMessage);
                                    logger.Info($"[19W17] VICS to ARTU Communication");
                                    logger.Info($"Received Vehicle Information from inspection service: {recievedMessage.eventID}, {recievedMessage.typeofMessage}, {recievedMessage.xmlBody}");

                                    //COMMIT AND RESPONSE TO THE MESSAGE.
                                    consumer1.Commit(consumeResult);
                                }

                            }).Wait();
                        }

                        Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                    }
                    catch (Exception ex)
                    {
                        logger.Error(ex);
                        logger.Error($"Stacktrace: {ex.StackTrace}");
                        logger.Info("Catch Block for GetVehicleInfoHostedService");
                    }
                }

                //_consumer.Close();
            });



        }
    }
}
