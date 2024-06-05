namespace VICSS.Infrastructure.DataAccess.Entities.Appointment
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    // In DB we have new_appointment table name and in excel we have appointment.
    [Table("appointment")]    
    public class Appointment : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string AppointmentId { get; set; }

        //foreign key
        [Column("user_id", TypeName = "nvarchar(40)")]
        [Required]
        public string UserId { get; set; }

        //foreign key
        [Column("ctr_id", TypeName = "nvarchar(40)")]
        [Required]
        public string CentreId { get; set; }

        //foreign key
        [Column("vhcl_id", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleId { get; set; }

        //foreign key
        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }

        //foreign key
        [Column("lane_timeslot_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneTimeSlotId { get; set; }

        //foreign key
        [Column("insp_id", TypeName = "nvarchar(40)")]
        public string? VehicleInspectionId { get; set; }

        //foreign key
        [Column("payment_id", TypeName = "nvarchar(40)")]
        public string? PaymentId { get; set; }

        [Column("appt_num", TypeName = "nvarchar(18)")]
        public string? ExternalAppointmentNumber { get; set; }

        [Column("security_code", TypeName = "nvarchar(6)")]
        public string SecurityCode { get; set; }

        [Column("appt_add_info_text", TypeName = "text")]
        [Required]
        public string AppointmentAdditionalInformation { get; set; }

        [Column("appt_bill_datetime", TypeName = "datetime")]
        public DateTime? AppointmentBillDateTime { get; set; }

        [Column("appt_confirm_datetime", TypeName = "datetime")]
        public DateTime AppointmentConfirmationDateTime { get; set; }

        [Column("appt_contact_name", TypeName = "nvarchar(50)")]
        public string? AppointmentContactName { get; set; }

        [Column("appt_contact_num", TypeName = "nvarchar(20)")]
        public string? AppointmentContactNumber { get; set; }

        [Column("appt_create_datetime", TypeName = "datetime")]
        [Required]
        public DateTime AppointmentCreateDateTime { get; set; }

        [Column("appt_create_sys_id", TypeName = "nvarchar(10)")]
        [Required]
        public string AppointmentCreateSystemId { get; set; }

        [Column("appt_remark_text", TypeName = "nvarchar(256)")]
        public string? AppointmentRemark { get; set; }

        [Column("appt_timeslot_seq_num", TypeName = "int")]
        public int? AppointmentTimeslotSeqNumber { get; set; }

        [Column("appt_status", TypeName = "nvarchar(10)")]
        [Required]
        public string AppointmentStatus { get; set; }

        [Column("exact_schd_insp_datetime", TypeName = "datetime")]
        public DateTime? ExactScheduleInspectionDateTime { get; set; }

        //foreign key
        [Column("insp_type_id", TypeName = "nvarchar(40)")]
        public string? InspectionTypeId { get; set; }

        [Column("insp_datetime", TypeName = "datetime")]
        public DateTime? InspectionDateTime { get; set; }

        [Column("orig_vis_appt_key", TypeName = "bigint")]
        public Int64? OriginVehicleInspectionAppointmentKey { get; set; }

        [Column("recheck_ind", TypeName = "nvarchar(1)")]
        [Required]
        public string RecheckAppointmentIndicator { get; set; }

        [Column("allow_overbook_ind", TypeName = "nvarchar(1)")]
        [Required]
        public string AllowOverbookIndicator { get; set; }


        //Navigation Properties
        public virtual Payment Payment { get; set; }
    }
}
