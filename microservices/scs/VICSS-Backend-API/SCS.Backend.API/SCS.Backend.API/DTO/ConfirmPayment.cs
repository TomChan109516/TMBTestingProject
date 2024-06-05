using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class ConfirmPayment
    {
        public long AppointmentNumber { get; set; }
        public string PaymentStatus { get; set; } = string.Empty;

        [Required]
        public string PaymentMethod { get; set; }

        public string PaymentRemark { get; set; } = string.Empty;
    }

    public class ConfirmPaymentResponse : HttpStatusResponse
    {
        public ConfirmPayment? data { get; set; }
    }
}
