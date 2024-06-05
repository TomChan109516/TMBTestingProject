using Newtonsoft.Json;
using SCS_Backend_API.Constants;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using SCS_Backend_API.Services;

namespace SCS_Backend_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : Controller
    {

        #region private variables
        private readonly IVehicleService _vehicleService;
        private readonly IExamService _examService;
        private readonly ILogger<VehicleController> _logger;
        #endregion
        #region constructor
        public VehicleController(IVehicleService vehicleService, IExamService examService, ILogger<VehicleController> logger)
        {
            _vehicleService = vehicleService;
            _examService = examService;
            _logger = logger;
        }
        #endregion

        #region Action Methods
        //CreateNewVillageVehicle

        /// <summary>
        /// Creates a new village and Movement Permit Vehicle
        /// </summary>
        /// <param name="vehicleInfo"></param>
        /// <returns></returns>
        [Route("createnewvillagevehicle")]
        [HttpPost]
        public async Task<IActionResult> CreateNewVillageVehicle(VillageAndMovementPermitVehicleDto vehicleInfo)
        {
            try
            {
                _logger.LogInformation("CreateNewVillageVehicle processing request : " + JsonConvert.SerializeObject(vehicleInfo));
                var newVehicleInfo = await _vehicleService.CreateNewVillageVehicle(vehicleInfo);
                _logger.LogInformation("CreateNewVillageVehicle response : " + JsonConvert.SerializeObject(newVehicleInfo));
                return Ok(newVehicleInfo);
            }
            catch (Exception ex)
            {
                _logger.LogError("CreateNewVillageVehicle exception : " + ex.Message);
                throw;
            }

        }

        //AmendNonValidVehicle

        /// <summary>
        /// 
        /// </summary>
        /// <param name="CreateNewNonValidVehicleDto"></param>
        /// <returns></returns>
        /// 
        [Route("amendnonvalidvehicle")]
        [HttpPost]
        public async Task<IActionResult> AmendNonValidVehicle(CreateNewNonValidVehicleDto amendNonValidVehicleRequest)
        {
            if (string.IsNullOrEmpty(amendNonValidVehicleRequest.ChassisNumber))
            {
                return BadRequest(CommonMessages.AptGreaterThanZero);
            }
            _logger.LogInformation("AmendNonValidVehicle processing request");
            var response = await _vehicleService.AmendNonValidVehicle(amendNonValidVehicleRequest);
            _logger.LogInformation("AmendNonValidVehicle response : " + JsonConvert.SerializeObject(response));
            return Ok(response);
        }

        //AmendVVandMPV

        /// <summary>
        /// amend on village vehicle and movement permit vehicle
        /// </summary>
        /// <param name="request"></param>
        /// <param name="chasisNo"></param>
        /// <returns>returns a message of Amend status</returns>

        [Route("amendvvandmpv")]
        [HttpPost]
        public async Task<IActionResult> AmendVVandMPV(AmendVVandMPVRequestDto request, string chasisNo)
        {
             
            if (request == null)
            {
                return BadRequest(CommonMessages.NoAmendVVandMPV);
            }
            _logger.LogInformation("AmendVVandMPV processing request");
            var response = await _vehicleService.AmendVVandMPV(request, chasisNo);
            _logger.LogInformation("AmendVVandMPV response : " + JsonConvert.SerializeObject(response));
            return Ok(response);
        }
        [Route("vehicleoperationalremark")]
        [HttpPost]
        public async Task<IActionResult> VehicleOperationalRemark([FromForm] AttachmentDto attachmentRequest,string remark, string chasisNumber)
        {
            if (string.IsNullOrEmpty(remark))
            {
                return BadRequest(CommonMessages.AptGreaterThanZero);
            }
            _logger.LogInformation("VehicleOperationalRemark processing request");
            var response = await _vehicleService.VehicleOperationalRemark(attachmentRequest,remark, chasisNumber);
            _logger.LogInformation("VehicleOperationalRemark response : " + JsonConvert.SerializeObject(response));
            return Ok(response);
        }

        [Route("vehiclemessage")]
        [HttpPost]
        public async Task<IActionResult> VehicleMessage(VehicleMessagesDto vehicleMessagesDto)
        {
            if (string.IsNullOrEmpty(vehicleMessagesDto.MessageEn) && string.IsNullOrEmpty(vehicleMessagesDto.MessageCh))
            {
                return BadRequest(CommonMessages.AptGreaterThanZero);
            }
            _logger.LogInformation("VehicleMessage processing request");
            var response = await _vehicleService.VehicleMessage(vehicleMessagesDto);
            _logger.LogInformation("VehicleMessage response : " + JsonConvert.SerializeObject(response));
            return Ok(response);
        }


        [Route("SearchWatchList")]
        [HttpPost]
        public async Task<IActionResult> SearchWatchList(WatchListRequestDto searchWhtlst)
        {
            try
            {
                _logger.LogInformation("Search watchList processing request.");
                var whtlsts = await _vehicleService.SearchWatchList(searchWhtlst);
                _logger.LogInformation("Search watchList response : " + JsonConvert.SerializeObject(whtlsts));
                return Ok(whtlsts);
            }
            catch (Exception ex)
            {
                _logger.LogError("Search watchList exception : " + ex.Message);
                throw;
            }
        }

        [Route("CancelWatchList")]
        [HttpPost]
        public async Task<IActionResult> CancelWatchList(CancelWatchListDto cnclwhlst)
        {
            try
            {
                _logger.LogInformation("CancelWatchList processing request");
                var Cancelwhlst = await _vehicleService.CancelWatchList(cnclwhlst);
                _logger.LogInformation("CancelWatchList response : " + JsonConvert.SerializeObject(Cancelwhlst));
                return Ok(Cancelwhlst);
            }
            catch (Exception ex)
            {
                _logger.LogError("CancelWatchList exception : " + ex.Message);
                throw;
            }

        }

        [Route("createwatchlist")]
        [HttpPost]
        public async Task<IActionResult> CreateWatchList(CreateWatchListDto request)
        {
            try
            {
                _logger.LogInformation("CreateWatchList processing request : " + JsonConvert.SerializeObject(request));
                var response = await _vehicleService.CreateWatchList(request);
                _logger.LogInformation("CreateWatchList response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("CreateAppointment exception : " + ex.Message);
                throw;
            }
        }

        [Route("getcountrycode")]
        [HttpGet]
        public async Task<IActionResult> GetCountryCode()
        {
            try
            {
                _logger.LogInformation("CountryCode processing request");
                var countryCodeList = await _vehicleService.GetCountryCode();
                _logger.LogInformation("GetCountryCode response : " + JsonConvert.SerializeObject(countryCodeList));
                return Ok(countryCodeList);
            }
            catch (Exception ex)
            {
                _logger.LogError("CountryCode exception : " + ex.Message);
                throw;
            }
        }
        #endregion
    }
}
