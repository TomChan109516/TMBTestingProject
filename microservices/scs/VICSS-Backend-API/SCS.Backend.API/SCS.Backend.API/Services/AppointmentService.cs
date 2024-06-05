using Microsoft.EntityFrameworkCore;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using SCS_Backend_API.Models1;
using SCS_Backend_API.Data;
using PdfSharpCore.Pdf;
using PdfSharpCore;
using TheArtOfDev.HtmlRenderer.PdfSharp;
using System.Net;
using SCS_Backend_API.Constants;
using AutoMapper;
using System.Reflection;
using static Azure.Core.HttpHeader;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks.Dataflow;
using Microsoft.IdentityModel.Tokens;
using Azure;

namespace SCS_Backend_API.Services
{
    public class AppointmentService : IAppointmentService
    {
        #region Private Variable
        private readonly AppDBContextEF _context;
        private readonly IMapper _mapper;
        private readonly ILogger<AppointmentService> _logger;
        #endregion

        #region Constructor
        public AppointmentService(AppDBContextEF context, IMapper mapper, ILogger<AppointmentService> logger)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
        }
        #endregion

        #region Public Services
        public async Task<AppointmentResponse> CreateAppointment(AppointmentDto request)
        {
            _logger.LogInformation("CreateAppointment service started.");
            AppointmentResponse response = new AppointmentResponse();
            var appointment = _mapper.Map<Appointment>(request);
            appointment.AppointmentNumber = await GenerateAppointmentNumber();
            appointment.CreatedDate = DateTime.UtcNow;
            appointment.ModifiedDate = DateTime.UtcNow;
            appointment.Time = request.AppointmentDate.ToString("HH:mm:ss");
            appointment.Appointment_Status = AppointmentStatus.Booked.ToString();
            appointment.Last_Txn_Type_Code = TransactionType.Insert.ToString();
            appointment.Last_Txn_UserId = "Abhiram";
            appointment.Bk_Chnl_Id = "01";
            appointment.PaymentStatus = PaymentStatus.Pending.ToString();
            appointment.Result = string.Empty;
            await _context.SCS_Appointments.AddAsync(appointment);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {

            }
            var appointmentDetails = _mapper.Map<CreateAppointmentDto>(appointment);
            response.data = appointmentDetails;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = CommonMessages.AppointmentCreatedSuccessfully;

            _logger.LogInformation("CreateAppointment service Completed.");
            return response;
        }

        public async Task<GetAllLanesResponse> GetAllLanes()
        {
            _logger.LogInformation("GetAllLanes service started.");
            GetAllLanesResponse response = new GetAllLanesResponse();
            var laneList = await _context.SCS_Lanes.Where(i => i.IsActive == true).ToListAsync();
            var lanesData = _mapper.Map<List<GetAllLanesDto>>(laneList);

            response.data = lanesData;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = lanesData.Count == 0 ? CommonMessages.NolaneFound : CommonMessages.LanesFetchSuccessfully;

            _logger.LogInformation("GetAllLanes service completed.");
            return response;
        }

        public async Task<VehicleClassResponse> GetVehicleClassDetails()
        {
            _logger.LogInformation("GetVehicleClassDetails service started.");
            VehicleClassResponse response = new VehicleClassResponse();
            var vehicleClasses = await _context.SCS_VehicleClasses.Where(i => i.IsActive == true).ToListAsync();
            var vehicleClassData = _mapper.Map<List<VehicleClassesDto>>(vehicleClasses);

            response.data = vehicleClassData;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = vehicleClassData.Count == 0 ? CommonMessages.NoVehicleClassFound : CommonMessages.VehicleClassesFetchSuccessfully;

            _logger.LogInformation("GetVehicleClassDetails service completed.");
            return response;
        }

        //SearchValidVehicle

        /// <summary>
        /// Returns the Vehicle Information, Notes & Alerts
        /// </summary>
        /// <param name="searchDto"></param>
        /// <returns> Vehicle Information, Notes & Alerts </returns>
        public async Task<VehicleAppointmentResponse> SearchValidVehicle(VehicleSearchDto searchDto)
        {
            _logger.LogInformation("SearchValidVehicle service started.");
            VehicleAppointmentResponse response = new VehicleAppointmentResponse();
            VehicleAppointmentDto vehicleInfoAppointment = new VehicleAppointmentDto();
            List<CreateAppointmentDto> recentAppointments = new List<CreateAppointmentDto>();

            var vehicleInfo = await SearchVehicle(searchDto).ConfigureAwait(false);
            if (vehicleInfo?.Count > 0)
            {
                var vehicleInfoData = _mapper.Map<List<VehicleInfoDto>>(vehicleInfo);
                string notes = new WaiverData().Waiver();

            var appointments = _context.SCS_Appointments
                                        .Where(i => vehicleInfo.Select(x => x.VehicleId).Contains(i.VehicleId)).ToList();
            recentAppointments = _mapper.Map<List<CreateAppointmentDto>>(appointments);

                vehicleInfoAppointment.VehicleInfo = vehicleInfoData;
            vehicleInfoAppointment.RecentAppointments = recentAppointments;

            response.data = vehicleInfoAppointment;
            }

            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = vehicleInfo.Count == 0 ? CommonMessages.NoVehicleFound : CommonMessages.VehiclesFetchSuccessfully;

            _logger.LogInformation("SearchValidVehicle service completed.");
            return response;
        }

