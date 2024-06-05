namespace VICSS.Service.Vehicle.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Service.Vehicle.Domain;
    using VICSS.Shared.Models.Common;

    public class SearchVehicleMapper : Profile
    {
        public SearchVehicleMapper()
        {
            CreateMap<Vehicle, SearchVehicleDto>()
                .ForMember(dest => dest.VehicleRecordTypeCode , opt => opt.MapFrom(src => src.VehicleRecordTypeCode))
                .ForMember(dest => dest.VehicleClassCode, opt => opt.MapFrom(src => src.VehicleClass.VehicleClassCode))
                .ForMember(dest => dest.VehicleValidId , opt => opt.MapFrom(src => src.VehicleValidId))
                .ForMember(dest => dest.VehicleRegMarkNumber , opt => opt.MapFrom(src => src.VehicleRegMarkNumber))
                .ForMember(dest => dest.VehicleChasisNumber , opt => opt.MapFrom(src => src.VehicleChasisNumber))
                .ForMember(dest => dest.VehicleMakeId , opt => opt.MapFrom(src => src.VehicleMake.VehicleMakeId))
                .ForMember(dest => dest.CERefNumber , opt => opt.MapFrom(src => src.CERefNumber))
                .ForMember(dest => dest.VehicleRegistrationDocumentTransactionNumber , opt => opt.MapFrom(src => src.VehicleRegistrationDocumentTransactionNumber))
                .ForMember(dest => dest.VehicleTypeApprovalNumber , opt => opt.MapFrom(src => src.VehicleTypeApprovalNumber))
                .ForMember(dest => dest.MasterChild , opt => opt.MapFrom(src => CommonConstants.NotApplicable))
                ;
        }
    }
}
