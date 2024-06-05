using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("vehicle_type_for_insp_type")]
    public class InspectionTypeForVehicleType
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string InspectionTypeToVehicleTypeMappingId { get; set; }

        // Foreign key
        [Column("inspection_type_id", TypeName = "nvarchar(40)")]
        public string InspectionTypeId { get; set; }

        // Foreign key
        [Column("vehicle_type_id", TypeName = "nvarchar(40)")]
        public string VehicleTypeId { get; set; }

        //Navigation Property
        public virtual ICollection<InspectionType> InspectionTypes { get; set; }

        public virtual ICollection<VehicleType> VehicleTypes { get; set; }
    }
}
