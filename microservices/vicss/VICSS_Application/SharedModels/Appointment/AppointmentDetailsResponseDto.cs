namespace VICSS.Service.Models.Appointment
{
    using System.Text.Json.Serialization;
    public class AppointmentDetailsResponseDto
    {
        public  AppointmentDetailsResponseDto()
        {

        }

        [JsonPropertyName("appointmentId")]
        public string AppointmentId { get; set; }

        [JsonPropertyName("appointmentNumber")]
        public string ExternalAppointmentNumber { get; set; }

        [JsonPropertyName("appointmentCreateDateTime")]
        public DateTime AppointmentCreateDateTime { get; set; }

        [JsonPropertyName("securityCode")]
        public string SecurityCode { get; set; }

        [JsonPropertyName("appointmentCreateSystemId")]
        public string AppointmentCreateSystemId { get; set; }

        [JsonPropertyName("appointmentStatus")]
        public string AppointmentStatus { get; set; }

        [JsonPropertyName("holdTimeSlot")]
        public string HoldTimeSlot { get; set; }

        [JsonPropertyName("numberOfReschedules")]
        public int NumberOfReschedules { get; set; }

        [JsonPropertyName("centreCode")]
        public string CentreCode { get; set; }

        [JsonPropertyName("lane")]
        public string Lane { get; set; }

        [JsonPropertyName("primaryExamCode")]
        public string PrimaryExamCode { get; set; }

        [JsonPropertyName("supplementaryExamCode")]
        public string SupplementaryExamCode { get; set; }

        [JsonPropertyName("freeOfChargeIndicator")]
        public string FreeOfChargeIndicator { get; set; }

        [JsonPropertyName("examFee")]
        public int ExamFee { get; set; }

        [JsonPropertyName("feeWaiver")]
        public string FeeWaiver { get; set; }

        [JsonPropertyName("inspectionStatus")]
        public string InspectionStatus { get; set; }

        [JsonPropertyName("inspectionResult")]
        public string InspectionResult { get; set; }

        [JsonPropertyName("lastUpdate")]
        public DateTime LastUpdate { get; set; }

        [JsonPropertyName("appointmentContactName")]
        public string AppointmentContactName { get; set; }

        [JsonPropertyName("appointmentContactNumber")]
        public string AppointmentContactNumber { get; set; }

        [JsonPropertyName("appointmentRemark")]
        public string AppointmentRemark { get; set; }

    }
}
