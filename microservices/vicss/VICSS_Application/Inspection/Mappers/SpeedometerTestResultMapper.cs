namespace VICSSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Inspection.Domain;

    public class SpeedometerTestResultMapper : Profile
    {
        public SpeedometerTestResultMapper()
        {
            CreateMap<SpeedometerTestResultDto, TestResultSpeedometer>();
        }
    }
}
