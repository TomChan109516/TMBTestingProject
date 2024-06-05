namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_config_exhaust")]
    public class TestConfigExhaust : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        //FK
        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("air_intake_system", TypeName = "nvarchar(32)")]
        [Required]
        public string AirIntakeSystem { get; set; }

        [Column("propulsion", TypeName = "nvarchar(32)")]
        [Required]
        public string Propulsion { get; set; }

        [Column("pgvw", TypeName = "nvarchar(32)")]
        [Required]
        public string Pgvw { get; set; }

        [Column("num_of_axles", TypeName = "int")]
        [Required]
        public int NumOfAxles { get; set; }

        [Column("hsu_limit", TypeName = "int")]
        [Required]
        public int HsuLimit { get; set; }

        [Column("rpm_limit", TypeName = "int")]
        [Required]
        public int RpmLimit { get; set; }

        [Column("idle_detection_time", TypeName = "int")]
        [Required]
        public int IdleDetectionTime { get; set; }

        [Column("high_idel_detection_time", TypeName = "int")]
        [Required]
        public int HighIdelDetectionTime { get; set; }


        [Column("num_fat_test", TypeName = "int")]
        [Required]
        public int NumFatTest { get; set; }

        [Column("max_rpm", TypeName = "int")]
        [Required]
        public int MaxRpm { get; set; }
        //FK
        [Column("vhcl_id", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleId { get; set; }


        //Navigation Properties
        public virtual Test Tests { get; set; }

    }
}
