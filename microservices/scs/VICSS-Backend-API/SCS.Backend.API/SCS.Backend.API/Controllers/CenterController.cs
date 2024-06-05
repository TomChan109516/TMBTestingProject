using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SCS_Backend_API.DTO;

namespace SCS_Backend_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CenterController : ControllerBase
    {
        private readonly ICenterService _centerService;
        private readonly ILogger<CenterController> _logger;

        public CenterController(ICenterService centerService, ILogger<CenterController> logger)
        {
            _centerService = centerService;
            _logger = logger;
        }

        [Route("searchexamschedule")]
        [HttpPost]

        public async Task<IActionResult> SearchExamSchedule(SearchExamScheduleRequestDto request)
        {
            try
            {
                _logger.LogInformation("Search Exam Schedule Processing Request");
                var response = await _centerService.SearchExamSchedule(request);
                _logger.LogInformation("Search Exam Schedule: " + JsonConvert.SerializeObject(response));
                return Ok(response);

            }
            catch (Exception ex)
            {
                _logger.LogInformation("Search Exam Schedule Exception : " + ex.Message);
                throw;
            }

        }

        [Route("createexamschedule")]
        [HttpPost]
        public async Task<IActionResult> CreateExamSchedule(CreateExamScheduleRequestDto request)
        {
            try
            {
                _logger.LogInformation("CreateExamSchedule processing request : " + JsonConvert.SerializeObject(request));
                var response = await _centerService.CreateExamSchedule(request);
                _logger.LogInformation("CreateExamSchedule response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("CreateExamSchedule exception : " + ex.Message);
                throw;
            }
        }

        [Route("createxamschedulequota")]
        [HttpPost]
        public async Task<IActionResult> CreateExamScheduleQuota(List<CreateExamScheduleDetailsRequestDto> request)
        {
            try
            {
                _logger.LogInformation("CreateExamSchedule processing request : " + JsonConvert.SerializeObject(request));
                var response = await _centerService.CreateExamScheduleQuota(request);
                _logger.LogInformation("CreateExamSchedule response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("CreateExamSchedule exception : " + ex.Message);
                throw;
            }
        }



        [Route("viewexamschedule")]
        [HttpGet]
        public async Task<IActionResult> ViewExamSchedule(Int64 VisExamScheduleKey)
        {
            try
            {
                _logger.LogInformation("View Exam Schedule Processing Request");
                var response = await _centerService.ViewExamSchedule(VisExamScheduleKey);
                _logger.LogInformation("View Exam Schedule: " + JsonConvert.SerializeObject(response));
                return Ok(response);

            }
            catch (Exception ex)
            {
                _logger.LogInformation("View Exam Schedule Exception : " + ex.Message);
                throw;
            }
        }


        [Route("editexamschedule")]
        [HttpPost]
        public async Task<IActionResult> EditwExamSchedule(EditExamScheduleRequestDto request)
        {
            try
            {
                _logger.LogInformation("Edit Exam Schedule Processing Request");
                var response = await _centerService.EditExamSchedule(request);
                _logger.LogInformation("Edit Exam Schedule: " + JsonConvert.SerializeObject(response));
                return Ok(response);

            }
            catch (Exception ex)
            {
                _logger.LogInformation("Edit Exam Schedule Exception : " + ex.Message);
                throw;
            }
        }

        [Route("deleteexamschedule")]
        [HttpPost]
        public async Task<IActionResult> DeleteExamSchedule(Int64 VisExamScheduleKey)
        {
            try
            {
                _logger.LogInformation("Delete Exam Schedule Processing Request");
                var response = await _centerService.DeleteExamSchedule(VisExamScheduleKey);
                _logger.LogInformation("Delete Exam Schedule: " + JsonConvert.SerializeObject(response));
                return Ok(response);

            }
            catch (Exception ex)
            {
                _logger.LogInformation("Delete Exam Schedule Exception : " + ex.Message);
                throw;
            }
        }

    }
}
