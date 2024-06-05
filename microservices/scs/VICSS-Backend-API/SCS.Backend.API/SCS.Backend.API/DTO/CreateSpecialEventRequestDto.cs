namespace SCS_Backend_API.DTO
{
    public class CreateSpecialEventRequestDto
    {
        public string EventId { get; set; }
        public string CTR_Id { get; set; }
        public string spcl_event_description { get; set; }
        public DateTime? spcl_event_start_date { get; set; }
        public DateTime? spcl_event_start_time { get; set; }
        public DateTime? spcl_event_end_date { get; set; }
        public DateTime? spcl_event_end_time { get; set; }
        public DateTime? appt_rschd_bgn_date { get; set; }
        public DateTime? appt_rschd_end_date { get; set; }
    }
    public class CreateSpecialEventDto
    {
        public DateTime AppointmentDate { get; set; }
        public string Time { get; set; }
        public string LaneId { get; set; } = string.Empty;
        public string? ToDate { get; set; } = string.Empty;
        public string? ToTime { get; set; } = string.Empty;
        public string PrimaryExamCode { get; set; } = string.Empty;
        public string VehicleId { get; set; } = string.Empty;
        public string RegMark { get; set; } = string.Empty;
        public string ChassisNumber { get; set; } = string.Empty;
        public string VehicleClassId { get; set; } = string.Empty;
        public long AppointmentNumber { get; set; }
        public string Result { get; set; } = string.Empty;
    }
    public class CreateSpecialEventResponseDto : HttpStatusResponse
    {
        public List<CreateSpecialEventDto>? data { get; set; }
    }
}
