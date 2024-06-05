namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using Inspection.Domain;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    public class AxleWeightTestResultMapper : Profile
    {
        public AxleWeightTestResultMapper()
        {
            CreateMap<AxleWeightTestResultDto, TestResultAxleWeight>();
        }
    }
}
