namespace SCS_Backend_API.DTO
{
    public class CreateExamScheduleDetailsDto
    {
        public Int64 VisExamScheduleTimeslotKey { get; set; }
        public string VisExamScheduleKey { get; set; }
        public string LaneId { get; set; }
        public char WeekSessionTimeslotCode { get; set; }
        public string DaySessionTimeslotCode { get; set; }
        public string TimeslotBeginTime { get; set; }
        public string TimeslotEndTime { get; set; }
        public int TimeslotQuantity { get; set; }
        public char TimeslotReserveQuantity { get; set; }
        public char TimeslotChannelCode { get; set; }
        public char ExamScheduleLastUpdate { get; set; }
    }

    public class CreateExamScheduleDetailsResponse : HttpStatusResponse
    {
        public List<CreateExamScheduleDetailsDto>? data { get; set; }
    }
}