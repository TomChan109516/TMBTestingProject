namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle_model")]
    public class VehicleModel : EntryLog
    {

        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        [Key]
        public string VehicleModelId { get; set; }

        //uk
        [Column("vhcl_model_code", TypeName = "nvarchar(100)")]
        public string VehicleModelCode { get; set; }

        [Column("vhcl_model_name", TypeName = "nvarchar(100)")]
        [Required]
        public string VehicleModelName { get; set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; }
    }
}
