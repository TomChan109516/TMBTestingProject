using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using VICSS.Infrastructure.DataAccess.Entities.Inspection;
using VICSS.Infrastructure.DataAccess.Entities;

[Table("test_config_brake")]
public class TestConfigBrake : EntryLog
{
    [Column("id", TypeName = "nvarchar(40)")]
    [Key]
    public string Id { get; set; }

    [Column("test_id", TypeName = "nvarchar(40)")]
    [Required]
    public string TestId { get; set; }

    [Column("num_of_axles", TypeName = "int")]
    [Required]
    public int? NumOfAxles { get; set; }

    [Column("test_type", TypeName = "nvarchar(32)")]
    [Required]
    public string TestType { get; set; }

    [Column("brake_test_method", TypeName = "nvarchar(32)")]
    [Required]
    public string BrakeTestMethod { get; set; }

    [Column("service_brake_efficiency_formula", TypeName = "nvarchar(32)")]
    [Required]
    public string ServiceBrakeEfficiencyFormula { get; set; }

    [Column("parking_brake_efficiency_formula", TypeName = "nvarchar(32)")]
    [Required]
    public string ParkingBrakeEfficiencyFormula { get; set; }

    [Column("secondary_brake", TypeName = "nvarchar(32)")]
    [Required]
    public string SecondaryBrake { get; set; }

    [Column("electronic_park_brake_sys", TypeName = "nvarchar(32)")]
    [Required]
    public string ElectronicParkBrakeSys { get; set; }

    [Column("steering_axle_position", TypeName = "int")]
    [Required]
    public int? SteeringAxlePosition { get; set; }

    [Column("pull_parking_brake_in_advance", TypeName = "nvarchar(32)")]
    [Required]
    public string PullParkingBrakeInAdvance { get; set; }

    [Column("position_dual_tri_axle", TypeName = "nvarchar(32)")]
    public string? PositionDualTriAxle { get; set; }

    [Column("separate_secondary_brake_test", TypeName = "nvarchar(32)")]
    [Required]
    public string SeparateSecondaryBrakeTest { get; set; }

    [Column("secondary_brake_efficiency_formula", TypeName = "nvarchar(32)")]
    [Required]
    public string SecondaryBrakeEfficiencyFormula { get; set; }

    [Column("service_brake", TypeName = "nvarchar(4)")]
    public string? ServiceBrake { get; set; }

    [Column("parking_brake", TypeName = "nvarchar(4)")]
    public string? ParkingBrake { get; set; }

    [Column("tb_parking", TypeName = "nvarchar(4)")]
    [Required]
    public string TbParking { get; set; }

    [Column("brake_system", TypeName = "nvarchar(32)")]
    public string? BrakeSystem { get; set; }

    [Column("vhcl_id", TypeName = "nvarchar(40)")]
    [Required]
    public string VehicleId { get; set; }

    //Navigation Property
    public virtual Test Tests { get; set; }
}