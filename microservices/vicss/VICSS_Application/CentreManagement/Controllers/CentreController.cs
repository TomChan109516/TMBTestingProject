namespace VICSS.Service.CentreManagement.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using VICSS.Service.CentreManagement.Domain;
    using VICSS.Shared.Models.Centre;

    [Route("api/[controller]")]
    [ApiController]
    public class CentreController : Controller
    {
        private readonly IMediator _mediator;

        public CentreController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
        [Route("centre/{status}")]
        [HttpGet]
        public async Task<JsonResult> GetCentres(string status)
        {
            var result = await _mediator.Send(new GetCentresRequestDto(status), CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// Returns the exam code based on centre id and lanes
        /// </summary>
        /// <param name="centreId"></param>
        /// <returns></returns>
        [Route("getexamcodesforcentre/{centreId}")]
        [HttpGet]
        public async Task<JsonResult> GetExamCodes(string centreId)
        {
            var result = await _mediator.Send(new GetExamCodeRequestDto(centreId), CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// 
        /// </summary>
        /// <param name="centreId"></param>
        /// <returns>centres and centres holiday details</returns>
        [Route("getcentresdetailbycentreid")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<JsonResult> GetCentresDetailByCentreId([FromQuery] List<string> centreId)
        {
            var result = await _mediator.Send(new GetCentresDetailByCentreIdRequestDto(centreId), CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Route("addupdatecentre")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<JsonResult> AddUpdateCentre([FromBody] AddUpdateCentreDto request)
        {
            var result = await _mediator.Send(new AddUpdateCentreRequestDto(request), CancellationToken.None);

            return Json(result);
        }
    }
}
