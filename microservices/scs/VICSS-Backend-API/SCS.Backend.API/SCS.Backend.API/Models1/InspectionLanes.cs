using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.Models1
{
    public class InspectionLanes
    {
        [Key]        
        public int Lane_Key { get; set; }
        public string LaneId { get; set; }
        public string Lane{ get; set; }

        public string Type { get; set; }

        public string Description { get; set; }      
        
        public ICollection<Center> Centers { get; set; }               
    }
}
