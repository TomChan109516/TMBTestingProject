using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    [Table("user_workday")]
    public class UserWorkday : EntryLog
    {
        [Column("id", TypeName = "nvarchar(40)")]
        public string Id { get; set; }

        //fk
        [Column("user_id", TypeName = "nvarchar(40)")]
        [Required]
        public string UserId { get; set; }

        [Column("user_duty_start_time_mon", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyStartTimeMon { get; set; }

        [Column("user_duty_end_time_mon", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyEndTimeMon { get; set; }

        [Column("user_duty_start_time_tue", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyStartTimeTue { get; set; }

        [Column("user_duty_end_time_tue", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyEndTimeTue { get; set; }

        [Column("user_duty_start_time_wed", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyStartTimeWed { get; set; }

        [Column("user_duty_end_time_wed", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyEndTimeWed { get; set; }

        [Column("user_duty_start_time_thu", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyStartTimeThu { get; set; }

        [Column("user_duty_end_time_thu", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyEndTimeThu { get; set; }

        [Column("user_duty_start_time_fri", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyStartTimeFri { get; set; }

        [Column("user_duty_end_time_fri", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyEndTimeFri { get; set; }

        [Column("user_duty_start_time_sat", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyStartTimeSat { get; set; }

        [Column("user_duty_end_time_sat", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyEndTimeSat { get; set; }

        [Column("user_duty_start_time_sun", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyStartTimeSun { get; set; }

        [Column("user_duty_end_time_sun", TypeName = "nvarchar(4)")]
        [Required]
        public string UserDutyEndTimeSun { get; set; }

        //Naviation Property

        public virtual Users Users { get; set; }
    }
}
