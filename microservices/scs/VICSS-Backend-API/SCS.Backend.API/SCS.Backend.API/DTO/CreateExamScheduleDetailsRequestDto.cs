using SCS_Backend_API.Constants;

namespace SCS_Backend_API.DTO
{
    public class CreateExamScheduleDetailsRequestDto
    {
        public int VisExamScheduleKey { get; set; }
        public string LaneId { get; set; }
        public char WeekSessionTimeslotCode { get; set; }
        public string DaySessionTimeslotCode { get; set; }
        public string TimeslotBeginTime { get; set; }
        public string TimeslotEndTime { get; set; }
        public int TimeslotQuantity { get; set; }
        public char TimeslotReserveQuantity { get; set; }
        public char TimeslotChannelCode { get; set; }
        public char InactiveIndicator { get;set; }
        public char ExamScheduleLastUpdate { get; set; }

    }
}
