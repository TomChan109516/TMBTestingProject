namespace VICSS.Shared.Models.Kafka
{
    public class KafkaRequestExamIdByLanesIdDto
    {
        public KafkaRequestExamIdByLanesIdDto(string trackingUuid, string centreId)
        {
            this.TrackingUuid = trackingUuid;
            this.centreId = centreId;
        }

        public string TrackingUuid { get; set; }
        public string centreId { get; set; }
    }
}
