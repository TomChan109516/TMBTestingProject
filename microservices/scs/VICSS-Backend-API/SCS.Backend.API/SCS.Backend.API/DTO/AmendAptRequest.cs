using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class AmendAptRequest
    {
        public long AppointmentNumber { get; set; }
        public string PrimaryExamCode { get; set; } = string.Empty;
        public string SupplementaryExamCode { get; set; } = string.Empty;
        public Double ExamFee { get; set; }
        public long? ContactNumber { get; set; }
        public string? ContactPerson { get; set; }
        public string? Remarks { get; set; }
        //public string RegMark { get; set; } = string.Empty;
    }

    public class AmendAptResponse : HttpStatusResponse
    {
        public AmendAptRequest? data { get; set; }
    }
}
