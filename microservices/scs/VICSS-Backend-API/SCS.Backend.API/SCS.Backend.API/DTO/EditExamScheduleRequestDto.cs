﻿namespace SCS_Backend_API.DTO
{
    public class EditExamScheduleRequestDto
    {
        public Int64 VisExamScheduleKey { get; set; }
        public string CenterId { get; set; }
        public DateTime ExamScheduleBeginDate { get; set; }
        public DateTime ExamScheduleEndDate { get; set; }
        public string ExamScheduleDescription { get; set; }
    }
}
