namespace VICSS.Service.ConfigurationService.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using VICSS.Service.ConfigurationService.Domain;
    using VICSS.Shared.Models.ConfigurationService;

    [Route("api/[controller]")]
    [ApiController]
    public class ConfigurationServiceController : Controller
    {
        private readonly IMediator _mediator;

        public ConfigurationServiceController(IMediator mediator) 
        {
            _mediator = mediator;
        }

        [Route("searchsystemconfig")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<JsonResult> SearchSystemConfig([FromQuery] Shared.Models.ConfigurationService.SearchSystemConfigRequestDto request)
        {
            var result = await _mediator.Send(new Domain.SearchSystemConfigRequestDto(request), CancellationToken.None);            

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }


        [Route("deletesystemconfig")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<JsonResult> DeleteSystemConfig([FromBody]DeleteSystemConfigRequestDto request)
        {
            var result = await _mediator.Send(new DisableSystemConfigRequestDto(request), CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        [Route("addupdatesystemconfig")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<JsonResult> AddUpdateSystemConfig([FromBody] SystemConfigDto request)
        {
            var result = await _mediator.Send(new SystemConfigRequestDto(request), CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }
    }
}
