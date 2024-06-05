namespace VICSS.Shared.Models.Inspection
{
    using System.Text.Json.Serialization;

    public class InspectionExamCodeDto
    {
        [JsonPropertyName("examCode")]
        public string InspectionExamCode { get; set; }        
    }
}
