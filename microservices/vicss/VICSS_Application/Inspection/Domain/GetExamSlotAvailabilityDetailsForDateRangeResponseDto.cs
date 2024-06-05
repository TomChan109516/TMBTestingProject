namespace VICSS.Service.Inspection.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;

    public class GetExamSlotAvailabilityDetailsForDateRangeResponseDto : ApiErrorMessage
    {
        public GetExamSlotAvailabilityDetailsForDateRangeResponseDto()
        {
            availableQuotaForSelectedDateRangeResponseDtos = new AvailableQuotaForSelectedDateRangeResponseDto();
        }        


        [JsonPropertyName("availableQuotaForSelectedDateRangeResponse")]
        public AvailableQuotaForSelectedDateRangeResponseDto availableQuotaForSelectedDateRangeResponseDtos { get; set; }

    }
}
