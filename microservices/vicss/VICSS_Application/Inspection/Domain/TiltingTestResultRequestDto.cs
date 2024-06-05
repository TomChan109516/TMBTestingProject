namespace VICSS.Service.Inspection.Domain
{
    using MediatR;

    public class TiltingTestResultRequestDto : IRequest<TestResultResponseDto>
    {
        public TestDto TestDto { get; set; }
        public TiltingTestResultDto TiltingTestResultDto { get; set; }
    }

    public class TiltingTestResultDto()
    {
        public string? Remark { get; set; }
        public string Result { get; set; }
        public string? SkipTestReasonId { get; set; }
    }
}
