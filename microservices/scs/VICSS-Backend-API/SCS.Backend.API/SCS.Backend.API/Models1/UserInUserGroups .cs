using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("user_in_user_group")]
    public class UserInUserGroups
    {
        //[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Column("id", TypeName = "bigint")]
        //public Int64 UserToUserGroupMappingId { get; set; }

        [Key]
        [Column("id", TypeName = "nvarchar(40)")]
        public string UserToUserGroupMappingId { get; set; }

        [Column("user_id", TypeName = "nvarchar(40)")]
        [Required]
        public string UserId { get; set; }

        [Column("user_grp_id", TypeName = "nvarchar(40)")]
        [Required]
        public string UserGroupId { get; set; }


        //Navigation Property
        public virtual Users Users { get; set; }

        public virtual UserGroup UserGroupforUser { get; set; }
    }
}
