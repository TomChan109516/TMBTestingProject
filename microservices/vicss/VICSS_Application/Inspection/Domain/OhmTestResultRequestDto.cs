namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class OhmTestResultRequestDto : IRequest<TestResultResponseDto>
    {
        public TestDto TestDto { get; set; }
        public OhmTestResultDto OhmTestResultDto { get; set; }
    }
    public class OhmTestResultDto()
    {        
        public int Length { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string Result { get; set; }
        public string? SkipTestReasonId { get; set; }
    }
}
