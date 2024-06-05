namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_tilting")]
    public class TestResultTilting
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("remark", TypeName = "varchar(max)")]
        public string? Remark { get; set; }

        [Column("result", TypeName = "nvarchar(1)")]
        [Required]
        public string Result { get; set; }

        [Column("skip_test_reason_id", TypeName = "nvarchar(40)")]
        public string? SkipTestReasonId { get; set; }

        //Navigation Properties
        public virtual Test Tests { get; set; }
        public virtual SkipTestReason SkipTestReasons { get; set; }

    }
}
