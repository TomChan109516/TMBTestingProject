using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("station")]
    public class Station : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string StationId { get; set; }

        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }

        [Column("station_name", TypeName = "nvarchar(10)")]
        [Required]
        public string StationName { get; set; }

        [Column("station_description", TypeName = "text")]
        [Required]
        public string StationDesc { get; set; }

        [Column("station_actv_ind", TypeName = "nvarchar(1)")]
        [Required]
        public string StationActiveIndicator { get; set; }

        //Navigation Property
        public virtual New_Lane Lanes { get; set; }
    }
}
