namespace SCS_Backend_API.DTO
{
    public class AppointmentEnquiryResponseDto
    {
        public long? AppointmentNumber { get; set; }
        public string? CenterCode { get; set; }
        public string? LaneId { get; set; }
        public string? VehicleClassId { get; set; }
        public string? RegMark { get; set; }
        public string? VehicleId { get; set; }
        public string? ChassisNumber { get; set; }
        public string PrimaryExamCode { get; set; }
        public DateTime ExamDate { get; set; }

    }

    public class AppointmentEnquiryResponse : HttpStatusResponse
    {
        public List<AppointmentEnquiryResponseDto>? data { get; set; }
    }
}
