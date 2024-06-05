using Confluent.Kafka;
using System.Text.Json;
using VICSS.Infrastructure.Configuration.KafkaConfiguration;
using VICSS.Infrastructure.KafkaWrapper.Interface;
using VICSS.Service.Inspection.Helper;
using VICSS.Shared.Models.Common;
using VICSS.Shared.Models.Kafka;

namespace VICSS.Service.Inspection.HostedService
{
    public class GetStartInspectionHostedService : HostedServiceAbstract
    {

        private readonly string StartInspectionConsumerServer;
        private readonly string StartInspectionProducerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly ILogger<GetStartInspectionHostedService> logger;

        public GetStartInspectionHostedService(IKafkaConsumer consumer, IKafkaProducer kafkaProducer,
            IConfiguration config, IServiceScopeFactory scopeFactory, ILogger<GetStartInspectionHostedService> logger)
        {
            this.consumer = consumer;
            this.scopeFactory = scopeFactory;
            this.producer = kafkaProducer;

            StartInspectionConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            StartInspectionProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
            this.logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? StartInspectionConsumer;
            var consumerConfig = await consumer.GetKafkaConsumerConfig(StartInspectionConsumerServer, userId, password, KafkaConsumerGroupConstant.GetArtuStatusConsumerGroupForRequest);
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetStartInspectionHostedService", "GetStartInspectionHostedService initiated");
            StartInspectionConsumer = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();
            StartInspectionConsumer.Subscribe(KafkaTopicsConstant.GetArtuStatusProducerTopic);

            _ = Task.Run(() =>
            {

                while (!cancellationToken.IsCancellationRequested)
                {
                    try
                    {
                        ProcessKafkaMessage processKafka = new ProcessKafkaMessage();
                        var consumeResult = StartInspectionConsumer.Consume(cancellationToken);
                        var message = consumeResult.Message.Value;

                        //Do the work
                        if (message != null)
                        {

                            Task.Run(async () =>
                            {
                                using (var scope = scopeFactory.CreateScope())
                                {
                                    //De-serialize KAFKA Message
                                    KafKaTestRequestDto recievedMessage = JsonSerializer.Deserialize<KafKaTestRequestDto>(message);
                                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetStartInspectionHostedService", $"Message Recieved from ARTU" +
                                        $"{message}");

                                    //Check the Call -- AND DO WORK
                                    var responseMessage = processKafka.ReadMessage(recievedMessage);
                                    //COMMIT THE MESSAGE.
                                    StartInspectionConsumer.Commit(consumeResult);

                                }

                            }).Wait();
                        }

                        Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                    }
                    catch (Exception ex)
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetStartInspectionHostedService", $"An error occurred" +
                                        $"{ex.Message}");
                    }
                }

                //_consumer.Close();
            });



        }
    }
}
