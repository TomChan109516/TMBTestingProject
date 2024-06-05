namespace SCS_Backend_API.DTO
{
    public class ExamCombinedResponseDto
    {
        public List<ExamCodeDto>? Primary { get; set; }
        public List<ExamCodeDto>? Supplementary { get; set; }

    }
    
    public class ExamResponseDto : HttpStatusResponse
    {
        public ExamCombinedResponseDto? data { get; set; }
    }
}
