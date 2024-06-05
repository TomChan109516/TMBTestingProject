namespace VICSS.Service.Vehicle.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Service.Models.Vehicle;

    public class GetVehicleInfoMapper : Profile
    {
        public GetVehicleInfoMapper()
        {
            CreateMap<Vehicle, GetVehicleInfoResponseDto>();
        }
    }
}
