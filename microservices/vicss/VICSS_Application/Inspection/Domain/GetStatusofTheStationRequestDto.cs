using MediatR;

namespace VICSS.Service.Inspection.Domain
{
    public class GetStatusofTheStationRequestDto : IRequest<GetStatusofTheStationResponseDto>
    {
        public string LaneId { get; set; }
        public string Station { get; set; }
        public string AppointmentId { get; set; }

    }
}
