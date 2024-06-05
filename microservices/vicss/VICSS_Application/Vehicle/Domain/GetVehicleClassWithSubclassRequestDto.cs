using MediatR;

namespace VICSS.Service.Vehicle.Domain
{
    public class GetVehicleClassWithSubclassRequestDto : IRequest<GetVehicleClassWithSubclassResponseDto>
    {

        public GetVehicleClassWithSubclassRequestDto(string status) 
        {
            this.status = status;
        }
        public string status {  get; set; }
    }
}
