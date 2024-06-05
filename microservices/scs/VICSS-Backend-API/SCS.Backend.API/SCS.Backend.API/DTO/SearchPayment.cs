namespace SCS_Backend_API.DTO
{
    public class SearchPayment
    {
        public DateTime CreatedDate { get; set; }

        public long AppointmentNumber { get; set; }

        public string RegMark { get; set; }

        public string[] Center { get; set; }
        public string[] Status { get; set; }

        public string[] Method { get; set; }

        public string Remark { get; set; }
    }

    public class PaymentResponse
    {
        public long AppointmentNumber { get; set; }
        public string CenterCode { get; set; } = string.Empty;
        public string PrimaryExamCode { get; set; } = string.Empty;
        public string VehicleClassId { get; set; } = string.Empty;
        public string RegMark { get; set; } = string.Empty;
        public string VehicleId { get; set; } = string.Empty;
        public Double ExamFee { get; set; }
        public string PaymentMethod { get; set; } = string.Empty;
        public string PaymentRemark { get; set; } = string.Empty;

        public string PaymentStatus { get; set; } = string.Empty;
    }

    public class SearchPaymentResponse : HttpStatusResponse
    {
        public List<PaymentResponse> data { get; set; }
    }
}
