namespace Vehicle.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Http.HttpResults;
    using Microsoft.AspNetCore.Mvc;
    using VICSS.Service.Vehicle.Domain;

    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : Controller
    {

        private readonly IMediator _mediator;

        public VehicleController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [Route("getvehicleclasswithsubclass/{status}")]
        [HttpGet]
        public async Task<JsonResult> GetVehicleClassAndSubclass(string status)
        {
            var result = await _mediator.Send(new GetVehicleClassWithSubclassRequestDto(status), CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };

        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
        [Route("getvehiclemake/{status}")]
        [HttpGet]
        public async Task<JsonResult> GetVehicleMake(string status)
        {
            var result = await _mediator.Send(new GetVehicleMakeRequestDto(status), CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Returns the list of vehicles base on search criteria
        /// </summary>
        /// <param name="searchVehicleRequestDto"></param>
        /// <returns>list of vehicles</returns>
        [Route("searchvehicle")]
        [HttpGet]
        public async Task<JsonResult> SearchVehicle([FromQuery] SearchVehicleRequestDto searchVehicleRequestDto)
        {
            var result = await _mediator.Send(searchVehicleRequestDto, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Returns the vehicle details
        /// </summary>
        /// <param name="vehicleId"></param>
        /// <returns>Vehicle Details</returns>
        [Route("getvehicleparticularsbyvehicleid/{vehicleId}")]
        [HttpGet]
        public async Task<JsonResult> GetVehicleParticularsByVehicleId(string vehicleId)
        {
            var result = await _mediator.Send(new GetVehicleParticularsRequestDto(vehicleId), CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// save the watchlist details
        /// </summary>
        /// <param name="request"></param>
        /// <returns>Result of the operation</returns>
        [Route("addupdatewatchlistreason")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<JsonResult> AddUpdateWatchlistReason([FromBody] AddUpdateWatchlistReasonRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);
            return Json(result);
        }

        /// <summary>
        /// Disable watchlist details
        /// </summary>
        /// <param name="request"></param>
        /// <returns>Result of the operation</returns>
        [Route("disablewatchlistreason")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<JsonResult> DisableWatchlistReason([FromBody] DisableWatchlistReasonRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);
            return Json(result);
        }

        /// <summary>
        /// Returns the list of vehicles based on search criteria
        /// </summary>
        /// <param name="SearchWatchlistReasonRequestDto"></param>
        /// <returns>list of vehicles</returns>
        [Route("searchwatchlistreason")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> SearchWatchlistReason([FromQuery] SearchWatchlistReasonRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);
            return new JsonResult(result)
            {
                StatusCode = (int)result.HttpStatusCode
            };
        }
        /// <summary>
        /// Returns the list of registration marks based on search criteria
        /// </summary>
        /// <param name="searchRegMarkRequestDto"></param>
        /// <returns>list of registration marks</returns>
        [Route("searchregmark")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<JsonResult> SearchRegMark([FromQuery] SearchRegMarkRequestDto searchRegMarkRequestDto)
        {
            var result = await _mediator.Send(searchRegMarkRequestDto, CancellationToken.None);

            return new JsonResult(result);
        }

    }
}
