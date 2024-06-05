
namespace VICSS.Service.Inspection.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;

    public class SearchMaintainExamCodesResponseDto : ApiErrorMessage
    {
        public SearchMaintainExamCodesResponseDto()
        {
            ListMaintainExamCodes = new List<ExamCodeDto>();
        }

        [JsonPropertyName("listMaintainExamCodes")]
        public List<ExamCodeDto> ListMaintainExamCodes { get; set; }
    }
}
