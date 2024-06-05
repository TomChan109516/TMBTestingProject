namespace VICSS.Shared.Models.LaneConfiguration
{
    using System.Text.Json.Serialization;
    public class ExamCodeByLaneIdDto
    {
        public ExamCodeByLaneIdDto()
        {

        }
        [JsonPropertyName("laneAvailInspTypeId")]
        public string LaneAvailInspTypeId { get; set; }

        [JsonPropertyName("laneId")]
        public string LaneId { get; set; }

        [JsonPropertyName("inspectionTypeId")]
        public string InspectionTypeId { get; set; }
    }
}
