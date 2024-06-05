namespace VICSS.Service.Inspection.Domain
{
    using MediatR;

    public class TaximeterTestResultRequestDto : IRequest<TestResultResponseDto>
    {
        public TestDto TestDto { get; set; }
        public TaximeterTestResultDto TaximeterTestResultDto { get; set; }
    }
    public class TaximeterTestResultDto
    {
        public int Test1 { get; set; }
        public int Test2 { get; set; }
        public int Test3 { get; set; }
        public int Test4 { get; set; }
        public string WaitingTimeResult { get; set; }
        public string LongDistanceTestResult { get; set; }
        public string AntiTamperingResult { get; set; }
        public string Result { get; set; }
        public string? SkipTestReasonId { get; set; }
        public bool DynoInd { get; set; }
    }
}