        public async Task<List<CreateAppointmentDto>> GetRecentAppointment(VehicleSearchDto searchDto)
        {
            _logger.LogInformation("GetRecentAppointment service started.");
            List<CreateAppointmentDto> recentappointments = new List<CreateAppointmentDto>();
            var vehicle = await _context.SCS_VehicleInfo.Where(a => a.ChassisNumber == searchDto.ChassisNumber ||
            a.VehicleId == searchDto.VehicleId || a.RegMark == searchDto.RegMark).Select(i => i.VehicleId).FirstOrDefaultAsync();
            if (vehicle != null)
            {
                var appointments = await _context.SCS_Appointments.Where(i => i.VehicleId == vehicle).ToListAsync();

                recentappointments = _mapper.Map<List<CreateAppointmentDto>>(appointments);
            }
            _logger.LogInformation("GetRecentAppointment service completed.");
            return recentappointments;
        }

        public async Task<ExamSlotResponse> GetExaminationDates(DateTime selectedMonth)
        {
            _logger.LogInformation("GetExaminationDates service started.");
            ExamSlotResponse response = new ExamSlotResponse();
            List<DateTime> weekends = new List<DateTime>();
            List<DateTime> noQuotaDays = new List<DateTime>();

            var dailyThreshold = await _context.SCS_Appointments
                .Where(a => a.CreatedDate.Month == selectedMonth.Month
                && a.CreatedDate.Year == selectedMonth.Year)
                .CountAsync();
            DateTime startDate = new DateTime(selectedMonth.Year, selectedMonth.Month, 1);
            DateTime endDate = startDate.AddMonths(1).AddDays(-1);
            noQuotaDays = await _context.SCS_Appointments
                .Where(a => a.AppointmentDate >= startDate && a.AppointmentDate <= endDate)
                .GroupBy(a => a.CreatedDate.Date)
                .Where(group => group.Count() == dailyThreshold)
                .Select(group => group.Key)
                .ToListAsync();

            // to list out weekends
            DateTime curr = startDate;
            while (curr <= endDate)
            {
                if (curr.DayOfWeek == DayOfWeek.Sunday)
                {
                    weekends.Add(curr);
                }
                curr = curr.AddDays(1);
            }
            ExamSlotDto examSlotDto = new ExamSlotDto()
            {
                NoQuotaDays = noQuotaDays,
                Weekends = weekends
            };

            response.data = examSlotDto;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = examSlotDto == null ? CommonMessages.NoExamDatesFound : CommonMessages.ExamDatesFetchedSuccessfully;

            _logger.LogInformation("GetExaminationDates service completed.");
            return response;

        }

        public async Task<ExamDateResponse> GetExaminationSlots(DateTime selectedTime)
        {
            _logger.LogInformation("GetExaminationSlots service started.");
            ExamDateResponse response = new ExamDateResponse();
            Dictionary<string, int> bookedTimeSlots = new Dictionary<string, int>();
            Dictionary<string, int> menuOfTimeSlots = new Dictionary<string, int>();

            var slots = await _context.SCS_Appointments
                .Where(a => a.AppointmentDate.Date == selectedTime.Date && a.IsOverBooked == 'N')
                .ToListAsync();
            var existingList = await _context.SCS_ExamSlotsInformation.ToListAsync();
            foreach (var slot in existingList)
            {
                menuOfTimeSlots[slot.SlotName] = slot.Quota;
            }
            foreach (var slot in slots)
            {
                var timeSlotName = slot.AppointmentDate.ToString("HH:mm");
                if (bookedTimeSlots.ContainsKey(timeSlotName))
                {
                    bookedTimeSlots[timeSlotName]++;
                }
                else
                {
                    bookedTimeSlots[timeSlotName] = 1;
                }
            }
            foreach (var slot in bookedTimeSlots)
            {
                menuOfTimeSlots[slot.Key] = menuOfTimeSlots[slot.Key] - slot.Value;
            }

            response.data = menuOfTimeSlots;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = CommonMessages.ExamSlotsFetchedSuccessfully;

            _logger.LogInformation("GetExaminationSlots service completed.");
            return response;
        }

        public async Task<VehicleMakeResponse> GetVehicleMakeDetails()
        {
            _logger.LogInformation("GetVehicleMakeDetails service started.");
            VehicleMakeResponse response = new VehicleMakeResponse();
            var vehicleMake = await _context.SCS_VehicleMake.Where(i => i.IsActive == true).ToListAsync();
            var vehicleMakeData = _mapper.Map<List<VehicleMakeDto>>(vehicleMake);
            response.data = vehicleMakeData;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = vehicleMake.Count == 0 ? CommonMessages.NoVehicleMakeFound : CommonMessages.VehicleMakeFetchSuccessfully;

            _logger.LogInformation("GetVehicleMakeDetails service completed.");
            return response;
        }

        public async Task<byte[]?> GenerateCertificate(long appointmentNumber)
        {
            byte[]? response = null;
            var text = await GeneratePdfTemplate(appointmentNumber);
            var document = new PdfDocument();

            PdfGenerator.AddPdfPages(document, text, PageSize.A4);
            using (MemoryStream ms = new MemoryStream())
            {
                document.Save(ms);
                response = ms.ToArray();
            }
            _logger.LogInformation("GenerateCertificate service completed.");


            return response;
        }

        public async Task<SubClassResponse> GetVehicleSubClass(string VehicleClassId)
        {
            _logger.LogInformation("GetVehicleSubClass service started.");
            SubClassResponse response = new SubClassResponse();
            var subClass = await _context.SCS_SubClasses.Where(i => i.VehicleClassId == VehicleClassId && i.IsActive == true).ToListAsync();
            var subClasslist = _mapper.Map<List<SubClassDto>>(subClass);

            response.data = subClasslist;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = subClass.Count == 0 ? CommonMessages.NoVehicleSubClassFound : CommonMessages.VehicleSubClassFound;

            _logger.LogInformation("GetVehicleSubClass service completed.");
            return response;
        }

