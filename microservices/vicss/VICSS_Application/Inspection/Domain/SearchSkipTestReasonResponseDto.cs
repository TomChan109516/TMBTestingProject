namespace VICSS.Service.Inspection.Domain
{
    using VICSS.Shared.Models.Common;
    public class SearchSkipTestReasonResponseDto : ApiErrorMessage
    {
        public SearchSkipTestReasonResponseDto()
        {
            searchSkipTestReason = new List<SearchSkipTestReasonDto>();
        }
        public List<SearchSkipTestReasonDto> searchSkipTestReason { get; set; }
    }

    public class SearchSkipTestReasonDto
    {
        public SearchSkipTestReasonDto() { }
        public string? Id { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
        public string? TestType { get; set; }
        public bool ActivateIndicator { get; set; }
    }
}