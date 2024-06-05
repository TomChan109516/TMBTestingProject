namespace VICSS.Service.Vehicle.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Shared.Models.Vehicle;

    public class GetVehicleMakeMapper : Profile
    {
        public GetVehicleMakeMapper() 
        { 
            CreateMap<VehicleMake , VehicleMakeDto> ()
                .ForMember(dest => dest.MakeId, opt => opt.MapFrom(src => src.MakeId))
                .ForMember(dest=>dest.VehicleMakeId, opt => opt.MapFrom(src => src.VehicleMakeId))
                .ForMember (dest=>dest.VehicleMakeName,opt => opt.MapFrom (src => src.VehicleMakeName))
                ;
        }
    }
}