        public async Task<VehicleInfoResponse> CreateNewVehicleInfo(CreateVehicleInfoDto request)
        {
            _logger.LogInformation("CreateNewVehicleInfo service started.");
            VehicleInfoResponse response = new VehicleInfoResponse();
            var vehicleInfo = _mapper.Map<VehicleInformation>(request);
            vehicleInfo.VehicleId = request.VhclTypeCode == "NV" ? request.ChassisNumber : string.Join("", Guid.NewGuid().ToString("n").Take(10).Select(o => o)).ToUpper();
            await _context.SCS_VehicleInfo.AddAsync(vehicleInfo);
            await _context.SaveChangesAsync();

            var vehicleInfoDetails = _mapper.Map<VehicleInfoDto>(vehicleInfo);
            response.data = vehicleInfoDetails;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = CommonMessages.NewVehicleCreatedSuccessfully;

            _logger.LogInformation("CreateNewVehicleInfo service Completed.");
            return response;
        }


        public async Task<string[]> GetAppointmentStatusList()
        {
            _logger.LogInformation("Appointment status options are being called."); //needs improvement in what is being logged
            var bookingStatusValues = BookingStatus.GetNames(typeof(BookingStatus));
            return bookingStatusValues;

        }

        public async Task<BookingChannelResponse> BookingChannelList()
        {
            _logger.LogInformation("List of available bookingChannels.");
            BookingChannelResponse response = new BookingChannelResponse();
            var bookingChannel = await _context.SCS_BookingChannel.ToListAsync();
            var bookingChannelList = _mapper.Map<List<BookingChannelDto>>(bookingChannel);

            response.data = bookingChannelList;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = bookingChannel.Count == 0 ? CommonMessages.NoBookingChannelFound : CommonMessages.BookingChannelFound;

            _logger.LogInformation("GetBookingChannelList service completed.");
            return response;
        }

        public async Task<AppointmentEnquiryResponse> AppointmentEnquiry(AppointmentEnquiryRequestDto appointmentEnquiry)
        {
            _logger.LogInformation("Appointment enquiry is being made.");
            AppointmentEnquiryResponse response = new AppointmentEnquiryResponse();
            List<AppointmentEnquiryResponseDto> enquiryResponse = new List<AppointmentEnquiryResponseDto>();
            var appointments = await SearchAppointment(appointmentEnquiry).ConfigureAwait(false);
            appointments.ForEach(appointment => enquiryResponse.Add(new AppointmentEnquiryResponseDto()
            {
                AppointmentNumber = appointment.AppointmentNumber,
                CenterCode = appointment.CentreCode,
                LaneId = appointment.LaneId,
                VehicleClassId = appointment.VehicleClassId,
                RegMark = appointment.VehicleInfo.RegMark,
                VehicleId = appointment.VehicleId,
                ChassisNumber = appointment.VehicleInfo.ChassisNumber,
                PrimaryExamCode = appointment.PrimaryExamCode,
                ExamDate = appointment.AppointmentDate
            }));

            response.data = enquiryResponse;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = appointments.Count == 0 ? CommonMessages.NoAppointmentNumber : CommonMessages.AppointmentCreatedSuccessfully;
            _logger.LogInformation("Appointment enquiry is completed.");
            return response;
        }

        public async Task<AppointmentDeleteResponse> DeleteAppointment(long appointmentNumber)
        {
            _logger.LogInformation("DeleteAppointment service started.");
            AppointmentDeleteResponse response = new AppointmentDeleteResponse();
            var appointment = await _context.SCS_Appointments.FirstOrDefaultAsync
                (a => a.AppointmentNumber == appointmentNumber);
            if (appointment != null && appointment.PaymentStatus == "Pending" && appointment.AppointmentDate.Date == DateTime.Today)

            {
                appointment.Last_Txn_Type_Code = TransactionType.Delete.ToString();

                await _context.SaveChangesAsync();

                var appointmentDetails = _mapper.Map<DeleteAppointmentDto>(appointment);

                response.data = appointmentDetails;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.DeleteAppointment;
            }
            else
            {
                response.Message = CommonMessages.DeleteAppointmentFailure;

            }

            _logger.LogInformation("DeleteAppointment service Completed.");

            return response;

        }

        public async Task<VehicleAppointmentResponse> GetAppointment(long appointmentnumber)
        {
            _logger.LogInformation("GetAppointment service started.");
            VehicleAppointmentResponse response = new VehicleAppointmentResponse();
            List<CreateAppointmentDto> recentAppointments = new List<CreateAppointmentDto>();
            VehicleAppointmentDto vehicleInfoAppointment = new VehicleAppointmentDto();
            var appointments = await _context.SCS_Appointments.Where(i => i.AppointmentNumber == appointmentnumber).ToListAsync();
            recentAppointments = _mapper.Map<List<CreateAppointmentDto>>(appointments);
            var vehicleInfo = _context.SCS_VehicleInfo
                   .Where(i => i.VehicleId == appointments.Select(x => x.VehicleId).FirstOrDefault());
            string? bookingChannel = _context.SCS_BookingChannel
                   .Where(i => i.Bk_Chnl_Id == recentAppointments.Select(x => x.Bk_Chnl_Id).FirstOrDefault()).Select(y => y.Bk_Chnl_Name).FirstOrDefault();
            if (String.IsNullOrEmpty(bookingChannel))
            {
                recentAppointments.Where(x => x.AppointmentNumber == appointmentnumber).ToList().ForEach(x => x.Bk_Chnl_Name = "SCS");
            }
            else
            {
                recentAppointments.Where(x => x.AppointmentNumber == appointmentnumber).ToList().ForEach(x => x.Bk_Chnl_Name = bookingChannel);
            }

            var vehicleInfoDetails = _mapper.Map<List<VehicleInfoDto>>(vehicleInfo);
            vehicleInfoAppointment.VehicleInfo = vehicleInfoDetails;
            vehicleInfoAppointment.RecentAppointments = recentAppointments;
            response.data = vehicleInfoAppointment;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = vehicleInfo.Any() ? CommonMessages.AppointmentFetchedSuccessfully : CommonMessages.NoVehicleFound;

            _logger.LogInformation("GetAppointment service completed.");
            return response;
        }

