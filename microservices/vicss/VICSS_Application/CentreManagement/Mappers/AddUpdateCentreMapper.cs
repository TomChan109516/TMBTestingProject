namespace VICSS.Service.CentreManagement.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Centre;
    using VICSS.Shared.Models.Centre;
    public class AddUpdateCentreMapper : Profile
    {
        public AddUpdateCentreMapper()
        {
            CreateMap<AddUpdateCentreDto, Centre>()
                .ForMember(dest => dest.CentreId, opt => opt.MapFrom(src => src.CentreId))
                .ForMember(dest => dest.CentreCode, opt => opt.MapFrom(src => src.CentreCode))
                .ForMember(dest => dest.CentreName, opt => opt.MapFrom(src => src.CentreName))
                .ForMember(dest => dest.CentreAddress, opt => opt.MapFrom(src => src.CentreAddress))
                .ForMember(dest => dest.CentreChineseAddress, opt => opt.MapFrom(src => src.CentreChineseAddress))
                .ForMember(dest => dest.CentrePhone1, opt => opt.MapFrom(src => src.CentrePhone1))
                .ForMember(dest => dest.CentrePhone2, opt => opt.MapFrom(src => src.CentrePhone2))
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
                .ForMember(dest => dest.CentreContact1, opt => opt.MapFrom(src => src.CentreContact1))
                .ForMember(dest => dest.CentreContact2, opt => opt.MapFrom(src => src.CentreContact2))
                .ForMember(dest => dest.FaxNumber, opt => opt.MapFrom(src => src.FaxNumber))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.CentreMondayActiveIndicator, opt => opt.MapFrom(src => src.CentreMondayActiveIndicator))
                .ForMember(dest => dest.CentreTuesdayActiveIndicator, opt => opt.MapFrom(src => src.CentreTuesdayActiveIndicator))
                .ForMember(dest => dest.CentreWednesdayActiveIndicator, opt => opt.MapFrom(src => src.CentreWednesdayActiveIndicator))
                .ForMember(dest => dest.CentreThursdayActiveIndicator, opt => opt.MapFrom(src => src.CentreThursdayActiveIndicator))
                .ForMember(dest => dest.CentreFriayActiveIndicator, opt => opt.MapFrom(src => src.CentreFriayActiveIndicator))
                .ForMember(dest => dest.CentreSaturdayActiveIndicator, opt => opt.MapFrom(src => src.CentreSaturdayActiveIndicator))
                .ForMember(dest => dest.CentreSundayActiveIndicator, opt => opt.MapFrom(src => src.CentreSundayActiveIndicator))
                .ForMember(dest => dest.LastRecordTransactionUserId, opt => opt.MapFrom(src => src.LastRecordTransactionUserId))
                ;
        }

        private string? ConvertTime(string time)
        {
            return time != null && time.Contains(":") ? time.Replace(":", "") : time;
        }
    }
}

