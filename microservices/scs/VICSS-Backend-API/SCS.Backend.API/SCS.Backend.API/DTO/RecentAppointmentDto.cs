namespace SCS_Backend_API.DTO
{
    public class RecentAppointmentDto
    {
        public string AppointmentDate { get; set; }
        public int ExamCode { get; set; }
        public string Center{ get; set; }
        public string? Result { get; set; }
        public string? FOC { get; set; }
    }
}
