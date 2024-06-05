namespace VICSS.Service.Inspection.Domain
{
    using VICSS.Shared.Models.Common;
    public class TestReasonResponseDto : ApiErrorMessage
    {
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
    }
}