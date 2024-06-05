namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using Inspection.Domain;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;

    public class HeadLampTestConfigMapper: Profile
    {
        public HeadLampTestConfigMapper()
        {
            CreateMap<HeadLampTestConfigRequestDto, TestConfigHeadLamp>();
        }
    }
}
