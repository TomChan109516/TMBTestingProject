namespace VICSS.Shared.Models.Inspection
{
    using System.Text.Json.Serialization;

    public class SearchExamCodeRequestDto
    {
        public SearchExamCodeRequestDto() { }

        [JsonPropertyName("ExamCode")]
        public string? ExamCode { get; set; }

        [JsonPropertyName("ExamClass")]
        public string? ExamClass { get; set; }
    }
}
