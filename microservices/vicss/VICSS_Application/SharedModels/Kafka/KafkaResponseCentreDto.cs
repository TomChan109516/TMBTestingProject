namespace VICSS.Shared.Models.Kafka
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Centre;
    public class KafkaResponseCentreDto
    {
        public KafkaResponseCentreDto()
        {
            centres = new List<CentresDto>();
        }


        public string? TrackingUuid { get; set; }

        [JsonPropertyName("centres")]
        public List<CentresDto> centres { get; set; }
    }
}
