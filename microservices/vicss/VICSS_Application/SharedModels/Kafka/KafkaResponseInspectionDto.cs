using System.Net;

namespace VICSS.Shared.Models.Kafka
{
    public class KafkaResponseInspectionDto
    {
        public KafkaResponseInspectionDto() 
        {
            
        }

        public KafkaResponseInspectionDto(string trackingUuid, HttpStatusCode status)
        {
            this.TrackingUuid = trackingUuid;
            this.Status = status;
        }

        public string? TrackingUuid { get; set; }

        public HttpStatusCode Status { get; set; }
    }
}
