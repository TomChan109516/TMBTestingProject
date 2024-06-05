namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_sdd")]
    public class TestResultSdd
    {
        [Key]
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        public string Id { get; set; }

        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("testing_speed", TypeName = "int")]
        [Required]
        public int TestingSpeed { get; set; }

        [Column("actual_speed", TypeName = "int")]
        [Required]
        public int ActualSpeed { get; set; }

        [Column("display_speed", TypeName = "int")]
        [Required]
        public int DisplaySpeed { get; set; }

        [Column("sdd_make", TypeName = "nvarchar(32)")]
        [Required]
        public string SddMake { get; set; }

        [Column("serial_number", TypeName = "int")]
        [Required]
        public int SerialNumber { get; set; }

        [Column("result", TypeName = "nvarchar(1)")]
        [Required]
        public string Result { get; set; }

        //FK 
        [Column("skip_test_reason_id", TypeName = "nvarchar(40)")]
        public string? SkipTestReasonId { get; set; }

        //Navigation Properties
        public virtual Test Test { get; set; }
        public virtual SkipTestReason SkipTestReasons { get; set; }
    }
}