using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class CreateExamScheduleRequestDto
    {
        public string CenterId { get; set; }
        public string ExamScheduleDescription { get; set; }
        public DateTime ExamScheduleBeginDate { get; set; }
        public DateTime ExamScheduleEndDate { get; set; }
        public string BiennialLevelCode { get; set; }
        public DateTime ExamScheduleLastUpdate { get; set; }
        public char ReserveTimeslotActiveIndicator { get; set; }
        public string ExamScheduleTypeCode { get; set; }

    }
}
