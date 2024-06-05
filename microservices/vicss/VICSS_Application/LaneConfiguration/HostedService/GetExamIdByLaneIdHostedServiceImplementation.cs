namespace VICSS.Service.LaneConfiguration.HostedService
{
    using System.Reflection;
    using System.Text.Json;
    using Confluent.Kafka;
    using Confluent.Kafka.Admin;
    using MediatR;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.LaneConfiguration.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;

    public class GetExamIdByLaneIdHostedServiceImplementation : HostedServiceAbstract
    {
        private readonly string getLaneConsumerServer;
        private readonly string getLaneProducerServer;        
        private readonly IKafkaConsumer consumer;      
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly string kafkaUserName;
        private readonly string kafkaPassword;
        private readonly ILogger<GetExamIdByLaneIdHostedServiceImplementation> logger;

        public GetExamIdByLaneIdHostedServiceImplementation(IKafkaConsumer consumer,IKafkaProducer kafkaProducer ,IConfiguration config, IServiceScopeFactory scopeFactory, ILogger<GetExamIdByLaneIdHostedServiceImplementation> logger)
        {
            this.consumer = consumer;            
            this.scopeFactory = scopeFactory;
            this.producer = kafkaProducer;

            getLaneConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            getLaneProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            kafkaUserName = config.GetValue<string>("KafkaConfig:UserName");
            kafkaPassword = config.GetValue<string>("KafkaConfig:Password");

            this.logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? getExamByLaneconsumer;

            try
            {
                var consumerConfig = await consumer.GetKafkaConsumerConfig(getLaneConsumerServer, kafkaUserName, kafkaPassword, KafkaConsumerGroupConstant.GetExamByLaneIdConsumerGroupForRequest);

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "GetExamIdByLaneIdHostedServiceImplementation", "GetExamIdByLaneIdHostedService initiated");

                getExamByLaneconsumer = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();

                getExamByLaneconsumer.Subscribe(KafkaTopicsConstant.GetExamByLaneidConsumerTopic);

                _ = Task.Run(() =>
                {

                    while (!cancellationToken.IsCancellationRequested)
                    {
                        try
                        {
                            var consumeResult = getExamByLaneconsumer.Consume(cancellationToken);
                            var message = consumeResult.Message.Value;

                            //Do the work
                            if (message != null)
                            {

                                Task.Run(async () =>
                                {
                                    using (var scope = scopeFactory.CreateScope())
                                    {
                                        KafkaRequestExamIdByLanesIdDto receivedMessage = JsonSerializer.Deserialize<KafkaRequestExamIdByLanesIdDto>((string)message);
                                        var mediator = scope.ServiceProvider.GetRequiredService<IMediator>();

                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, receivedMessage.TrackingUuid, CommonConstants.LaneServiceName, "GetExamIdByLaneIdHostedServiceImplementation", "Message Recieved");

                                        var result = await mediator.Send(new GetExamsByCentreRequestDto(receivedMessage.centreId), CancellationToken.None);

                                        getExamByLaneconsumer.Commit(consumeResult);
                                        KafkaResponseExamIdByLanesIdDto responseMessage = new KafkaResponseExamIdByLanesIdDto();
                                        responseMessage.ExamCodeByLanesId = result.ExamCodeByLaneIdDtos;
                                        responseMessage.TrackingUuid = receivedMessage.TrackingUuid;

                                        //Produce Message
                                        var producerConfig = await producer.GetKafkaProducerConfig(getLaneProducerServer, kafkaUserName, kafkaPassword);
                                        await producer.ProduceMessage(producerConfig, responseMessage, receivedMessage.TrackingUuid, KafkaTopicsConstant.GetExamByLaneidProducerTopic);

                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, responseMessage.TrackingUuid, CommonConstants.LaneServiceName, "GetExamIdByLaneIdHostedServiceImplementation", "Message Sent");
                                    }

                                }).Wait();
                            }

                            Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                        }
                        catch (Exception ex)
                        {
                            //To Do
                            logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "GetExamIdByLaneIdHostedServiceImplementation - While loop", ex.ToString());
                        }
                    }

                    //_consumer.Close();
                });
            }
            catch(Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "GetExamIdByLaneIdHostedServiceImplementation", ex.ToString());
            }
        }
    }
}
