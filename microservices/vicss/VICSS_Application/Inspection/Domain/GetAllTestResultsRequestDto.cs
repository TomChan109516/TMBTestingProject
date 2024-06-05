namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class GetAllTestResultsRequestDto : IRequest<GetAllTestResultsResponseDto>
    {
        public GetAllTestResultsRequestDto(string InspectionId)
        {
            this.InspectionId = InspectionId;
        }
        public string InspectionId { get; set; }
    }
}
