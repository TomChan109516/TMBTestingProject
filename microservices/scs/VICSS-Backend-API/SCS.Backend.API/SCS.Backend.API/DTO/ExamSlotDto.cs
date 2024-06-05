using System.Drawing.Printing;

namespace SCS_Backend_API.DTO
{
    public class ExamSlotDto
    {
        public List<DateTime>? NoQuotaDays { get; set; }
       // public DateTime DateTimeSlot { get; set; }
        public List<DateTime>? Weekends { get; set; }
    }

    public class ExamSlotResponse : HttpStatusResponse
    {
        public ExamSlotDto? data { get; set; }
    }

    public class ExamDateResponse : HttpStatusResponse
    {
        public Dictionary<string, int>? data { get; set; }
    }
}
