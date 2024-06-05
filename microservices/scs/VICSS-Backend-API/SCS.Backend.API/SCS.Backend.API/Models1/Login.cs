using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    public class Login
    {
        [Key]
        public int UserID { get; set; }
        [StringLength(20)]
        public string UserName { get; set; }
        [StringLength(20)]
        public string Password { get; set; }

        public bool IsActive { get; set; } = true;

        [StringLength(10)]
        public string Ctr_Id { get; set; }

        [Column("LAST_REC_DEL_DATE")]
        public DateTime LastRecordDeletedate { get; set; }

        [Column("LAST_REC_TXN_DATE")]
        public DateTime LastRecordTransactiondate { get; set;}

        [Column("LAST_REC_TXN_TYPE_CODE")]
        public string LastRecordTransactionCode { get; set; }

        [Column("LAST_REC_TXN_USER_ID")]
        public string LastRecordTransactionUserID { get; set; }

        [ForeignKey("Ctr_Id")]
        public virtual Center Centers { get; set; }
        
    }
}