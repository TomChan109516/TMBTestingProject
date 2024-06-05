namespace VICSS.Infrastructure.KafkaWrapper.Interface
{
    using Confluent.Kafka;

    public interface IKafkaConsumer
    {
        public Task<ConsumerConfig> GetKafkaConsumerConfig(string consumerServer, string userName, string password, string ConsumerGroup = "");

        public Task<Object> ConsumeMessage(ConsumerConfig consumerConfig,string eventId, string topic, CancellationToken cancellationToken);

        public Task<Object> ConsumeMessageByEventId(ConsumerConfig consumerConfig, string eventId, string topic,CancellationToken cancellationToken);
    }
}
