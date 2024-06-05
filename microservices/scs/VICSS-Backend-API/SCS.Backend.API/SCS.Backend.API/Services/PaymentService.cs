 using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SCS_Backend_API.Constants;
using SCS_Backend_API.Data;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using SCS_Backend_API.Models1;
using System.Data.Entity;
using System.Net;

namespace SCS_Backend_API.Services
{
    public class PaymentService : IPaymentService
    {
        #region Private Methods
        private readonly AppDBContextEF _context;
        private readonly IMapper _mapper;
        private readonly ILogger<PaymentService> _logger;
        #endregion

        #region Constructor
        public PaymentService(AppDBContextEF context, IMapper mapper, ILogger<PaymentService> logger)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
        }
        #endregion

        #region Public Services
        //DeletePayment

        /// <summary>
        /// Returns the Status of Appointment
        /// </summary>
        /// <param name="appointmentNumber"></param>
        /// <returns>Delete Payment</returns>
        public async Task<DeletePaymentResponse> DeletePayment(long appointmentNumber)
        {
            DeletePaymentResponse response = new DeletePaymentResponse();
            _logger.LogInformation("Service:- PaymentService, Method:- DeletePayment  is started.");

            var appointment =  _context.SCS_Appointments.FirstOrDefault
            (a => a.AppointmentNumber == appointmentNumber);
            if (appointment != null && appointment.PaymentStatus == PaymentStatus.Completed.ToString())
            {
                appointment.PaymentStatus = PaymentStatus.Deleted.ToString();
                appointment.ModifiedDate = DateTime.UtcNow;
                await _context.SaveChangesAsync();
                var paymentResponse = _mapper.Map<DeletePayment>(appointment);
                response.data = paymentResponse;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = CommonMessages.DeletePayment;
                _logger.LogInformation("Service:- PaymentService, Method:- DeletePayment.,Message: ", response.Message);
            }
            else
            {
                response.data = null;
                response.StatusCode = (int)HttpStatusCode.OK;
                response.Message = appointment == null ? CommonMessages.AptNumNotExists : appointment.PaymentStatus == PaymentStatus.Pending.ToString() ? CommonMessages.PaymentStatus : CommonMessages.DeletePaymentFailure;
                _logger.LogInformation("Service:- PaymentService, Method:- DeletePayment.,Message:- ", response.Message);
            }

            _logger.LogInformation("Service:- PaymentService, Method:- DeletePayment  is completed.");
            return response;
        }

        //ConfirmPayment

        /// <summary>
        /// Returns the List of Status of Appointment
        /// </summary>
        /// <param name="confirmPayment"></param>
        /// <returns>Confirm Payment</returns>
        public async Task<List<ConfirmPaymentResponse>> ConfirmPayment(List<ConfirmPayment> confirmPayments)
        {
            List<ConfirmPaymentResponse> response = new List<ConfirmPaymentResponse>();
            ConfirmPaymentResponse payment = new ConfirmPaymentResponse();
            _logger.LogInformation("Service:- PaymentService, Method:- ConfirmPayment  is started.");
            foreach (var app in confirmPayments)
            {
                var appointment = _context.SCS_Appointments.FirstOrDefault
                (a => a.AppointmentNumber == app.AppointmentNumber);
                if (appointment != null && appointment.PaymentStatus == PaymentStatus.Pending.ToString())
                {
                    appointment.PaymentStatus = PaymentStatus.Completed.ToString();
                    appointment.ModifiedDate = DateTime.UtcNow;
                    appointment.PaymentMethod = app.PaymentMethod;
                    appointment.PaymentRemark = app.PaymentRemark;
                    await _context.SaveChangesAsync();
                    var paymentResponse = _mapper.Map<ConfirmPayment>(appointment);
                    payment = new ConfirmPaymentResponse
                    {
                        data = paymentResponse,
                        StatusCode = (int)HttpStatusCode.OK,
                        Message = CommonMessages.ConfirmPayment,
                    };
                    _logger.LogInformation("Service:- PaymentService, Method:- ConfirmPayment.,Message: ", payment.Message);
                }
                else
                {
                    payment = new ConfirmPaymentResponse
                    {
                        data = null,
                        StatusCode = (int)HttpStatusCode.OK,
                        Message = appointment == null ? CommonMessages.AptNumNotExists : appointment.PaymentStatus == PaymentStatus.Completed.ToString() ? CommonMessages.PaymentAlreadyCompleted : CommonMessages.ConfirmPaymentFailure,

                    };
                    _logger.LogInformation("Service:- PaymentService, Method:- ConfirmPayment.,Message:- ", payment.Message);
                }
                response.Add(payment);
            }
            _logger.LogInformation("Service:- PaymentService, Method:- ConfirmPayment  is completed.");
            return response;
        }

        //SearchPayment

        /// <summary>
        /// Returns the Payment Info
        /// </summary>
        /// <param name="searchPayment"></param>
        /// <returns>Payment Information</returns>
        public async Task<SearchPaymentResponse> SearchPayment(SearchPayment searchPayment)
        {
            _logger.LogInformation("Service:- PaymentService, Method:- SearchPayment  is started.");
            SearchPaymentResponse response = new SearchPaymentResponse();
            var paymentData = await SearchPaymentDetails(searchPayment).ConfigureAwait(false);
            var paymentResponse = _mapper.Map<List<PaymentResponse>>(paymentData);
            response.data = paymentResponse;
            response.StatusCode = (int)HttpStatusCode.OK;
            response.Message = paymentData.Count == 0 ? CommonMessages.NoPaymentFound : CommonMessages.PaymentsFetchSuccessfully;
            _logger.LogInformation("Service:- PaymentService, Method:- SearchPayment  is completed.");
            return response;
        }

        private async Task<List<Appointment>> SearchPaymentDetails(SearchPayment searchPayment)
        {
            _logger.LogInformation("Service:- PaymentService, Method:- SearchPaymentDetails  is started.");
            var result = _context.SCS_Appointments.Where(x=>x.CreatedDate.Date==searchPayment.CreatedDate.Date).ToList();
            await Task.Run(() =>
            {
                if (searchPayment.AppointmentNumber > 0)
                {
                    result = result.Where(x => x.AppointmentNumber==searchPayment.AppointmentNumber).ToList();
                }
                if (!string.IsNullOrEmpty(searchPayment.RegMark))
                {
                    result = result.Where(x => x.RegMark.ToLower() == searchPayment.RegMark.ToLower()).ToList();
                }
                if (searchPayment.Center.Length > 0)
                {
                    result = result.Where(x=>searchPayment.Center.Contains(x.CentreCode)).ToList(); 
                }
                if (searchPayment.Status.Length > 0)
                {
                    result = result.Where(x => searchPayment.Status.Contains(x.PaymentStatus)).ToList();
                }
                if (searchPayment.Method.Length > 0)
                {
                    result = result.Where(x => searchPayment.Method.Contains(x.PaymentMethod)).ToList();
                }
                if (!string.IsNullOrEmpty(searchPayment.Remark))
                {
                    result = result.Where(c => c.PaymentRemark.ToLower().Contains(searchPayment.Remark.ToLower())).ToList();
                }

            });
            _logger.LogInformation("Service:- PaymentService, Method:- SearchPaymentDetails  is completed.");
            return new List<Appointment>(result).ToList();

        }
        #endregion
    }
}
