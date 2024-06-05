namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Inspection.Domain;

    public class AbortSuspendTestReasonMapper : Profile
    {
        public AbortSuspendTestReasonMapper()
        {
            CreateMap<AbortSuspendTestReason, SearchAbortSuspendTestReasonDto>()
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.ReasonType, opt => opt.MapFrom(src => src.ReasonType))
                .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.Code))
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id));
        }

    }

}