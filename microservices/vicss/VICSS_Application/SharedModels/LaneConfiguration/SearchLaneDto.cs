namespace VICSS.Shared.Models.LaneConfiguration
{

    using System.Text.Json.Serialization;
    public class SearchLaneDto
    {

        public SearchLaneDto()
        {
                
        }

        [JsonPropertyName("laneType")]
        public string LaneType { get; set; }

        [JsonPropertyName("lanename")]
        public string LaneName { get; set; }

        [JsonPropertyName("laneDescription")]
        public string LaneDescription { get; set; }

        [JsonPropertyName("LaneStatus")]
        public bool LaneStatus { get; set; }       

    }
}
