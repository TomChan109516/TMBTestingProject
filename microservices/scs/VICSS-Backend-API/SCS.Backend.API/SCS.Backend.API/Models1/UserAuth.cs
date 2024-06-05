using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("user_auth")]
    public class UserAuth : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Column("id", TypeName = "bigint")]        
        //public Int64 Id { get; set; }

        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        //[Key]
        [Column("user_id", TypeName = "nvarchar(40)")]
        [Required]
        public string UserId { get; set; }

        [Column("user_name", TypeName = "nvarchar(40)")]
        [Required]
        public string UserName { get; set; }

        [Column("pwd_hash_text", TypeName = "text")]
        [Required]
        public string Password { get; set; }

        [Column("acct_sts_code", TypeName = "nvarchar(1)")]
        [Required]
        public char AccountStatusCode { get; set; }


        //Navigation Property
        public virtual Users Users { get; set; }

        public virtual ICollection<NewAppointment> Appointments { get; set; }
    }
}
