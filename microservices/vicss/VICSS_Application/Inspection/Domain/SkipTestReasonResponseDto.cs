namespace VICSS.Service.Inspection.Domain
{
    using VICSS.Shared.Models.Common;
    public class SkipTestReasonResponseDto: ApiErrorMessage
    {
        public SkipTestReasonResponseDto()
        {
            SkipTestReasons = new List<SkipTestReasonDto> ();
        }
        public List<SkipTestReasonDto> SkipTestReasons { get; set; }
    }

    public class SkipTestReasonDto
    {
        public SkipTestReasonDto() { }
        public string Id { get; set; }
        public string TestType { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
    }

}
