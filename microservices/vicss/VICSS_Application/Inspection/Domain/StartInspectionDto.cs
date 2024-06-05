namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class StartInspectionDto : IRequest<StartInspectionDtoResponse>
    {
        public StartInspectionDto() { }
        public string? UserID { get; set; }
        public string AppointmentNumber { get; set; }
        public string LaneId { get; set; }
        public string StationId { get; set; }
        public string? InspectionID { get; set; }
    }
}
