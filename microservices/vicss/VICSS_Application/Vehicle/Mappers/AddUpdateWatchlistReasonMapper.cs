namespace Vehicle.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Shared.Models.Vehicle;

    public class AddUpdateWatchlistReasonMapper : Profile
    {
        public AddUpdateWatchlistReasonMapper() 
        {
            CreateMap<AddUpdateWatchlistReasonDto, WatchlistReason>();
        }

    }
}
