using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    public class AppointmentHistory
    {
        [Key]
        public int Id { get; set; }

        public long AppointmentNumber { get; set; }

        public string Reason { get; set;}

        public DateTime CreatedDate { get; set; }
        public DateTime AppointmentDate { get; set; }
        public DateTime TransactionDate { get; set; }

        public string Last_Txn_UserId { get; set; }

        [ForeignKey("AppointmentNumber")]
        public Appointment Appointment { get; set; }
    }
}
