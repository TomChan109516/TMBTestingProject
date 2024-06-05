using AutoMapper;
using VICSS.Infrastructure.DataAccess.Entities.Inspection;
using VICSS.Service.Inspection.Domain;

namespace Inspection.Mappers
{
    public class TestResultMapper : Profile
    {
        public TestResultMapper()
        {
            CreateMap<TestDto, Test>();
        }
    }
}
