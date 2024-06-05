namespace SCS_Backend_API.DTO
{
    public class CreateExamScheduleResponse
    {
        public Int64 VisExamScheduleKey { get; set; }
        public string CenterId { get; set; }
        public string ExamScheduleDescription { get; set; }
        public DateTime ExamScheduleBeginDate { get; set; }
        public DateTime ExamScheduleEndDate { get; set; }
        public DateTime ExamScheduleLastUpdate { get; set; }
    }

    public class CreateExamScheduleResponseDto : HttpStatusResponse
    {
        public CreateExamScheduleResponse? data { get; set; }
    }

}
