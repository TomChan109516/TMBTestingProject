namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle_alert")]
    public class VehicleAlert : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        [Required]
        public string VehicleAlertId { get; set; }

        //uk
        [Column("vhcl_alert_code", TypeName = "nvarchar(8)")]
        public string VehicleAlertCode { get; set; }

        [Column("vhcl_alert_name", TypeName = "nvarchar(30)")]
        [Required]
        public string VehicleAlertName { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }

        //Navigation property
    }
}
