namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("inspection_type")]
    public class InspectionType : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string InspectionTypeId { get; set; }

        //UK
        [Column("exam_code", TypeName = "nvarchar(16)")]
        [Required]
        public string ExamCode { get; set; }

        [Column("exam_clss", TypeName = "nvarchar(16)")]
        [Required]
        public string ExamClass { get; set; }

        [Column("insp_type_name", TypeName = "nvarchar(50)")]
        [Required]
        public string InspectionTypeName { get; set; }

        [Column("insp_type_description", TypeName = "text")]
        public string InspectionTypeDescription { get; set; }

        

        //Navigation Properties
        public virtual ICollection<ExamCodeTestItems> ExamCodeTestItems { get; set; }
    }
}
