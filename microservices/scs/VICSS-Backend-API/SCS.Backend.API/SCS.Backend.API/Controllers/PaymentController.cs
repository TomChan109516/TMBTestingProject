using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SCS_Backend_API.Constants;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using SCS_Backend_API.Services;

namespace SCS_Backend_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        #region private variables
        private readonly IPaymentService _paymentService;
        private readonly ILogger<PaymentController> _logger;
        #endregion

        #region constructer
        public PaymentController(IPaymentService paymentService, ILogger<PaymentController> logger)
        {
            _paymentService = paymentService;
            _logger = logger;
        }
        #endregion

        #region Action Methods
        //DeletePayment

        /// <summary>
        /// Returns the Status of Appointment
        /// </summary>
        /// <param name="appointmentNumber"></param>
        /// <returns>Delete Payment</returns>
        [Route("deletepayment")]
        [HttpPost]
        public async Task<IActionResult> DeletePayment(long appointmentNumber)
        {
            try
            {
                if (appointmentNumber <= 0)
                {
                    return BadRequest(CommonMessages.AptGreaterThanZero);
                }
                _logger.LogInformation("DeletePayment processing request : " + JsonConvert.SerializeObject(appointmentNumber));
                var response = await _paymentService.DeletePayment(appointmentNumber);
                _logger.LogInformation("DeletePayment response : " + JsonConvert.SerializeObject(appointmentNumber));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("DeletePayment exception : " + ex.Message);
                throw;
            }
        }

        //ConfirmPayment

        /// <summary>
        /// Returns the List of Status of Appointment
        /// </summary>
        /// <param name="confirmPayment"></param>
        /// <returns>Confirm Payment</returns>
        [Route("confirmpayment")]
        [HttpPost]
        public async Task<IActionResult> ConfirmPayment(List<ConfirmPayment> confirmPayment)
        {
            try
            {
                _logger.LogInformation("ConfirmPayment processing request : " + JsonConvert.SerializeObject(confirmPayment));
                var response = await _paymentService.ConfirmPayment(confirmPayment);
                _logger.LogInformation("ConfirmPayment response : " + JsonConvert.SerializeObject(confirmPayment));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("ConfirmPayment exception : " + ex.Message);
                throw;
            }
        }

        //SearchPayment

        /// <summary>
        /// Returns the Payment Info
        /// </summary>
        /// <param name="searchPayment"></param>
        /// <returns>Payment Information</returns>
        [Route("searchpayment")]
        [HttpPost]
        public async Task<IActionResult> SearchPayment(SearchPayment searchPayment)
        {
            try
            {
                _logger.LogInformation("SearchPayment processing request : " + JsonConvert.SerializeObject(searchPayment));
                var response = await _paymentService.SearchPayment(searchPayment);
                _logger.LogInformation("SearchPayment response : " + JsonConvert.SerializeObject(response));
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError("SearchPayment exception : " + ex.Message);
                throw;
            }

        }


        #endregion
    }
}
