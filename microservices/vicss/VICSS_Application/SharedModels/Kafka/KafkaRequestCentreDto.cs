namespace VICSS.Shared.Models.Kafka
{
    public class KafkaRequestCentreDto
    {
        public KafkaRequestCentreDto() 
        {
            
        }

        public KafkaRequestCentreDto(string trackingUuid, string status)
        {
            this.TrackingUuid = trackingUuid;
            this.status = status;
        }

        public string? TrackingUuid { get; set; }

        public string status { get; set; }
    }
}