        public async Task<AppointmentCancelResponse> CancelAppointment(long appointmentNumber)
        {
            _logger.LogInformation("CancelAppointment service started.");
            AppointmentCancelResponse response = new AppointmentCancelResponse();
            var appointmentCancel = await _context.SCS_Appointments.FirstOrDefaultAsync
                (a => a.AppointmentNumber == appointmentNumber);
            if (appointmentCancel != null && appointmentCancel.PaymentStatus == "Completed" && appointmentCancel.CreatedDate.Date != DateTime.Today)

            {
                TimeSpan difference = appointmentCancel.AppointmentDate - DateTime.Now;
                if (difference.TotalDays >= 14)
                {

                    appointmentCancel.Last_Txn_Type_Code = TransactionType.Cancel.ToString();

                    await _context.SaveChangesAsync();


                    response.data = appointmentCancel.AppointmentNumber;
                    response.StatusCode = (int)HttpStatusCode.OK;
                    response.Message = CommonMessages.CancelAppointment;
                }
            }
            else
            {
                response.Message = CommonMessages.CancelAppointmentFailure;
            }

            _logger.LogInformation("CancelAppointment service Completed.");

            return response;

        }

        public async Task<VehicleEnquiryResponseDto> VehicleEnquiry(VehicleEnquiryRequestDto vehicleEnquiryRequestDto)
        {
            _logger.LogInformation("vehicle Enquiry is started.");
            VehicleEnquiryResponseDto response = new VehicleEnquiryResponseDto();
            List<VehicleEnquiryDto> enquiryResponse = new List<VehicleEnquiryDto>();
            var vehicleData = await SearchVehicleEnquiry(vehicleEnquiryRequestDto).ConfigureAwait(false);
            enquiryResponse = _mapper.Map<List<VehicleEnquiryDto>>(vehicleData);
            response.data = enquiryResponse;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = vehicleData.Count == 0 ? CommonMessages.NoVehicleFound : CommonMessages.VehiclesFetchSuccessfully;
            _logger.LogInformation("vehcile enquiry is completed.");
            return response;
        }

        public async Task<AmendAptResponse> AmendAppointment(AmendAptRequest amendAptRequest)
        {
            AmendAptResponse response = new AmendAptResponse();
            _logger.LogInformation("Service:- AppointmentService, Method:- AmendAppointment  is started.");
            var appointment = await _context.SCS_Appointments.FirstOrDefaultAsync
            (a => a.AppointmentNumber == amendAptRequest.AppointmentNumber);
            if (appointment != null && appointment.Last_Txn_Type_Code != TransactionType.Delete.ToString() && appointment.ExamFee == amendAptRequest.ExamFee)
            {
                appointment.PrimaryExamCode = amendAptRequest.PrimaryExamCode;
                appointment.SupplementaryExamCode = amendAptRequest.SupplementaryExamCode;
                appointment.ExamFee = amendAptRequest.ExamFee;
                appointment.ContactNumber = amendAptRequest.ContactNumber;
                appointment.ContactPerson = amendAptRequest.ContactPerson;
                appointment.Remarks = amendAptRequest.Remarks;
                appointment.ModifiedDate = DateTime.UtcNow;
                appointment.Last_Txn_Type_Code = TransactionType.Amend.ToString();
                await _context.SaveChangesAsync();
                var amendAptResponse = _mapper.Map<AmendAptRequest>(appointment);
                response.data = amendAptResponse;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.AmendAppointment;
                _logger.LogInformation("Service:- AppointmentService, Method:- AmendAppointment.,Message: ", response.Message);
            }
            else
            {
                response.data = null;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = appointment == null ? CommonMessages.AptNumNotExists : appointment?.ExamFee != amendAptRequest.ExamFee ? CommonMessages.ExamFee : CommonMessages.AmendAppointmentFailure;
                _logger.LogInformation("Service:- AppointmentService, Method:- AmendAppointment.,Message:- ", response.Message);
            }

            _logger.LogInformation("Service:- AppointmentService, Method:- AmendAppointment  is completed.");
            return response;
        }

