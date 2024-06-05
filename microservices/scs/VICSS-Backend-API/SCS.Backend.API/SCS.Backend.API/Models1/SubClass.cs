using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    public class SubClass
    {
        [Key]
        public int VehicleSubClass_Key { get; set; }
        public string VehicleSubClassId { get; set; }
        public string VehicleSubClassName { get; set; } = string.Empty;

        public string VehicleClassId { get; set; }

        public bool IsActive { get; set; } = true;

        [ForeignKey("VehicleClassId")]
        public virtual VehicleClass? VehicleClasses { get; set; }
    }
}
