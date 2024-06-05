namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("formulae")]
    public class Formulae: EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("inspection_item", TypeName = "nvarchar(32)")]
        [Required]
        public string InspectionItem { get; set; }

        [Column("vhcl_class", TypeName = "nvarchar(8)")]
        [Required]
        public string VehicleClass { get; set; }

        [Column("exam_code", TypeName = "nvarchar(4)")]
        [Required]
        public string ExamCode { get; set; }

        [Column("condition", TypeName = "nvarchar(16)")]
        [Required]
        public string Condition { get; set; }

        [Column("service_brake_factor", TypeName = "nvarchar(32)")]
        [Required]
        public string ServiceBrakeFactor { get; set; }

        [Column("secondary_brake_factor", TypeName = "nvarchar(32)")]
        [Required]
        public string SecondaryBrakeFactor { get; set; }

        [Column("parking_brake_factor", TypeName = "nvarchar(32)")]
        [Required]
        public string ParkingBrakeFactor { get; set; }

        [Column("validation_date_start", TypeName = "datetime")]
        public DateTime? ValidationDateStart { get; set; }

        [Column("validation_date_end", TypeName = "datetime")]
        public DateTime? ValidationDateEnd { get; set; }
    }
}
