using Confluent.Kafka;
using System.Text.Json;
using VICSS.Infrastructure.Configuration.KafkaConfiguration;
using VICSS.Infrastructure.KafkaWrapper.Interface;
using VICSS.Service.Inspection.Helper;
using VICSS.Service.Inspection.HostedService;
using VICSS.Shared.Models.Common;
using VICSS.Shared.Models.Kafka;

namespace Inspection.HostedService
{
    public class GetStartTestHostedService : HostedServiceAbstract
    {

        private readonly string StartTestConsumerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly ILogger<GetStartTestHostedService> logger;

        public GetStartTestHostedService(IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, IServiceScopeFactory scopeFactory, ILogger<GetStartTestHostedService> logger)
        {
            this.consumer = consumer;
            this.scopeFactory = scopeFactory;
            this.logger = logger;
            this.producer = kafkaProducer;

            StartTestConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? StartTestConsumer;
            var consumerConfig = await consumer.GetKafkaConsumerConfig(StartTestConsumerServer, userId, password, KafkaConsumerGroupConstant.GetArtuTestResultConsumerGroupForRequest);
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetStartTestHostedService", "GetStartTestHostedService initiated");
            StartTestConsumer = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();
            StartTestConsumer.Subscribe(KafkaTopicsConstant.GetArtuTestResultProducerTopic);

            _ = Task.Run(() =>
            {

                while (!cancellationToken.IsCancellationRequested)
                {
                    try
                    {

                        var consumeResult = StartTestConsumer.Consume(cancellationToken);
                        var message = consumeResult.Message.Value;

                        //Do the work
                        if (message != null)
                        {
                            Task.Run(async () =>
                            {
                                using (var scope = scopeFactory.CreateScope())
                                {

                                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName,
                                "GetStartTestHostedService", "Work started with the message");

                                    //De-serialize KAFKA Message
                                    KafKaTestRequestDto recievedMessage = JsonSerializer.Deserialize<KafKaTestRequestDto>(message);


                                    if (recievedMessage != null)
                                    {
                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName,
                                    "GetStartTestHostedService", $"Message received from ARTU is {JsonSerializer.Serialize(recievedMessage)}");

                                        //Check the Call -- AND DO WORK
                                        ProcessKafkaMessage processKafka = new ProcessKafkaMessage();
                                        var responseMessage = processKafka.ReadMessage(recievedMessage);

                                        //COMMIT AND RESPONSE TO THE MESSAGE.
                                        StartTestConsumer.Commit(consumeResult);
                                    }

                                }

                            }).Wait();
                        }

                        Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                    }
                    catch (Exception ex)
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetStartTestHostedService", $"An error occurred" +
                                        $"{ex.Message}");
                    }
                }

                //_consumer.Close();
            });



        }

    }

}
