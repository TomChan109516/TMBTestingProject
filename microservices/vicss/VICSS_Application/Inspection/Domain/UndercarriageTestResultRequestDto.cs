namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class UndercarriageTestResultRequestDto : IRequest<TestResultResponseDto>
    {
        public TestDto TestDto { get; set; }
        public UndercarriageTestResultDto UndercarriageTestResultDto { get; set; }

    }
    public class UndercarriageTestResultDto()
    {
        public int? NumFixedAxles { get; set; }
        public int? NumRetractAxles { get; set; }
        public int? NumTotalAxles { get; set; }
        public string? RetractAxlesPos { get; set; }
        public string? BrakeSystemTestLevel { get; set; }
        public string? BrakeSystemTestResult { get; set; }
        public string? ChassisStructureTestLevel { get; set; }
        public string? ChassisStructureTestResult { get; set; }
        public string? DriverCabTestLevel { get; set; }
        public string? DriverCabTestResult { get; set; }
        public string? EletricalSystemTestLevel { get; set; }
        public string? EletricalSystemTestResult { get; set; }
        public string? EngineTestLevel { get; set; }
        public string? EngineTestResult { get; set; }
        public string? ExhaustAttachmentTestLevel { get; set; }
        public string? ExhaustAttachmentTestResult { get; set; }
        public string? FuelSystemTestLevel { get; set; }
        public string? FuelSystemTestResult { get; set; }
        public string? OtherTestLevel { get; set; }
        public string? OtherTestResult { get; set; }
        public string? SteeringAttachmentTestLevel { get; set; }
        public string? SteeringAttachmentTestResult { get; set; }
        public string? SuspensionSystemTestLevel { get; set; }
        public string? SuspensionSystemTestResult { get; set; }
        public string? TyreTestLevel { get; set; }
        public string? TyreTestResult { get; set; }
        public string? VehicleEquipmentTestLevel { get; set; }
        public string? VehicleEquipmentTestResult { get; set; }
        public string? WheelAlignmentTestLevel { get; set; }
        public string? WheelAlignmentTestResult { get; set; }
        public string? WheelTestLevel { get; set; }
        public string? WheelTestResult { get; set; }
        public string? WheelguardTestLevel { get; set; }
        public string? WheelguardTestResult { get; set; }
        public string Result { get; set; }
        public string? SkipTestReasonId { get; set; }
    }
}
