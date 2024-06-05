namespace VICSS.Service.Vehicle.Domain
{
    using MediatR;

    public class GetVehicleMakeRequestDto : IRequest<GetVehicleMakeResponseDto>
    {

        public GetVehicleMakeRequestDto(string status) 
        { 
            this.status = status;
        }

        public string status { get; set; }
    }
}
