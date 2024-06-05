namespace SCS_Backend_API.DTO
{
    public class AppointmentHistory_AttachmentResponse
    {
        public long AppointmentNumber { get; set; }
        public string ChassisNumber { get; set; }
        public string CentreCode { get; set; }
        public string PrimaryExamCode { get; set; }
        public string LaneId { get; set; }
        public string Result { get; set; }
        public DateTime AppointmentDate { get; set; }
    }
}
