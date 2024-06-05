namespace VICSS.Service.Artu.Controller
{
    using System.ComponentModel.DataAnnotations;
    using System.Net;
    using System.Text;
    using System.Text.Json;
    using System.Xml;
    using global::Artu.Helpers;
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using NLog;
    using NLog.Targets;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Artu.Domain;
    using VICSS.Service.Artu.EventHandlers;
    using VICSS.Service.Artu.Helper;
    using VICSS.Service.Artu.Model;
    using VICSS.Services.Artu.Helper;
    using VICSS.Shared.Models.Common;

    [ApiController]
    [Route("/api/artu")]
    public class ArtuController : ControllerBase
    {
        #region Private Variable
        private readonly IMediator _mediator;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();
        private readonly UtilityHelper _utilityHelper = new UtilityHelper();
        private IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository;
        #endregion

        #region Constructor
        public ArtuController(IMediator mediator)
        {
            _mediator = mediator;
        }
        #endregion

        /// <summary>
        /// Adds a VEE pairing based on the provided request.
        /// </summary>
        /// <param name="request">The request to add a VEE pairing.</param>
        /// <returns>A response indicating the result of the operation.</returns>
        [Route("addveepairing")]
        [HttpPost]
        public async Task<JsonResult> AddVeePairing([FromBody] AddVeePairingRequestDto request)
        {
            if (request == null)
            {
                return new JsonResult("Bad Request") { StatusCode = (int)HttpStatusCode.BadRequest };
            }
            var result = await _mediator.Send(request, CancellationToken.None);
            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Deletes a VEE pairing based on the provided request.
        /// </summary>
        /// <param name="request">The request to delete a VEE pairing.</param>
        /// <returns>A response indicating the result of the operation.</returns>
        [Route("deleteveepairing")]
        [HttpDelete]
        public async Task<JsonResult> DeleteVeePairing([FromBody] DeleteVeePairingRequestDto request)
        {
            if (request == null)
            {
                return new JsonResult("Bad Request") { StatusCode = (int)HttpStatusCode.BadRequest };
            }
            var result = await _mediator.Send(request, CancellationToken.None);
            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Toggles the connection based on the provided request.
        /// </summary>
        /// <param name="request">The request to toggle the connection.</param>
        /// <returns>A response indicating the result of the operation.</returns>
        [Route("toggleconnection")]
        [HttpPost]
        public async Task<JsonResult> ToggleConnection(ToggleConnectionRequestDto request)
        {
            if (request == null)
            {
                return new JsonResult("Bad Request") { StatusCode = (int)HttpStatusCode.BadRequest };
            }
            var result = await _mediator.Send(request);
            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Gets all entities.
        /// </summary>
        /// <returns>A response containing all entities.</returns>
        [HttpGet("getallentities")]
        public async Task<JsonResult> GetAllEntities()
        {
            var getAllTableDetails = new GetAllTableDetailsRequestDto();
            var result = await _mediator.Send(getAllTableDetails);
            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// Gets logs.
        /// </summary>
        /// <returns>A response containing all entities.</returns>
        [HttpGet("getlogs")]
        public JsonResult GetLogs()
        {
            logger.Info("Request to get all logs");
            try
            {
                var target = LogManager.Configuration.FindTargetByName<MemoryTarget>("memory");
                return new JsonResult(JsonSerializer.Serialize(target.Logs)) { StatusCode = 200 };
            }
            catch (Exception ex) { 
                return new JsonResult(ex) { StatusCode = 500 };
            }
        }

        /// <summary>
        /// Sends a Command 0x01 to VEES. "Get the status of VEES"
        /// </summary>
        /// <param name="Xml">The Xml Data to send to VEES.</param>
        /// <returns>A response indicating the result of the operation.</returns>
        [Route("sendcommand01")]
        [HttpPost]
        [RawXmlRequest]
        [Consumes("application/xml")]
        public async Task<JsonResult> SendCommand01(string ArtuEndpointId)
        {
            return await SendCommand(ArtuEndpointId, CommonConstants.Send0x01VeesCommand);
        }
        /// <summary>
        /// Sends a Command 0x02 to VEES. "Control VEES actions (0 termination or interrupt detection, 1 start detection, 2 skip device, 3 clean results, 4 detection end or completion)"
        /// </summary>
        /// <param name="Xml">The Xml Data to send to VEES.</param>
        /// <returns>A response indicating the result of the operation.</returns>
        [Route("sendcommand02")]
        [HttpPost]
        [RawXmlRequest]
        [Consumes("application/xml")]
        public async Task<JsonResult> SendCommand02(string ArtuEndpointId)
        {
            return await SendCommand(ArtuEndpointId, CommonConstants.Send0x02VeesCommand);
        }
        /// <summary>
        /// Sends a Command 0x03 to VEES. "Distribute basic vehicle information to VEES"
        /// </summary>
        /// <param name="Xml">The Xml Data to send to VEES.</param>
        /// <returns>A response indicating the result of the operation.</returns>
        [Route("sendcommand03")]
        [HttpPost]
        [RawXmlRequest]
        [Consumes("application/xml")]
        public async Task<JsonResult> SendCommand03(string ArtuEndpointId)
        {
            return await SendCommand(ArtuEndpointId, CommonConstants.Send0x03VeesCommand);
        }
        /// <summary>
        /// Sends a Command 0x04 to VEES. "Obtain VEES test result data"
        /// </summary>
        /// <param name="Xml">The Xml Data to send to VEES.</param>
        /// <returns>A response indicating the result of the operation.</returns>
        [Route("sendcommand04")]
        [HttpPost]
        [RawXmlRequest]
        [Consumes("application/xml")]
        public async Task<JsonResult> SendCommand04(string ArtuEndpointId)
        {
            return await SendCommand(ArtuEndpointId, CommonConstants.Send0x04VeesCommand);
        }

        [Route("veecommandcontrol")]
        [HttpPost]
        public async Task<JsonResult> VeeCommandControl([FromBody] VeeCommandControlRequestDto request)
        {
            if (request == null || string.IsNullOrEmpty(request.ArtuEndpointId) || request.caseNumber < 0 || request.caseNumber > 10)
            {
                return new JsonResult("Bad Request") { StatusCode = (int)HttpStatusCode.BadRequest };
            }
            var result = await _mediator.Send(request, CancellationToken.None);
            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        #region PrivateMethodRegion
        private async Task<JsonResult> SendCommand(string ArtuEndpointId, int commandNumber)
        {
            (ArtuTcpClient artuTcpClient, _) = GlobalDictionary._connectedClients[ArtuEndpointId];


            string Xml;
            using (System.IO.StreamReader reader = new System.IO.StreamReader(Request.Body, Encoding.UTF8))
            {
                Xml = await reader.ReadToEndAsync();
            }

            PacketModel veesCommand = _utilityHelper.CreatePacketFromXml(commandNumber, System.Text.Encoding.UTF8.GetBytes(Xml));

            //Sends message to Vees Server
            artuTcpClient.Send(veesCommand.CommandString, veesCommand.PacketLength, System.Net.Sockets.SocketFlags.None);

            logger.Info($"Sending Command 0x0{commandNumber} ARTU->VEES with body: {BitConverter.ToString(veesCommand.CommandString, 0, veesCommand.PacketLength).Replace("-", " ")}");

            return new JsonResult("Success") { StatusCode = 200 };
        }

     
        [HttpGet]
        [Route("updatetogglestatus")]
        public async Task UpdateToggleStatus(CancellationToken cancellationToken)
        {
            var updateToggleStatusHandler = new UpdateToggleStatusHandler(genericRepository);

            try
            {
                var response = Response;
                response.Headers.Add("Content-Type", "text/event-stream");
                response.Headers.Add("Cache-Control", "no-cache");
                response.Headers.Add("Connection", "keep-alive");

                while (!cancellationToken.IsCancellationRequested)
                {
                    var statuses = await updateToggleStatusHandler.Handle(cancellationToken);
                    logger.Info($"Handle method returned statuses: {string.Join(", ", statuses)}");
                    foreach (var status in statuses)
                    {
                        if (!string.IsNullOrEmpty(status))
                        {
                            var data = $"data:{status}";
                            logger.Info($"Sending SSE data: {data}"); 
                            var bytes = Encoding.UTF8.GetBytes(data);
                            await response.Body.WriteAsync(bytes, 0, bytes.Length);
                            await response.Body.FlushAsync();
                            await Task.Delay(1000);
                        }
                    }
                }

                logger.Info("Closed Connection for SSE Event");
            }
            catch (Exception ex)
            {
                logger.Error(ex.Message);
            }
        }

        #endregion
    }
}