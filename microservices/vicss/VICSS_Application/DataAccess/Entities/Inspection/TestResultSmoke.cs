namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_result_smoke")]
    public class TestResultSmoke
    {
        [Key]
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        public string Id { get; set; }

        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("min_power", TypeName = "int")]
        public int? MinPower { get; set; }

        [Column("engine_speed_lower_limit", TypeName = "int")]
        public int? EngineSpeedLowerLimit { get; set; }

        [Column("engine_speed_upper_limit", TypeName = "int")]
        public int? EngineSpeedUpperLimit { get; set; }

        [Column("emission_limit", TypeName = "int")]
        public int? EmissionLimit { get; set; }

        [Column("corrected_max_power_measured", TypeName = "int")]
        public int? CorrectedMaxPowerMeasured { get; set; }

        [Column("vel_max_hp", TypeName = "int")]
        public int? VelMaxHp { get; set; }

        [Column("max_enginee_speed", TypeName = "int")]
        public int? MaxEngineSpeed { get; set; }

        [Column("rpm_100", TypeName = "int")]
        public int? Rpm100 { get; set; }

        [Column("rpm_90", TypeName = "int")]
        public int? Rpm90 { get; set; }

        [Column("rpm_80", TypeName = "int")]
        public int? Rpm80 { get; set; }

        [Column("smoke_100", TypeName = "int")]
        public int? Smoke100 { get; set; }

        [Column("smoke_90", TypeName = "int")]
        public int? Smoke90 { get; set; }

        [Column("smoke_80", TypeName = "int")]
        public int? Smoke80 { get; set; }

        [Column("ambient_temperature", TypeName = "int")]
        public int? AmbientTemperature { get; set; }

        [Column("atmospheric_pressure", TypeName = "int")]
        public int? AtmosphericPressure { get; set; }

        [Column("humidity", TypeName = "int")]
        public int? Humidity { get; set; }
        //Navigation Properties
        public virtual Test Test { get; set; }
    }
}