using VICSS.Shared.Models.Inspection;

namespace VICSS.Shared.Models.Kafka
{
    public class KafkaRequestInspectionDto
    {
        public KafkaRequestInspectionDto() 
        {
        }

        public KafkaRequestInspectionDto(string trackingUuid, InspectionCreatedDto request)
        {
            this.TrackingUuid = trackingUuid;
            this.InspectionCreatedDtos = request;
        }

        public string TrackingUuid { get; set; }

        public InspectionCreatedDto InspectionCreatedDtos { get; set; }
    }
}
