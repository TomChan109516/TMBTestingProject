namespace VICSS.Shared.Models.Inspection
{
    using System.Text.Json.Serialization;

    public class InspectionDetailsDto
    {
        public InspectionDetailsDto()
        {

        }

        [JsonPropertyName("inspectionId")]
        public string InspectionId {  get; set; }

        [JsonPropertyName("examCodes")]
        public List<InspectionExamCodeDto> inspectionExamCodeDtos { get; set;}

        [JsonPropertyName("inspectionResult")]
        public char InspectionResult { get; set;}

        [JsonPropertyName("inspectionStatus")]
        public string InspectionStatus { get; set; }
    }
}