        public async Task<AppointmentRescheduleResponseDto> RescheduleAppointment(AppointmentRescheduleRequestDto rescheduleRequest)
        {
            AppointmentRescheduleResponseDto response = new AppointmentRescheduleResponseDto();
            _logger.LogInformation("Service:- AppointmentService, Method:- RescheduleAppointment  is started.");

            var appointment = await _context.SCS_Appointments.FirstOrDefaultAsync
                (a => a.AppointmentNumber == rescheduleRequest.AppointmentNumber);


            if (appointment != null)
            {
                TimeSpan difference = appointment.AppointmentDate - DateTime.Now;
                if (difference.Days > 14 && appointment.Appointment_Status != "Cancelled") 
                {
                    appointment.AppointmentDate = rescheduleRequest.AppointmentDate;
                    appointment.Time = rescheduleRequest.AppointmentDate.ToString("HH:mm:ss");
                    appointment.Remarks = rescheduleRequest.Remarks;
                    appointment.LaneId = rescheduleRequest.LaneId;
                    appointment.IsOverBooked = rescheduleRequest.IsOverBooked;
                    appointment.ModifiedDate = DateTime.UtcNow;
                    await _context.SaveChangesAsync();
                    var rescheduleResponse = _mapper.Map<AppointmentRescheduleDto>(appointment);
                    response.data = rescheduleResponse;
                    response.StatusCode = (int)HttpStatusCode.OK;
                    response.Message = CommonMessages.RescheduledAppointment;
                    _logger.LogInformation("Service:- AppointmentService, Method:- RescheduleAppointment.,Message: ", response.Message);
                }
            }
            else
            {
                response.data = null;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = appointment == null ? CommonMessages.AptNumNotExists : CommonMessages.AppointmentRescheduledSuccessfully;
                _logger.LogInformation("Service:- AppointmentService, Method:- RescheduleAppointment.,Message:- ", response.Message);
            }

            _logger.LogInformation("Service:- AppointmentService, Method:- RescheduleAppointment  is completed.");
            return response;
        }

        public async Task<CompleteVehicleInfoResponse> GetVehicleInformation(string vehicleId)
        {
            _logger.LogInformation("GetVehicleInformation service started.");
            CompleteVehicleInfoResponse response = new CompleteVehicleInfoResponse();

            CompleteVehicleInfoDto vehicleInformation = new CompleteVehicleInfoDto();
            var vehicleParticulars = await _context.SCS_VehicleInfo.Where(i => i.VehicleId == vehicleId).FirstOrDefaultAsync();





            vehicleInformation = _mapper.Map<CompleteVehicleInfoDto>(vehicleParticulars);
            response.data = vehicleInformation;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = vehicleParticulars == null ? CommonMessages.NoVehicleFound : CommonMessages.VehiclesFetchSuccessfully;

            _logger.LogInformation("GetVehicleInformation service completed.");
            return response;
        }

        public async Task<byte[]?> GenerateReprintCertificate(long appointmentNumber)
        {
            byte[]? response = null;
            var text = await GeneratePdfReprintTemplate(appointmentNumber);
            var document = new PdfDocument();

            PdfGenerator.AddPdfPages(document, text, PageSize.A4);
            using (MemoryStream ms = new MemoryStream())
            {
                document.Save(ms);
                response = ms.ToArray();
            }
            _logger.LogInformation("GenerateCertificate service completed.");


            return response;
        }
        
      
      

        public async Task<AppointmentHistoryResponse> GetAppointmentHistory(long appointmentnumber)
        {
            _logger.LogInformation("GetAppointmentHistory service started.");
            AppointmentHistoryResponse response = new AppointmentHistoryResponse();
            VehicleAppointmentDto vehicleInfoAppointment = new VehicleAppointmentDto();
            CreateAppointmentDto appointmentHistoryDetails = new CreateAppointmentDto();
            VehicleInfoDto vehicleInfoDetails = new VehicleInfoDto();

            var appointments = _context.SCS_Appointments
                                       .Where(i => i.AppointmentNumber == appointmentnumber && i.Last_Txn_Type_Code == TransactionType.Reschedule.ToString())
                                       .Select(x=>x).FirstOrDefault();
            appointmentHistoryDetails = _mapper.Map<CreateAppointmentDto>(appointments);

            if (appointments != null)
            {
                var vehicleInfo = _context.SCS_VehicleInfo
                                      .Where(i => i.VehicleId == appointmentHistoryDetails.VehicleId).FirstOrDefault();
                vehicleInfoDetails = _mapper.Map<VehicleInfoDto>(vehicleInfo);
            }

            var appointmentHistoryWithDetails = await _context.SCS_Appointments.
                            Join(_context.SCS_AppointmentHistory, u => u.AppointmentNumber, uir => uir.AppointmentNumber,
                            (u, uir) => new { u, uir })
                            .Where(u => u.uir.AppointmentNumber == appointmentnumber)
                            .Select(m => new AppointmentHistoryDto
                            {
                                AppointmentNumber = m.uir.AppointmentNumber,
                                Reason = m.uir.Reason,
                                TransactionDate = m.uir.TransactionDate,
                                AppointmentDate = m.uir.AppointmentDate,
                                AppointmentHistoryDetails = appointmentHistoryDetails,
                                VehicleInfoDto = vehicleInfoDetails
                            }).ToListAsync();

            foreach ( var appointmentHistory in appointmentHistoryWithDetails)
            {
                appointmentHistory.AppointmentHistoryDetails.AppointmentDate = appointmentHistory.AppointmentDate;
            }

            response.data = appointmentHistoryWithDetails;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = appointmentHistoryWithDetails.Count <= 0 ? CommonMessages.NoAppointmentHistoryFound : CommonMessages.AppHistoryFetchedSuccessfully;

            _logger.LogInformation("GetAppointmentHistory service completed.");
            return response;
        }

        public async Task<CreateNewNonValidVehicleDtoResponse> CreateNewNonValidVehicle(CreateNewNonValidVehicleDto request)
        {
            try
            {
                _logger.LogInformation("CreateNewNonValidVehicle service started.");
                CreateNewNonValidVehicleDtoResponse response = new CreateNewNonValidVehicleDtoResponse();

                var vehicleInfo = _mapper.Map<VehicleInformation>(request);
                vehicleInfo.VehicleId = request.VhclTypeCode == "NV" ? request.ChassisNumber : string.Join("", Guid.NewGuid().ToString("n").Take(10).Select(o => o)).ToUpper();
                await _context.SCS_VehicleInfo.AddAsync(vehicleInfo);
                await _context.SaveChangesAsync();

                var newNonValidVehicleInfoDetails = _mapper.Map<CreateNewNonValidVehicleDto>(vehicleInfo);
                response.data = newNonValidVehicleInfoDetails;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.NewNVVehicleCreatedSuccessfully;

                _logger.LogInformation("CreateNewNonValidVehicle service Completed.");
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogError("CreateNewNonValidVehicle exception : " + ex.Message);
                throw;
            }
        }

