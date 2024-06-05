namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle_make")]
    public class VehicleMake : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        [Key]
        public string MakeId { get; set; }

        //uk
        [Column("vhcl_make_id", TypeName = "nvarchar(3)")]
        public string VehicleMakeId { get; set; }

        [Column("vhcl_make_name", TypeName = "nvarchar(30)")]
        [Required]
        public string VehicleMakeName { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }

        //Navigation Property
        public virtual ICollection<Vehicle> Vehicles { get; }
    }
}
