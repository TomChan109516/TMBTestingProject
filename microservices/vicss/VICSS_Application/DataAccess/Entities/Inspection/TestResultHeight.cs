namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_ohm")]
    public class TestResultHeight
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        //FK
        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("length", TypeName = "int")]
        public int Length { get; set; }

        [Column("width", TypeName = "int")]
        public int Width { get; set; }

        [Column("height", TypeName = "int")]
        public int Height { get; set; }

        [Column("result", TypeName = "nvarchar(1)")]
        public string Result { get; set; }


        //FK
        [Column("skip_test_reason_id", TypeName = "nvarchar(40)")]
        public string? SkiptTestReasonId { get; set; }

        //Navigation Property
        public virtual Test Tests { get; set; }
        public virtual SkipTestReason SkipTestReasons { get; set; }
    }
}
