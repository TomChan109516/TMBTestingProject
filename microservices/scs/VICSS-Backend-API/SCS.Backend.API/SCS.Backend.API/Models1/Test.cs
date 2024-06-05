using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("test")]
    public class Test
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string TestId { get; set; }

        // Foreign key
        [Column("inspection_id", TypeName = "nvarchar(40)")]
        [Required]
        public string InspectionId { get; set; }

        // Foreign key
        [Column("station_id", TypeName = "nvarchar(40)")]
        [Required]
        public string StationId { get; set; }

        [Column("user_id", TypeName = "nvarchar(40)")]
        [Required]
        public string UserId { get; set; }        

        [Column("test_type", TypeName = "nvarchar(16)")]
        [Required]
        public string TestType { get; set; }

        [Column("mode", TypeName = "nvarchar(18)")]
        [Required]
        public string Mode { get; set; }

        [Column("attempt", TypeName = "int")]
        [Required]
        public int Attempt { get; set; }

        [Column("skip_reason", TypeName = "text")]        
        public string SkipReason { get; set; }

        [Column("skip_approval", TypeName = "nvarchar(1)")]
        public string SkipApproval { get; set; }

        [Column("end_result", TypeName = "nvarchar(1)")]
        [Required]
        public string EndResult { get; set; }        

        //Navigation Property
        public virtual ICollection<Inspection> Inspections { get; set; }
    }
}
