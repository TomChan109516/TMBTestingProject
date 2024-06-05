using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SCS_Backend_API.Interfaces;
using SCS_Backend_API.Services;

namespace SCS_Backend_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentEnquiryController : ControllerBase
    {
        #region private variables
        private readonly IAppointmentService _appointmentService;
        private readonly IExamService _examService;
        private readonly ILogger<AppointmentController> _logger;
        #endregion

        public AppointmentEnquiryController(IAppointmentService appointmentService, IExamService examService, ILogger<AppointmentController> logger)
        {
            _appointmentService = appointmentService;
            _examService = examService;
            _logger = logger;
        }
        //Get Appointment History

        /// <summary>
        /// Returns the Appointment History details
        /// </summary>
        /// <param name="appointmentNumber"></param>
        /// <returns>Returns the appointmemt History</returns>
        [Route("getappointmenthistory")]
        [HttpGet]
        public async Task<IActionResult> GetAppointmentHistory(long appointmentNumber)
        {
            try
            {
                _logger.LogInformation("GetAppointmentHistory processing request : " + appointmentNumber);
                var response = await _appointmentService.GetAppointmentHistory(appointmentNumber);
                _logger.LogInformation("GetAppointmentHistory response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("GetAppointmentHistory exception : " + ex.Message);
                throw;
            }
        }
    }
}
