namespace VICSS.Shared.Models.Inspection
{
    using System.Text.Json.Serialization;
    public class ExamCodeDto
    {
        public ExamCodeDto() { }

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

        [JsonPropertyName("userId")]
        public string UserId {  get; set; }
    }
}
