namespace VICSS.Infrastructure.KafkaWrapper.Implementation
{
    using System.Net;
    using System.Text.Json;
    using Confluent.Kafka;
    using KafkaWrapper.Interface;
    using Microsoft.Extensions.Configuration;
    using Models.Kafka;
    using NLog;

    public class KafkaProducer(IConfiguration config) : IKafkaProducer
    {
        private readonly string server;
        private readonly IConfiguration _config = config;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();


        public async Task<ProducerConfig> GetKafkaProducerConfig(string producerServer,string userName, string password)
        {
            if(!String.IsNullOrEmpty(userName) && !String.IsNullOrEmpty(password))
            {
                logger.Log(LogLevel.Info, "Logging at CreateProducerConfigWithCreds");

                return this.CreateProducerConfigWithCreds(producerServer, userName, password);
            }
            else
            {
                logger.Log(LogLevel.Info, "Logging at CreateProducerConfigWithOutCreds");

                return this.CreateProducerConfigWithOutCreds(producerServer);
            }
        }

        /// <summary>
        /// This method needs revision..
        /// </summary>
        /// <param name="producerConfig"></param>
        /// <param name="message"></param>
        /// <param name="eventId"></param>
        /// <param name="topic"></param>
        /// <returns></returns>
        public async Task<bool> ProduceMessage(ProducerConfig producerConfig, object message, string eventId, string topic)
        {
            bool status= false;
            try
            {
                using (var producer = new ProducerBuilder<Null, string>(producerConfig).Build())
                {
                    logger.Log(LogLevel.Info, String.Format("ProduceMessage : produce message for event id {0} :", eventId));

                    var kafkamessage = new Message<Null, string> { Value = JsonSerializer.Serialize(message), };
                    await producer.ProduceAsync(topic, kafkamessage);

                    logger.Log(LogLevel.Info, String.Format("ProduceMessage : message produced for event id : {0} Message : {1} ", eventId, kafkamessage.Value));
                }

                status = true;
            }

            catch(Exception ex) 
            {
                logger.Error(ex,$"ProduceMessage : Error for event id : {eventId} Error Message : {ex} ");
                status = false;
            }
            
            return status;
        }

        private ProducerConfig CreateProducerConfigWithCreds(string producerServer, string userName, string password)
        {
            var producerconfig = new ProducerConfig
            {
                BootstrapServers = producerServer,
                Acks = Acks.Leader,
                AllowAutoCreateTopics = true,
                SecurityProtocol = SecurityProtocol.SaslPlaintext,
                SaslMechanism = SaslMechanism.ScramSha256,
                SaslUsername = userName,
                SaslPassword = password
            };

            return producerconfig;
        }

        private ProducerConfig CreateProducerConfigWithOutCreds(string producerServer)
        {
            var producerconfig = new ProducerConfig
            {
                BootstrapServers = producerServer,
                Acks = Acks.Leader,
                AllowAutoCreateTopics = true,                
            };

            return producerconfig;
        }
    }
}
