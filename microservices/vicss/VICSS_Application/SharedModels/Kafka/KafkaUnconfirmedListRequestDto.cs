namespace VICSS.Shared.Models.Kafka
{
    using System.Collections.Generic;
    public class KafkaUnconfirmedListRequestDto
    {
        public KafkaUnconfirmedListRequestDto(string trackingUuid,List<string> appointmentNumbers)
        {
            TrackingUuid = trackingUuid;
            AppointmentNumbers= appointmentNumbers;
        }
        public string? TrackingUuid { get; set; }
        public List<string> AppointmentNumbers { get; set; }
    }
}
