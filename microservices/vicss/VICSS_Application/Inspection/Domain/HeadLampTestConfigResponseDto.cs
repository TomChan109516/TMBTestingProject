using VICSS.Shared.Models.Common;

namespace VICSS.Service.Inspection.Domain
{
    public class HeadLampTestConfigResponseDto: ApiErrorMessage
    {
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
    }
}
