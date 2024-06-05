namespace VICSS.Service.Inspection.Domain
{
    using VICSS.Shared.Models.Common;
    public class TabletLoginResponseDto : ApiErrorMessage
    {
        public string IpAddress { get; set; }
        public string DeviceType { get; set; }
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
    }
}
