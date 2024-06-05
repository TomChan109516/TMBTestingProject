namespace VICSS.Service.LaneConfiguration.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using VICSS.Service.LaneConfiguration.Domain;
    using VICSS.Shared.Models.LaneConfiguration;

    [Route("api/[controller]")]
    [ApiController]
    public class LaneController : Controller
    {
        private readonly IMediator _mediator;

        public LaneController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// 
        /// 
        /// </summary>
        /// <param name="centreId"></param>
        /// <returns></returns>
        [Route("getlanesbycentreid")]
        [HttpGet]
        public async Task<JsonResult> GetLanesByCentreId([FromQuery] List<string> centreId)
        {
            var result = await _mediator.Send(new GetLanesByCentreIdRequestDto(centreId), CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// 
        /// </summary>
        /// <param name="centreId"></param>
        /// <returns></returns>
        [Route("getexamsbycentre/{centreId}")]
        [HttpGet]
        public async Task<JsonResult> GetExamsByCentre(string centreId)
        {
            var result = await _mediator.Send(new GetExamsByCentreRequestDto(centreId), CancellationToken.None);

            return Json(result);
        }

        [Route("getlanesdetailsbycentreid")]
        [HttpGet]
        public async Task<JsonResult> GetLanesDetailsByCentreId([FromQuery] List<string> centreId)
        {
            var result = await _mediator.Send(new LanesDetailsByCentreIdRequestDto(centreId), CancellationToken.None);

            return Json(result);
        }
        [Route("searchlane")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<JsonResult> SearchLane([FromQuery]Shared.Models.LaneConfiguration.SearchLaneRequestDto requestDto)
        {
            var result = await _mediator.Send(new Domain.SearchLaneRequestDto(requestDto), CancellationToken.None);
            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        [Route("addupdateanddisablelane")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<JsonResult> AddUpdateLane([FromBody] AddUpdateLaneDto request)
        {
            var result = await _mediator.Send(new AddUpdateLanesRequestDto(request), CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

    }
}
