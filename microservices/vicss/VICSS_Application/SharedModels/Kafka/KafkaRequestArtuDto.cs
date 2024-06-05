namespace VICSS.Shared.Models.Kafka
{
    public class KafkaRequestArtuDto
    {
        public KafkaRequestArtuDto()
        {

        }

        public KafkaRequestArtuDto(string trackingUuid, string xmlMessage)
        {
            this.trackingUuid = trackingUuid;
            this.xmlMessage = xmlMessage;
        }

        public string? trackingUuid { get; set; }

        public string xmlMessage { get; set; }
    }
}
