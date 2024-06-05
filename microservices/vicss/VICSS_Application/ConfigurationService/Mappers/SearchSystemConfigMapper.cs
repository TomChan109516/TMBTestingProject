namespace VICSS.Service.ConfigurationService.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Configuration;
    using VICSS.Shared.Models.ConfigurationService;

    public class SearchSystemConfigMapper : Profile
    {
        public SearchSystemConfigMapper() 
        {
            CreateMap<SystemConfig, SystemConfigDto>()
                .ForMember(dest => dest.Id , opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.SystemConfigId, opt => opt.MapFrom(src => src.SystemConfigId))
                .ForMember(dest => dest.SystemConfigText, opt => opt.MapFrom(src => src.SystemConfigText))
                .ForMember(dest => dest.SystemConfigDescription, opt => opt.MapFrom(src => src.SystemConfigDescription))
                .ForMember(dest => dest.LastUpdatedTime, opt => opt.MapFrom(src => src.LastRecordTransactionDateTime))
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.LastRecordTransactionUserId))
                ;            
        }
    }
}
