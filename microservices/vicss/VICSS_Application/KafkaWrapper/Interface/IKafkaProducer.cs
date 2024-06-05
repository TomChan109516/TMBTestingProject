namespace VICSS.Infrastructure.KafkaWrapper.Interface
{
    using System;
    using System.Threading.Tasks;
    using Confluent.Kafka;
    public interface IKafkaProducer
    {        
        public Task<bool> ProduceMessage(ProducerConfig producerConfig,Object message,string eventId,string topic);

        public Task<ProducerConfig> GetKafkaProducerConfig(string producerServer,string userName,string password);
    }
}
