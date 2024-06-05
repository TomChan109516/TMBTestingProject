namespace VICSS.Service.Vehicle.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Shared.Models.Vehicle;

    public class VehicleParticularMapper : Profile
    {
        public VehicleParticularMapper()
        {
            CreateMap<Vehicle, VehicleParticularDetailsByVehicleIdDto>()
                .ForMember(dest => dest.VehicleClassCode, opt => opt.MapFrom(src => src.VehicleClass.VehicleClassCode))
                .ForMember(dest => dest.VehicleMakeId, opt => opt.MapFrom(src => src.VehicleMake.VehicleMakeId))
                .ForMember(dest => dest.VehicleMakeName, opt => opt.MapFrom(src => src.VehicleMake.VehicleMakeName))
                .ForMember(dest => dest.VehicleMakeDescription, opt => opt.MapFrom(src => src.VehicleMake.Description))
                .ForMember(dest => dest.VehicleModelCode, opt => opt.MapFrom(src => src.VehicleModel.VehicleModelCode))
                .ForMember(dest => dest.VehicleModelName, opt => opt.MapFrom(src => src.VehicleModel.VehicleModelName))
                .ForMember(dest => dest.VehicleModelDescription, opt => opt.MapFrom(src => src.VehicleModel.Description))
                .ForMember(dest => dest.CountryName, opt => opt.MapFrom(src => src.Country.CountryName))
                .ForMember(dest => dest.CountryCode, opt => opt.MapFrom(src => src.Country.CountryCode))
                .ForMember(dest => dest.VehicleBodyTypeName, opt => opt.MapFrom(src => src.VehicleBodyType.VehicleBodyTypeName))
                .ForMember(dest => dest.VehicleBodyTypeCode, opt => opt.MapFrom(src => src.VehicleBodyType.VehicleBodyTypeCode))
                .ForMember(dest => dest.VehicleEngineTypeName, opt => opt.MapFrom(src => src.VehicleEngineType.VehicleEngineTypeName))
                .ForMember(dest => dest.VehicleEngineTypeCode, opt => opt.MapFrom(src => src.VehicleEngineType.VehicleEngineTypeCode))
                .ForMember(dest => dest.VehicleCancelReasonCode, opt => opt.MapFrom(src => src.VehicleCancelReason.VehicleCancelReasonCode))
                .ForMember(dest => dest.VehicleCancelReasonName, opt => opt.MapFrom(src => src.VehicleCancelReason.VehicleCancelReasonName))
                .ForMember(dest => dest.VehicleStatusCode, opt => opt.MapFrom(src => src.VehicleStatus.VehicleStatusCode))
                .ForMember(dest => dest.VehicleStatusName, opt => opt.MapFrom(src => src.VehicleStatus.VehicleStatusName))
                ;
        }
    }
}

