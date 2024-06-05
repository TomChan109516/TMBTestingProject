using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.Models1
{
    public class VehicleMake
    {
        [Key]
        public int Make_Key { get; set; }
        public string MakeId { get; set; }

        [StringLength(20)]
        public string MakeName { get; set; }

        public bool IsActive { get; set; } = true;

    }
}
