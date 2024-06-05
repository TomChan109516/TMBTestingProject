namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    using VICSS.Shared.Models.Inspection;

    public class GetInspectionDetailsByInspectionIdRequestDto : IRequest<GetInspectionDetailsByInspectionIdResponseDto>
    {
        public GetInspectionDetailsByInspectionIdRequestDto() 
        { }

        public GetInspectionDetailsByInspectionIdRequestDto(List<string> inspectionId)
        {
            this.InspectionId = inspectionId;
        }

        public List<string> InspectionId { get; set; } = new List<string>();
    }
}
