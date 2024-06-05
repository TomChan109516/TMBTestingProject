namespace VICSS.Service.Vehicle.Domain
{
    using MediatR;
    using VICSS.Service.Models.Vehicle;

    public class GetVehicleInfoRequestDto : IRequest<GetVehicleInfoResponseDto>
    {
        public GetVehicleInfoRequestDto()
        {
        }
        public string vehicleId { get; set; }
    }
}
