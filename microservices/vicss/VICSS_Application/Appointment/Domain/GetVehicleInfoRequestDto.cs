namespace VICSS.Service.Appointment.Domain
{
    using MediatR;
    using VICSS.Service.Models.Vehicle;
    using VICSS.Shared.Models.Vehicle;

    public class GetVehicleInfoRequestDto: IRequest<GetVehicleAndAppointmentDetails>
    {
        public GetVehicleInfoRequestDto(string appointmentNumber)
        {
            AppointmentNumber = appointmentNumber;
        }
        public string AppointmentNumber { get; set; }
    }
}
