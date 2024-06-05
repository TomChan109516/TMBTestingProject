namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("inspection_exam_code")]
    public class InspectionExamCode
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string InspectionExamCodeId { get; set; }

        [Column("insp_id", TypeName = "nvarchar(40)")]
        [Required]
        public string InspectionId { get; set; }

        [Column("exam_code", TypeName = "nvarchar(16)")]
        [Required]
        public string ExamCode { get; set; }

        //Navigation Properties
        public virtual Inspection Inspections { get; set; }
        //public virtual InspectionType InspectionTypes { get; set; } 
    }
}
