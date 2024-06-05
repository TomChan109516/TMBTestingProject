using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.Models1
{
    public class VehicleMessages
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(25)]
        public string? VehicleId { get; set; }        
        public string MessageEn { get; set; } = string.Empty;
        public string MessageCh { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string? ModifiedBy { get; set; }
        [ForeignKey("VehicleId")]
        public virtual VehicleInformation VehicleInfo { get; set; }
    }
}
