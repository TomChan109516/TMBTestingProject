namespace VICSS.Service.Inspection.Domain
{
    using VICSS.Shared.Models.Common;
    public class SearchAbortSuspendTestReasonResponseDto : ApiErrorMessage
    {
        public SearchAbortSuspendTestReasonResponseDto()
        {
            searchAbortSuspendTestReason = new List<SearchAbortSuspendTestReasonDto>();
        }
        public List<SearchAbortSuspendTestReasonDto> searchAbortSuspendTestReason { get; set; }
    }

    public class SearchAbortSuspendTestReasonDto
    {
        public SearchAbortSuspendTestReasonDto() { }
        public string? Id { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
        public string? ReasonType { get; set; }
        public bool ActivateIndicator { get; set; }

    }
}