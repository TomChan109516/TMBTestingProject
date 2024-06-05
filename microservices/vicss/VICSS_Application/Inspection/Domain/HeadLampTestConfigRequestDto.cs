namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class HeadLampTestConfigRequestDto:IRequest<HeadLampTestConfigResponseDto>
    {
        public string InspectionId { get; set; }
        public string NumHeadLamp { get; set; }
        public string MainBeamAdjustable { get; set; }
        public string HeadlightMeasuringMethod { get; set; }
        public string SteeringPosition { get; set; }
        public bool LeftMainLamp { get; set; }
        public bool RightMainLamp { get; set; }
        public string UserId { get; set; }
    }
}
