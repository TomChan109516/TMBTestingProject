namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class AxleWeightTestResultRequestDto : IRequest<TestResultResponseDto>
    {
        public TestDto TestDto { get; set; }
        public AxleWeightTestResultDto AxleWeightTestResultDto { get; set; }
        
    }
    public class AxleWeightTestResultDto
    {
        public float? AxleW1 { get; set; }
        public float? AxleW2 { get; set; }
        public float? AxleW3 { get; set; }
        public float? AxleW4 { get; set; }
        public float? AxleW5 { get; set; }
        public float? AxleW6 { get; set; }
        public float? AxleW7 { get; set; }
        public float? AxleW8 { get; set; }
        public float? OverallWeight { get; set; }
        public string Result { get; set; }
        public string? SkipTestReasonId { get; set; }
    }
}