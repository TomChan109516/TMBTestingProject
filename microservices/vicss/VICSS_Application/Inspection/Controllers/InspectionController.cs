namespace VICSS.Service.Inspection.Controllers
{
    using System.Collections.Concurrent;
    using System.Text;
    using System.Text.Json;
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using NLog;
    using NLog.Targets;
    using System.Collections.Concurrent;
    using System.Text;
    using System.Text.Json;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;

    [ApiController]
    [Route("/api/inspection")]
    public class InspectionController : Controller
    {
        private readonly IMediator _mediator;
        private readonly IKafkaProducer kafkaProducer;
        private readonly IKafkaConsumer kafkaConsumer;
        private static readonly ConcurrentDictionary<Guid, TaskCompletionSource<bool>> Clients =
           new ConcurrentDictionary<Guid, TaskCompletionSource<bool>>();
        private readonly Logger logger = LogManager.GetCurrentClassLogger();


        public InspectionController(IMediator mediator, IKafkaProducer kafkaProducer, IKafkaConsumer consumer)
        {
            _mediator = mediator;
            this.kafkaProducer = kafkaProducer;
            this.kafkaConsumer = consumer;
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>

        [Route("saveohmtestconfiguration")]
        [HttpPost]
        public async Task<JsonResult> SaveOhmTestConfiguration([FromBody] TestConfigOhmRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("saveohmtestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveOhmTestResult([FromBody] OhmTestResultRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("getskiptestreason/{status}")]
        [HttpGet]
        public async Task<JsonResult> GetSkipTestReason(int status)
        {
            var result = await _mediator.Send(new SkipTestReasonRequestDto(status), CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("getohmmeasuringmethod/{status}")]
        [HttpGet]
        public async Task<JsonResult> GetOhmMeasuringMethod(int status)
        {
            var result = await _mediator.Send(new OhmMeasuringMethodRequestDto(status), CancellationToken.None);

            return Json(result);
        }
        /// <summary>
        /// 
        /// UserLogin for Tablet
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("vicsgetdevicetype/{ipaddress}")]
        [HttpGet]
        public async Task<JsonResult> VicsGetDeviceType(string ipaddress)
        {
            TabletLoginRequestDto requestDto = new TabletLoginRequestDto()
            {
                IpAddress = ipaddress
            };
            var result = await _mediator.Send(requestDto, CancellationToken.None);
            return Json(result);
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("userlogin")]
        [HttpPost]
        public async Task<JsonResult> UserLogin(UserLoginRequestDto request)
        {
            //request.IpAddress = HelperFunctions.GetClientIpAddress(HttpContext);
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }
        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>

        [Route("saveheadlamptestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveHeadLampTestResult([FromBody] HeadLampTestResultRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("headlamptestconfiguration")]
        [HttpPost]
        public async Task<JsonResult> HeadLampTestConfiguration([FromBody] HeadLampTestConfigRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="inspectionId"></param>
        ///  <returns>Result of the operation</returns>

        [Route("inspectiondetailsbyinspectionid")]
        [HttpPost]
        public async Task<JsonResult> InspectionDetailsByInspectionId([FromBody] List<string> inspectionId)
        {
            var result = await _mediator.Send(new GetInspectionDetailsByInspectionIdRequestDto(inspectionId), CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="ipaddress"></param>
        ///  <returns>Result of the operation</returns>
        [Route("getdetailsbyip")]
        [HttpGet]
        public async Task<JsonResult> GetDetailsByIp([FromQuery] string clientip)
        {
            //string ipaddress = HelperFunctions.GetClientIpAddress(HttpContext);
            IpRequestDto ipRequestDto = new IpRequestDto() { IpAddress = clientip, Context = HttpContext };
            var result = await _mediator.Send(ipRequestDto, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// returns available quota for available appointment booking slot for selected date.
        ///
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>

        [Route("getavailablequotaforselecteddate")]
        [HttpGet]
        public async Task<JsonResult> GetAvailableQuotaForSelectedDate([FromQuery] ExamSlotAvailabilityDetailsRequestDto request)
        {
            var result = await _mediator.Send(new GetAvailableQuotaForSelectedDateRequestDto(request), CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// returns centre holiday,available quota for booking for selected date range.
        /// 
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>

        [Route("examSlotavailabilitydetailsfordaterange")]
        [HttpGet]
        public async Task<JsonResult> ExamSlotAvailabilityDetailsForDateRange([FromQuery] AvailableQuotaForSelectedDateRangeRequestDto request)
        {
            var result = await _mediator.Send(new GetExamSlotAvailabilityDetailsForDateRangeRequestDto(request), CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// Get Inspection Codes based on status.
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
        [Route("getexamcode/{status}")]
        [HttpGet]
        public async Task<JsonResult> GetExamCode(string status)
        {
            var result = await _mediator.Send(new GetExamCodeRequestDto(status), CancellationToken.None);

            return Json(result);
        }
        /// <summary>
        /// returns UnconfirmedList.
        /// 
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>

        [Route("getallunconfirmedlist")]
        [HttpGet]
        public async Task<JsonResult> GetAllUnconfirmedList()
        {
            var result = await _mediator.Send(new GetUnconfirmedListRequestDto(), CancellationToken.None);

            return Json(result);
        }
        /// <summary>
        /// returns UnconfirmedList.
        /// 
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>

        [Route("addunconfirmedlist")]
        [HttpPost]
        public async Task<JsonResult> AddUnconfirmedList(AddUnconfirmedListRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return Json(result);
        }

        [HttpGet]
        [Route("getstatusofstations/{appointnumber}/{laneid}/{stationid}")]
        public async Task GetStatusOfStations(string appointnumber, string laneid, string stationid)
        {
            GetStatusofTheStationRequestDto stationRequestDto = new GetStatusofTheStationRequestDto()
            {
                AppointmentId = appointnumber,
                LaneId = laneid,
                Station = stationid
            };
            var response = Response;
            response.Headers.Add("Content-Type", "text/event-stream");
            response.Headers.Add("Cache-Control", "no-cache");
            response.Headers.Add("Connection", "keep-alive");

            var clientID = Guid.NewGuid();
            var clientClosed = new TaskCompletionSource<bool>();
            Clients.TryAdd(clientID, clientClosed);

            try
            {

                while (!response.HttpContext.RequestAborted.IsCancellationRequested)
                {
                    var data = await _mediator.Send(stationRequestDto, CancellationToken.None);

                    var message = $"data: {System.Text.Json.JsonSerializer.Serialize(data)}\n\n";
                    var bytes = Encoding.UTF8.GetBytes(message);

                    await response.Body.WriteAsync(bytes, 0, bytes.Length);
                    await response.Body.FlushAsync();
                    await Task.Delay(1000);
                }
            }
            finally
            {
                Clients.TryRemove(clientID, out _);
                clientClosed.SetResult(true);
            }
        }

        #region Save Test Section

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>

        [Route("savevisualtestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveVisualTestResult([FromBody] VisualTestResultRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return Json(result);
        }
        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>

        [Route("saveaxleweighttestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveAxleWeightTestResult([FromBody] AxleWeightTestResultRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return Json(result);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns>Result of the Start Inspection</returns>
        /// 



        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("savebraketestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveBrakeTestResult([FromBody] BrakeTestResultRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("savespeedometertestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveSpeedometerTestResult([FromBody] SpeedometerTestResultRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("saveundercarriagetestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveUndercarriageTestResult([FromBody] UndercarriageTestResultRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("saveexhausttestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveExhaustTestResult([FromBody] ExhaustTestResultRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("savetaximetertestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveTaximeterTestResult([FromBody] TaximeterTestResultRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }
        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("savetiltingtestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveTiltingTestResult([FromBody] TiltingTestResultRequestDto request)
        {
            request.TestDto.StationId = "E";
            request.TestDto.LaneId = "30";
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        #endregion

        #region Start Test - Get Test
        [Route("startinspection")]
        [HttpPost]
        public async Task<JsonResult> StartInspection(StartInspectionDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns>Result of the operation</returns>
        /// 
        [HttpPost]
        [Route("starttest")]
        public async Task<JsonResult> StartTest(StartTestDtoRequest request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns>Result of HeadLamp Test</returns>
        /// 
        [HttpGet]
        [Route("checkteststatus/{appointmentnumber}/{lane}/{testname}")]
        public async Task CheckTestStatus(string appointmentnumber, string lane, string testname, CancellationToken cancellationToken)
        {
            GetTestStatusRequestDto requestDto = new GetTestStatusRequestDto()
            {
                AppointmentNumber = appointmentnumber,
                LaneId = lane,
                TestName = testname
            };

            try
            {
                var response = Response;
                response.Headers.Add("Content-Type", "text/event-stream");
                response.Headers.Add("Cache-Control", "no-cache");
                response.Headers.Add("Connection", "keep-alive");

                while (!cancellationToken.IsCancellationRequested)
                {
                    var data = await _mediator.Send(requestDto, CancellationToken.None);
                    string message = string.Empty;

                    Enum.TryParse(requestDto.TestName.ToUpper(), out TestType testType);

                    switch (testType)
                    {
                        case TestType.HT:
                            if (data.HeadLampData != null)
                                message = $"data: {System.Text.Json.JsonSerializer.Serialize(data.HeadLampData)}\n\n";
                            break;
                        case TestType.OHM:
                            if (data.OhmResultDto != null)
                                message = $"data: {System.Text.Json.JsonSerializer.Serialize(data.OhmResultDto)}\n\n";
                            break;
                        case TestType.Break:
                        default:
                            break;
                    }

                    var bytes = Encoding.UTF8.GetBytes(message);

                    await response.Body.WriteAsync(bytes, 0, bytes.Length);
                    await response.Body.FlushAsync();
                    await Task.Delay(1000);
                }

                logger.Info("Closed Connection for SSE Event");
            }
            catch (Exception ex)
            {
                logger.Error(ex.Message);
            }
        }

        [Route("createinspection")]
        [HttpPost]
        public async Task<JsonResult> CreateInspection([FromBody] InspectionCreatedDto request)
        {
            var result = await _mediator.Send(new InspectionRequestDto(request), CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        #endregion

        /// <summary>
        /// Fetch all test results based on the InspectionId
        /// </summary>
        /// <param name="inspectionId"></param>
        /// <returns>Result of the operation</returns>
        [Route("getalltestresults/{inspectionId}")]
        [HttpGet]
        public async Task<JsonResult> GetAllTestResults(string inspectionId)
        {
            var result = await _mediator.Send(new GetAllTestResultsRequestDto(inspectionId), CancellationToken.None);

            return Json(result);
        }

        [HttpPost]
        [Route("vehicleinfoconf")]
        public async Task<JsonResult> ConfigureVehicleInfoForArtu([FromBody] ArtuInspectionConfigurationDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);
            return new JsonResult(result);

        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [HttpGet]
        [Route("getheadlampconfig/{inspectionId}")]
        public async Task<JsonResult> GetHeadLampConfig(string inspectionId)
        {
            var result = await _mediator.Send(new GetHeadLampConfigRequestDto(inspectionId), CancellationToken.None);
            return Json(result);

        }
        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="request"></param>
        ///  <returns>Result of the operation</returns>
        [Route("savealltestresult")]
        [HttpPost]
        public async Task<JsonResult> SaveAllTestResult([FromBody] SaveAllTestResultRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Gets logs.
        /// </summary>
        /// <returns>A response containing all entities.</returns>
        [HttpGet("getlogs")]
        public async Task<JsonResult> GetLogs()
        {
            logger.Info("Request to get all logs");
            try
            {
                var target = LogManager.Configuration.FindTargetByName<MemoryTarget>("memory");
                return new JsonResult(JsonSerializer.Serialize(target.Logs)) { StatusCode = 200 };
            }
            catch (Exception ex)
            {
                //TODO: remove this later so we are not leaking exception details publically
                return new JsonResult(ex) { StatusCode = 500 };
            }
        }

        /// <summary>
        /// Searches for skip test reasons based on the provided criteria.
        /// </summary>
        /// <param name="searchSkipTestReasonRequestDto">The search criteria.</param>
        /// <returns>Search results</returns>
        [Route("searchskiptestreason")]
        [HttpGet]
        public async Task<IActionResult> SearchSkipTestReason([FromQuery] SearchSkipTestReasonRequestDto searchSkipTestReasonRequestDto)
        {
            var result = await _mediator.Send(searchSkipTestReasonRequestDto, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }
        /// <summary>
        /// Adds a new skip test reason or updates an existing one.
        /// </summary>
        /// <param name="request">The request containing the details of the skip test reason to add or update.</param>
        /// <returns>Result of the operation</returns>
        [Route("addupdateskiptestreason")]
        [HttpPost]
        public async Task<JsonResult> AddUpdateSkipTestReason(AddUpdateSkipTestReasonRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Activates or deactivates a skip test reason.
        /// </summary>
        /// <param name="request">The request containing the details of the skip test reason to activate or deactivate.</param>
        /// <returns>Result of the operation</returns>
        [Route("activatedeactivateskiptestreason")]
        [HttpPost]
        public async Task<JsonResult> ActivateDeactivateSkipTestReason(ActivateDeactivateSkipTestReasonRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Searches for abort/suspend test reasons based on the provided criteria.
        /// </summary>
        /// <param name="searchAbortSuspendTestReasonRequestDto">The search criteria.</param>
        /// <returns>Search results</returns>
        [Route("searchabortsuspendtestreason")]
        [HttpGet]
        public async Task<IActionResult> SearchAbortSuspendTestReason([FromQuery] SearchAbortSuspendTestReasonRequestDto searchAbortSuspendTestReasonRequestDto)
        {
            var result = await _mediator.Send(searchAbortSuspendTestReasonRequestDto, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Adds a new abort/suspend test reason or updates an existing one.
        /// </summary>
        /// <param name="request">The request containing the details of the abort/suspend test reason to add or update.</param>
        /// <returns>Result of the operation</returns>
        [Route("addupdateabortsuspendtestreason")]
        [HttpPost]
        public async Task<JsonResult> AddUpdateAbortSuspendTestReason(AddUpdateAbortSuspendTestReasonRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Activates or deactivates an abort/suspend test reason.
        /// </summary>
        /// <param name="request">The request containing the details of the abort/suspend test reason to activate or deactivate.</param>
        /// <returns>Result of the operation</returns>
        [Route("activatedeactivateabortsuspendtestreason")]
        [HttpPost]
        public async Task<JsonResult> ActivateDeactivateAbortSuspendTestReason([FromBody] ActivateDeactivateAbortSuspendTestReasonsRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Adds a new examCode or updates an existing one.
        /// </summary>
        /// <param name="request">The request containing the details of the exam code to add or update.</param>
        /// <returns>Result of the operation</returns>
        [Route("addUpdateMaintainExamCodes")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<JsonResult> AddUpdateMaintainExamCodes(AddUpdateMaintainExamCodesRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        [Route("addUpdateMaintainequipment")]
        [HttpPost]
        public async Task<JsonResult> MaintainEquipment(MaintainEquipmentRequestDto request)
        {
            var result = await _mediator.Send(request, CancellationToken.None);

            return Json(result);
        }

        [Route("getAllMaintainEquipmentData")]
        [HttpGet]
        public async Task<JsonResult> GetAllMaintainEquipmentData ()
        {
            var result = await _mediator.Send(new SearchMaintainEquipmentDataRequestDto(), CancellationToken.None);

            return Json(result);
        }

        [Route("searchByIdMaintainEquipment")]
        [HttpGet]
        public async Task<JsonResult> SearchByIdMaintainEquipment([FromQuery] string request)
        {
            var result = await _mediator.Send(new GetByIdMaintainEquipmentRequestDto(request), CancellationToken.None);

            return Json(result);
        }
        [Route("disableAndReactiveMaintainEquipment")]
        [HttpPost]
        public async Task<JsonResult> DisableReactiveMaintainEquipment(DisableReactiveMaintainEquipmentRequestDto request)
        {
            var result = await _mediator.Send(request , CancellationToken.None);
            return Json(result);
        }
 
        /// <summary>
        /// 
        /// </summary>
        /// <param name="searchExamCodeRequestDto"></param>
        /// <returns></returns>
        [Route("searchMaintainExamCodes")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> SearchMaintainExamCodes([FromQuery] SearchExamCodeRequestDto searchExamCodeRequestDto)
        {
            var result = await _mediator.Send(new SearchMaintainExamCodesRequestDto(searchExamCodeRequestDto), CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }
    }

}

