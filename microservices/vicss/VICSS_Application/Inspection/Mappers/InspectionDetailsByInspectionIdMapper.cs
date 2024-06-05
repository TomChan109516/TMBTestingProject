namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Shared.Models.Inspection;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;

    public class InspectionDetailsByInspectionIdMapper : Profile
    {
        public InspectionDetailsByInspectionIdMapper() 
        {
            CreateMap<Inspection, InspectionDetailsDto>()
                .ForMember(dest => dest.InspectionId, opt => opt.MapFrom(src => src.InspectionId))
                .ForMember(dest => dest.inspectionExamCodeDtos, opt => opt.MapFrom(src => src.InspectionExamCodes))
                .ForMember(dest => dest.InspectionResult, opt => opt.MapFrom(src => src.InspectionEndResult))
                .ForMember(dest => dest.InspectionStatus, opt => opt.MapFrom(src => src.InspectionStatus))
                ;

            CreateMap<InspectionExamCode, InspectionExamCodeDto>()
                .ForMember(dest => dest.InspectionExamCode, opt => opt.MapFrom(src => src.ExamCode))
                ;

        }
    }
}
