namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;

    public class ExamCodeMapper : Profile
    {
        public ExamCodeMapper()
        {
            CreateMap<InspectionType, ExamCodeDto>()
                 .ForMember(dest => dest.InspectionTypeId, opt => opt.MapFrom(src => src.InspectionTypeId))
                 .ForMember(dest => dest.ExamCode, opt => opt.MapFrom(src => src.ExamCode))
                 .ForMember(dest => dest.ExamClass, opt => opt.MapFrom(src => src.ExamClass))
                 .ForMember(dest => dest.InspectionTypeName, opt => opt.MapFrom(src => src.InspectionTypeName))
                 .ForMember(dest => dest.InspectionTypeDescription, opt => opt.MapFrom(src => src.InspectionTypeDescription))
                 .ForMember(dest => dest.ExamFee , opt => opt.MapFrom(src => CommonConstants.ExamFees))
                 .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.LastRecordTransactionUserId))
                 ;
        }
    }
}
