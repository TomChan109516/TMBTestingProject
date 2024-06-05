namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("station")]
    public class Station : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }

        [Column("station_name", TypeName = "nvarchar(10)")]
        [Required]
        public string StationName { get; set; }

        [Column("station_description", TypeName = "text")]
        [Required]
        public string StationDescription { get; set; }

        [Column("station_actv_ind", TypeName = "nvarchar(1)")]
        [Required]
        public string StationActvInd { get; set; }

        //Navigation Properties
        public Lane Lane { get; set; }
        public virtual ICollection<Equipment> Equipments { get; set; }
    }
}
