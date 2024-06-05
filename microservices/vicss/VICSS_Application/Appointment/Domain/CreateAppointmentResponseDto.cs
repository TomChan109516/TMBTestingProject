namespace VICSS.Service.Appointment.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Service.Models.Appointment;
    using VICSS.Shared.Models.Common;

    public class CreateAppointmentResponseDto : ApiErrorMessage
    {
        public CreateAppointmentResponseDto() 
        {
            AppointmentDetailsResponseDtos = new AppointmentDetailsResponseDto();
        }

        [JsonPropertyName("appointmentDetails")]
        public AppointmentDetailsResponseDto AppointmentDetailsResponseDtos { get; set; }
    }
}
