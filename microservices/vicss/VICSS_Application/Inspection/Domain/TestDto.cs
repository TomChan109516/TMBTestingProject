namespace VICSS.Service.Inspection.Domain
{
    public class TestDto
    {
        public string InspectionId { get; set; }
        public string UserId { get; set; }
        public string StationId { get; set; }
        public string LaneId { get; set; }
        public string? Mode { get; set; }
        public int? Attempt { get; set; }
        public DateTime? TestStartTime { get; set; }
        public DateTime? TestEndTime { get; set; }
        public string? SkipTestFollowUpAction { get; set; }
        public string? AbortSuspendTestReasonId { get; set; }
        public string? AbortTestRemark { get; set; }
        public string? Remark { get; set; }
        public string? AppointmentId { get; set; }
    }
}
