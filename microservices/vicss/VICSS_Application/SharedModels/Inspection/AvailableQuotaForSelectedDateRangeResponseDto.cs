namespace VICSS.Shared.Models.Inspection
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Centre;

    public class AvailableQuotaForSelectedDateRangeResponseDto
    {
        public AvailableQuotaForSelectedDateRangeResponseDto()
        {
            examsAvailableDateDtos = new List<ExamsAvailableDateDto>();
            centresDto = new List<CentresDto>();
        }

        [JsonPropertyName("centresDto")]
        public List<CentresDto> centresDto { get; set; }

        [JsonPropertyName("inspectionScheduleId")]
        public string InspectionScheduleId { get; set; }

        [JsonPropertyName("examsAvailableDateDtos")]
        public List<ExamsAvailableDateDto> examsAvailableDateDtos { get; set; }
    }
}
