namespace SCS_Backend_API.DTO
{
    public class DeleteExamScheduleDto
    {
        public Int64 VisExamScheduleKey { get; set; }
        public string CenterId { get; set; }
        public DateTime ExamScheduleBeginDate { get; set; }
        public DateTime ExamScheduleEndDate { get; set; }
        public string ExamScheduleDescription { get; set; }
        public DateTime ExamScheduleLastUpdate { get; set; }
        public string BiennialLevelCode { get; set; }
        public char ReserveTimeslotActiveIndicator { get; set; }
        public string ExamScheduleTypeCode { get; set; }

        public class DeleteExamScheduleResponse : HttpStatusResponse
        {
            public DeleteExamScheduleDto? data { get; set; }
        }
    }
}
