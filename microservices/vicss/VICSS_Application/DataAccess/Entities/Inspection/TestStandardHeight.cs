namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("test_standard_height")]
    public class TestStandardHeight : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("vhcl_clss_code", TypeName = "nvarchar(3)")]
        [Required]
        public string VehicleClassCode { get; set; }

        [Column("max_length", TypeName = "int")]
        public int? MaxLength { get; set; }

        [Column("max_width", TypeName = "int")]
        public int? MaxWidth { get; set; }

        [Column("max_height", TypeName = "int")]
        public int? MaxHeight { get; set; }

        [Column("ctr_begin_date", TypeName = "datetime")]
        public DateTime? CenterBeginDate { get; set; }

        [Column("ctr_end_date", TypeName = "datetime")]
        public DateTime? CenterEndDate { get; set; }
    }
}
