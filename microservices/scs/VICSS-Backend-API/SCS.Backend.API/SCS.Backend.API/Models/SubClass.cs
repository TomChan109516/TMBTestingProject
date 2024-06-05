using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class SubClass
    {
        
        [Key]
        public int VehicleSubClassKey { get; set; }
        [Required]
        public string VehicleSubClassId { get; set; }
        [Required]
        public string VehicleSubClassName { get; set; }

        [ForeignKey("VehicleClasses")]
        public int VehicleClassId { get; set; }
        public VehicleClass? VehicleClass { get; set; }
    }
}
