using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.Models1
{
    [Table("examination_schedule_details")]
    public class ExaminationScheduleDetails : EntryLog
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("vis_exam_schd_tslt_key", TypeName = "bigint")]
        [Key]
        public Int64 VisExamScheduleTimeslotKey { get; set; }

        //Foreign Key
        [Column("vis_exam_schd_key", TypeName = "bigint")]
        [Required]
        public Int64 VisExamScheduleKey { get; set; }

        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }

        [Column("week_ssn_code", TypeName = "nvarchar(1)")]
        public char WeekSessionTimeslotCode { get; set; }

        [Column("day_ssn_code", TypeName = "nvarchar(5)")]
        [Required]
        public string DaySessionTimeslotCode { get; set; }

        [Column("tslt_bgn_time", TypeName = "nvarchar(4)")]
        [Required]
        public string TimeslotBeginTime { get; set; }

        [Column("tslt_end_time", TypeName = "nvarchar(4)")]
        [Required]
        public string TimeslotEndTime { get; set; }

        [Column("tslt_qty", TypeName = "int")]
        [Required]
        public int TimeslotQuantity { get; set; }

        [Column("tslt_qty_reserve", TypeName = "int")]
        public char TimeslotReserveQuantity { get; set; }

        [Column("tslt_chnl_code", TypeName = "nvarchar(1)")]
        [Required]
        public char TimeslotChannelCode { get; set; }

        [Column("inactv_ind", TypeName = "nvarchar(1)")]
        public char ExamScheduleLastUpdate { get; set; }

        //Navigation Property
        public virtual ExaminationSchedule ExaminationSchedule { get; set; }


    }
}
