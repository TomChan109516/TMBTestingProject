using Confluent.Kafka;
using Confluent.Kafka.Admin;
using MediatR;
using System.Reflection;
using System.Text.Json;
using VICSS.Infrastructure.Configuration.KafkaConfiguration;
using VICSS.Infrastructure.KafkaWrapper.Interface;
using VICSS.Service.LaneConfiguration.Domain;
using VICSS.Shared.Models.Common;
using VICSS.Shared.Models.Kafka;

namespace VICSS.Service.LaneConfiguration.HostedService
{
    public class LanesDetailsByCentreIdHostedServiceImplementation : HostedServiceAbstract
    {
        private readonly string consumerServer;
        private readonly string producerServer;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;
        private readonly string kafkaUserName;
        private readonly string kafkaPassword;


        public LanesDetailsByCentreIdHostedServiceImplementation(IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, IServiceScopeFactory scopeFactory)
        {
            this.consumer = consumer;
            this.scopeFactory = scopeFactory;
            this.producer = kafkaProducer;

            consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            kafkaUserName = config.GetValue<string>("KafkaConfig:UserName");
            kafkaPassword = config.GetValue<string>("KafkaConfig:Password");
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? getLaneDetailsByCentreConsumer;
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, kafkaUserName, kafkaPassword, KafkaConsumerGroupConstant.GetLaneDetailsByCentreConsumerGroupForRequest);


            //Create topic as consumer doesnot auto create topic.Absence of topic at time of consumer subscription will create error.
            //using (var adminClient = new AdminClientBuilder(new AdminClientConfig { BootstrapServers = consumerConfig.BootstrapServers }).Build())
            //{
            //    try
            //    {
            //        await adminClient.CreateTopicsAsync(new TopicSpecification[] {
            //        new TopicSpecification { Name = KafkaTopicsConstant.GetLaneDetailsByCentreProducerTopic } });                    
            //    }
            //    catch (CreateTopicsException e)
            //    {
            //        logger.Error(ex, $"An error occured creating topic {e.Results[0].Topic}: {e.Results[0].Error.Reason}");
            //    }
            //    catch (Exception ex)
            //    {
            //        logger.Error(ex, $"An error occured {ex.Message}");
            //    }
            //}


            getLaneDetailsByCentreConsumer = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();

            getLaneDetailsByCentreConsumer.Subscribe(KafkaTopicsConstant.GetLaneDetailsByCentreProducerTopic);

            _ = Task.Run(() =>
            {

                while (!cancellationToken.IsCancellationRequested)
                {
                    try
                    {
                        var consumeResult = getLaneDetailsByCentreConsumer.Consume(cancellationToken);
                        var message = consumeResult.Message.Value;

                        //Do the work
                        if (message != null)
                        {

                            Task.Run(async () =>
                            {
                                using (var scope = scopeFactory.CreateScope())
                                {
                                    KafkaRequestLaneDetailsByCentreIdDto receivedMessage = JsonSerializer.Deserialize<KafkaRequestLaneDetailsByCentreIdDto>(message);
                                    var mediator = scope.ServiceProvider.GetRequiredService<IMediator>();
                                    var result = await mediator.Send(new LanesDetailsByCentreIdRequestDto(receivedMessage.CentreId), CancellationToken.None);

                                    getLaneDetailsByCentreConsumer.Commit(consumeResult);
                                    KafkaResponseLaneDetailsByCentreIdDto responseMessage = new KafkaResponseLaneDetailsByCentreIdDto();
                                    responseMessage.LanesDto = result.LanesDto;
                                    responseMessage.TrackingUuid = receivedMessage.TrackingUuid;

                                    //Produce Message
                                    var producerConfig = await producer.GetKafkaProducerConfig(producerServer, kafkaUserName, kafkaPassword);
                                    await producer.ProduceMessage(producerConfig, responseMessage, receivedMessage.TrackingUuid, KafkaTopicsConstant.GetLaneDetailsByCentreConsumerTopic);
                                }

                            }).Wait();
                        }

                        Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
                    }
                    catch (Exception ex)
                    {
                        //To Do                        
                    }
                }

                //_consumer.Close();
            });
        }

    }
}
