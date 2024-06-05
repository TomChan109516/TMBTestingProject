namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_visual")]
    public class TestResultVisual
    {
        [Key]
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        public string Id { get; set; }

        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("num_fixed_axles", TypeName = "int")]
        public int? NumFixedAxles { get; set; }

        [Column("num_retract_axles", TypeName = "int")]
        public int? NumRetractAxles { get; set; }

        [Column("num_total_axles", TypeName = "int")]
        public int? NumTotalAxles { get; set; }

        [Column("retract_axles_pos", TypeName = "nvarchar(1)")]
        public string? RetractAxlesPos { get; set; }

        [Column("axle_test_level", TypeName = "nvarchar(8)")]
        public string? AxleTestLevel { get; set; }

        [Column("axles_test_result", TypeName = "nvarchar(1)")]
        public string? AxlesTestResult { get; set; }

        [Column("brake_test_level", TypeName = "nvarchar(8)")]
        public string? BrakeTestLevel { get; set; }

        [Column("brake_test_result", TypeName = "nvarchar(1)")]
        public string? BrakeTestResult { get; set; }

        [Column("chsss_test_level", TypeName = "nvarchar(8)")]
        public string? ChsssTestLevel { get; set; }

        [Column("chsss_test_result", TypeName = "nvarchar(1)")]
        public string? ChsssTestResult { get; set; }

        [Column("dimension_test_level", TypeName = "nvarchar(8)")]
        public string? DimensionTestLevel { get; set; }

        [Column("dimension_test_result", TypeName = "nvarchar(1)")]
        public string? DimensionTestResult { get; set; }

        [Column("document_test_level", TypeName = "nvarchar(8)")]
        public string? DocumentTestLevel { get; set; }

        [Column("document_test_result", TypeName = "nvarchar(1)")]
        public string? DocumentTestResult { get; set; }

        [Column("door_test_level", TypeName = "nvarchar(8)")]
        public string? DoorTestLevel { get; set; }

        [Column("door_test_result", TypeName = "nvarchar(1)")]
        public string? DoorTestResult { get; set; }

        [Column("driver_cab_test_level", TypeName = "nvarchar(8)")]
        public string? DriverCabTestLevel { get; set; }

        [Column("driver_cab_test_result", TypeName = "nvarchar(1)")]
        public string? DriverCabTestResult { get; set; }

        [Column("driver_view_test_level", TypeName = "nvarchar(8)")]
        public string? DriverViewTestLevel { get; set; }

        [Column("driver_view_test_result", TypeName = "nvarchar(1)")]
        public string? DriverViewTestResult { get; set; }

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