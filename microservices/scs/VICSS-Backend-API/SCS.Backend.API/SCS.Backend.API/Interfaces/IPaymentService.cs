using SCS_Backend_API.DTO;

namespace SCS_Backend_API.Interfaces
{
    public interface IPaymentService
    {
        Task<DeletePaymentResponse> DeletePayment(long appointmentNumber);
        Task<List<ConfirmPaymentResponse>> ConfirmPayment(List<ConfirmPayment> confirmPayment);
        Task<SearchPaymentResponse> SearchPayment(SearchPayment searchPayment);
    }
}
