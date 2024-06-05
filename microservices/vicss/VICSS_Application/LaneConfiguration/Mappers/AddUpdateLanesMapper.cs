namespace VICSS.Service.LaneConfiguration.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Shared.Models.LaneConfiguration;

    public class AddUpdateLanesMapper : Profile
    {
        public AddUpdateLanesMapper()
        {
            CreateMap<AddUpdateLaneDto, Lane>();
        }

    }
}
