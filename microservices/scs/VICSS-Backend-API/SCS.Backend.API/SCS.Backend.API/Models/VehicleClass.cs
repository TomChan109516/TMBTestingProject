using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class VehicleClass
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int VehicleClassId { get; set; }
        [Required]
        public string VehicleClassName { get; set;}

        public ICollection<VehicleInformation> VehicleInfo { get; set; }  
        
        public ICollection<SubClass> SubClasses { get; set; }


    }
}
