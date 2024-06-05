namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class ExhaustTestResultRequestDto : IRequest<TestResultResponseDto>
    {
        public TestDto TestDto{ get; set; }
        public ExhaustTestResultDto ExhaustTestResultDto { get; set; }
    }
    public class ExhaustTestResultDto()
    {
        public bool PetrolInd { get; set; }
        public int? COIdle { get; set; }
        public int? COHighIdle { get; set; }
        public int? HCIdle { get; set; }
        public int? HCHighIdle { get; set; }
        public int? CO2Idle { get; set; }
        public int? CO2HighIdle { get; set; }
        public int? O2Idle { get; set; }
        public int? O2HighIdle { get; set; }
        public int? NOIdle { get; set; }
        public int? NOHighIdle { get; set; }
        public int? LambdaHighIdle { get; set; }
        public int? Hsu1 { get; set; }
        public int? Hsu2 { get; set; }
        public int? Hsu3 { get; set; }
        public int? Hsu4 { get; set; }
        public int? Hsu5 { get; set; }
        public int? Hsu6 { get; set; }
        public int? Hsu7 { get; set; }
        public int? Hsu8 { get; set; }
        public int? Hsu9 { get; set; }
        public int? Hsu10 { get; set; }
        public int? HsuAvg { get; set; }
        public int? Rpm1 { get; set; }
        public int? Rpm2 { get; set; }
        public int? Rpm3 { get; set; }
        public int? Rpm4 { get; set; }
        public int? Rpm5 { get; set; }
        public int? Rpm6 { get; set; }
        public int? Rpm7 { get; set; }
        public int? Rpm8 { get; set; }
        public int? Rpm9 { get; set; }
        public int? Rpm10 { get; set; }
        public int? RpmAvg { get; set; }
        public string Result { get; set; }
        public string? SkipTestReasonId { get; set; }
        public bool DynoInd { get; set; }
    }
}
