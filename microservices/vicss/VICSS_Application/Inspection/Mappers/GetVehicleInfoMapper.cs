namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using Inspection.Domain;
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
