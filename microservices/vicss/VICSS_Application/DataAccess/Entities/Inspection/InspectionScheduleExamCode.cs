namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("inspection_schedule_examcode")]
    public class InspectionScheduleExamCode
    {

        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string InspectionScheduleExamCodeId { get; set; }

        [Column("insp_schedule_detail_id", TypeName = "nvarchar(40)")]
        public string InspectionScheduleDetailId { get; set; }

        [Column("insp_type_id", TypeName = "nvarchar(40)")]
        public string InspectionTypeId { get; set; }

        //Navigation Properties

        public virtual InspectionScheduleDetail InspectionScheduleDetails { get; set; }
        public virtual InspectionType InspectionTypes { get; set; }
    }
}
