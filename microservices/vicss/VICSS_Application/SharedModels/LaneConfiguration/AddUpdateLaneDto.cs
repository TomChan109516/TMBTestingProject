namespace VICSS.Shared.Models.LaneConfiguration
{
   
    using System.Text.Json.Serialization;
   
    public class AddUpdateLaneDto
    {
        public AddUpdateLaneDto()
        {
                
        }
        [JsonPropertyName("id")]
        public string? LaneId { get; set; }

        [JsonPropertyName("centreId")]
        public string? CentreId { get; set; }

        [JsonPropertyName("laneType")]
        public string? LaneType { get; set; }

        [JsonPropertyName("laneName")]
        public string? LaneName { get; set; }

        [JsonPropertyName("laneDescription")]
        public string? LaneDescription { get; set; }
        
        [JsonPropertyName("physicalLaneId")]
        public string? VirtualLaneId { get; set; }

        [JsonPropertyName("laneStatus")]
        public bool? LaneStatus { get; set; }

        [JsonPropertyName("userId")]
        public string? LastRecordTransactionUserId { get; set; }





    }
}
