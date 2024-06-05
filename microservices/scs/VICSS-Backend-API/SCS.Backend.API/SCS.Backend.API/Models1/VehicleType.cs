using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("vehicle_type")]
    public class VehicleType
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string VehicleTypeId { get; set; }

        //foreign key
        [Column("vhcl_class", TypeName = "nvarchar(4)")]
        //[Required]
        public string VehicleClassCode { get; set; }

        [Column("vhcl_subclass", TypeName = "nvarchar(1)")]
        [Required]
        public string VehicleSubClass { get; set; }

        [Column("description", TypeName = "text")]
        [Required]
        public string VehicleDescription { get; set; }

        //Navigation Property
        public virtual ICollection<NewVehicle> Vehicles { get; set; }

        public virtual ICollection<LaneAvailVehicle> LaneAvailVehicles { get; set; }

        public virtual ICollection<InspectionTypeForVehicleType> InspectionTypeForVehicleTypes { get; set; }
    }
}
