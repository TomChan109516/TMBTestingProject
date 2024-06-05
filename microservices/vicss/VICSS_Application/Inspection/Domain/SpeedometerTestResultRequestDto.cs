namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class SpeedometerTestResultRequestDto : IRequest<TestResultResponseDto>
    {
        public TestDto TestDto { get; set; }
        public SpeedometerTestResultDto SpeedometerTestResultDto { get; set; }
    }

    public class SpeedometerTestResultDto()
    {
        public int TestingSpeed { get; set; }
        public int MeasuredSpeed { get; set; }
        public string Result { get; set; }
        public string? SkipTestReasonId { get; set; }
    }
}
