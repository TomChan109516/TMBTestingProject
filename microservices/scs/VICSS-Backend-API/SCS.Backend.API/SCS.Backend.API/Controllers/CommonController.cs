using Microsoft.AspNetCore.Mvc;
using SCS_Backend_API.Constants;
using SCS_Backend_API.Interfaces;

namespace SCS_Backend_API.Controllers
{
    [ApiController]
    [Route("api/common")]
    public class CommonController : Controller
    {


        private readonly ICenterService _centerService;
        private readonly IAppointmentService _appointmentService;
        private readonly IExamService _examService;
        private readonly ILogger<CommonController> _logger;

        public CommonController(ICenterService centerService, IAppointmentService appointmentService, IExamService examService, ILogger<CommonController> logger)
        {

            _centerService = centerService;
            _appointmentService = appointmentService;
            _examService = examService;
            _logger = logger;
        }
        //GetAllDropdowns
        /// <summary>
        /// Common dropdown api's
        /// </summary>
        /// <returns> dropdown list</returns>   
        [HttpGet]
        [Route("getAllDropdown")]
        public async Task<IActionResult> GetAllDropdownList(string dropDownListType, string? id)
        {
            try
            {
                _logger.LogInformation("GetAllDropdownList - dropDownListType : " + dropDownListType + " and Id : " + id);
                switch ((DropDownListType)Enum.Parse(typeof(DropDownListType), dropDownListType, true))
                {
                    case DropDownListType.CenterList:
                        var response = await _centerService.GetAllCenters();
                        return Ok(response);
                        break;
                    case DropDownListType.VehicleExamList:
                        var examList = await _examService.GetVehicleExamList(id);
                        return Ok(examList);
                        break;
                    case DropDownListType.LanesList:
                        var laneList = await _appointmentService.GetAllLanes();
                        return Ok(laneList);
                        break;
                    case DropDownListType.VehicleClassList:
                        var vehicleClassList = await _appointmentService.GetVehicleClassDetails();
                        return Ok(vehicleClassList);
                        break;
                    case DropDownListType.VehicleMakeList:
                        var VehicleMakeList = await _appointmentService.GetVehicleMakeDetails();
                        return Ok(VehicleMakeList);
                        break;
                }
                return null;
            }
            catch (Exception ex)
            {
                _logger.LogError("GetAllDropdownList exception : " + ex.Message);
                throw;
            }
        }
    }
}
