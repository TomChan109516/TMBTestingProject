using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    public class Appointment
    {
        [Key]
        public int Appointment_Key { get;set; }
        public long AppointmentNumber { get; set; }
        public string CentreCode { get; set; }
        public string PrimaryExamCode { get; set; }
        public DateTime CreatedDate { get; set; } 
        public DateTime ModifiedDate { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string FreeOfCharge { get; set; }//boolean
        public Double ExamFee { get; set; }
        public string? FeeWaiver { get; set; }
        public string? ContactPerson { get; set; }
        public string? Remarks { get; set; }
        public string LaneId { get; set; }

        [ForeignKey("LaneId")]
        public Lane Lanes { get; set; }

        public string Time { get; set; }
        
        public string SupplementaryExamCode { get; set; }
        public long? ContactNumber { get; set; }

        [StringLength(25)]
        public string VehicleId { get; set; }
        [ForeignKey("VehicleId")]
        public VehicleInformation VehicleInfo { get; set; }

        [StringLength(10)]
        public string RegMark { get; set; }

        [StringLength(25)]
        public string ChassisNumber { get; set; }

        public string VehicleClassId { get; set; }

        public char IsOverBooked { get; set; } = 'N';

        public string Appointment_Status { get; set; }

        public string Last_Txn_Type_Code { get; set; }

        public string Last_Txn_UserId { get; set; }

        public string Result { get; set; }
        public string PaymentStatus { get; set; } = string.Empty;
        [ForeignKey("Bk_Chnl_Id")]
        public string Bk_Chnl_Id { get; set; } = string.Empty;
        public long SecurityCode { get; set; }
        public string HoldTimeSlot { get; set; } = string.Empty;
        public string NumberOfReschedules { get; set; } = string.Empty;

        public string PaymentMethod { get;set; } = string.Empty;
        public string PaymentRemark { get; set; } = string.Empty;

        public BookingChannel BookingChannel { get; set; }

        public ICollection<AppointmentHistory> History { get; set; }

    }
}
