namespace VICSS.Shared.Models.Kafka
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.LaneConfiguration;
    public class KafkaResponseLaneDetailsByCentreIdDto
    {
        public KafkaResponseLaneDetailsByCentreIdDto()
        {
            LanesDto = new List<LanesByCenterIdDto>();
        }

        public string? TrackingUuid { get; set; }

        [JsonPropertyName("laneDetails")]
        public List<LanesByCenterIdDto> LanesDto { get; set; }
    }
}
