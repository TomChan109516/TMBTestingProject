namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_sld")]
    public class TestResultSld
    {
        [Key]
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        public string Id { get; set; }

        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("measured_speed", TypeName = "int")]
        public int? MeasuredSpeed { get; set; }

        [Column("sld_make_and_model", TypeName = "nvarchar(32)")]
        public string SldMakeAndModel { get; set; }

        [Column("set_speed", TypeName = "int")]
        public int? SetSpeed { get; set; }

        [Column("serial_number", TypeName = "int")]
        public int? SerialNumber { get; set; }

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