namespace Appointment.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using VICSS.Service.Appointment.Domain;
    using VICSS.Service.Models.Appointment;

    [Route("api/appointment")]
    [ApiController]
    public class AppointmentController : Controller
    {
        private readonly IMediator _mediator;

        public AppointmentController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="vehicleId"></param>
        /// <returns></returns>
        [Route("getrecentappointments/{vehicleId}")]
        [HttpGet]
        public async Task<JsonResult> GetRecentAppointments(string vehicleId)
        {
            var result = await _mediator.Send(new GetRecentAppointmentsRequestDto(vehicleId), CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// All,Active,Inactive
        /// </summary>
        /// <param name="appointmentNumber"></param>
        ///  <returns>Result of the operation</returns>
        [Route("getvehicleinfo/{appointmentNumber}")]
        [HttpGet]
        public async Task<JsonResult> GetVehicleInfo(string appointmentNumber)
        {
            var result = await _mediator.Send(new GetVehicleInfoRequestDto(appointmentNumber), CancellationToken.None);

            return new JsonResult(result) { StatusCode = (int)result.HttpStatusCode };
        }

        /// <summary>
        /// 
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [Route("createappointment")]
        [HttpPost]
        public async Task<JsonResult> CreateAppointment([FromBody] CreateAppointmentDto request)
        {
            var result = await _mediator.Send(new CreateAppointmentRequestDto(request), CancellationToken.None);

            return Json(result);
        }

        /// <summary>
        /// 
        /// 
        /// </summary>
        /// <param name="externalAppointmentNumber"></param>
        /// <returns></returns>
        [Route("getappointmentdetails/{externalAppointmentNumber}")]
        [HttpGet]
        public async Task<JsonResult> GetAppointmentDetails(string externalAppointmentNumber)
        {
            var result = await _mediator.Send(new GetApptDetailsByApptIdRequestDto(externalAppointmentNumber), CancellationToken.None);

            return Json(result);
        }

        [Route("blankapiappointment")]
        [HttpGet]
        public async Task<JsonResult> BlankApiAppointment()
        {
            var initialJson = "{\r\n  \"id\": 8,\r\n  \"title\": \"Microsoft Surface Laptop 4\",\r\n  \"description\": \"Style and speed. Stand out on ...\",\r\n  \"price\": 1499,\r\n  \"discountPercentage\": 10.23,\r\n  \"rating\": 4.43,\r\n  \"stock\": 68,\r\n  \"brand\": \"Microsoft Surface\",\r\n  \"category\": \"laptops\",\r\n  \"thumbnail\": \"https://cdn.dummyjson.com/product-images/8/thumbnail.jpg\",\r\n  \"images\": [\r\n    \"https://cdn.dummyjson.com/product-images/8/1.jpg\",\r\n    \"https://cdn.dummyjson.com/product-images/8/2.jpg\",\r\n    \"https://cdn.dummyjson.com/product-images/8/3.jpg\",\r\n    \"https://cdn.dummyjson.com/product-images/8/4.jpg\",\r\n    \"https://cdn.dummyjson.com/product-images/8/thumbnail.jpg\"\r\n  ]\r\n}";

            return Json(initialJson);
        }
    }
}
