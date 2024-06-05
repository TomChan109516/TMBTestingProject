namespace VICSS.Service.Inspection.Domain
{
    using MediatR;

    public class GetHeadlampTestDataRequestDto:IRequest<GetTestStatusResponseDto>
    {
        public GetHeadlampTestDataRequestDto()
        {
            
        }
        public string AppointmentNumber { get; set; }
        public string LaneId { get; set; }
        public string StationId { get; set; }
    }
}
