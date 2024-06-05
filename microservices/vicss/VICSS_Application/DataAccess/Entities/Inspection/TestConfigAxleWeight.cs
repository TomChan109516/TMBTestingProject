namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("test_config_axle_weight")]
    public class TestConfigAxleWeight : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        //FK
        [Column("test_id", TypeName = "nvarchar(40)")]
        [Required]
        public string TestId { get; set; }

        [Column("awb_measuring_method", TypeName = "nvarchar(32)")]
        [Required]
        public string AwbMeasuringMethod { get; set; }

        [Column("awb_test", TypeName = "nvarchar(32)")]
        [Required]
        public string AwbTest { get; set; }

        //FK
        [Column("vhcl_id", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleId { get; set; }

        //Navigation Properties
        public virtual Test Tests { get; set; }

    }
}
