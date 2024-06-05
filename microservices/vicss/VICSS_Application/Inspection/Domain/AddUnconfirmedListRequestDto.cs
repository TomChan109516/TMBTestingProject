namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class AddUnconfirmedListRequestDto:IRequest<AddUnconfirmedListResponseDto>
    {
        public string AppointmentId { get; set; }
        public string LaneId { get; set; }
        public string VehicleId { get; set; }
    }

}