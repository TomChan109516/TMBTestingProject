using AutoMapper;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Models1;
using SixLabors.ImageSharp.ColorSpaces.Companding;

namespace SCS_Backend_API.Helpers
{
    public class MapperConfig : Profile
    {
        public MapperConfig() 
        {
            CreateMap<AppointmentDto, Appointment>();
            CreateMap<Appointment, CreateAppointmentDto>();
            CreateMap<VehicleInformation, VehicleInfoDto>().ReverseMap();
            CreateMap<CreateVehicleInfoDto,VehicleInformation>();
            CreateMap<Lane, GetAllLanesDto>();
            CreateMap<VehicleClass, VehicleClassesDto>();
            CreateMap<VehicleMake, VehicleMakeDto>();
            CreateMap<Center, CenterDto>()
                .ForMember(dest =>dest.CenterId, opt =>opt.MapFrom(src=>src.Ctr_Id))
                .ForMember(dest => dest.CenterName, opt => opt.MapFrom(src => src.Ctr_Name));
            CreateMap<ExamCodes, ExamCodeDto>();
            CreateMap<SubClass, SubClassDto>();
            CreateMap<BookingChannel, BookingChannelDto>();
            CreateMap<Appointment, DeleteAppointmentDto>().ReverseMap();
            CreateMap<CreateUserDto, Login>()
                //.ForMember(dest => dest.UserID, opt => opt.MapFrom(src => Convert.ToInt32(src.UserId)))
                .ForMember(dest => dest.UserID , opt => opt.Ignore())
                ;
            CreateMap<EditUserDto, Login>()
                .ForMember(dest => dest.UserID, opt => opt.MapFrom(src => src.UserId))
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserName))
                .ForMember(dest => dest.IsActive, opt => opt.MapFrom(src => src.Status))
                ;

            CreateMap<Login, SearchUserDto>()
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.UserID))
                .ForMember(dest => dest.UserName , opt => opt.MapFrom(src => src.UserName))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.IsActive))
                .ForMember(dest => dest.LoginMethod, opt => opt.MapFrom(src => "DB"))
                .ForMember(dest => dest.LastRecordTransactiondate, opt => opt.MapFrom(src => src.LastRecordTransactiondate))
                ;            

            CreateMap<VehicleEnquiryDto, VehicleInformation>().ReverseMap();
            CreateMap<Appointment, AmendAptRequest>();
            CreateMap<Appointment, AppointmentRescheduleDto>().ReverseMap();
            CreateMap<Appointment, DeletePayment>();
            CreateMap<Appointment, ConfirmPayment>();
            CreateMap<CompleteVehicleInfoDto, VehicleInformation>().ReverseMap();
            CreateMap<AppointmentHistory, AppointmentHistoryDto>();
            CreateMap<Appointment, PaymentResponse>()
                .ForMember(dest => dest.CenterCode, opt => opt.MapFrom(src => src.CentreCode));
            CreateMap<Appointment, CreateSpecialEventDto>();
            CreateMap<CreateSpecialEventRequestDto, SpecialEvents>().ReverseMap();
            CreateMap<SearchSpecialEventDto, SpecialEvents>().ReverseMap();

            CreateMap<VehicleEnquiryResponseDto, VehicleInformation>().ReverseMap();
            CreateMap<VillageAndMovementPermitVehicleDto, VehicleInformation>().ReverseMap();
            CreateMap<VehicleInformation, VVandMPVResponse>();
            CreateMap<CreateNewNonValidVehicleDto, VehicleInformation>();
            CreateMap<VehicleInformation, CreateNewNonValidVehicleDto>();
            CreateMap<VehicleInformation, AmendVVandMPVDto>();
            CreateMap<VehicleCountryCode, CountryCodeDto>();

            CreateMap< CreateWatchListDto, WatchList>().ReverseMap();
            CreateMap<InspectionLanes, SearchLaneDto>().ReverseMap();           
            CreateMap<Appointment, AppointmentHistory_AttachmentResponse>();
            CreateMap<AttachmentDto, Attachment>();
            CreateMap<Attachment, AttachmentResponse>();
            CreateMap<VehicleMessagesDto, VehicleMessages>().ReverseMap();
            CreateMap<WatchList , WatchListDto>();
            CreateMap<ExaminationSchedule, SearchExamScheduleDto>();

            CreateMap<CreateExamScheduleDetailsRequestDto, ExaminationScheduleDetails>();
            CreateMap<ExaminationScheduleDetails, CreateExamScheduleDetailsDto>();
            CreateMap<CreateExamScheduleRequestDto, ExaminationSchedule>();//----
            CreateMap<ExaminationSchedule, CreateExamScheduleResponse>();
            CreateMap<ExaminationSchedule, ViewExamScheduleDto>();

            CreateMap<ExaminationSchedule, EditExamScheduleDto>();
            CreateMap<ExaminationSchedule, DeleteExamScheduleDto>();


            //Mapping for DTO with Model as per new Schema provided
            CreateMap<CreateUserDto,UserAuth>()
                .ForMember(dest => dest.UserId , opt => opt.MapFrom(src => src.UserId))
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserName))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password))
                ;

        }
    }
}
