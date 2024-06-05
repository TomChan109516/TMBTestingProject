namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle_status")]
    public class VehicleStatus : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        [Key]
        public string VehicleStatusId { get; set; }

        //uk
        [Column("vhcl_sts_code", TypeName = "nvarchar(1)")]

        public string VehicleStatusCode { get; set; }

        [Column("vhcl_status_name", TypeName = "nvarchar(30)")]
        [Required]
        public string VehicleStatusName { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }

        //Navigation Property
        public virtual ICollection<Vehicle> Vehicles { get; }
    }
}
