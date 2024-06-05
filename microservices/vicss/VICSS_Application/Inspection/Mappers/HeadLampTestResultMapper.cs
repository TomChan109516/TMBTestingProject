namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using Inspection.Domain;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;

    public class HeadLampTestResultMapper : Profile
    {
        public HeadLampTestResultMapper()
        {
            CreateMap<SaveHeadLampTestResultDto, TestResultHeadLamp>();
        }
    }
}
