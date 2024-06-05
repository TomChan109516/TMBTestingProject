namespace VICSS.Shared.Models.LaneConfiguration
{
    using System.Text.Json.Serialization;
    public class LanesByCenterIdDto
    {
        public LanesByCenterIdDto()
        {

        }
        [JsonPropertyName("laneId")]
        public string? LaneId { get; set; }

        [JsonPropertyName("centreId")]
        public string CentreId { get; set; }

        [JsonPropertyName("laneName")]
        public string LaneName { get; set; }

        [JsonPropertyName("laneType")]
        public string LaneType { get; set; }

        [JsonPropertyName("virtualLaneId")]
        public string? VirtualLaneId { get; set; }

        [JsonPropertyName("physicalLaneName")]
        public string? PhysicalLaneName { get; set; }

        [JsonPropertyName("laneDescription")]
        public string LaneDescription {  get; set; }

        [JsonPropertyName("laneStatus")]
        public bool? LaneStatus {  get; set; }

        [JsonPropertyName("userId")]
        public string UserId {  get; set; }

        [JsonPropertyName("laneTimeSlots")]
        public List<LaneTimeSlotDto> laneTimeSlots { get; set; } = new List<LaneTimeSlotDto>();
    }
}
