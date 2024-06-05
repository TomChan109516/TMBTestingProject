namespace VICSS.Service.ConfigurationService.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Configuration;
    using VICSS.Service.ConfigurationService.Domain;
    using VICSS.Shared.Models.ConfigurationService;

    public class AddUpdateSystemConfigMapper : Profile
    {
        public AddUpdateSystemConfigMapper()
        {
            CreateMap<SystemConfigDto, SystemConfig>()
                .ForMember(dest => dest.SystemConfigId , opt => opt.MapFrom(src => src.SystemConfigId))
                .ForMember(dest => dest.SystemConfigText, opt => opt.MapFrom(src => src.SystemConfigText))
                .ForMember(dest => dest.SystemConfigDescription, opt => opt.MapFrom(src => src.SystemConfigDescription))
                ;            
        }
    }
}
