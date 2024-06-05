namespace VICSS.Service.Appointment.Mappers
{
    using AutoMapper;
    using VICSS.Service.Models.Appointment;
    using VICSS.Infrastructure.DataAccess.Entities.Appointment;
    using VICSS.Service.Appointment.Domain;

    public class CreateAppointmentMapper : Profile
    {
        public CreateAppointmentMapper()
        {
            CreateMap<CreateAppointmentRequestDto, Appointment>()
               .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.createAppointmentDto.UserId))
               .ForMember(dest => dest.CentreId, opt => opt.MapFrom(src => src.createAppointmentDto.CentreId))
               .ForMember(dest => dest.InspectionTypeId, opt => opt.MapFrom(src => src.createAppointmentDto.PrimaryExamCodeId))
               .ForMember(dest => dest.VehicleId, opt => opt.MapFrom(src => src.createAppointmentDto.VehicleId))
               .ForMember(dest => dest.LaneId, opt => opt.MapFrom(src => src.createAppointmentDto.LaneId))
               .ForMember(dest => dest.LaneTimeSlotId, opt => opt.MapFrom(src => src.createAppointmentDto.LaneTimeSlotId))
               .ForMember(dest => dest.AllowOverbookIndicator, opt => opt.MapFrom(src => src.createAppointmentDto.AllowOverbookIndicator))
               .ForMember(dest => dest.AppointmentContactName, opt => opt.MapFrom(src => src.createAppointmentDto.AppointmentContactName))
               .ForMember(dest => dest.AppointmentContactNumber, opt => opt.MapFrom(src => src.createAppointmentDto.AppointmentContactNumber))
               .ForMember(dest => dest.AppointmentRemark, opt => opt.MapFrom(src => src.createAppointmentDto.AppointmentRemark))
               .ForMember(dest => dest.AppointmentCreateSystemId, opt => opt.MapFrom(src => src.createAppointmentDto.AppointmentCreateSystemId))
            ;

            CreateMap<Appointment, AppointmentDetailsResponseDto>()
               .ForMember(dest => dest.AppointmentId, opt => opt.MapFrom(src => src.AppointmentId))
               .ForMember(dest => dest.AppointmentContactName, opt => opt.MapFrom(src => src.AppointmentContactName))
               .ForMember(dest => dest.AppointmentContactNumber, opt => opt.MapFrom(src => src.AppointmentContactNumber))
               .ForMember(dest => dest.AppointmentRemark, opt => opt.MapFrom(src => src.AppointmentRemark))
               .ForMember(dest => dest.ExternalAppointmentNumber, opt => opt.MapFrom(src => src.ExternalAppointmentNumber))
               .ForMember(dest => dest.SecurityCode, opt => opt.MapFrom(src => src.SecurityCode))
               .ForMember(dest => dest.AppointmentCreateDateTime, opt => opt.MapFrom(src => src.AppointmentCreateDateTime))
               .ForMember(dest => dest.AppointmentCreateSystemId, opt => opt.MapFrom(src => src.AppointmentCreateSystemId))
               .ForMember(dest => dest.LastUpdate, opt => opt.MapFrom(src => src.LastRecordTransactionDateTime))
               .ForMember(dest => dest.AppointmentStatus, opt => opt.MapFrom(src => src.AppointmentStatus))
               .ForMember(dest => dest.FeeWaiver, opt => opt.MapFrom(src => src.Payment.InspectionFeeWaiveActiveIndicator))
               .ForMember(dest => dest.FreeOfChargeIndicator, opt => opt.MapFrom(src => src.Payment.NoFeeAppointmentIndicator))
               .ForMember(dest => dest.ExamFee, opt => opt.MapFrom(src => src.Payment.PaymentAmount));
            ;
        }
    }
}