        public async Task<CompleteVehicleInfoResponse> RefreshVehicle(string regMark)
        {
            _logger.LogInformation("RefreshVehicle service started.");

            CompleteVehicleInfoResponse response = new CompleteVehicleInfoResponse();

            var vehicleParticulars = await _context.SCS_VehicleInfo.Where(i => i.RegMark == regMark).FirstOrDefaultAsync();
            var vehicleInformation = _mapper.Map<CompleteVehicleInfoDto>(vehicleParticulars);
            response.data = vehicleInformation;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = vehicleParticulars == null ? CommonMessages.NoVehicleFound : CommonMessages.VehiclesFetchSuccessfully;

            _logger.LogInformation("RefreshVehicle service completed.");
            return response;
        }

        public async Task<CreateSpecialEventResponseDto> CreateSpecialEvent(CreateSpecialEventRequestDto request)
        {
            try
            {
                _logger.LogInformation("Create Special Event service started.");
                CreateSpecialEventResponseDto response = new CreateSpecialEventResponseDto();

                var appointmentAffected = await CreateSpclEvent(request).ConfigureAwait(false);
                var specialEvent = _mapper.Map<SpecialEvents>(request);
                await _context.SCS_SpecialEvents.AddAsync(specialEvent);
                await _context.SaveChangesAsync();

                var eventDetails = _mapper.Map<List<CreateSpecialEventDto>>(appointmentAffected);
                response.data = eventDetails;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.CreateSpecialEventSuccessful;

                _logger.LogInformation("Create Special Event service Completed.");
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogError("Create Special Event exception : " + ex.Message);
                throw;
            }
        }

