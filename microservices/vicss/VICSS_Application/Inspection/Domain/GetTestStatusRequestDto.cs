using MediatR;

namespace VICSS.Service.Inspection.Domain
{
    public class GetTestStatusRequestDto : IRequest<GetTestStatusResponseDto>
    {

        public GetTestStatusRequestDto()
        {

        }
        public string AppointmentNumber { get; set; }
        public string LaneId { get; set; }
        public string StationId { get; set; }
        public string TestName { get; set; }
    }
}
