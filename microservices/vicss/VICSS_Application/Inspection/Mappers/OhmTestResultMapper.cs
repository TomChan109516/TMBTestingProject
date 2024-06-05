namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Inspection.Domain;

    public class OhmTestResultMapper:Profile
    {
        public OhmTestResultMapper()
        {
            CreateMap<OhmTestResultDto, TestResultHeight>();
        }
    }
}
