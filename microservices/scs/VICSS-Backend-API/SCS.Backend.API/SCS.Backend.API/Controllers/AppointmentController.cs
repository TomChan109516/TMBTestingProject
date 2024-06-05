using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SCS_Backend_API.Constants;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;

namespace SCS_Backend_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        #region private variables
        private readonly IAppointmentService _appointmentService;
        private readonly IExamService _examService;
        private readonly ILogger<AppointmentController> _logger;
        #endregion

        #region constructor
        public AppointmentController(IAppointmentService appointmentService, IExamService examService, ILogger<AppointmentController> logger)
        {
            _appointmentService = appointmentService;
            _examService = examService;
            _logger = logger;
        }
        #endregion

        #region Action Methods
        //SearchVehicle

        /// <summary>
        /// Returns the Vehicle Information,Recent Appointments, Notes & Alerts
        /// </summary>
        /// <param name="searchDto"></param>
        /// <returns>Vehicle Information</returns>
        [Route("searchvehicle")]
        [HttpPost]
        public async Task<IActionResult> SearchVehicle(VehicleSearchDto searchDto)
        {
            try
            {
                _logger.LogInformation("SearchVehicle processing request : " + JsonConvert.SerializeObject(searchDto));
                var vehicleInfo = await _appointmentService.SearchValidVehicle(searchDto);
                _logger.LogInformation("SearchVehicle response : " + JsonConvert.SerializeObject(vehicleInfo));
                return Ok(vehicleInfo);
            }
            catch (Exception ex)
            {
                _logger.LogError("SearchVehicle exception : " + ex.Message);
                throw;
            }

        }

        //GetExamList

        /// <summary>
        /// Gets the List of Primary and Supplementary exams from related centers.
        /// </summary>
        /// <param name="centerId"></param>
        /// <returns>Exam List</returns>
        [Route("vehicleexamination")]
        [HttpGet]
        public async Task<IActionResult> GetExamList(string centerId)
        {
            try
            {
                _logger.LogInformation("GetExamList processing request : " + centerId);
                var examList = await _examService.GetVehicleExamList(centerId);
                _logger.LogInformation("GetExamList response : " + JsonConvert.SerializeObject(examList));
                return Ok(examList);
            }
            catch (Exception ex)
            {
                _logger.LogError("GetExamList exception : " + ex.Message);
                throw;
            }

        }

        //GetAllLanes

        /// <summary>
        /// Gets the List of Lanes.
        /// </summary>
        /// <returns>Lanes List</returns>
        [Route("getalllanes")]
        [HttpGet]
        public async Task<IActionResult> GetAllLanes()
        {
            try
            {
                _logger.LogInformation("GetAllLanes processing request");
                var laneList = await _appointmentService.GetAllLanes();
                _logger.LogInformation("GetAllLanes response : " + JsonConvert.SerializeObject(laneList));
                return Ok(laneList);
            }
            catch (Exception ex)
            {
                _logger.LogError("GetAllLanes exception : " + ex.Message);
                throw;
            }
        }

        //GetVehicleClassDetails

        /// <summary>
        /// Gets the List of Vehicle Class.
        /// </summary>
        /// <returns>Vehicle Class List</returns>
        [Route("getvehicleclass")]
        [HttpGet]
        public async Task<IActionResult> GetVehicleClassDetails()
        {
            try
            {
                _logger.LogInformation("GetVehicleClassDetails processing request");
                var vehicleClassList = await _appointmentService.GetVehicleClassDetails();
                _logger.LogInformation("GetVehicleClassDetails response : " + JsonConvert.SerializeObject(vehicleClassList));
                return Ok(vehicleClassList);
            }
            catch (Exception ex)
            {
                _logger.LogError("GetVehicleClassDetails exception : " + ex.Message);
                throw;
            }
        }

        //CreateAppointment

        /// <summary>
        /// Returns the Appointment Number and details of appointment
        /// </summary>
        /// <param name="AppointmentDto"></param>
        /// <returns>Appointment Information</returns>
        [Route("createappointment")]
        [HttpPost]
        public async Task<IActionResult> CreateAppointment(AppointmentDto request)
        {
            try
            {
                _logger.LogInformation("CreateAppointment processing request : " + JsonConvert.SerializeObject(request));
                var response = await _appointmentService.CreateAppointment(request);
                _logger.LogInformation("CreateAppointment response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("CreateAppointment exception : " + ex.Message);
                throw;
            }
        }

        //GetExaminationDates

        /// <summary>
        /// Returns the exam dates
        /// </summary>
        /// <param name="selectedDate"></param>
        /// <returns>Returns the exam dates</returns>
        [Route("getexamdates")]
        [HttpGet]
        public async Task<IActionResult> GetExaminationDates(DateTime selectedDate)
        {
            try
            {
                _logger.LogInformation("GetExaminationDates processing request : " + selectedDate);
                var examDates = await _appointmentService.GetExaminationDates(selectedDate);
                _logger.LogInformation("GetExaminationDates response : " + JsonConvert.SerializeObject(examDates));
                return Ok(examDates);
            }
            catch (Exception ex)
            {
                _logger.LogError("GetExaminationDates exception : " + ex.Message);
                throw;
            }
        }

        //GetExaminationSlots

        /// <summary>
        /// Returns the exam slots
        /// </summary>
        /// <param name="selectedDate"></param>
        /// <returns>Returns the exam slots</returns>
        [Route("getexamslots")]
        [HttpGet]
        public async Task<IActionResult> GetExaminationSlots(DateTime selectedDate)
        {
            try
            {
                _logger.LogInformation("GetExaminationSlots processing request : " + selectedDate);
                var examSlots = await _appointmentService.GetExaminationSlots(selectedDate);
                _logger.LogInformation("GetExaminationSlots response : " + JsonConvert.SerializeObject(examSlots));
                return Ok(examSlots);
            }
            catch (Exception ex)
            {
                _logger.LogError("GetExaminationSlots exception : " + ex.Message);
                throw;
            }
        }

        //GetVehicleMakeDetails

        /// <summary>
        /// Returns the Vehicle Make Details
        /// </summary>
        /// <returns>List of Vehicle Make</returns>
        [Route("getvehiclemake")]
        [HttpGet]
        public async Task<IActionResult> GetVehicleMakeDetails()
        {
            try
            {
                _logger.LogInformation("GetVehicleMakeDetails processing request");
                var vehicleMakeList = await _appointmentService.GetVehicleMakeDetails();
                _logger.LogInformation("GetVehicleMakeDetails response : " + JsonConvert.SerializeObject(vehicleMakeList));
                return Ok(vehicleMakeList);
            }
            catch (Exception ex)
            {
                _logger.LogError("GetVehicleMakeDetails exception : " + ex.Message);
                throw;
            }
        }

        //GenerateCertificate

        /// <summary>
        /// Returns the pdf
        /// </summary>
        /// <param name="appointmentNumber"></param>
        /// <returns>Returns the pdf</returns>
        [Route("certificate")]
        [HttpGet]
        public async Task<IActionResult> GenerateCertificate(long appointmentNumber)
        {
            try
            {
                _logger.LogInformation("GenerateCertificate processing request : " + appointmentNumber);
                var response = await _appointmentService.GenerateCertificate(appointmentNumber);
                if (response != null)
                {
                    string Filename = "Appointment Letter" + appointmentNumber + ".pdf";
                    _logger.LogInformation("GenerateCertificate Filename : " + Filename + " Response : " + response);
                    return File(response!, "application/pdf", Filename);
                }

                _logger.LogInformation("GenerateCertificate response : " + response);
                return BadRequest(CommonMessages.NoAppointmentNumber);
            }
            catch (Exception ex)
            {
                _logger.LogError("GenerateCertificate exception : " + ex.Message);
                throw;
            }
        }

        //GetVehicleSubClass

        /// <summary>
        /// Returns the list of Vehicle Sub Class
        /// </summary>
        /// <returns>List of Vehicle Sub Class</returns>
        [Route("subclass")]
        [HttpGet]
        public async Task<IActionResult> GetVehicleSubClass(string vehicleClassId)
        {
            var response = await _appointmentService.GetVehicleSubClass(vehicleClassId);
            return Ok(response);
        }

        //CreateNewVehicleInfo

        /// <summary>
        /// Returns the new vehicle
        /// </summary>
        /// <param name="CreateVehicleInfoDto"></param>
        /// <returns>Returns the new vehicle info</returns>
        [Route("createvehicleinfo")]
        [HttpPost]
        public async Task<IActionResult> CreateNewVehicleInfo(CreateVehicleInfoDto request)
        {
            var response = await _appointmentService.CreateNewVehicleInfo(request);
            return Ok(response);
        }

        //CreateNewNonValidVehicleInfo

        /// <summary>
        /// Returns the new non valid vehicle
        /// </summary>
        /// <param name="CreateNewNonValidVehicleDto"></param>
        /// <returns>Returns the new NV vehicle info</returns>
        [Route("createnewnonvalidvehicleinfo")]
        [HttpPost]
        public async Task<IActionResult> CreateNewNonValidVehicle(CreateNewNonValidVehicleDto request)
        {
            var response = await _appointmentService.CreateNewNonValidVehicle(request);
            return Ok(response);
        }

        //GetAppointmentStatusList

        /// <summary>
        /// Returns a list of  types in status of booking
        /// </summary>
        /// <returns>Returns the list of booking status</returns>
        [Route("bookingstatus")]
        [HttpGet]
        public async Task<IActionResult> GetAppointmentStatusList()
        {
            var response = await _appointmentService.GetAppointmentStatusList();
            return Ok(response);
        }


        //AppointmentEnquiry

        /// <summary>
        /// Returns a List of favourable appointments
        /// </summary>
        /// <param name="AppointmentEnquiryRequestDto"></param>
        /// <returns>a list of all the appointments that satisfy the search criteria</returns>
        [Route("appointmentenquiry")]
        [HttpPost]
        public async Task<IActionResult> AppointmentEnquiry(AppointmentEnquiryRequestDto appointmentEnquiry)
        {
            try
            {
                _logger.LogInformation("AppointmentEnquiry processing request");
                var appointmentList = await _appointmentService.AppointmentEnquiry(appointmentEnquiry);
                _logger.LogInformation("AppointmentEnquiry response : " + JsonConvert.SerializeObject(appointmentList));
                return Ok(appointmentList);
            }
            catch (Exception ex)
            {
                _logger.LogError("AppointmentEnquiry exception : " + ex.Message);
                throw;
            }
        }


        //BookingChannelList

        /// <summary>
        /// Returns list of booking Channels
        /// </summary>
        /// <returns>a list of all the different booking channels available</returns>
        [Route("bookingchannellist")]
        [HttpGet]
        public async Task<IActionResult> BookingChannelList()
        {
            try
            {
                _logger.LogInformation(" processing request");
                var bookingChannelList = await _appointmentService.BookingChannelList();
                _logger.LogInformation("BookingChannelList response : " + JsonConvert.SerializeObject(bookingChannelList));
                return Ok(bookingChannelList);
            }
            catch (Exception ex)
            {
                _logger.LogError("BookingChannelList exception : " + ex.Message);
                throw;
            }
        }

        [Route("deleteappointment")]
        [HttpPost]
        public async Task<IActionResult> DeleteAppointment(long appointmentNumber)
        {
            try
            {
                _logger.LogInformation(" processing request");
                var appDelete = await _appointmentService.DeleteAppointment(appointmentNumber);
                _logger.LogInformation("DeleteAppointment response : " + JsonConvert.SerializeObject(appDelete));
                return Ok(appDelete);
            }
            catch (Exception ex)
            {
                _logger.LogError("DeleteAppointment exception : " + ex.Message);
                throw;
            }

        }

        [Route("cancelappointment")]
        [HttpPost]
        public async Task<IActionResult> CancelAppointment(long appointmentNumber)
        {
            try
            {
                _logger.LogInformation(" processing request");
                var appCancel = await _appointmentService.CancelAppointment(appointmentNumber);
                _logger.LogInformation("CancelAppointment response : " + JsonConvert.SerializeObject(appCancel));
                return Ok(appCancel);
            }
            catch (Exception ex)
            {
                _logger.LogError("CancelAppointment exception : " + ex.Message);
                throw;
            }

        }

        //Get Appointment

        /// <summary>
        /// Returns the Appointment details and Vehicle Info
        /// </summary>
        /// <param name="appointmentNumber"></param>
        /// <returns>Returns the appointmemt and vehicle info</returns>
        [Route("getappointment")]
        [HttpGet]
        public async Task<IActionResult> GetAppointment(long appointmentNumber)
        {
            try
            {
                _logger.LogInformation("GetAppointment processing request");
                var response = await _appointmentService.GetAppointment(appointmentNumber);
                _logger.LogInformation("GetAppointment response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("GetAppointment exception : " + ex.Message);
                throw;
            }
        }

        [Route("vehicleenquiry")]
        [HttpPost]
        public async Task<IActionResult> VehicleEnquiry(VehicleEnquiryRequestDto vehicleEnquiry)
        {
            try
            {
                _logger.LogInformation("VehicleEnquiry processing request");
                var vehicleList = await _appointmentService.VehicleEnquiry(vehicleEnquiry);
                _logger.LogInformation("VehicleEnquiry response : " + JsonConvert.SerializeObject(vehicleList));
                return Ok(vehicleList);

            }
            catch (Exception ex)
            {
                _logger.LogError("VehicleEnquiry exception : " + ex.Message);
                throw;
            }
        }

        //SearchInspectionLane

        /// <summary>
        /// Returns the LaneID,Lane, Type, Description
        /// </summary>
        /// <param name="searchDto"></param>
        /// <returns>Vehicle Information</returns>
        [Route("SearchInspectionLane")]
        [HttpPost]
        public async Task<IActionResult> SearchInspectionLane(SearchLaneRequestDto searchDto)
        {
            try
            {
                _logger.LogInformation("SearchInspectionLane processing request : " + JsonConvert.SerializeObject(searchDto));
                var LaneInfo = await _appointmentService.SearchInspectionLane(searchDto);
                _logger.LogInformation("SearchInspectionLane response : " + JsonConvert.SerializeObject(LaneInfo));
                return Ok(LaneInfo);
            }
            catch (Exception ex)
            {
                _logger.LogError("SearchInspectionLane exception : " + ex.Message);
                throw;
            }
        }

        //AmendAppointment

        /// <summary>
        /// 
        /// </summary>
        /// <param name="AppointmentEnquiryRequestDto"></param>
        /// <returns>a list of all the appointments that satisfy the search criteria</returns>
        /// 
        [Route("amendappointment")]
        [HttpPost]
        public async Task<IActionResult> AmendAppointment(AmendAptRequest amendAptRequest)
        {
            try
            {
                if (amendAptRequest.AppointmentNumber <= 0)
                {
                    return BadRequest(CommonMessages.AptGreaterThanZero);
                }
                _logger.LogInformation("AmendAppointment processing request");
                var response = await _appointmentService.AmendAppointment(amendAptRequest);
                _logger.LogInformation("AmendAppointment response : " + JsonConvert.SerializeObject(response));
                return Ok(response);

            }
            catch (Exception ex)
            {
                _logger.LogError("AmendAppointment exception : " + ex.Message);
                throw;
            }
        }

        [Route("rescheduleappointment")]
        [HttpPost]
        public async Task<IActionResult> RescheduleAppointment(AppointmentRescheduleRequestDto rescheduleRequest)
        {
            try
            {
                if (rescheduleRequest.AppointmentNumber <= 0)
                {
                    return BadRequest(CommonMessages.AptGreaterThanZero);
                }
                _logger.LogInformation("RescheduleAppointment processing request");
                var response = await _appointmentService.RescheduleAppointment(rescheduleRequest);
                _logger.LogInformation("RescheduleAppointment response : " + JsonConvert.SerializeObject(response));
                return Ok(response);

            }
            catch (Exception ex)
            {
                _logger.LogError("RescheduleAppointment exception : " + ex.Message);
                throw;
            }
        }

        [Route("getvehicleinformation")]
        [HttpGet]
        public async Task<IActionResult> GetVehicleInformation(string vehicleId)
        {
            try
            {
                _logger.LogInformation("GetVehicleInformation processing request");
                var response = await _appointmentService.GetVehicleInformation(vehicleId);
                _logger.LogInformation("GetVehicleInformation response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("GetVehicleInformation exception : " + ex.Message);
                throw;
            }
        }

        //GenerateReprintCertificate

        /// <summary>
        /// Returns the pdf
        /// </summary>
        /// <param name="appointmentNumber"></param>
        /// <returns>Returns the pdf</returns>
        [Route("reprintcertificate")]
        [HttpGet]
        public async Task<IActionResult> GenerateReprintCertificate(long appointmentNumber)
        {
            try
            {
                _logger.LogInformation("GenerateReprintCertificate processing request : " + appointmentNumber);
                var response = await _appointmentService.GenerateReprintCertificate(appointmentNumber);
                if (response != null)
                {
                    string Filename = "Reprint Appointment Letter" + appointmentNumber + ".pdf";
                    _logger.LogInformation("GenerateReprintCertificate Filename : " + Filename + " Response : " + response);
                    return File(response!, "application/pdf", Filename);
                }

                _logger.LogInformation("GenerateReprintCertificate response : " + response);
                return BadRequest(CommonMessages.NoAppointmentNumber);
            }
            catch (Exception ex)
            {
                _logger.LogError("GenerateReprintCertificate exception : " + ex.Message);
                throw;
            }
        }

        //RefreshVehicle

        /// <summary>
        /// Returns the Vehicle Information,Recent Appointments, Notes & Alerts
        /// </summary>
        /// <param name="searchDto"></param>
        /// <returns>Vehicle Information</returns>
        [Route("refreshvehicle")]
        [HttpPost]
        public async Task<IActionResult> RefreshVehicle(string regMark)
        {
            try
            {
                _logger.LogInformation("RefreshVehicle processing request : " + regMark);
                var vehicleInfo = await _appointmentService.RefreshVehicle(regMark);
                _logger.LogInformation("RefreshVehicle response : " + JsonConvert.SerializeObject(vehicleInfo));
                return Ok(vehicleInfo);
            }
            catch (Exception ex)
            {
                _logger.LogError("SearchVehicle exception : " + ex.Message);
                throw;
            }

        }

        [Route("createspecialEvent")]
        [HttpPost]
        public async Task<IActionResult> CreateSpecialEvent(CreateSpecialEventRequestDto request)
        {
            try
            {
                _logger.LogInformation("Special Event processing request : " + JsonConvert.SerializeObject(request));
                var response = await _appointmentService.CreateSpecialEvent(request);
                _logger.LogInformation("Special Event response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("Special Event exception : " + ex.Message);
                throw;
            }
        }

        [Route("searchspecialEvent")]
        [HttpPost]
        public async Task<IActionResult> SearchSpecialEvent(SearchSpecialEventRequestDto request)
        {
            try
            {
                _logger.LogInformation("Search Special Event processing request : " + JsonConvert.SerializeObject(request));
                var response = await _appointmentService.SearchSpecialEvent(request);
                _logger.LogInformation("Search Special Event response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("SearchSpecial Event exception : " + ex.Message);
                throw;
            }
        }


        #endregion
    }
}