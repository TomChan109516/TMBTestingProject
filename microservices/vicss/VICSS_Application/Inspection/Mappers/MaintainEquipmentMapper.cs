
namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Inspection.Domain;
    public class MaintainEquipmentMapper : Profile
    {
        public MaintainEquipmentMapper()
        {
            CreateMap<MaintainEquipmentRequestDto, Equipment>();
            CreateMap<Equipment, SearchMaintainEquipmentDataDto>()
                .ForMember(dest => dest.StationId, opt => opt.MapFrom(src => src.Station.StationName));
            CreateMap<Equipment, GetByIdMaintainEquipmentResponseDto>()
                .ForMember(dest => dest.StationId, opt => opt.MapFrom(src => src.Station.StationName));

        }
    }
}
