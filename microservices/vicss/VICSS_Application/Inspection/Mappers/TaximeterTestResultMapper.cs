namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using Inspection.Domain;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    public class TaximeterTestResultMapper : Profile
    {
        public TaximeterTestResultMapper()
        {
            CreateMap<TaximeterTestResultDto, TestResultTaximeter>();
        }
    }
}