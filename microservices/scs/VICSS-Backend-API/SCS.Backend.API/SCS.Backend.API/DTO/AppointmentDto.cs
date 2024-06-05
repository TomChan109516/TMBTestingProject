using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.DTO
{
    public class AppointmentDto
    {
        [Required]
        public string CentreCode { get; set; } = string.Empty;
        public string PrimaryExamCode { get; set; } = string.Empty;
        public DateTime AppointmentDate { get; set; }
        public string FreeOfCharge { get; set; } = string.Empty;
        public Double ExamFee { get; set; }
        public string? FeeWaiver { get; set; }
        public string? ContactPerson { get; set; }
        public string? Remarks { get; set; }
        public string LaneId { get; set; } = string.Empty;
        public string SupplementaryExamCode { get; set; } = string.Empty;
        public long? ContactNumber { get; set; }
        public string VehicleId { get; set; } = string.Empty;
        public char IsOverBooked { get; set; }
        [Required]
        public string RegMark { get; set; } = string.Empty;
        [Required]
        public string ChassisNumber { get; set; } = string.Empty;
        [Required]
        public string VehicleClassId { get; set; } = string.Empty;

        //public string Last_Txn_Type_Code { get; set; }
    }

    public class CreateAppointmentDto : AppointmentDto
    {
        public long AppointmentNumber { get; set; }
        public string Result { get; set; } = string.Empty;
        public string Bk_Chnl_Name { get; set; } = string.Empty;
        public string PaymentStatus { get; set; } = string.Empty;
        public string Bk_Chnl_Id { get; set; } = string.Empty;
        public string NumberOfReschedules { get; set; } = string.Empty;
        public string Appointment_Status { get; set; } = string.Empty;
        public string Last_Txn_UserId { get; set; } = string.Empty;
    }

    public class AppointmentResponse : HttpStatusResponse
    {
        public CreateAppointmentDto? data { get; set; }
    }
}
