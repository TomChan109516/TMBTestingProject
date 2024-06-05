using VICSS.Shared.Models.Common;

namespace VICSS.Service.Inspection.Domain
{
    public class AddUnconfirmedListResponseDto:ApiErrorMessage
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
}
