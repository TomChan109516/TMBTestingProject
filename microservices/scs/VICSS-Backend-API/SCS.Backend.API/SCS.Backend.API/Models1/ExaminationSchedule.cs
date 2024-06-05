using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.Models1
{
    [Table("examination_schedule")]
    public class ExaminationSchedule : EntryLog
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("vis_exam_schd_key", TypeName = "bigint")]
        [Key]
        public Int64 VisExamScheduleKey { get; set; }


        //Foriegn key
        [Column("ctr_id", TypeName = "nvarchar(40)")]
        [Required]
        public string CenterId { get; set; }

        [Column("exam_schd_bgn_date", TypeName = "datetime")]
        [Required]
        public DateTime ExamScheduleBeginDate { get; set; }

        [Column("exam_schd_end_date", TypeName = "datetime")]
        [Required]
        public DateTime ExamScheduleEndDate { get; set; }

        [Column("exam_schd_desp", TypeName = "nvarchar(100)")]
        [Required]
        public string ExamScheduleDescription { get; set; }

        [Column("exam_schd_last_upd_date_time", TypeName = "datetime")]
        public DateTime ExamScheduleLastUpdate { get; set; }

        [Column("bi_lvl_code", TypeName = "nvarchar(5)")]
        public string BiennialLevelCode { get; set; }

        [Column("rsrv_tslt_actv_ind", TypeName = "nvarchar(1)")]
        public char ReserveTimeslotActiveIndicator { get; set; }

        [Column("exam_schd_type_code", TypeName = "nvarchar(5)")]
        public string ExamScheduleTypeCode { get; set; }

        //Navigation Property
        public virtual New_Centre Center { get; set; }
        public virtual ICollection<ExaminationScheduleDetails> ExaminationScheduleDetails { get; set; }
    }
}
