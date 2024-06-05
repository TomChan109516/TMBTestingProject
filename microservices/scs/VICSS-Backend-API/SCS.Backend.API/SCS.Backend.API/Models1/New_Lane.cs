using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("lane")]
    public class New_Lane : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string LaneId { get; set; }

        //Foriegn key
        [Column("ctr_id", TypeName = "nvarchar(40)")]
        [Required]
        public string CenterId { get; set; }

        [Column("lane_name", TypeName = "nvarchar(50)")]
        [Required]
        public string laneName { get; set; }

        [Column("lane_description", TypeName = "text")]
        [Required]
        public string LaneDescription { get; set; }

        [Column("lane_actv_ind", TypeName = "nvarchar(1)")]
        [Required]
        public char LaneStatus { get; set; }

        [Column("default_capacity", TypeName = "int")]
        [Required]
        public int DefaultCapacity { get; set; }

        //Navigation Property

        public virtual ICollection<NewAppointment> Appointments { get; set; }

        public virtual New_Centre Center { get; set; }

        public virtual ICollection<LaneAvailVehicle> LaneAvailVehicles { get; set; }

        public virtual ICollection<Inspection> Inspections { get; set; }

        public virtual ICollection<LaneAvailInspType> LaneAvailInspTypes { get; set; }

        public virtual ICollection<Station> Stations { get; set; }

        public virtual ICollection<LaneTimeslot> LaneTimeslot { get; set; }
    }
}
