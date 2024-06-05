namespace VICSS.Service.CentreManagement.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Common;

    public class GetExamCodeResponseDto : ApiErrorMessage
    {
        public GetExamCodeResponseDto()
        {
            ExamCodeDetails = new List<ExamCodeDetailsDto>();
        }

        [JsonPropertyName("examCodeDetails")]
        public List<ExamCodeDetailsDto> ExamCodeDetails { get; set; }
    }
}
