using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class VehicleMake
    {
        [Key]
        public long MakeKey { get; set; }
        [Required]
        [StringLength(10)]
        public string MakeId { get; set; }
        [Required]
        [StringLength(20)]
        public string MakeName { get; set; }

    }
}
