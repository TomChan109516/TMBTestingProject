namespace VICSS.Shared.Models.Kafka
{
    using VICSS.Shared.Models.Inspection;

    public class KafkaResponseInspectionDetailsByIdDto
    {
        public KafkaResponseInspectionDetailsByIdDto() {
            InspectionDetailsDtos = new List<InspectionDetailsDto>();
        }

        public string TrackingUuid { get; set; }
        public List<InspectionDetailsDto> InspectionDetailsDtos { get; set; }
    }
}
