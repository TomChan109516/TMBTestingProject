using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("inspection_type")]
    public class InspectionType : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string InspectionTypeId { get; set; }

        [Column("exam_code", TypeName = "nvarchar(16)")]
        [Required]
        public string ExamCode { get; set; }

        [Column("insp_type_name", TypeName = "nvarchar(50)")]
        [Required]
        public string InspectionTypeName { get; set; }

        [Column("insp_type_description", TypeName = "text")]
        public string InspectionTypeDescription { get; set; }

        [Column("lane_test_type_1", TypeName = "nvarchar(15)")]
        [Required]
        public string LaneTestType1 { get; set; }

        [Column("lane_test_type_2", TypeName = "nvarchar(15)")]
        [Required]
        public string LaneTestType2 { get; set; }

        [Column("lane_test_type_3", TypeName = "nvarchar(15)")]
        [Required]
        public string LaneTestType3 { get; set; }

        [Column("lane_test_type_4", TypeName = "nvarchar(15)")]
        [Required]
        public string LaneTestType4 { get; set; }

        [Column("lane_test_type_5", TypeName = "nvarchar(15)")]
        [Required]
        public string LaneTestType5 { get; set; }

        [Column("dyno_test_type_1", TypeName = "nvarchar(15)")]
        public string DynoTestType1 { get; set; }

        [Column("dyno_test_type_2", TypeName = "nvarchar(15)")]
        public string DynoTestType2 { get; set; }

        [Column("dyno_test_type_3", TypeName = "nvarchar(15)")]
        public string DynoTestType3 { get; set; }

        [Column("dyno_test_type_4", TypeName = "nvarchar(15)")]
        public string DynoTestType4 { get; set; }

        [Column("dyno_test_type_5", TypeName = "nvarchar(15)")]
        public string DynoTestType5 { get; set; }

        //Navigation Property

        public virtual ICollection<Inspection> Inspections { get; set; }

        public virtual ICollection<InspectionTypeForVehicleType> InspectionTypeForVehicleTypes { get; set; }

        public virtual ICollection<LaneAvailInspType> LaneAvailInspTypes { get; set; }
    }
}
