namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    using VICSS.Shared.Models.Inspection;

    public class InspectionRequestDto : IRequest<InspectionResponseDto>
    {
        public InspectionRequestDto(InspectionCreatedDto inspectionCreatedDto)
        {
            this.InspectionCreatedDto = inspectionCreatedDto;
        }
        public InspectionCreatedDto InspectionCreatedDto { get; set; }


    }
}
