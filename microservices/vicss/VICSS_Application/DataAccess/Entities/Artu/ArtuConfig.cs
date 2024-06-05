namespace VICSS.Infrastructure.DataAccess.Entities.Artu
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using VICSS.Infrastructure.DataAccess.Entities;

    [Table("artu_config")]
    public class ArtuConfig : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string ArtuConfigId { get; set; }

        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }

        [Column("station_id", TypeName = "nvarchar(40)")]
        [Required]
        public string StationId { get; set; }

        [Column("vees_ip", TypeName = "nvarchar(20)")]
        [Required]
        public string VeesIp { get; set; }

        [Column("vees_port", TypeName = "nvarchar(20)")]
        [Required]
        public string VeesPort { get; set; }

        [Column("max_log_age", TypeName = "int")]
        [Required]
        [Range(0, 10, ErrorMessage = "MaxLogAge must be a positive number.")]
        public int MaxLogAge { get; set; }

        [Column("vee_heart_beat_interval", TypeName = "numeric(9,2)")]
        [Required]
        [Range(1000.0, 90000.0, ErrorMessage = "Code must be between 10000.0 and 90000.0")]
        public float VEEHeartBeatInterval { get; set; }

        [Column("description", TypeName = "nvarchar(40)")]
        [Required]
        public string Description { get; set; }
    }
}