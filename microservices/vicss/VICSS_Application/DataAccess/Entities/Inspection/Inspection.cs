namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("inspection")]
    public class Inspection : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string InspectionId { get; set; }

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
        public string? SecondLaneId { get; set; }

        //foreign key
        [Column("dyno_room_id", TypeName = "nvarchar(40)")]
        public string? DynoRoomId { get; set; }

        [Column("dyno_test_select_type", TypeName = "nvarchar(1)")]
        public string? DynoTestSelectType { get; set; }

        [Column("insp_add_info_text", TypeName = "text")]
        public string? InspectionAdditionInformation { get; set; }

        [Column("insp_contact_name", TypeName = "nvarchar(50)")]
        public string? InspectionContactName { get; set; }

        [Column("insp_contact_num", TypeName = "nvarchar(20)")]
        public string? InspectionContactNumber { get; set; }

        [Column("insp_status", TypeName = "nvarchar(20)")]
        [Required]
        public string InspectionStatus { get; set; }

        [Column("insp_start_datetime", TypeName = "datetime")]
        [Required]
        public DateTime InspectionStartDateTime { get; set; }

        [Column("insp_end_datetime", TypeName = "datetime")]
        [Required]
        public DateTime InspectionEndDateTime { get; set; }

        [Column("insp_end_result", TypeName = "nvarchar(1)")]
        [Required]
        public Char InspectionEndResult { get; set; }

        //Navigation Properties
        public virtual ICollection<InspectionExamCode> InspectionExamCodes { get; set; }
        public virtual ICollection<Test> Tests { get; set; }
    }
}
