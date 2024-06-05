namespace VICSS.Service.Models.Appointment
{
    using System.Text.Json.Serialization;
    public class CreateAppointmentDto
    {
        public CreateAppointmentDto()
        {

        }


        [JsonPropertyName("userId")]
        public string UserId { get; set; }

        [JsonPropertyName("centreId")]
        public string CentreId { get; set; }

        [JsonPropertyName("primaryExamCodeId")]
        public List<string> PrimaryExamCodeId { get; set; }

        [JsonPropertyName("vehicleId")]
        public string VehicleId { get; set; }

        [JsonPropertyName("laneId")]
        public string LaneId { get; set; }

        [JsonPropertyName("laneTimeSlotId")]
        public string LaneTimeSlotId { get; set; }

        [JsonPropertyName("allowOverbookIndicator")]
        public string AllowOverbookIndicator { get; set; }

        [JsonPropertyName("freeOfChargeIndicator")]
        public string FreeOfChargeIndicator { get; set; }

        [JsonPropertyName("examFee")]
        public int ExamFee { get; set; }

        [JsonPropertyName("appointmentContactName")]
        public string? AppointmentContactName { get; set; }

        [JsonPropertyName("appointmentContactNumber")]
        public string? AppointmentContactNumber { get; set; }

        [JsonPropertyName("appointmentRemark")]
        public string? AppointmentRemark { get; set; }

        [JsonPropertyName("appointmentCreateSystemId")]
        public string AppointmentCreateSystemId { get; set; }


        [JsonPropertyName("inspectionDateTime")]
        public DateTime InspectionDateTime { get; set; }
    }
}
