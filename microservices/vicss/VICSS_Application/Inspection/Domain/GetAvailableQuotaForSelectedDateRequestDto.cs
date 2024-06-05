namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Inspection;

    public class GetAvailableQuotaForSelectedDateRequestDto : IRequest<GetAvailableQuotaForSelectedDateResponseDto>
    {
        public GetAvailableQuotaForSelectedDateRequestDto(ExamSlotAvailabilityDetailsRequestDto request)
        {            
            this.examSlotAvailabilityDetailsRequestDto = request;
        }

        

        public ExamSlotAvailabilityDetailsRequestDto examSlotAvailabilityDetailsRequestDto { get; set; }

    }
}
