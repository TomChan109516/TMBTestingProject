namespace VICSS.Service.CentreManagement.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Centre;
    using VICSS.Shared.Models.Centre;

    public class GetCentresMapper : Profile
    {
        public GetCentresMapper()
        {
            CreateMap<Centre, CentresDto>()
                .ForMember(dest => dest.CentreId, opt => opt.MapFrom(src => src.CentreId))
                .ForMember(dest => dest.CentreCode, opt => opt.MapFrom(src => src.CentreCode))
                .ForMember(dest => dest.CentreName, opt => opt.MapFrom(src => src.CentreName))
                .ForMember(dest => dest.CentreHolidaysDto, opt => opt.MapFrom(src => src.CentreHolidays))
                                .ForMember(dest => dest.CentreMondayOprtnTimeStart, opt => opt.MapFrom(src => ConvertTime(src.CentreMondayOprtnTimeStart)))
                .ForMember(dest => dest.CentreMondayOprtnTimeEnd, opt => opt.MapFrom(src => ConvertTime(src.CentreMondayOprtnTimeEnd)))
                .ForMember(dest => dest.CentreTuesdayOprtnTimeStart, opt => opt.MapFrom(src => ConvertTime(src.CentreTuesdayOprtnTimeStart)))
                .ForMember(dest => dest.CentreTuesdayOprtnTimeEnd, opt => opt.MapFrom(src => ConvertTime(src.CentreTuesdayOprtnTimeEnd)))
                .ForMember(dest => dest.CentreWednesdayOprtnTimeStart, opt => opt.MapFrom(src => ConvertTime(src.CentreWednesdayOprtnTimeStart)))
                .ForMember(dest => dest.CentreWednesdayOprtnTimeEnd, opt => opt.MapFrom(src => ConvertTime(src.CentreWednesdayOprtnTimeEnd)))
                .ForMember(dest => dest.CentreThrusdayOprtnTimeStart, opt => opt.MapFrom(src => ConvertTime(src.CentreThrusdayOprtnTimeStart)))
                .ForMember(dest => dest.CentreThrusdayOprtnTimeEnd, opt => opt.MapFrom(src => ConvertTime(src.CentreThrusdayOprtnTimeEnd)))
                .ForMember(dest => dest.CentreFridayOprtnTimeStart, opt => opt.MapFrom(src => ConvertTime(src.CentreFridayOprtnTimeStart)))
                .ForMember(dest => dest.CentreFridayOprtnTimeEnd, opt => opt.MapFrom(src => ConvertTime(src.CentreFridayOprtnTimeEnd)))
                .ForMember(dest => dest.CentreSaturdayOprtnTimeStart, opt => opt.MapFrom(src => ConvertTime(src.CentreSaturdayOprtnTimeStart)))
                .ForMember(dest => dest.CentreSaturdayOprtnTimeEnd, opt => opt.MapFrom(src => ConvertTime(src.CentreSaturdayOprtnTimeEnd)))
                .ForMember(dest => dest.CentreSundayOprtnTimeStart, opt => opt.MapFrom(src => ConvertTime(src.CentreSundayOprtnTimeStart)))
                .ForMember(dest => dest.CentreSundayOprtnTimeEnd, opt => opt.MapFrom(src => ConvertTime(src.CentreSundayOprtnTimeEnd)))
                ;
            CreateMap<CentreHoliday, CentresHolidayDto>()
                 .ForMember(dest => dest.CentreHolidayId, opt => opt.MapFrom(src => src.CentreHolidayId))
                 .ForMember(dest => dest.HolidayDate, opt => opt.MapFrom(src => src.HolidayDate))
                 .ForMember(dest => dest.HolidayName, opt => opt.MapFrom(src => src.HolidayName))
                 .ForMember(dest => dest.AllDayHoliday, opt => opt.MapFrom(src => src.AllDayHoliday))
                 .ForMember(dest => dest.HolidayStartTime, opt => opt.MapFrom(src => src.HolidayStartTime))
                 .ForMember(dest => dest.HolidayEndTime, opt => opt.MapFrom(src => src.HolidayEndTime))
               ;
        }
        private string? ConvertTime(string time)
        {
            return time != null && time.Length >= 4 ? time.Insert(2, ":") : time;
        }
    }
}
