using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("LaneTimeslot")]
    public class LaneTimeslot
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string TimeSlotId { get; set; }

        //foreign key
        [Column("lane_id", TypeName = "nvarchar(40)")]
        public string LaneId { get;set; }

        [Column("start", TypeName = "datetime")]
        [Required]
        public DateTime TimeSlotBegin { get; set; }

        [Column("end", TypeName = "datetime")]
        [Required]
        public DateTime TimeSlotEnd { get; set; }

        [Column("exam_schd_desp", TypeName = "text")]
        [Required]
        public string ExamScheduleDescription { get; set; }

        [Column("capacity", TypeName = "int")]
        [Required]
        public int Capacity { get; set; }

        //Navigation Property

        public virtual ICollection<NewAppointment> Appointments { get; set; }
        public virtual New_Lane Lane { get; set; }
    }
}
