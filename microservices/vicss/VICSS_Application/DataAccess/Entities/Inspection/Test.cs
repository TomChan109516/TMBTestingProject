namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("test")]
    public class Test
    {
        [Key]
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("insp_id", TypeName = "nvarchar(40)")]
        [Required]
        public string InspectionId { get; set; }

        [Column("station_id", TypeName = "nvarchar(40)")]
        public string? StationId { get; set; }

        [Column("user_id", TypeName = "nvarchar(40)")]
        [Required]
        public string UserId { get; set; }

        [Column("test_items_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestItemsId { get; set; }

        [Column("mode", TypeName = "nvarchar(8)")]
        [Required]
        public string Mode { get; set; }

        [Column("attempt", TypeName = "int")]
        [Required]
        public int Attempt { get; set; }

        [Column("test_start_time", TypeName = "datetime")]
        public DateTime? TestStartTime { get; set; }

        [Column("test_end_time", TypeName = "datetime")]
        public DateTime? TestEndTime { get; set; }

        [Column("skip_test_reason_id", TypeName = "nvarchar(40)")]
        public string? SkipTestReasonId { get; set; }

        [Column("skip_approval_ind", TypeName = "boolean")]
        public bool? SkipApprovalInd { get; set; }

        [Column("skip_test_follow_up_action", TypeName = "nvarchar(32)")]
        public string? SkipTestFollowUpAction { get; set; }

        [Column("abort_suspend_test_reason_id", TypeName = "nvarchar(40)")]
        public string? AbortSuspendTestReasonId { get; set; }

        [Column("abort_test_remark", TypeName = "text")]
        public string? AbortTestRemark { get; set; }

        [Column("end_result", TypeName = "nvarchar(3)")]
        [Required]
        public string EndResult { get; set; }

        [Column("remark", TypeName = "text")]
        public string? Remark { get; set; }

        [Column("last_rec_txn_datetime", TypeName = "datetime")]
        [Required]
        public DateTime LastRecordTransactionDateTime { get; set; }

        //Navigation Property
        public virtual Inspection Inspections { get; set; }
        public virtual TestItems TestItems { get; set; }
        public virtual ICollection<TestResultHeadLamp> TestResultHeadLamps { get; set; }
        public virtual ICollection<TestResultHeight> TestResultHeights { get; set; }
        public virtual ICollection<TestResultVisual> TestResultVisuals { get; set; }
        public virtual ICollection<TestResultAxleWeight> TestResultAxleWeights { get; set; }
        public virtual ICollection<TestResultBrake> TestResultBrakes { get; set; }
        public virtual ICollection<TestResultSpeedometer> TestResultSpeedometers { get; set; }
        public virtual ICollection<TestResultTaximeter> TestResultTaximeters { get; set; }
        public virtual ICollection<TestResultUndercarriage> TestResultUndercarriages { get; set; }
        public virtual ICollection<TestResultExhaust> TestResultExhausts { get; set; }
        public virtual ICollection<TestConfigHeadLamp> TestConfigHeadLamps { get; set; }

        public virtual ICollection<TestConfigHeight> TestConfigHeights { get; set; }
        public virtual ICollection<TestConfigAxleWeight> TestConfigAxleWeights { get; set; }
        public virtual ICollection<TestConfigBrake> TestConfigBrakes { get; set; }
        public virtual ICollection<TestConfigSpeedometer> TestConfigSpeedometers { get; set; }
        public virtual ICollection<TestConfigTaximeter> TestConfigTaximeters { get; set; }
        public virtual ICollection<TestConfigExhaust> TestConfigExhausts { get; set; }
        public virtual ICollection<TestResultTilting> TestResultTiltings { get; set; }
    }
}
