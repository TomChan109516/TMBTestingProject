namespace VICSS.Shared.Models.Kafka
{
    using VICSS.Shared.Models.Centre;
    public class KafkaResponseCentreDetailsByCentreIdDto
    {
        public KafkaResponseCentreDetailsByCentreIdDto()
        {
            CentresDto = new List<CentresDto>();
        }

        public string TrackingUuid { get; set; }
        public List<CentresDto> CentresDto { get; set; }
    }
}
