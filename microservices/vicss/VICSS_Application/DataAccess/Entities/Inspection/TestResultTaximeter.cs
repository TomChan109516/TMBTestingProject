namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_taximeter")]
    public class TestResultTaximeter
    {
        [Key]
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        public string Id { get; set; }

        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("test_1", TypeName = "int")]
        [Required]
        public int Test1 { get; set; }

        [Column("test_2", TypeName = "int")]
        [Required]
        public int Test2 { get; set; }

        [Column("test_3", TypeName = "int")]
        [Required]
        public int Test3 { get; set; }

        [Column("test_4", TypeName = "int")]
        [Required]
        public int Test4 { get; set; }

        [Column("waiting_time_result", TypeName = "nvarchar(1)")]
        [Required]
        public string WaitingTimeResult { get; set; }

        [Column("long_distance_test_result", TypeName = "nvarchar(1)")]
        [Required]
        public string LongDistanceTestResult { get; set; }

        [Column("anti_tampering_result", TypeName = "nvarchar(1)")]
        [Required]
        public string AntiTamperingResult { get; set; }

        [Column("result", TypeName = "nvarchar(1)")]
        [Required]
        public string Result { get; set; }

        //FK
        [Column("skip_test_reason_id", TypeName = "nvarchar(40)")]
        public string? SkipTestReasonId { get; set; }

        [Column("dyno_ind", TypeName = "boolean")]
        [Required]
        public bool DynoInd { get; set; }

        //Navigation Properties
        public virtual Test Tests { get; set; }
        public virtual SkipTestReason SkipTestReasons { get; set; }
    }
}