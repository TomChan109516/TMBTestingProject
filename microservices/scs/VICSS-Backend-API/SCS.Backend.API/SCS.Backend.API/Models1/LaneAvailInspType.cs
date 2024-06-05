using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("lane_avail_insp_type")]
    public class LaneAvailInspType
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string LaneAvailInspTypeId { get; set; }

        //Foriegn key
        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }

        //Foriegn key
        [Column("insp_type_id", TypeName = "nvarchar(40)")]
        [Required]
        public string InspectionTypeId { get; set; }

        //Navigation Property
        public virtual ICollection<InspectionType> InspectionTypes { get; set; }

        public virtual ICollection<New_Lane> Lanes { get; set; }
    }
}
