using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    public class Lane
    {
        
        [Key]
        public int Lane_Key { get; set; }

        public string LaneId { get; set; }     

        public string LaneType { get; set; }
       
        public string? Floor { get; set; }

        public bool IsActive { get; set; } = true;

        public ICollection<Appointment>? Appointments { get; set; }
    }
}
