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
    public class GetExamCodeHostedServiceImplementation : HostedServiceAbstract
    {
        private readonly string getexamcodeConsumerServer;
        private readonly string getexamcodeProducerServer;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly string kafkaUserName;
        private readonly string kafkaPassword;
        private readonly ILogger<GetExamCodeHostedServiceImplementation> logger;

        public GetExamCodeHostedServiceImplementation(IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, IServiceScopeFactory scopeFactory, ILogger<GetExamCodeHostedServiceImplementation> logger)
        {
            this.consumer = consumer;
            this.scopeFactory = scopeFactory;
            this.producer = kafkaProducer;

            getexamcodeConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            getexamcodeProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            kafkaUserName = config.GetValue<string>("KafkaConfig:UserName");
            kafkaPassword = config.GetValue<string>("KafkaConfig:Password");
            this.logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? consumerExamCode;

            try
            {
                var consumerConfig = await consumer.GetKafkaConsumerConfig(getexamcodeConsumerServer, kafkaUserName, kafkaPassword, KafkaConsumerGroupConstant.GetExamCodeConsumerGroupForRequest);

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetExamCodeHostedServiceImplementation", "GetExamCodeHostedServiceImplementation initiated");

                consumerExamCode = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();

                consumerExamCode.Subscribe(KafkaTopicsConstant.GetExamCodesProducerTopic);

                _ = Task.Run(() =>
                {

                    while (!cancellationToken.IsCancellationRequested)
                    {
                        try
                        {
                            var consumeResult = consumerExamCode.Consume(cancellationToken);
                            var message = consumeResult.Message.Value;

                            //Do the work
                            if (message != null)
                            {

                                Task.Run(async () =>
                                {
                                    using (var scope = scopeFactory.CreateScope())
                                    {
                                        KafkaRequestExamCodeDto receivedMessage = JsonSerializer.Deserialize<KafkaRequestExamCodeDto>((string)message);
                                        var mediator = scope.ServiceProvider.GetRequiredService<IMediator>();
                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, receivedMessage.TrackingUuid, CommonConstants.InspectionServiceName, "GetExamCodeHostedServiceImplementation", "Message Recieved");

                                        var result = await mediator.Send(new GetExamCodeRequestDto(receivedMessage.status), CancellationToken.None);
                                        consumerExamCode.Commit(consumeResult);

                                        KafkaResponseExamCodeDto responseMessage = new KafkaResponseExamCodeDto();
                                        responseMessage.ExamCodes = result.ExamCodeDtos;
                                        responseMessage.TrackingUuid = receivedMessage.TrackingUuid;

                                        //Produce Message
                                        var producerConfig = await producer.GetKafkaProducerConfig(getexamcodeProducerServer, kafkaUserName, kafkaPassword);
                                        await producer.ProduceMessage(producerConfig, responseMessage, receivedMessage.TrackingUuid, KafkaTopicsConstant.GetExamCodesConsumerTopic);

                                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, receivedMessage.TrackingUuid, CommonConstants.InspectionServiceName, "GetExamCodeHostedServiceImplementation", "Message Sent");
                                    }

                                }).Wait();
                            }

                            Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                        }
                        catch (Exception ex)
                        {
                            //To Do
                            logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetExamCodeHostedServiceImplementation - while loop", ex.ToString());
                        }
                    }

                    //_consumer.Close();
                });
            }
            catch(Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetExamCodeHostedServiceImplementation", ex.ToString());
            }
        }

    }
}
