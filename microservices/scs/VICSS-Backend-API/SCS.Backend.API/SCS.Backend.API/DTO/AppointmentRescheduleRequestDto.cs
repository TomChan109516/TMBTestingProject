using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class AppointmentRescheduleRequestDto
    {
        public long AppointmentNumber { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string? Remarks { get; set; }
        public string LaneId { get; set; }
        public char IsOverBooked { get; set; }

    }
    public class AppointmentRescheduleDto
    {
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
        public string RegMark { get; set; } = string.Empty;
        public string ChassisNumber { get; set; } = string.Empty;
        public string VehicleClassId { get; set; } = string.Empty;
        public string Appointment_Status { get; set; } = string.Empty;
        public string Last_Txn_UserId { get; set; } = string.Empty;
        public string PaymentStatus { get; set; } = string.Empty;
        public string Bk_Chnl_Id { get; set; } = string.Empty;

        public long AppointmentNumber { get; set; }

        public string Result { get; set; } = string.Empty;

        public string Bk_Chnl_Name { get; set; } = string.Empty;
    }

    public class AppointmentRescheduleResponseDto : HttpStatusResponse
    {
        public AppointmentRescheduleDto? data { get; set; }
    }

}
