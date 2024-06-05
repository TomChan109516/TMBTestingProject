using System;
using System.Collections.Generic;

using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("LaneTimeslot")]
    public class LaneTimeslot
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string TimeSlotId { get; set; }

        //foreign key
        [Column("lane_id", TypeName = "nvarchar(40)")]
        public string LaneId { get; set; }

        [Column("start", TypeName = "datetime")]
        [Required]
        public DateTime TimeSlotBegin { get; set; }

        [Column("end", TypeName = "datetime")]
        [Required]
        public DateTime TimeSlotEnd { get; set; }

        [Column("exam_schd_desp", TypeName = "text")]
        [Required]
        public string? ExamScheduleDescription { get; set; }

        [Column("capacity", TypeName = "int")]
        [Required]
        public int Capacity { get; set; }

        //Navigation Property
        public virtual Lane Lane { get; set; }
    }
}
