namespace VICSS.Shared.Models.Kafka
{
    public class KafkaRequestCentreDetailsByCentreIdDto
    {
        public KafkaRequestCentreDetailsByCentreIdDto(string trackingUuid, List<string> centreId)
        {
            this.TrackingUuid = trackingUuid;
            this.CentreId = centreId;
        }
        public string TrackingUuid { get; set; }
        public List<string> CentreId { get; set; }
    }
}
