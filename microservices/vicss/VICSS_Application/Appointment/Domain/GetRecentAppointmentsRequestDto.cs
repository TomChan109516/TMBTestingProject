namespace VICSS.Service.Appointment.Domain
{
    using MediatR;
    public class GetRecentAppointmentsRequestDto : IRequest<GetRecentAppointmentsResponseDto>
    {
        public GetRecentAppointmentsRequestDto(string vehicleId)
        {
            this.vehicleId = vehicleId;
        }
        public string vehicleId { get; set; }
    }
}