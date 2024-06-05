using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using SCS_Backend_API.Models;

namespace SCS_Backend_API.Models1
{
    //appointment -- to be changed to
    [Table("New_Appointment")]
    public class NewAppointment : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
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
        public string CenterId { get; set; }

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
        [Required]
        public string VehicleInspectionId { get; set; }

        //foreign key
        [Column("payment_id", TypeName = "nvarchar(40)")]
        [Required]
        public string PaymentId { get; set; }

        [Column("appt_add_info_text", TypeName = "text")]
        [Required]
        public string AppointmentAdditionalInformation { get; set; }

        [Column("appt_bill_datetime", TypeName = "datetime")]
        public DateTime AppointmentBillDateTime { get; set; }

        [Column("appt_confirm_datetime", TypeName = "datetime")]
        public DateTime AppointmentConfirmationDateTime { get; set; }

        [Column("appt_contact_name", TypeName = "nvarchar(50)")]
        public string AppointmentContactName { get; set; }

        [Column("appt_contact_num", TypeName = "nvarchar(20)")]
        public string AppointmentContactNumber { get; set; }

        [Column("appt_create_datetime", TypeName = "datetime")]
        [Required]
        public DateTime AppointmentCreateDateTime { get; set; }

        //To be checked
        [Column("appt_create_sys_id", TypeName = "nvarchar(10)")]
        [Required]
        public string AppointmentCreateSystemId { get; set; }

        [Column("appt_remark_text", TypeName = "nvarchar(256)")]
        public string AppointmentRemark { get; set; }

        [Column("appt_timeslot_seq_num", TypeName = "int")]
        public int AppointmentTimeslotSeqNumber { get; set; }

        [Column("day_ssn_code", TypeName = "nvarchar(5)")]
        public string DaySessionCode { get; set; }

        [Column("exact_schd_insp_datetime", TypeName = "datetime")]
        public DateTime ExactScheduleInspectionDateTime { get; set; }

        //foreign key
        [Column("insp_type_id", TypeName = "nvarchar(40)")]
        public string InspectionTypeId { get; set; }

        [Column("insp_datetime", TypeName = "datetime")]
        public DateTime InspectionDateTime { get; set; }

        //To be checked
        [Column("insp_fee_amt", TypeName = "numeric(7,2)")]
        public float InspectionFeeAmount { get; set; }

        //foreign key
        [Column("insp_fee_wave_id", TypeName = "int")]
        public int InspectionFeeWaiveId { get; set; }

        [Column("wave_actv_ind", TypeName = "nvarchar(1)")]
        [Required]
        public char InspectionFeewaiveActiveIndicator { get; set; }

        //to be checked
        [Column("wave_insp_fee_amt", TypeName = "numeric(7,2)")]
        public float WaiveInspectionFeeAmount { get; set; }

        [Column("no_fee_appt_ind", TypeName = "nvarchar(1)")]
        [Required]
        public char NoFeeAppointmentIndicator { get; set; }

        //to be checked
        [Column("orig_insp_fee_amt", TypeName = "numeric(7,2)")]
        public float OriginalInspectionFeeAmount { get; set; }

        [Column("orig_vis_appt_key", TypeName = "bigint")]
        public Int64 OriginVehicleInspectionAppointmentKey { get; set; }

        //Navigation Property
        public virtual Payment Payment { get; set; }
        public virtual New_Centre Centre { get; set; }
        public virtual NewVehicle Vehicle { get; set; }
        public virtual New_Lane Lane { get; set; }
        public virtual LaneTimeslot LaneTimeslot { get; set; }

        public virtual Inspection Inspection { get; set; }

        public virtual UserAuth UserAuth { get; set; }
    }
}
