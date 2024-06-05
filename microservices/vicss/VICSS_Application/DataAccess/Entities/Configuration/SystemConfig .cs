namespace VICSS.Infrastructure.DataAccess.Entities.Configuration
{

    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using Microsoft.EntityFrameworkCore.Metadata.Internal;
    using VICSS.Infrastructure.DataAccess.Entities;

    [Table("System_Config")]
    public class SystemConfig : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Required]
        [Key]
        public string Id { get; set; }

        [Column("system_config_id", TypeName = "nvarchar(32)")]
        public string SystemConfigId { get; set; }

        [Column("system_config_text", TypeName = "varchar(max)")]
        public string SystemConfigText { get; set; }

        [Column("system_config_description", TypeName = "varchar(max)")]
        public string SystemConfigDescription { get; set; }
    }
}
