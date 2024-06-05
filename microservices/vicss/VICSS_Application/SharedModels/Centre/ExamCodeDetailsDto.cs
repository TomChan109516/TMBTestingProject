namespace VICSS.Shared.Models.Centre
{
    using System.Text.Json.Serialization;
    public class ExamCodeDetailsDto
    {
        public ExamCodeDetailsDto() { }

        [JsonPropertyName("LaneId")]
        public string LaneId { get; set; }

        [JsonPropertyName("InspectionTypeId")]
        public string InspectionTypeId { get; set; }

        [JsonPropertyName("ExamCode")]
        public string ExamCode { get; set; }

        [JsonPropertyName("ExamClass")]
        public string ExamClass { get; set; }

        [JsonPropertyName("InspectionTypeName")]
        public string InspectionTypeName { get; set; }

        [JsonPropertyName("InspectionTypeDescription")]
        public string InspectionTypeDescription { get; set; }

        [JsonPropertyName("examFee")]
        public string ExamFee { get; set; }
    }
}
