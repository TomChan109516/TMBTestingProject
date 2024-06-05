namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using Inspection.Domain;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    public class BrakeTestResultMapper : Profile
    {
        public BrakeTestResultMapper()
        {
            CreateMap<SaveBrakeTestResultDto, TestResultBrake>();
        }
    }
}
