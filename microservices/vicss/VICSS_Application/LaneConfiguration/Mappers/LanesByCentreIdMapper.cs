namespace VICSS.Service.LaneConfiguration.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Shared.Models.LaneConfiguration;

    public class LanesByCentreIdMapper : Profile
    {
        public LanesByCentreIdMapper()
        {
            CreateMap<Lane, LanesByCenterIdDto>()
                .ForMember(dest => dest.LaneId, opt => opt.MapFrom(src => src.LaneId))
                .ForMember(dest => dest.CentreId, opt => opt.MapFrom(src => src.CentreId))
                .ForMember(dest => dest.LaneName, opt => opt.MapFrom(src => src.LaneName))
                .ForMember(dest => dest.LaneType, opt => opt.MapFrom(src => src.LaneType))
                .ForMember(dest => dest.laneTimeSlots , opt => opt.MapFrom(src => src.LaneTimeslot))
                .ForMember(dest => dest.VirtualLaneId, opt => opt.MapFrom(src => src.VirtualLaneId))
                .ForMember(dest => dest.LaneStatus, opt => opt.MapFrom(src => src.LaneStatus))
                ;

            CreateMap<LaneTimeslot, LaneTimeSlotDto>()
                .ForMember(dest => dest.LaneId, opt => opt.MapFrom(src => src.LaneId))
                .ForMember(dest => dest.TimeSlotId, opt => opt.MapFrom(src => src.TimeSlotId))
                .ForMember(dest => dest.TimeSlotBegin, opt => opt.MapFrom(src => src.TimeSlotBegin))
                .ForMember(dest => dest.TimeSlotEnd, opt => opt.MapFrom(src => src.TimeSlotEnd))
                .ForMember(dest => dest.ExamScheduleDescription, opt => opt.MapFrom(src => src.ExamScheduleDescription))                
                ;
        }
    }
}
