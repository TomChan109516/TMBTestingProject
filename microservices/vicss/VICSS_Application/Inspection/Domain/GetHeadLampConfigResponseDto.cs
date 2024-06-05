namespace VICSS.Service.Inspection.Domain
{
    using VICSS.Shared.Models.Common;
    public class GetHeadLampConfigResponseDto:ApiErrorMessage
    {
        public string? NumHeadLamp { get; set; }
        public string? MainBeamAdjustable { get; set; }
        public string? HeadlightMeasuringMethod { get; set; }
        public string? SteeringPosition { get; set; }
        public bool? LeftMainLamp { get; set; }
        public bool? RightMainLamp { get; set; }
    }
}
