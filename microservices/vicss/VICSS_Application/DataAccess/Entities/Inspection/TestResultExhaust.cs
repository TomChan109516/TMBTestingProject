namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_exhaust")]
    public class TestResultExhaust
    {
        [Key]
        [Column("id", TypeName = "nvarchar(40)")]
        public string Id { get; set; }

        [Column("test_id", TypeName = "nvarchar(40)")]
        public string TestId { get; set; }

        [Column("petrol_ind", TypeName = "boolean")]
        public bool PetrolInd { get; set; }

        [Column("CO_idle", TypeName = "int")]
        public int? COIdle { get; set; }

        [Column("CO_high_idle", TypeName = "int")]
        public int? COHighIdle { get; set; }

        [Column("HC_idle", TypeName = "int")]
        public int? HCIdle { get; set; }

        [Column("HC_high_idle", TypeName = "int")]
        public int? HCHighIdle { get; set; }

        [Column("CO2_idle", TypeName = "int")]
        public int? CO2Idle { get; set; }

        [Column("CO2_high_idle", TypeName = "int")]
        public int? CO2HighIdle { get; set; }

        [Column("O2_idle", TypeName = "int")]
        public int? O2Idle { get; set; }

        [Column("O2_high_idle", TypeName = "int")]
        public int? O2HighIdle { get; set; }

        [Column("NO_idle", TypeName = "int")]
        public int? NOIdle { get; set; }

        [Column("NO_high_idle", TypeName = "int")]
        public int? NOHighIdle { get; set; }

        [Column("lambda_high_idle", TypeName = "int")]
        public int? LambdaHighIdle { get; set; }

        [Column("hsu_1", TypeName = "int")]
        public int? Hsu1 { get; set; }

        [Column("hsu_2", TypeName = "int")]
        public int? Hsu2 { get; set; }

        [Column("hsu_3", TypeName = "int")]
        public int? Hsu3 { get; set; }

        [Column("hsu_4", TypeName = "int")]
        public int? Hsu4 { get; set; }

        [Column("hsu_5", TypeName = "int")]
        public int? Hsu5 { get; set; }

        [Column("hsu_6", TypeName = "int")]
        public int? Hsu6 { get; set; }

        [Column("hsu_7", TypeName = "int")]
        public int? Hsu7 { get; set; }

        [Column("hsu_8", TypeName = "int")]
        public int? Hsu8 { get; set; }

        [Column("hsu_9", TypeName = "int")]
        public int? Hsu9 { get; set; }

        [Column("hsu_10", TypeName = "int")]
        public int? Hsu10 { get; set; }

        [Column("hsu_avg", TypeName = "int")]
        public int? HsuAvg { get; set; }

        [Column("rpm_1", TypeName = "int")]
        public int? Rpm1 { get; set; }

        [Column("rpm_2", TypeName = "int")]
        public int? Rpm2 { get; set; }

        [Column("rpm_3", TypeName = "int")]
        public int? Rpm3 { get; set; }

        [Column("rpm_4", TypeName = "int")]
        public int? Rpm4 { get; set; }

        [Column("rpm_5", TypeName = "int")]
        public int? Rpm5 { get; set; }

        [Column("rpm_6", TypeName = "int")]
        public int? Rpm6 { get; set; }

        [Column("rpm_7", TypeName = "int")]
        public int? Rpm7 { get; set; }

        [Column("rpm_8", TypeName = "int")]
        public int? Rpm8 { get; set; }

        [Column("rpm_9", TypeName = "int")]
        public int? Rpm9 { get; set; }

        [Column("rpm_10", TypeName = "int")]
        public int? Rpm10 { get; set; }

        [Column("rpm_avg", TypeName = "int")]
        public int? RpmAvg { get; set; }

        [Column("result", TypeName = "nvarchar(1)")]
        public string Result { get; set; }

        [Column("skip_test_reason_id", TypeName = "nvarchar(40)")]
        public string? SkipTestReasonId { get; set; }

        [Column("dyno_ind", TypeName = "boolean")]
        public bool DynoInd { get; set; }

        //Navigation Properties
        public virtual Test? Tests { get; set; }
        public virtual SkipTestReason? SkipTestReasons { get; set; }
    }
}