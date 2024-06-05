namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using Inspection.Domain;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;

    public class SkipTestReasonMapper : Profile
    {
        public SkipTestReasonMapper()
        {
            CreateMap<SkipTestReason, SkipTestReasonDto>();

            CreateMap<SkipTestReason, SearchSkipTestReasonDto>()
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.TestType, opt => opt.MapFrom(src => src.TestType))
                .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.Code))
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id));

        }
    }
}
