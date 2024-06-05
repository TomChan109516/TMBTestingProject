using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class Appointment
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long AppointmentNumber { get; set; }
        public string CentreCode { get; set; }
        public int PrimaryExamCode { get; set; }
        public DateTime Date { get; set; }
        public string FreeOfCharge { get; set; }//boolean
        public Double ExamFee { get; set; }
        public string? FeeWaiver { get; set; }
        public string? ContactPerson { get; set; }
        public string? Remarks { get; set; }
        public int Lane { get; set; }
        
        public string Time { get; set; }
        public int? SupplementaryExamCode { get; set; }
        public long? ContactNumber { get; set; }
        [ForeignKey("VehicleInfo")]
        public int VehicleId { get; set; }
        public VehicleInformation VehicleInfo { get; set; }
        public char IsOverBooked { get; set; } = 'N';

        [ForeignKey("Bk_Chnl_Id")]
        public string Bk_Chnl_Id { get; set; }

        public BookingChannel BookingChannel { get; set; }

        

        public string BookingStatus {get; set; }

        public string? PaymentStatus { get; set; }

    }
}
