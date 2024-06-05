namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_axle_weight")]
    public class TestResultAxleWeight
    {
        [Key]
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        public string Id { get; set; }

        //FK
        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("axlew1", TypeName = "numeric(10,1)")]
        public float? AxleW1 { get; set; }

        [Column("axlew2", TypeName = "numeric(10,1)")]
        public float? AxleW2 { get; set; }

        [Column("axlew3", TypeName = "numeric(10,1)")]
        public float? AxleW3 { get; set; }

        [Column("axlew4", TypeName = "numeric(10,1)")]
        public float? AxleW4 { get; set; }

        [Column("axlew5", TypeName = "numeric(10,1)")]
        public float? AxleW5 { get; set; }

        [Column("axlew6", TypeName = "numeric(10,1)")]
        public float? AxleW6 { get; set; }

        [Column("axlew7", TypeName = "numeric(10,1)")]
        public float? AxleW7 { get; set; }

        [Column("axlew8", TypeName = "numeric(10,1)")]
        public float? AxleW8 { get; set; }

        [Column("overall_weight", TypeName = "numeric(10,1)")]
        public float? OverallWeight { get; set; }

        [Column("result", TypeName = "nvarchar(1)")]
        [Required]
        public string Result { get; set; }

        //FK
        [Column("skip_test_reason_id", TypeName = "nvarchar(40)")]
        public string? SkipTestReasonId { get; set; }

        //Navigation Properties
        public virtual Test Tests { get; set; }
        public virtual SkipTestReason SkipTestReasons { get; set; }
    }
}