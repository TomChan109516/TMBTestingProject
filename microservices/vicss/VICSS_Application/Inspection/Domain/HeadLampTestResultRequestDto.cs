namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class HeadLampTestResultRequestDto : IRequest<TestResultResponseDto>
    {
        public TestDto TestDto { get; set; }
        public SaveHeadLampTestResultDto SaveHeadLampTestResultDto { get; set; }
    }

    public class SaveHeadLampTestResultDto
    {
        public string? LeftMainIntensity { get; set; }
        public string? RightMainIntensity { get; set; }
        public string? LeftMainHeight { get; set; }
        public string? RightMainHeight { get; set; }
        public string? LeftDippedHeight { get; set; }
        public string? RightDippedHeight { get; set; }
        public string? LeftMainVOffset { get; set; }
        public string? LeftMainHOffset { get; set; }
        public string? RightMainVOffset { get; set; }
        public string? RightMainHOffset { get; set; }
        public string? LeftDippedVOffset { get; set; }
        public string? LeftDippedHOffset { get; set; }
        public string? RightDippedVOffset { get; set; }
        public string? RightDippedHOffset { get; set; }
        public string? LeftDippedUpwardAngle { get; set; }
        public string? RightDippedUpwardAngle { get; set; }
        public string? LeftDippedHorizontAngle { get; set; }
        public string? RightDippedHorizontAngle { get; set; }
        public string? LeftMainVOffsetH { get; set; }
        public string? RightMainVOffsetH { get; set; }
        public string? LeftDippedVOffsetH { get; set; }
        public string? RightDippedVOffsetH { get; set; }
        public string? LeftTotalAdj { get; set; }
        public string? RightTotalAdj { get; set; }
        public string? LeftIsCapAngleIndicator { get; set; }
        public string? RightIsCapAngleIndicator { get; set; }
        public string? SkipTestReasonId { get; set; }
        public string Result { get; set; }
    }
}
