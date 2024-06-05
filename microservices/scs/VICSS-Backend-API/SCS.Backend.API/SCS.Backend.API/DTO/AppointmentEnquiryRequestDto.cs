namespace SCS_Backend_API.DTO
{
    public class AppointmentEnquiryRequestDto 
    {
        public long? AppointmentNumber { get; set; }//
        public string? CenterCode { get; set; }//
        public string? LaneId { get; set; }
        public string? VehicleClassId { get; set; }
        public string? RegMark { get; set; }//
        public string? VehicleId { get; set; }//
        public string? ChassisNumber { get; set; }//
        public string? AppointmentStatus { get; set; }//
        public string? BookingChannelId { get; set; }//
        public string? DocNumber { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

    }
}