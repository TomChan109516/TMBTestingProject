namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("test_config_headlamp")]
    public class TestConfigHeadLamp : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("num_headlamp", TypeName = "nvarchar(32)")]
        [Required]
        public string NumHeadLamp { get; set; }

        [Column("main_beam_adjustable", TypeName = "nvarchar(32)")]
        [Required]
        public string MainBeamAdjustable { get; set; }

        [Column("headlight_measuring_method", TypeName = "nvarchar(32)")]
        [Required]
        public string HeadlightMeasuringMethod { get; set; }

        [Column("steering_position", TypeName = "nvarchar(32)")]
        [Required]
        public string SteeringPosition { get; set; }

        [Column("left_main_lamp", TypeName = "boolean")]
        [Required]
        public bool LeftMainLamp { get; set; }

        [Column("right_main_lamp", TypeName = "boolean")]
        [Required]
        public bool RightMainLamp { get; set; }

        [Column("vhcl_id", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleId { get; set; }

        //Navigation
        public virtual Test Tests { get; set; }

    }
}
