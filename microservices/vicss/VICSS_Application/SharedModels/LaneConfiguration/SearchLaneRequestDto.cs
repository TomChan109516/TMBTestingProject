namespace VICSS.Shared.Models.LaneConfiguration
{
    using System.Text.Json.Serialization;

    public class SearchLaneRequestDto
    {

        [JsonPropertyName("centreId")]
        public string CentreId { get; set; }

        [JsonPropertyName("laneId")]
        public string? LaneId { get; set; }

        [JsonPropertyName("laneName")]
        public string? LaneName { get; set; }
    }
}
