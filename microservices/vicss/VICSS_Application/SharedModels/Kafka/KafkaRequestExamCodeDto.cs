namespace VICSS.Shared.Models.Kafka
{
    public class KafkaRequestExamCodeDto
    {
        public KafkaRequestExamCodeDto(string trackingUuid, string status)
        {
            this.TrackingUuid = trackingUuid;
            this.status = status;
        }
        public string? TrackingUuid { get; set; }

        public string status { get; set; }
    }
}
