namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("lane")]
    public class Lane : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("ctr_id", TypeName = "nvarchar(40)")]
        [Required]
        public string CentreId { get; set; }

        [Column("lane_name", TypeName = "nvarchar(10)")]
        [Required]
        public string LaneName { get; set; }

        [Column("lane_type", TypeName = "nvarchar(10)")]
        [Required]
        public string LaneType { get; set; }

        [Column("lane_description", TypeName = "text")]
        [Required]
        public string LaneDescription { get; set; }

        [Column("lane_actv_ind", TypeName = "nvarchar(1)")]
        [Required]
        public string LaneActvInd { get; set; }

        [Column("default_capacity", TypeName = "int")]
        [Required]
        public int DefaultCapacity { get; set; }

        //Navigation Property
        public virtual ICollection<Station> Stations { get; set; }
    }
}