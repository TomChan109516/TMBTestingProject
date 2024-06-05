using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("inspection")]
    public class Inspection : EntryLog
    {

        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string InspectionId { get; set; }

        //foreign key
        [Column("insp_type_id", TypeName = "nvarchar(40)")]
        [Required]
        public string InspectionTypeId { get; set; }

        //foreign key
        [Column("vhcl_id", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleId { get; set; }

        //foreign key
        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }

        //foreign key
        [Column("second_lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string SecondLaneId { get; set; }

        //foreign key
        [Column("dyno_room_id", TypeName = "nvarchar(40)")]
        public string DynoRoomId { get; set; }

        [Column("insp_add_info_text", TypeName = "text")]
        public string InspectionAdditionInformation { get; set; }

        [Column("insp_contact_name", TypeName = "nvarchar(50)")]
        public string InspectionContactName { get; set; }

        [Column("insp_contact_num", TypeName = "nvarchar(20)")]
        public string InspectionContactNumber { get; set; }

        [Column("insp_start_datetime", TypeName = "datetime")]
        [Required]
        public DateTime InspectionStartDateTime { get; set; }

        [Column("insp_end_datetime", TypeName = "datetime")]
        [Required]
        public DateTime InspectionEndDateTime { get; set; }

        [Column("insp_end_result", TypeName = "nvarchar(1)")]
        [Required]
        public Char InspectionEndResult { get; set; }

        //Navigation Property
        public virtual ICollection<NewAppointment> Appointments { get; set; }

        public virtual Test Test { get; set; }

        public virtual InspectionType InspectionType { get; set; }

        public virtual NewVehicle NewVehicle { get; set; }

        public virtual New_Lane Lane { get; set; }
    }
}
