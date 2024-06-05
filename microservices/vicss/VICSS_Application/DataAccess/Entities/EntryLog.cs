namespace VICSS.Infrastructure.DataAccess.Entities
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public abstract class EntryLog
    {
        [Column("last_rec_txn_datetime", TypeName = "datetime")]
        [Required]
        public DateTime LastRecordTransactionDateTime { get; set; }

        [Column("last_rec_txn_type_code", TypeName = "nvarchar(1)")]
        [Required]
        public char LastRecordTransactionTypeCode { get; set; }

        [Column("last_rec_txn_user_id", TypeName = "nvarchar(32)")]
        public string LastRecordTransactionUserId { get; set; }
    }
}
