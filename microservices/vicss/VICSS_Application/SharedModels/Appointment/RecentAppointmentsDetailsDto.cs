namespace VICSS.Service.Models.Appointment
{
    using System.Text.Json.Serialization;

    public class RecentAppointmentsDetailsDto
    {
        public RecentAppointmentsDetailsDto() { }

        [JsonPropertyName("vehicleId")]
        public string VehicleId { get; set; }

        [JsonPropertyName("appointmentDate")]
        public DateTime? AppointmentCreateDateTime { get; set; }

        [JsonPropertyName("exam")]
        public string? ExamCode { get; set; }

        [JsonPropertyName("centre")]
        public string? CentreCode { get; set; }

        [JsonPropertyName("result")]
        public char InspectionEndResult { get; set; }

        [JsonPropertyName("freeOfCharge")]
        public char NoFeeAppointmentIndicator { get; set; }
    }
}
