using VICSS.Shared.Models.Common;

namespace VICSS.Service.Inspection.Domain
{
    public class IpResponseDto : ApiErrorMessage
    {
        public string IpAddress { get; set; }
        public string LaneId { get; set; }
        public string StationId { get; set; }
        public string DeviceType { get; set; }
    }
}
