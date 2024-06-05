namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_config_speedometer")]
    public class TestConfigSpeedometer : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        //FK
        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("speed_setting", TypeName = "int")]
        [Required]
        public int SpeedSetting { get; set; }

        [Column("speed_test_mode", TypeName = "nvarchar(1)")]
        [Required]
        public string SpeedTestMode { get; set; }

        [Column("propulsion", TypeName = "nvarchar(4)")]
        [Required]
        public string Propulsion { get; set; }

        [Column("wheel_test_type", TypeName = "nvarchar(1)")]
        [Required]
        public string WheelTestType { get; set; }

        [Column("mileage_seg_first", TypeName = "int")]
        [Required]
        public int MileageSegFirst { get; set; }

        [Column("mileage_seg_second", TypeName = "int")]
        [Required]
        public int MileageSegSecond { get; set; }

        [Column("mileage_seg_third", TypeName = "int")]
        [Required]
        public int MileageSegThird { get; set; }

        [Column("mileage_seg_forth", TypeName = "int")]
        [Required]
        public int MileageSegForth { get; set; }

        [Column("speed_limit_device", TypeName = "boolean")]
        [Required]
        public bool SpeedLimitDevice { get; set; }

        [Column("speedometer_test", TypeName = "boolean")]
        [Required]
        public bool SpeedometerTest { get; set; }

        [Column("speed_display_device_test", TypeName = "boolean")]
        [Required]
        public bool SpeedDisplayDeviceTest { get; set; }

        [Column("taximeter_test", TypeName = "boolean")]
        [Required]
        public bool TaximeterTest { get; set; }

        [Column("long_distance_test", TypeName = "boolean")]
        [Required]
        public bool LongDistanceTest { get; set; }

        [Column("anti_tempering", TypeName = "boolean")]
        [Required]
        public bool AntiTempering { get; set; }

        //FK
        [Column("vhcl_id", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleId { get; set; }

        //Navigation Properties
        public virtual Test Tests { get; set; }

    }
}
