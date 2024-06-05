namespace VICSS.Infrastructure.DataAccess.Entities.Inspection
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("inspection_schedule_detail")]
    public class InspectionScheduleDetail
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string InspectionScheduleDetailsId { get; set; }

        [Column("insp_schedule_id", TypeName = "nvarchar(40)")]
        public string InspectionScheduleId { get; set; }

        [Column("physical_lane_id", TypeName = "nvarchar(40)")]
        public string? PhysicalLaneId { get; set; }

        [Column("virtual_lane_id", TypeName = "nvarchar(40)")]
        public string? VirtualLaneId { get; set; }

        [Column("weekday", TypeName = "nvarchar(16)")]
        public string WeekDayName { get; set; }

        [Column("day_session_code", TypeName = "nvarchar(16)")]
        public string DaySessionCode { get; set; }

        [Column("timeslot", TypeName = "nvarchar(16)")]
        public string TimeSlot { get; set; }

        [Column("quota", TypeName = "int")]
        public int Quota { get; set; }

        [Column("reserve_quota", TypeName = "int")]
        public int ReserveQuota { get; set; }

        [Column("block", TypeName = "nvarchar(1)")]
        public string Block { get; set; }

        [Column("schedule_type", TypeName = "nvarchar(16)")]
        public string ScheduleType { get; set; }


        //Navigation Property
        public virtual InspectionSchedule InspectionSchedules { get; set; }

        public virtual ICollection<InspectionScheduleVhclCls> InspectionScheduleVhclCls { get; set; }

        public virtual ICollection<InspectionScheduleExamCode> InspectionScheduleExamCodes { get; set; }
    }
}
