namespace VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using VICSS.Infrastructure.DataAccesss.Entities.LaneConfiguration;

    [Table("lane")]
    public class Lane : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string LaneId { get; set; }

        //Foriegn key
        [Column("ctr_id", TypeName = "nvarchar(40)")]
        [Required]
        public string CentreId { get; set; }

        [Column("lane_name", TypeName = "nvarchar(10)")]
        [Required]
        public string LaneName { get; set; }

        [Column("lane_type", TypeName = "nvarchar(10)")]
        [Required]
        public string LaneType { get; set; }

        [Column("lane_description", TypeName = "varchar(max)")]
        [Required]
        public string LaneDescription { get; set; }

        [Column("lane_actv_ind", TypeName = "boolean")]
        [Required]
        public bool LaneStatus { get; set; }

        [Column("default_capacity", TypeName = "int")]
        [Required]
        public int DefaultCapacity { get; set; }
        [Column("virtual_lane_id", TypeName = "nvarchar(40)")]
        public string ? VirtualLaneId { get; set; }

        //Navigation Properties
        public virtual ICollection<LaneAvailInspType>? LaneAvailInspTypes { get; set; }
        public virtual ICollection<LaneTimeslot> LaneTimeslot { get; set; }
    }
}
