namespace VICSS.Infrastructure.DataAccess.Entities.Appointment
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;
    [Table("appointment_reschedule_history")]
    public class AppointmentRescheduleHistory : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string AppointmentRescheduleHistoryId { get; set; }

        [Column("appt_id", TypeName = "nvarchar(40)")]
        public string AppointmentId { get; set; }

        [Column("ctr_id", TypeName = "nvarchar(40)")]
        [Required]
        public string CenterId { get; set; }

        //foreign key
        [Column("lane_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneId { get; set; }

        //foreign key
        [Column("lane_timeslot_id", TypeName = "nvarchar(40)")]
        [Required]
        public string LaneTimeSlotId { get; set; }

        [Column("appt_timeslot_seq_num", TypeName = "int")]
        public int? AppointmentTimeslotSeqNumber { get; set; }

        [Column("exact_schd_insp_datetime", TypeName = "datetime")]
        public DateTime? ExactScheduleInspectionDateTime { get; set; }


        //Navigation Properties
    }
}
