using VICSS.Shared.Models.Common;

namespace VICSS.Service.Inspection.Domain
{
    public class GetUnconfirmedListResponseDto : ApiErrorMessage
    {
        public List<UnconfirmedListDto>? UnconfirmedList { get; set; }
    }

    public class UnconfirmedListDto
    {
        public string AppointmentId { get; set; }
        public string LaneId { get; set; }
        public string VehicleId { get; set; }
        public DateTime CreateDatetime { get; set; }
    }
}
