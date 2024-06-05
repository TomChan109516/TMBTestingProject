namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle_color")]
    public class VehicleColor : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        [Key]
        public string VehicleColorId { get; set; }

        //uk
        [Column("vhcl_color_code", TypeName = "nvarchar(1)")]
        public string VehicleColorCode { get; set; }

        [Column("vhcl_color_name", TypeName = "nvarchar(30)")]
        [Required]
        public string VehicleColorName { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }

        //Navigation Property
        //public virtual ICollection<Vehicle> Vehicles { get; }
    }
}
