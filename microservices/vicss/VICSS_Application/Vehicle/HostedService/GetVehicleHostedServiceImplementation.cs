using Confluent.Kafka;
using MediatR;
using Models.Kafka;
using System.Text.Json;
using VICSS.Infrastructure.KafkaWrapper.Interface;
using VICSS.Service.Models.Kafka;
using VICSS.Service.Vehicle.Domain;
using VICSS.Shared.Models.Kafka;
using VICSS.Infrastructure.Configuration.KafkaConfiguration;
using Confluent.Kafka.Admin;

namespace VICSS.Service.Vehicle.HostedService
{
    public class GetVehicleHostedServiceImplementation : HostedServiceAbstract
    {
        private readonly string getVehicleConsumerServer;
        private readonly string getVehicleProducerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly IServiceScopeFactory scopeFactory;

        public GetVehicleHostedServiceImplementation(IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, IServiceScopeFactory scopeFactory)
        {
            this.consumer = consumer;
            this.scopeFactory = scopeFactory;
            this.producer = kafkaProducer;

            getVehicleConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            getVehicleProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? consumerGetVehicleId;
            var consumerConfig = await consumer.GetKafkaConsumerConfig(getVehicleConsumerServer, userId, password, KafkaConsumerGroupConstant.GetVehicleByidConsumerGroupForRequest);

            //Create topic as consumer doesnot auto create topic.Absence of topic at time of consumer subscription will create error.
            //using (var adminClient = new AdminClientBuilder(new AdminClientConfig { BootstrapServers = consumerConfig.BootstrapServers }).Build())
            //{
            //    try
            //    {
            //        await adminClient.CreateTopicsAsync(new TopicSpecification[] {
            //        new TopicSpecification { Name = KafkaTopicsConstant.GetVehicleInfoByIdProducerTopic } });
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


            consumerGetVehicleId = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();
            consumerGetVehicleId.Subscribe(KafkaTopicsConstant.GetVehicleInfoByIdProducerTopic);


            _ = Task.Run(() =>
            {

                while (!cancellationToken.IsCancellationRequested)
                {
                    try
                    {
                        
                        var consumeResult = consumerGetVehicleId.Consume(cancellationToken);
                        var message = consumeResult.Message.Value;

                        //Do the work
                        if (message != null)
                        {

                            Task.Run(async () =>
                            {
                                using (var scope = scopeFactory.CreateScope())
                                {
                                    //De-serialize KAFKA Message
                                    KafkaRequestVehicleDto recievedMessage = JsonSerializer.Deserialize<KafkaRequestVehicleDto>(message);
                                    //GetVehicleInfoRequestDto getVehicleInfo = new GetVehicleInfoRequestDto()
                                    //{
                                    //    vehicleId = recievedMessage.vehicleId
                                    //};
                                    GetVehicleParticularsRequestDto getVehicleInfo = new GetVehicleParticularsRequestDto(recievedMessage.vehicleId);

                                    //Call the Event for Vehicle Data
                                    var mediator = scope.ServiceProvider.GetRequiredService<IMediator>();
                                   // var result = await mediator.Send(getVehicleInfo, CancellationToken.None);
                                    var result = await mediator.Send(getVehicleInfo, CancellationToken.None);

                                    consumerGetVehicleId.Commit(consumeResult);
                                    //  KafkaVehicleInfoResponseDto responseMessage = new KafkaVehicleInfoResponseDto(recievedMessage.trackingUuid, result);
                                    KafkaVehicleParticularResponseDto responseMessage = new KafkaVehicleParticularResponseDto(recievedMessage.trackingUuid,result.vehicleDetails.FirstOrDefault());


                                    //Produce Message
                                    var producerConfig = await producer.GetKafkaProducerConfig(getVehicleProducerServer, userId, password);
                                    await producer.ProduceMessage(producerConfig, responseMessage, responseMessage.trackingUuid, KafkaTopicsConstant.GetVehicleInfoByIdConsumerTopic);
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
