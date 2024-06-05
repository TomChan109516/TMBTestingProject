using NLog.Web.LayoutRenderers;

namespace SCS_Backend_API.DTO
{
    public class SearchExamScheduleRequestDto
    {
        public string[] Type { get; set; }
        public string Ctr_Id { get; set; }
        public DateTime? ExamScheduleStartDate{ get; set; }
        public DateTime? ExamScheduleEndDate{ get; set; }
    }
}
