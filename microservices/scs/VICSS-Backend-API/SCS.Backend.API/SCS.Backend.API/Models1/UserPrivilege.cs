using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace SCS_Backend_API.Models1
{
    [Table("user_privilege")]
    public class UserPrivilege : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Column("autoid", TypeName = "bigint")]
        //public Int64 Id { get; set; }

        [Key]
        [Column("id", TypeName = "nvarchar(40)")]        
        public string PrivilegeId { get; set; }

        [Column("privilege_level", TypeName = "int")]
        [Required]
        public int PrivilegeLevel { get; set; }

        [Column("privilege_desp", TypeName = "text")]        
        public string PrivilegeDescription { get; set; }

        //Navigation Propety
        public virtual ICollection<Users> Users { get; set; }

        public virtual ICollection<UserGroup> UserGroups { get; set; }
    }
}
