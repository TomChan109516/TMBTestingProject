namespace Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Inspection.Domain;
    public class UndercarriageTestResultMapper : Profile
    {
        public UndercarriageTestResultMapper()
        {
            CreateMap<UndercarriageTestResultDto, TestResultUndercarriage>();
        }
    }
}
