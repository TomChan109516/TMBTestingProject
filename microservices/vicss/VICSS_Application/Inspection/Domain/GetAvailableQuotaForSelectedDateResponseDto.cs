namespace VICSS.Service.Inspection.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;

    public class GetAvailableQuotaForSelectedDateResponseDto : ApiErrorMessage
    {
        public GetAvailableQuotaForSelectedDateResponseDto()
        {
            examSlotsAvailabilityDtos = new List<ExamSlotsAvailabilityDto>();
        }

        [JsonPropertyName("examSlotsAvailabilityDtos")]
        public List<ExamSlotsAvailabilityDto> examSlotsAvailabilityDtos { get; set; }
    }
}
