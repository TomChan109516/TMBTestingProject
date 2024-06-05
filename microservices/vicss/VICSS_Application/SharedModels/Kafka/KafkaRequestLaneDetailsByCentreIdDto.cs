namespace VICSS.Shared.Models.Kafka
{
    public class KafkaRequestLaneDetailsByCentreIdDto
    {
        public KafkaRequestLaneDetailsByCentreIdDto()
        {
            CentreId = new List<string>();
        }

        public KafkaRequestLaneDetailsByCentreIdDto(string trackingId , List<string> centreId)
        {
            TrackingUuid = trackingId;
            CentreId = centreId;
        }

        public string TrackingUuid { get; set; }
        public List<string> CentreId { get; set; }
    }
}
