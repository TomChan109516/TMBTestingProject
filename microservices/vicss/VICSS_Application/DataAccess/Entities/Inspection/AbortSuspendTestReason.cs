namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("abort_suspend_test_reason")]
    public class AbortSuspendTestReason : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("code", TypeName = "nvarchar(16)")]
        [Required]
        public string Code { get; set; }

        [Column("description", TypeName = "varchar(max)")]
        [Required]
        public string Description { get; set; }

        [Column("reason_type", TypeName = "nvarchar(1)")]
        [Required]
        public string ReasonType { get; set; }

        [Column("activate_ind", TypeName = "boolean")]
        [Required]
        public bool ActivateIndicator { get; set; }
    }
}