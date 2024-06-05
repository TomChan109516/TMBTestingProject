namespace SCS_Backend_API.DTO
{
    public class DeletePayment
    {
        public long AppointmentNumber { get; set; }
        public string PaymentStatus { get; set; }
    }

    public class DeletePaymentResponse : HttpStatusResponse
    {
        public DeletePayment? data { get; set; }
    }
}