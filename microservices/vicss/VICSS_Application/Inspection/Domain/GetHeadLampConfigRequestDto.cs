namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class GetHeadLampConfigRequestDto:IRequest<GetHeadLampConfigResponseDto>
    {
        public GetHeadLampConfigRequestDto(string inspectionId)
        {
            InspectionId = inspectionId;
        }
        public string InspectionId { get; set; }
      
    }
}
