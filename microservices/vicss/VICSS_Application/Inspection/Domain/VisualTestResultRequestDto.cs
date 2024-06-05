namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class VisualTestResultRequestDto : IRequest<TestResultResponseDto>
    {
        public TestDto TestDto { get; set; }
        public SaveVisualTestResultDto SaveVisualTestResultDto { get; set; }
    }

    public class SaveVisualTestResultDto
    {
        public int? NumFixedAxles { get; set; }
        public int? NumRetractAxles { get; set; }
        public int? NumTotalAxles { get; set; }
        public string? RetractAxlesPos { get; set; }
        public string? AxleTestLevel { get; set; }
        public string? AxlesTestResult { get; set; }
        public string? BrakeTestLevel { get; set; }
        public string? BrakeTestResult { get; set; }
        public string? ChsssTestLevel { get; set; }
        public string? ChsssTestResult { get; set; }
        public string? DimensionTestLevel { get; set; }
        public string? DimensionTestResult { get; set; }
        public string? DocumentTestLevel { get; set; }
        public string? DocumentTestResult { get; set; }
        public string? DoorTestLevel { get; set; }
        public string? DoorTestResult { get; set; }
        public string? DriverCabTestLevel { get; set; }
        public string? DriverCabTestResult { get; set; }
        public string? DriverViewTestLevel { get; set; }
        public string? DriverViewTestResult { get; set; }
        public string Result { get; set; }
        public string? SkipTestReasonId { get; set; }
    }

}