        public async Task<SearchSpecialEventResponseDto> SearchSpecialEvent(SearchSpecialEventRequestDto specialEventSearch)
        {
            _logger.LogInformation("Search Special Event service started.");
            SearchSpecialEventResponseDto response = new SearchSpecialEventResponseDto();

            try
            {
                var eventSearch = await SearchSpclEvent(specialEventSearch).ConfigureAwait(false);
                if (eventSearch?.Count > 0)
                {
                    var eventData = _mapper.Map<List<SearchSpecialEventDto>>(eventSearch);

                    response.data = eventData;
                
                _logger.LogInformation("Special Event service Completed.");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError("Special Event exception : " + ex.Message);
                throw;
            }
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = CommonMessages.SearchSpecialEventSuccessful;
            return response;
        }

        public async Task<SearchLaneResponseDto> SearchInspectionLane(SearchLaneRequestDto searchDto)
        {
            _logger.LogInformation("Search valid Inspection Lane service started.");
            SearchLaneResponseDto response = new SearchLaneResponseDto();

            var LaneInfo = await SearchLanes(searchDto).ConfigureAwait(false);
            var enquiryResponse = _mapper.Map<List<SearchLaneDto>>(LaneInfo);

            response.data = enquiryResponse;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = LaneInfo.Count == 0 ? CommonMessages.NoInspectionLaneFound : CommonMessages.InspectionDetailsFetchSuccessfully;

            _logger.LogInformation("Search valid Inspection Lane service completed.");
            return response;
        }
        #endregion

        #region Private Methods
        private async Task<long> GenerateAppointmentNumber()
        {
            _logger.LogInformation("GenerateAppointmentNumber service started.");
            DateTime now = DateTime.Now;
            string uniqueAppointmentNumber = "";
            await Task.Run(() =>
            {
                uniqueAppointmentNumber = now.ToString("yyyyddHHmmss");
            });

            _logger.LogInformation("GenerateAppointmentNumber service completed.");
            return long.Parse(uniqueAppointmentNumber);
        }

        private async Task<List<VehicleInformation>?> SearchVehicle(VehicleSearchDto searchDto)
        {
            _logger.LogInformation("SearchVehicle service started.");
            var result = _context.SCS_VehicleInfo.AsQueryable();
            await Task.Run(() =>
            {
                if (!string.IsNullOrEmpty(searchDto.VehicleId))
                {
                    result = result.Where(x => x.VehicleId == searchDto.VehicleId);

                }
                if (!string.IsNullOrEmpty(searchDto.RegMark))

                {
                    result = result.Where(x => x.RegMark.Contains(searchDto.RegMark));
                }
                if (!string.IsNullOrEmpty(searchDto.ChassisNumber))
                {
                    result = result.Where(x => x.ChassisNumber.Contains(searchDto.ChassisNumber));
                }
                if (searchDto.AppointmentNumber > 0)
                {
                    var vehicleId = _context.SCS_Appointments
                                       .Where(i => i.AppointmentNumber == searchDto.AppointmentNumber)
                                       .Select(x => x.VehicleId).FirstOrDefault();
                    result = result.Where(x => x.VehicleId == vehicleId);
                }
            });
            _logger.LogInformation("SearchVehicle service completed.");
            return new List<VehicleInformation>(result).ToList();
        }
       
        private async Task<List<InspectionLanes>?> SearchLanes(SearchLaneRequestDto searchDto)
        {
            _logger.LogInformation("Search valid Inspection Lane service started.");
            var result = _context.SCS_InspectionLanes.Include(v => v.Centers).AsQueryable();

            await Task.Run(() =>
            {
                if (!string.IsNullOrWhiteSpace(searchDto.LaneId))
                {
                    result = result.Where(x => x.LaneId == searchDto.LaneId); 
                }
                if (!string.IsNullOrWhiteSpace(searchDto.Lane))
                {
                    result = result.Where(x => x.Lane == searchDto.Lane);
                }
                if (!string.IsNullOrWhiteSpace(searchDto.Ctr_Id))
                {
                    result = result.Where(x => x.Centers.Any(x => x.Ctr_Id == searchDto.Ctr_Id));
                }
            });
            return new List<InspectionLanes>(result).ToList();
        }

        private async Task<List<VehicleInformation>> SearchVehicleEnquiry(VehicleEnquiryRequestDto vehicleEnquiry)
        {
            _logger.LogInformation("Search valid vehcile service started.");
            var result = _context.SCS_VehicleInfo.Include(v => v.VehicleClasses).ThenInclude(v => v.SubClasses).AsQueryable();
            await Task.Run(() =>
            {
                if (!string.IsNullOrWhiteSpace(vehicleEnquiry.VehicleId))
                {
                    result = result.Where(x => x.VehicleId == vehicleEnquiry.VehicleId); //== vehicleEnquiry.VehicleId);
                }
                if (!string.IsNullOrWhiteSpace(vehicleEnquiry.RegMark))
                {
                    result = result.Where(x => x.RegMark == vehicleEnquiry.RegMark);
                }
                if (!string.IsNullOrWhiteSpace(vehicleEnquiry.ChassisNumber))
                {
                    result = result.Where(x => x.ChassisNumber == vehicleEnquiry.ChassisNumber);
                }
                if (!string.IsNullOrWhiteSpace(vehicleEnquiry.CENumber))
                {
                    result = result.Where(x => x.CENumber == vehicleEnquiry.CENumber);
                }
                if (!string.IsNullOrWhiteSpace(vehicleEnquiry.TANumber))
                {
                    result = result.Where(x => x.TANumber == vehicleEnquiry.TANumber);
                }
                if (!string.IsNullOrWhiteSpace(vehicleEnquiry.Make))
                {
                    result = result.Where(x => x.Make == vehicleEnquiry.Make);
                }
                if (!string.IsNullOrWhiteSpace(vehicleEnquiry.VehicleClassName))
                {
                    result = result.Where(x => x.VehicleClasses.VehicleClassName == vehicleEnquiry.VehicleClassName);
                }
                if (!string.IsNullOrWhiteSpace(vehicleEnquiry.VehicleSubClassName))
                {
                    result = result.Where(x => x.VehicleClasses.SubClasses.Any(v => v.VehicleSubClassName == vehicleEnquiry.VehicleSubClassName));
                }
                if (!string.IsNullOrWhiteSpace(vehicleEnquiry.FloatName))
                {
                    result = result.Where(x => x.FloatName == vehicleEnquiry.FloatName);
                }


            });
            _logger.LogInformation("VehcileSearch service completed.");
            return new List<VehicleInformation>(result).ToList();

        }



        private async Task<List<Appointment>> SearchAppointment(AppointmentEnquiryRequestDto appointmentEnquiry)
        {
            _logger.LogInformation("Search appointment service started.");
            var result = _context.SCS_Appointments.Include(a => a.VehicleInfo).AsQueryable();
            await Task.Run(() =>
            {
                if (!string.IsNullOrEmpty(appointmentEnquiry.VehicleId))
                {
                    result = result.Where(x => x.VehicleId == appointmentEnquiry.VehicleId);
                }
                if (!string.IsNullOrEmpty(appointmentEnquiry.RegMark))
                {
                    result = result.Where(x => x.VehicleInfo.RegMark == appointmentEnquiry.RegMark);

                }
                if (!string.IsNullOrEmpty(appointmentEnquiry.ChassisNumber))
                {
                    result = result.Where(x => x.VehicleInfo.ChassisNumber == appointmentEnquiry.ChassisNumber);
                }
                if (appointmentEnquiry.AppointmentNumber > 0)
                {
                    result = result.Where(x => x.AppointmentNumber == appointmentEnquiry.AppointmentNumber);
                }
                if (!string.IsNullOrWhiteSpace(appointmentEnquiry.CenterCode))
                {
                    result = result.Where(x => x.CentreCode == appointmentEnquiry.CenterCode);
                }
                if (!string.IsNullOrWhiteSpace(appointmentEnquiry.BookingChannelId))
                {
                    result = result.Where(x => x.Bk_Chnl_Id == appointmentEnquiry.BookingChannelId);
                }
                if (!string.IsNullOrWhiteSpace(appointmentEnquiry.AppointmentStatus))
                {
                    result = result.Where(x => x.Appointment_Status == appointmentEnquiry.AppointmentStatus);
                }
                if (!string.IsNullOrWhiteSpace(appointmentEnquiry.LaneId))
                {
                    result = result.Where(x => x.LaneId == appointmentEnquiry.LaneId);
                }
                if (!string.IsNullOrWhiteSpace(appointmentEnquiry.VehicleClassId))
                {
                    result = result.Where(x => x.VehicleInfo.VehicleClassId == appointmentEnquiry.VehicleClassId);
                }
                if (appointmentEnquiry.StartDate != null && appointmentEnquiry.EndDate != null)
                {
                    result = result.Where(x => x.AppointmentDate >= appointmentEnquiry.StartDate && x.AppointmentDate <= appointmentEnquiry.EndDate);
                }
            });
            _logger.LogInformation("AppointmentSearch service completed.");
            return new List<Appointment>(result).ToList();

        }


        private async Task<string> GeneratePdfTemplate(long appointmentNumber)
        {

            var apps = await _context.SCS_Appointments
                .Include(a => a.VehicleInfo)
                .FirstOrDefaultAsync(a => a.AppointmentNumber == appointmentNumber);
            if (apps != null)
            {

                _logger.LogInformation("Reading Pdf Template");
                string text = File.ReadAllText(CommonConstants.CertificateTemplateFilePath);

                text = text.Replace("@vehicleInfo.RegMark", apps.VehicleInfo.RegMark);
                text = text.Replace("@AppointmentNumber", apps.AppointmentNumber.ToString());
                text = text.Replace("@vehicleInfo.ChassisNumber", apps.VehicleInfo.ChassisNumber);
                text = text.Replace("@vehicleInfo.VehicleClassId", apps.VehicleInfo.VehicleClassId.ToString());
                text = text.Replace("@Time", apps.AppointmentDate.ToShortTimeString());
                text = text.Replace("@Examination.Date", apps.AppointmentDate.Date.ToString());
                text = text.Replace("@ExamFee", apps.ExamFee.ToString());
                text = text.Replace("@PrimaryExamCode", apps.PrimaryExamCode.ToString());
                text = text.Replace("@Lane", apps.LaneId.ToString());
                text = text.Replace("@Date.Date", apps.AppointmentDate.Date.ToString());
                text = text.Replace("@Date.Time", apps.AppointmentDate.ToShortTimeString());
                text = text.Replace("@Lane", apps.LaneId.ToString());
                text = text.Replace("@DateNow", DateTime.UtcNow.ToShortDateString());

                _logger.LogInformation("GenerateAppointmentNumber service completed.");
                return text;
            }
            return (CommonMessages.NoAppointmentNumber);
        }

        private async Task<string> GeneratePdfReprintTemplate(long appointmentNumber)
        {
            var apps = await _context.SCS_Appointments
                .Include(a => a.VehicleInfo)
                .FirstOrDefaultAsync(a => a.AppointmentNumber == appointmentNumber);
            if (apps != null)
            {
                _logger.LogInformation("Reading Pdf Template");
                string text = File.ReadAllText(CommonConstants.ReprintCertificateTemplateFilePath);

                text = text.Replace("@vehicleInfo.RegMark", apps.VehicleInfo.RegMark);
                text = text.Replace("@AppointmentNumber", apps.AppointmentNumber.ToString());
                text = text.Replace("@vehicleInfo.ChassisNumber", apps.VehicleInfo.ChassisNumber);
                text = text.Replace("@vehicleInfo.VehicleClassId", apps.VehicleInfo.VehicleClassId.ToString());
                text = text.Replace("@Time", apps.AppointmentDate.ToShortTimeString());
                text = text.Replace("@Examination.Date", apps.AppointmentDate.Date.ToString());
                text = text.Replace("@ExamFee", apps.ExamFee.ToString());
                text = text.Replace("@PrimaryExamCode", apps.PrimaryExamCode.ToString());
                text = text.Replace("@Lane", apps.LaneId.ToString());
                text = text.Replace("@Date.Date", apps.AppointmentDate.Date.ToString());
                text = text.Replace("@Date.Time", apps.AppointmentDate.ToShortTimeString());
                text = text.Replace("@Lane", apps.LaneId.ToString());
                text = text.Replace("@DateNow", DateTime.UtcNow.ToShortDateString());

                _logger.LogInformation("GenerateAppointmentNumber service completed.");
                return text;
            }
            return (CommonMessages.NoAppointmentNumber);
        }

        private async Task<List<Appointment>?> CreateSpclEvent(CreateSpecialEventRequestDto searchEvent)
        {
            _logger.LogInformation("Search Special Event service started.");
            var result = _context.SCS_Appointments.Include(a => a.VehicleInfo).AsQueryable();
            await Task.Run(() =>
            {
                if (!string.IsNullOrWhiteSpace(searchEvent.CTR_Id))
                {
                    result = result.Where(x => x.CentreCode == searchEvent.CTR_Id);
                }
                if (searchEvent.spcl_event_start_date != null && searchEvent.spcl_event_end_date != null)
                {
                    result = result.Where(x => x.AppointmentDate >= searchEvent.spcl_event_start_date && x.AppointmentDate <= searchEvent.spcl_event_end_date);
                }
            });
            _logger.LogInformation("Search Specil Event service completed.");
            return new List<Appointment>(result).ToList();
        }

        private async Task<List<SpecialEvents>?> SearchSpclEvent(SearchSpecialEventRequestDto searchEvent)
        {
            _logger.LogInformation("Search Special Event service started.");
            var result = _context.SCS_SpecialEvents.Include(a => a.Centers).AsQueryable();
            await Task.Run(() =>
            {
                if (!string.IsNullOrWhiteSpace(searchEvent.EventId))
                {
                    result = result.Where(x => x.EventId == searchEvent.EventId);
                }
                if (!string.IsNullOrWhiteSpace(searchEvent.Ctr_Id))
                {
                    result = result.Where(x => x.Ctr_Id == searchEvent.Ctr_Id);
                }
                if (searchEvent.spcl_event_start_date != null && searchEvent.spcl_event_end_date != null)
                {
                    result = result.Where(x => x.spcl_event_start_date >= searchEvent.spcl_event_start_date && x.spcl_event_end_date <= searchEvent.spcl_event_end_date);
                }
            });
            _logger.LogInformation("Search Specil Event service completed.");
            return new List<SpecialEvents>(result).ToList();
        }
        #endregion
    }
}
