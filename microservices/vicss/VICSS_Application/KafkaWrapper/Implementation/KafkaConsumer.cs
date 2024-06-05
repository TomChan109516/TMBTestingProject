namespace VICSS.Infrastructure.KafkaWrapper.Implementation
{
    using System.Threading;
    using Confluent.Kafka;
    using Confluent.Kafka.Admin;
    using KafkaWrapper.Interface;
    using Microsoft.Extensions.Configuration;
    using NLog;
    using NLog.Web;

    public class KafkaConsumer(IConfiguration config) : IKafkaConsumer
    {
        private readonly IConfiguration _config = config;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();
        

        /// <summary>
        /// 
        /// </summary>
        /// <param name="consumerServer"></param>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <param name="ConsumerGroup"></param>
        /// <returns></returns>
        public async Task<ConsumerConfig> GetKafkaConsumerConfig(string consumerServer, string userName, string password,string ConsumerGroup = "")
        {
            if (!String.IsNullOrEmpty(userName) && !String.IsNullOrEmpty(password)) 
            {
                logger.Log(LogLevel.Info, "Logging at CreateConsumerConfigWithCreds");

                return this.CreateConsumerConfigWithCreds(consumerServer, userName, password,ConsumerGroup);
            }
            else
            {
                logger.Log(LogLevel.Info, "Logging at CreateConsumerConfigWithOutCreds");
                return this.CreateConsumerConfigWithOutCreds(consumerServer,ConsumerGroup);
            }

        }

        /// <summary>
        /// This method needs revision..
        /// </summary>
        /// <param name="consumerConfig"></param>
        /// <param name="eventId"></param>
        /// <param name="topic"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public async Task<object> ConsumeMessage(ConsumerConfig consumerConfig, string eventId, string topic, CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? consumer;
            object consumedMessage = null;

            try
            {
                consumer = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();

                consumer.Subscribe(topic);

                var consumeResult = consumer.Consume(cancellationToken);
                var message = consumeResult.Message.Value;

                if (message != null)
                {

                    //recievedMessage = JsonSerializer.Deserialize<KafkaPocModel>(message);
                    consumedMessage = message;
                }

                //consumer.Close();
            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, String.Format($"Error message in kafka consummer message : consuming message error {0}", ex));
                consumedMessage = null;
            }


            return consumedMessage;
        }

        public async Task<object> ConsumeMessageByEventId(ConsumerConfig consumerConfig, string eventId, string topic, CancellationToken cancellationToken)
        {
            IConsumer<Ignore, string>? consumer = null;
            object consumedMessage = null;

            try
            {
                logger.Log(LogLevel.Info, String.Format("ConsumeMessageByEventId : consuming message for event id {0}", eventId));

                //using (var adminClient = new AdminClientBuilder(new AdminClientConfig { BootstrapServers = consumerConfig.BootstrapServers }).Build())
                //{
                //    try
                //    {
                //        await adminClient.CreateTopicsAsync(new TopicSpecification[] {
                //    new TopicSpecification { Name = topic } });
                //    }
                //    catch (CreateTopicsException e)
                //    {
                //        logger.Error(ex, $"An error occured creating topic {e.Results[0].Topic}: {e.Results[0].Error.Reason}");
                //    }
                //}


                consumer = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();

                consumer.Subscribe(topic);

                while (true)
                {
                    var consumeResult = consumer.Consume(cancellationToken);
                    var message = consumeResult.Message.Value;

                    logger.Log(LogLevel.Info, String.Format("ConsumeMessageByEventId : message Recieved {0}", message));

                    if (message != null && message.Contains(eventId) ) 
                    {
                        logger.Log(LogLevel.Info, String.Format("ConsumeMessageByEventId : message found for event id : {0} , Message : {1}", eventId , message));

                        consumedMessage = message;
                        consumer.Commit(consumeResult);
                        consumer.Close();
                        break;
                    }
                }
                
            }
            catch(Exception ex) 
            {
                logger.Log(LogLevel.Error, String.Format("ConsumeMessageByEventId : {0}", ex.ToString()));

                if(consumer != null)
                {
                    consumer.Close();
                }
                consumedMessage = null;
            }

            return consumedMessage;
        }

        private ConsumerConfig CreateConsumerConfigWithOutCreds(string consumerServer, string ConsumerGroup)
        {
            var consumerConfig = new ConsumerConfig
            {
                BootstrapServers = consumerServer,
                GroupId = ConsumerGroup,
                AutoOffsetReset = AutoOffsetReset.Latest,
                AllowAutoCreateTopics = false,
                EnableAutoCommit = false,                
            };

            return consumerConfig;
        }

        private ConsumerConfig CreateConsumerConfigWithCreds(string consumerServer, string userName, string password, string ConsumerGroup)
        {
            var consumerConfig = new ConsumerConfig
            {
                BootstrapServers = consumerServer,
                GroupId = ConsumerGroup,
                AutoOffsetReset = AutoOffsetReset.Latest,
                AllowAutoCreateTopics = false,
                EnableAutoCommit = false,
                SecurityProtocol = SecurityProtocol.SaslPlaintext,
                SaslMechanism = SaslMechanism.ScramSha256,
                SaslUsername = userName,
                SaslPassword = password
            };

            return consumerConfig;
        }

    }
}
