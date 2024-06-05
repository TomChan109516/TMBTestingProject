namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    using VICSS.Shared.Models.Inspection;
    using System.Text.Json.Serialization;

    public class GetExamSlotAvailabilityDetailsForDateRangeRequestDto : IRequest<GetExamSlotAvailabilityDetailsForDateRangeResponseDto>
    {
        public GetExamSlotAvailabilityDetailsForDateRangeRequestDto(AvailableQuotaForSelectedDateRangeRequestDto request)
        {
            this.availableQuotaForSelectedDateRangeRequestDto = request;
        }


        [JsonPropertyName("availableQuotaForSelectedDate")]
        public AvailableQuotaForSelectedDateRangeRequestDto availableQuotaForSelectedDateRangeRequestDto { get; set; }
    }
}
