namespace VICSS.Service.Appointment.Domain
{
    using MediatR;
    using System.Text.Json.Serialization;
    public class GetApptDetailsByApptIdRequestDto : IRequest<GetApptDetailsByApptIdResponseDto>
    {
        public GetApptDetailsByApptIdRequestDto(string externalAppointmentNumber)
        {
            this.ExternalAppointmentNumber = externalAppointmentNumber;
        }

        [JsonPropertyName("appointmentNumber")]
        public string ExternalAppointmentNumber { get; set; }
    }
}
