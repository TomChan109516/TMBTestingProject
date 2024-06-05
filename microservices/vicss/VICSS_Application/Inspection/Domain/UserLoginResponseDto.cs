using VICSS.Shared.Models.Common;

namespace VICSS.Service.Inspection.Domain
{
    public class UserLoginResponseDto : ApiErrorMessage
    {
        public string? UserName { get; set; }
        public string IpAddress { get; set; }
        public string LaneId { get; set; }
        public string StationId { get; set; }
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
    }
}
