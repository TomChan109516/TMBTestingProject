namespace VICSS.Service.Inspection.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;
    public class GetExamCodeResponseDto : ApiErrorMessage
    {
        public GetExamCodeResponseDto()
        {
            ExamCodeDtos = new List<ExamCodeDto>();
        }
        [JsonPropertyName("examCodeDtos")]
        public List<ExamCodeDto> ExamCodeDtos { get; set; }
    }
}
