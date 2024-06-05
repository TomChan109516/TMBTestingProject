namespace VICSS.Service.Appointment.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Appointment;
    using VICSS.Service.Models.Appointment;

    public class GetAppointmentMapper : Profile
    {
        public GetAppointmentMapper()
        {
            CreateMap<Appointment, RecentAppointmentsDetailsDto>()
               .ForMember(dest => dest.VehicleId, opt => opt.MapFrom(src => src.VehicleId))
               .ForMember(dest=> dest.AppointmentCreateDateTime,opt=>opt.MapFrom(src=>src.AppointmentCreateDateTime))
               .ForMember(dest=>dest.NoFeeAppointmentIndicator,opt=>opt.MapFrom(src=>src.Payment.NoFeeAppointmentIndicator));
        }
    }
}
