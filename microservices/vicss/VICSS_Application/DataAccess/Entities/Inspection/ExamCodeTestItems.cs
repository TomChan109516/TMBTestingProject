namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("exam_code_test_items")]
    public class ExamCodeTestItems
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string ExamCodeTestItemId { get; set; }

        [Column("test_items_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestItemsId { get; set; }

        [Column("inspection_type_id", TypeName = "nvarchar(40)")]
        [Required]
        public string InspectionTypeId { get; set; }

        //Navgation Property
        public virtual InspectionType InspectionTypes { get; set; }
        public virtual TestItems TestItems { get; set; }
    }
}
