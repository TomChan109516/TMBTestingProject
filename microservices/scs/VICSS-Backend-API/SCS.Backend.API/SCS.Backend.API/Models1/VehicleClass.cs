using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    public class VehicleClass
    {
        [Key]
        public int VehicleClass_Key { get; set; }
        public string VehicleClassId { get; set; }
        public string VehicleClassName { get; set;}

        public bool IsActive { get; set; } = true;

        public ICollection<VehicleInformation> VehicleInfo { get; set; }

        public ICollection<SubClass> SubClasses { get; set; }


    }
}
