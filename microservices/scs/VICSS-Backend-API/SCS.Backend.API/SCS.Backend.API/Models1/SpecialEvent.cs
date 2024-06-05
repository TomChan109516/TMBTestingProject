using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("special_event")]
    public class SpecialEvent : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Column("autoid", TypeName = "bigint")]        
        //public Int64 SpecialEventAutoId { get; set; }

        [Column("id" , TypeName = "nvarchar(40)")]
        [Key]
        public string SpecialEventId { get; set; }

        //Foreign key
        [Column("ctr_id", TypeName = "nvarchar(40)")]
        [Required]
        public string CenterId { get; set; }

        
        [Column("spcl_evnt_name", TypeName = "nvarchar(50)")]
        [Required]
        public string SpecialEventName { get; set; }

        [Column("spcl_evnt_description", TypeName = "text")]
        [Required]
        public string SpecialEventDescription { get; set; }

        [Column("spcl_evnt_start_date", TypeName = "datetime")]
        [Required]
        public DateTime SpecialEventStartDate { get; set; }

        [Column("spcl_evnt_start_time", TypeName = "datetime")]
        public DateTime SpecialEventStartTime { get; set; }

        [Column("spcl_evnt_end_date", TypeName = "datetime")]
        [Required]
        public DateTime SpecialEventEndDate { get; set; }

        [Column("spcl_evnt_end_time", TypeName = "datetime")]
        public DateTime SpecialEventEndTime { get; set; }

        [Column("appt_rschd_bgn_date", TypeName = "datetime")]
        [Required]
        public DateTime AppointmentRescheduleBeginDate { get; set; }

        [Column("appt_rschd_end_date", TypeName = "datetime")]
        [Required]
        public DateTime AppointmentRescheduleEndDate { get; set; }

        //Navigation Property
        public virtual New_Centre Centre { get; set; }
    }
}
