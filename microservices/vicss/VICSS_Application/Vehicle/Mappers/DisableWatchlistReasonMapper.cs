namespace Vehicle.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Service.Vehicle.Domain;
    public class DisableWatchlistReasonMapper : Profile
    {
        public DisableWatchlistReasonMapper()
        {
            CreateMap<DisableWatchlistReasonRequestDto, WatchlistReason>();
        }
    }
}
