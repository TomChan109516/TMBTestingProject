using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class Lane
    {
        

        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int LaneId { get; set; }

        [Required]
        public string laneType { get; set; }
       
        public string? Floor { get; set; }
    }
}
