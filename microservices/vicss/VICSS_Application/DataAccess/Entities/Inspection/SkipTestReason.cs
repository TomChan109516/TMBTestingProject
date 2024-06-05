namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("skip_test_reason")]
    public class SkipTestReason : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("test_type", TypeName = "nvarchar(20)")]
        [Required]
        public string TestType { get; set; }

        [Column("code", TypeName = "nvarchar(16)")]
        [Required]
        public string Code { get; set; }

        [Column("description", TypeName = "text")]
        [Required]
        public string Description { get; set; }
        [Column("activate_ind", TypeName = "bit")]
        [Required]
        public bool ActivateIndicator { get; set; }

        [Column("exempt_from_dyno_ind", TypeName = "bit")]
        public bool ExemptFromDynoIndicator { get; set; }

        //Navigation Property
        public virtual ICollection<TestResultHeadLamp> TestResultHeadLamps { get; set; }
        public virtual ICollection<TestResultHeight> TestResultHeights { get; set; }
        public virtual ICollection<TestResultVisual> TestResultVisuals { get; set; }
        public virtual ICollection<TestResultAxleWeight> TestResultAxleWeights { get; set; }
        public virtual ICollection<TestResultBrake> TestResultBrakes { get; set; }
        public virtual ICollection<TestResultSpeedometer> TestResultSpeedometers { get; set; }
        public virtual ICollection<TestResultUndercarriage> TestResultUndercarriages { get; set; }
        public virtual ICollection<TestResultExhaust> TestResultExhausts { get; set; }
        public virtual ICollection<TestResultTaximeter> TestResultTaximeters { get; set; }
        public virtual ICollection<TestResultTilting> TestResultTiltings { get; set; }
    }
}


