using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("payment")]
    public class Payment : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Column("id", TypeName = "bigint")]
        //[Key]
        //public Int64 Id { get; set; }

        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string Id { get; set; }

        [Column("pymt_txn_datetime", TypeName = "datetime")]
        public DateTime PaymentTransactionDateTime { get; set; }

        [Column("pymt_txn_num", TypeName = "nvarchar(40)")]
        [Required]
        public string PaymentTransactionNumber { get; set; }        

        [Column("pymt_type_code", TypeName = "nvarchar(10)")]
        [Required]
        public string PaymentTypeCode { get; set; }

        [Column("pymt_amt", TypeName = "numeric(7,2)")]
        public float PaymentAmount { get; set; }

        [Column("pymt_mthd_code", TypeName = "nvarchar(2)")]
        public string PaymentMethodCode { get; set; }

        [Column("fin_instt_code", TypeName = "nvarchar(4)")]
        public string FinancialInsititutionCode { get; set; }

        [Column("fin_instt_pymt_ref_num", TypeName = "nvarchar(50)")]
        public string FinancialInsititutionPaymentReferenceNumber { get; set; }

        [Column("ctr_id", TypeName = "nvarchar(40)")]
        [Required]
        public string CenterId { get; set; }

        [Column("extl_ref_num", TypeName = "nvarchar(40)")]
        public string ExternalReferenceNumber { get; set; }

        //Navigation Property
        public virtual NewAppointment NewAppointments { get; set; }

        public virtual New_Centre Centre { get; set; }
    }
}
