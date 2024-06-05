namespace VICSS.Service.Inspection.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Inspection.Domain;
    public class AddUnconfirmedListMapper : Profile
    {
        public AddUnconfirmedListMapper()
        {
            CreateMap<AddUnconfirmedListRequestDto,UnconfirmedList>();
        }
    }
}
