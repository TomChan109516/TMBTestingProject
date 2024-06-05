namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("inspection_schedule")]
    public class InspectionSchedule : EntryLog
    {

        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string InspectionScheduleId { get; set; }

        [Column("ctr_id", TypeName = "nvarchar(40)")]
        public string CentreId { get; set; }

        [Column("type", TypeName = "nvarchar(16)")]
        [Required]
        public string InspectionScheduleType { get; set; }

        [Column("effective_period_start", TypeName = "datetime")]
        [Required]
        public DateTime EffectivePeriodStart { get; set; }

        [Column("effective_period_end", TypeName = "datetime")]
        [Required]
        public DateTime EffectivePeriodEnd { get; set; }

        [Column("action", TypeName = "nvarchar(1)")]
        public string Action { get; set; }

        [Column("description", TypeName = "nvarchar(max)")]
        public string Description { get; set; }

        [Column("bi_level_code", TypeName = "nvarchar(5)")]
        public string BiLevelCode { get; set; }

        //Navigation Properties

        public virtual ICollection<InspectionScheduleDetail> InspectionScheduleDetails { get; set; }
    }
}
