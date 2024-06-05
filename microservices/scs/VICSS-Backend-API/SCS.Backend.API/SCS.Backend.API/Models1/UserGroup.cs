using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("user_group")]
    public class UserGroup : EntryLog
    {
        //[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Column("user_group_auto_id", TypeName = "bigint")]
        //public Int64 UserGroupAutoId { get; set; }

        [Key]
        [Column("id" , TypeName = "nvarchar(40)")]
        [Required]
        public string UserGroupId { get; set; }


        [Column("privilege_id", TypeName = "nvarchar(40)")]
        [Required]
        public string PrivilegeId { get; set; }

        //Navigation Property
        public virtual UserPrivilege Privilege { get; set; } 

        public virtual ICollection<UserInUserGroups> UserInUserGroup { get; set; }
    }
}
