namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Inspection.Domain;
    public class GetUnconfirmedListMapper:Profile
    {
        public GetUnconfirmedListMapper()
        {
            CreateMap<UnconfirmedList,UnconfirmedListDto>();
        }
    }
}
