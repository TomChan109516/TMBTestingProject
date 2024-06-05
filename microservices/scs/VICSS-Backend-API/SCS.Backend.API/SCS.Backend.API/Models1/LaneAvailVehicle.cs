using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("lane_avail_vehicle")]
    public class LaneAvailVehicle
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string LaneAvailVehicleId { get; set; }
        
        //Foriegn key
        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }

        //Foriegn key
        [Column("vhcl_type_id", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleTypeId { get; set; }

        //Navigation Property
        public ICollection<VehicleType> VehicleTypes { get; set; }

        public ICollection<New_Lane> Lanes { get; set; }
    }
}
