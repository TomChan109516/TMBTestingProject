namespace VICSS.Service.LaneConfiguration.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Shared.Models.LaneConfiguration;

    public class SearchLaneMapper : Profile
    {
        public SearchLaneMapper()
        {
            CreateMap<Lane, SearchLaneDto>()
                .ForMember(dest => dest.LaneType, opt => opt.MapFrom(src => src.LaneType))
                .ForMember(dest => dest.LaneName, opt => opt.MapFrom(src => src.LaneName))
                .ForMember(dest => dest.LaneDescription, opt => opt.MapFrom(src => src.LaneDescription))
                .ForMember(dest => dest.LaneStatus, opt => opt.MapFrom(src => src.LaneStatus));
                
                
        }
    }
}
