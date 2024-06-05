namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_undercarriage")]
    public class TestResultUndercarriage
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

        [Column("brake_system_test_level", TypeName = "nvarchar(8)")]
        public string? BrakeSystemTestLevel { get; set; }

        [Column("brake_system_test_result", TypeName = "nvarchar(1)")]
        public string? BrakeSystemTestResult { get; set; }

        [Column("chassis_structure_test_level", TypeName = "nvarchar(8)")]
        public string? ChassisStructureTestLevel { get; set; }

        [Column("chassis_structure_test_result", TypeName = "nvarchar(1)")]
        public string? ChassisStructureTestResult { get; set; }

        [Column("driver_cab_test_level", TypeName = "nvarchar(8)")]
        public string? DriverCabTestLevel { get; set; }

        [Column("driver_cab_test_result", TypeName = "nvarchar(1)")]
        public string? DriverCabTestResult { get; set; }

        [Column("eletrical_system_test_level", TypeName = "nvarchar(8)")]
        public string? EletricalSystemTestLevel { get; set; }

        [Column("eletrical_system_test_result", TypeName = "nvarchar(1)")]
        public string? EletricalSystemTestResult { get; set; }

        [Column("engine_test_level", TypeName = "nvarchar(8)")]
        public string? EngineTestLevel { get; set; }

        [Column("engine_test_result", TypeName = "nvarchar(1)")]
        public string? EngineTestResult { get; set; }

        [Column("exhaust_attachment_test_level", TypeName = "nvarchar(8)")]
        public string? ExhaustAttachmentTestLevel { get; set; }

        [Column("exhaust_attachment_test_result", TypeName = "nvarchar(1)")]
        public string? ExhaustAttachmentTestResult { get; set; }

        [Column("fuel_system_test_level", TypeName = "nvarchar(8)")]
        public string? FuelSystemTestLevel { get; set; }

        [Column("fuel_system_test_result", TypeName = "nvarchar(1)")]
        public string? FuelSystemTestResult { get; set; }

        [Column("other_test_level", TypeName = "nvarchar(8)")]
        public string? OtherTestLevel { get; set; }

        [Column("other_test_result", TypeName = "nvarchar(1)")]
        public string? OtherTestResult { get; set; }

        [Column("steering_attachment_test_level", TypeName = "nvarchar(8)")]
        public string? SteeringAttachmentTestLevel { get; set; }

        [Column("steering_attachment_test_result", TypeName = "nvarchar(1)")]
        public string? SteeringAttachmentTestResult { get; set; }

        [Column("suspension_system_test_level", TypeName = "nvarchar(8)")]
        public string? SuspensionSystemTestLevel { get; set; }

        [Column("suspension_system_test_result", TypeName = "nvarchar(1)")]
        public string? SuspensionSystemTestResult { get; set; }

        [Column("tyre_test_level", TypeName = "nvarchar(8)")]
        public string? TyreTestLevel { get; set; }

        [Column("tyre_test_result", TypeName = "nvarchar(1)")]
        public string? TyreTestResult { get; set; }

        [Column("vehicle_equipment_test_level", TypeName = "nvarchar(8)")]
        public string? VehicleEquipmentTestLevel { get; set; }

        [Column("vehicle_equipment_test_result", TypeName = "nvarchar(1)")]
        public string? VehicleEquipmentTestResult { get; set; }

        [Column("wheel_alignment_test_level", TypeName = "nvarchar(8)")]
        public string? WheelAlignmentTestLevel { get; set; }

        [Column("wheel_alignment_test_result", TypeName = "nvarchar(1)")]
        public string? WheelAlignmentTestResult { get; set; }

        [Column("wheel_test_level", TypeName = "nvarchar(8)")]
        public string? WheelTestLevel { get; set; }

        [Column("wheel_test_result", TypeName = "nvarchar(1)")]
        public string? WheelTestResult { get; set; }

        [Column("wheelguard_test_level", TypeName = "nvarchar(8)")]
        public string? WheelguardTestLevel { get; set; }

        [Column("wheelguard_test_result", TypeName = "nvarchar(1)")]
        public string? WheelguardTestResult { get; set; }

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