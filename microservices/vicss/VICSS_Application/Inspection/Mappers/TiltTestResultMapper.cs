namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Inspection.Domain;
    public class TiltTestResultMapper : Profile
    {
        public TiltTestResultMapper()
        {
            CreateMap<TiltingTestResultDto, TestResultTilting>();
        }
    }
}