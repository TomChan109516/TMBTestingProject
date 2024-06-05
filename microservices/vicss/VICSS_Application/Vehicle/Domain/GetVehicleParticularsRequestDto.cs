namespace VICSS.Service.Vehicle.Domain
{
    using MediatR;
    using VICSS.Shared.Models.Vehicle;

    public class GetVehicleParticularsRequestDto : IRequest<GetVehicleParticularsResponseDto>
    {
        public GetVehicleParticularsRequestDto(string vehicleId)
        {
            this.vehicleId = vehicleId;
        }
        public string vehicleId { get; set; }
    }
}