namespace VICSS.Service.LaneConfiguration.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccesss.Entities.LaneConfiguration;
    using VICSS.Shared.Models.LaneConfiguration;

    public class GetExamsByCentreMapper : Profile
    {
        public GetExamsByCentreMapper() 
        {
            CreateMap<LaneAvailInspType, ExamCodeByLaneIdDto>()
                .ForMember(dest => dest.LaneAvailInspTypeId, opt => opt.MapFrom(src => src.LaneAvailInspTypeId))
                .ForMember(dest => dest.LaneId, opt => opt.MapFrom(src => src.LaneId))
                .ForMember(dest => dest.InspectionTypeId, opt => opt.MapFrom(src => src.InspectionTypeId))
                ;
        }
    }
}
