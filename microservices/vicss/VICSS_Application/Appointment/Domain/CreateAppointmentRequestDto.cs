namespace VICSS.Service.Appointment.Domain
{
    using MediatR;
    using System.Text.Json.Serialization;
    using VICSS.Service.Models.Appointment;

    public class CreateAppointmentRequestDto : IRequest<CreateAppointmentResponseDto>
    {
        public CreateAppointmentRequestDto(CreateAppointmentDto createAppointment)
        {
            this.createAppointmentDto = createAppointment;
        }

        [JsonPropertyName("createAppointment")]
        public CreateAppointmentDto createAppointmentDto { get; set; }
    }
}
