using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Permissions;

namespace SCS_Backend_API.Models1
{
    [Table("user")]
    public class Users : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Column("autoid", TypeName = "bigint")]
        //public Int64 Id { get; set; }

        [Key]
        [Column("id" , TypeName = "nvarchar(40)")]
        public string UserId { get; set; }
        
        [Column("privilege_id" , TypeName = "nvarchar(40)")]
        [Required]
        public string PrivilegeId { get; set; }
        
        [Column("ctr_id", TypeName = "nvarchar(40)")]
        [Required]
        public string CenterId { get; set; }

        [Column("user_ctr_role_bgn_date" , TypeName = "datetime")]
        [Required]
        public DateTime UserCenterRoleBeginDate { get; set; }

        [Column("user_ctr_role_end_date", TypeName = "datetime")]
        [Required]
        public DateTime UserCenterRoleEndDate { get; set; }

        [Column("user_ctr_role_rmk_text", TypeName = "nvarchar(100)")]
        public string UserCenterRoleRemarkText { get; set; }

        //Navigation Property
        public virtual UserWorkday UserWorkday { get; set; }

        public virtual UserAuth UserAuth { get; set; }

        public virtual UserPrivilege UserPrivilege { get; set; }

        public virtual ICollection<UserInUserGroups> InUserGroups { get; set; }

        public virtual New_Centre NewCentre { get; set; }

        public virtual ICollection<WatchlistUserAccess> WatchlistUserAccesses { get; set; }        
    }
}
