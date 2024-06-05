namespace VICSS.Service.Vehicle.Domain
{
    using MediatR;

    public class SearchRegMarkRequestDto : IRequest<SearchRegMarkResponseDto>
    {
        public string? VehicleRegMarkNumber { get; set; }
    }
}
