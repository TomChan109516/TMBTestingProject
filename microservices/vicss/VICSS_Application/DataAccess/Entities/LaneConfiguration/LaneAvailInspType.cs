namespace VICSS.Infrastructure.DataAccesss.Entities.LaneConfiguration
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;

    [Table("lane_avail_insp_type")]
    public class LaneAvailInspType
    {
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

        //Navigation Properties
        public virtual Lane Lanes { get; set; }
    }
}
