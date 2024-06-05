using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("dyno_timeslot")]
    public class DynoTimeslot
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string DynoTimeSlotId { get; set; }

        //foreign key
        [Column("dyno_room_id", TypeName = "nvarchar(20)")]
        //[Required]
        public string DynoRoomId { get; set; }

        [Column("start", TypeName = "datetime")]
        [Required]
        public DateTime DynoTimeSlotBegin { get; set; }

        [Column("end", TypeName = "datetime")]
        [Required]
        public DateTime DynoTimeSlotEnd { get; set; }

        [Column("exam_schd_desp", TypeName = "text")]
        [Required]
        public string ExamScheduleDescription { get; set; }

        [Column("capacity", TypeName = "int")]
        [Required]
        public int Capacity { get; set; }
    }
}
