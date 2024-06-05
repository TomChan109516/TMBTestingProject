using SCS_Backend_API.DTO;
using SCS_Backend_API.Models1;

namespace SCS_Backend_API.Interfaces
{
    public interface IAppointmentService
    {
        Task<AppointmentResponse> CreateAppointment(AppointmentDto appointment);
        Task<VehicleAppointmentResponse> SearchValidVehicle(VehicleSearchDto searchDto);
        Task<SearchLaneResponseDto> SearchInspectionLane(SearchLaneRequestDto searchDto);
        Task<List<CreateAppointmentDto>> GetRecentAppointment(VehicleSearchDto searchDto);
        Task<GetAllLanesResponse> GetAllLanes();
        Task<VehicleClassResponse> GetVehicleClassDetails();
        Task<ExamSlotResponse> GetExaminationDates(DateTime selectedMonth);
        Task<ExamDateResponse> GetExaminationSlots(DateTime selectedTime);
        Task<VehicleMakeResponse> GetVehicleMakeDetails();
        Task<byte[]?> GenerateCertificate(long appointment);
        Task<VehicleInfoResponse> CreateNewVehicleInfo(CreateVehicleInfoDto request);
        Task<SubClassResponse> GetVehicleSubClass(string VehicleClassId);
        Task<VehicleAppointmentResponse> GetAppointment(long appointmentnumber);
        Task<AppointmentHistoryResponse> GetAppointmentHistory(long appointmentnumber);

        Task<string[]> GetAppointmentStatusList();
        Task<AppointmentEnquiryResponse> AppointmentEnquiry(AppointmentEnquiryRequestDto appointmentEnquiry);
        Task<BookingChannelResponse> BookingChannelList();

        Task<AppointmentDeleteResponse> DeleteAppointment(long appointmentNumber);
        Task<VehicleEnquiryResponseDto> VehicleEnquiry(VehicleEnquiryRequestDto vehicleEnquiryRequestDto);
        Task<AppointmentCancelResponse> CancelAppointment(long appointmentNumber);
        Task<AmendAptResponse> AmendAppointment(AmendAptRequest amendAptRequest);

        Task<AppointmentRescheduleResponseDto> RescheduleAppointment(AppointmentRescheduleRequestDto rescheduleRequest);
        Task<CompleteVehicleInfoResponse> GetVehicleInformation(string vehicleId);

        Task<byte[]?> GenerateReprintCertificate(long appointmentNumber);
        Task<CreateNewNonValidVehicleDtoResponse> CreateNewNonValidVehicle(CreateNewNonValidVehicleDto request);
        Task<CompleteVehicleInfoResponse> RefreshVehicle(string regMark);
        Task<CreateSpecialEventResponseDto> CreateSpecialEvent(CreateSpecialEventRequestDto request);
        Task<SearchSpecialEventResponseDto> SearchSpecialEvent(SearchSpecialEventRequestDto specialEventRequestDto);

       
    }
}
