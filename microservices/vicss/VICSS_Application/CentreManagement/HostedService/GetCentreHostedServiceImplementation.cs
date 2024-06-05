namespace VICSS.Service.CentreManagement.HostedService
{
    using System.Reflection;
    using System.Text.Json;
    using Confluent.Kafka;
    using Confluent.Kafka.Admin;
    using MediatR;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.CentreManagement.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;

    public class GetCentreHostedServiceImplementation : HostedServiceAbstract
    {
        private readonly string ConsumerServer;
        private readonly string ProducerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;      
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly ILogger<GetCentreHostedServiceImplementation> logger;

        public GetCentreHostedServiceImplementation(IKafkaConsumer consumer,IKafkaProducer kafkaProducer ,IConfiguration config, IServiceScopeFactory scopeFactory, ILogger<GetCentreHostedServiceImplementation> logger)
        {
            this.consumer = consumer;            
            this.scopeFactory = scopeFactory;
            this.producer = kafkaProducer;
            this.logger = logger;

            //producer/consumer Server and Topics.
            ConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            ProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? consumerGetCentre;

            try
            {
                //Get consumer Configuration
                var consumerConfig = await consumer.GetKafkaConsumerConfig(ConsumerServer, userId, password, KafkaConsumerGroupConstant.GetCentreConsumerGroupForRequest);

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.CentreServiceName, "GetCentreHostedServiceImplementation", "GetCentreHostedService initiated");

                //Build consumer
                consumerGetCentre = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();

                //Subscribe to Consumer
                consumerGetCentre.Subscribe(KafkaTopicsConstant.GetCenterProducerTopic);

                //Runs Async loop to keep checking Consumer topic if data is available for consuming.
                _ = Task.Run(() =>
                {

                    while (!cancellationToken.IsCancellationRequested)
                    {
                        try
                        {
                            //Consume latest data and wait for next data;
                            var consumeResult = consumerGetCentre.Consume(cancellationToken);
                            var message = consumeResult.Message.Value;

                            //Do the work
                            if (message != null)
                            {

                                Task.Run(async () =>
                                {
                                    //Process Data
                                    using (var scope = scopeFactory.CreateScope())
                                    {
                                        KafkaRequestCentreDto recievedMessage = JsonSerializer.Deserialize<KafkaRequestCentreDto>((string)message);
                                        var mediator = scope.ServiceProvider.GetRequiredService<IMediator>();

                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, recievedMessage.TrackingUuid, CommonConstants.CentreServiceName, "GetCentreHostedServiceImplementation", "Message Recieved");

                                        var result = await mediator.Send(new GetCentresRequestDto(recievedMessage.status), CancellationToken.None);

                                        consumerGetCentre.Commit(consumeResult);
                                        KafkaResponseCentreDto responseMessage = new KafkaResponseCentreDto();
                                        responseMessage.centres = result.centres;
                                        responseMessage.TrackingUuid = recievedMessage.TrackingUuid;

                                        //Produce Message
                                        var producerConfig = await producer.GetKafkaProducerConfig(ProducerServer, userId, password);
                                        await producer.ProduceMessage(producerConfig, responseMessage, recievedMessage.TrackingUuid, KafkaTopicsConstant.GetCenterConsumerTopic);

                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, recievedMessage.TrackingUuid, CommonConstants.CentreServiceName, "GetCentreHostedServiceImplementation", "Message Sent");
                                    }

                                }).Wait();
                            }

                            Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                        }
                        catch (Exception ex)
                        {
                            logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.CentreServiceName, "GetCentreHostedServiceImplementation", ex.ToString());
                        }
                    }

                    //_consumer.Close();
                });
            }
            catch(Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.CentreServiceName, "GetCentreHostedServiceImplementation", ex.ToString());
            }
        }
    }
}
