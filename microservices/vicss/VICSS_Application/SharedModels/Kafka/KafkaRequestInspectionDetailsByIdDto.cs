namespace VICSS.Shared.Models.Kafka
{
    public class KafkaRequestInspectionDetailsByIdDto
    {
        public KafkaRequestInspectionDetailsByIdDto() 
        {
            InspectionId = new List<string>();
        }

        public KafkaRequestInspectionDetailsByIdDto(string trackingUuid,List<string> inspectionId)
        {
            this.TrackingUuid = trackingUuid;
            this.InspectionId = inspectionId;
        }

        public string TrackingUuid { get; set; }
        public List<string> InspectionId { get; set; }
    }
}
