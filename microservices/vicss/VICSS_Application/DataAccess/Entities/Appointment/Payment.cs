namespace VICSS.Infrastructure.DataAccess.Entities.Appointment
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("payment")]
    public class Payment : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string PaymentId { get; set; }

        [Column("pymt_txn_datetime", TypeName = "datetime")]
        public DateTime? PaymentTransactionDateTime { get; set; }

        [Column("pymt_txn_num", TypeName = "nvarchar(40)")]
        [Required]
        public string PaymentTransactionNumber { get; set; }

        [Column("pymt_type_code", TypeName = "nvarchar(10)")]
        [Required]
        public string PaymentTypeCode { get; set; }

        [Column("pymt_amount", TypeName = "numeric(7,2)")]
        public float? PaymentAmount { get; set; }

        [Column("pymt_method", TypeName = "nvarchar(2)")]
        public string? PaymentMethodCode { get; set; }

        [Column("pymt_status_code", TypeName = "nvarchar(5)")]
        [Required]
        public string PaymentStatusCode { get; set; }

        [Column("remark", TypeName = "text")]
        public string? Remark { get; set; }

        [Column("ctr_id", TypeName = "nvarchar(40)")]
        public string? CenterId { get; set; }

        [Column("extl_ref_num", TypeName = "nvarchar(40)")]
        public string? ExternalReferenceNumber { get; set; }

        [Column("wave_actv_ind", TypeName = "nvarchar(1)")]
        [Required]
        public char InspectionFeeWaiveActiveIndicator { get; set; }

        [Column("wave_insp_fee_amt", TypeName = "numeric(7,2)")]
        public float? WaiveInspectionFeeAmount { get; set; }

        [Column("no_fee_appt_ind", TypeName = "nvarchar(1)")]
        [Required]
        public char NoFeeAppointmentIndicator { get; set; }

        //Navigation Properties
        public virtual Appointment Appointments { get; set; }
    }
}
