namespace VICSS.Service.CentreManagement.HostedService
{
    using System.Text.Json;
    using Confluent.Kafka;
    using MediatR;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.CentreManagement.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;

    public class GetCentreDetailsByCentreIdHostedServiceImplementation : HostedServiceAbstract
    {
        private readonly string ConsumerServer;
        private readonly string ProducerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;      
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly ILogger<GetCentreDetailsByCentreIdHostedServiceImplementation> logger;

        public GetCentreDetailsByCentreIdHostedServiceImplementation(IKafkaConsumer consumer,IKafkaProducer kafkaProducer ,IConfiguration config, IServiceScopeFactory scopeFactory, ILogger<GetCentreDetailsByCentreIdHostedServiceImplementation> logger)
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
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.CentreServiceName, "GetCentreDetailsByCentreIdHostedServiceImplementation", "GetCentreDetailsByCentreIdHostedServiceImplementation initiated");

                //Get consumer Configuration
                var consumerConfig = await consumer.GetKafkaConsumerConfig(ConsumerServer, userId, password, KafkaConsumerGroupConstant.GetCentresByIdConsumerGroupForRequest);

                //Build consumer
                consumerGetCentre = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();

                //Subscribe to Consumer
                consumerGetCentre.Subscribe(KafkaTopicsConstant.GetCentresByIdProducerTopic);

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
                                        KafkaRequestCentreDetailsByCentreIdDto recievedMessage = JsonSerializer.Deserialize<KafkaRequestCentreDetailsByCentreIdDto>((string)message);
                                        var mediator = scope.ServiceProvider.GetRequiredService<IMediator>();
                                        var result = await mediator.Send(new GetCentresDetailByCentreIdRequestDto(recievedMessage.CentreId), CancellationToken.None);

                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, recievedMessage.TrackingUuid, CommonConstants.CentreServiceName, "GetCentreDetailsByCentreIdHostedServiceImplementation", "Message Recieved");

                                        consumerGetCentre.Commit(consumeResult);
                                        KafkaResponseCentreDetailsByCentreIdDto responseMessage = new KafkaResponseCentreDetailsByCentreIdDto();
                                        responseMessage.CentresDto = result.CentresDto;
                                        responseMessage.TrackingUuid = recievedMessage.TrackingUuid;

                                        //Produce Message
                                        var producerConfig = await producer.GetKafkaProducerConfig(ProducerServer, userId, password);
                                        await producer.ProduceMessage(producerConfig, responseMessage, recievedMessage.TrackingUuid, KafkaTopicsConstant.GetCentresByIdConsumerTopic);

                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, recievedMessage.TrackingUuid, CommonConstants.CentreServiceName, "GetCentreDetailsByCentreIdHostedServiceImplementation", "Message Sent");
                                    }

                                }).Wait();
                            }

                            Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                        }
                        catch (Exception ex)
                        {
                            logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.CentreServiceName, "GetCentreDetailsByCentreIdHostedServiceImplementation", ex.ToString());
                        }
                    }

                    //_consumer.Close();
                });
            }
            catch(Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.CentreServiceName, "GetCentreDetailsByCentreIdHostedServiceImplementation", ex.ToString());
            }
        }
    }
}
