namespace VICSS.Service.Inspection.Domain
{
    using System.Text.Json.Serialization;    
    using MediatR;
    using VICSS.Shared.Models.Inspection;

    public class SearchMaintainExamCodesRequestDto : IRequest<SearchMaintainExamCodesResponseDto>
    {
        public SearchMaintainExamCodesRequestDto(SearchExamCodeRequestDto searchexamCodeDto)
        {
            this.searchexamCodeDto = searchexamCodeDto;
        }
        [JsonPropertyName("searchexamCodeDto")]
        public SearchExamCodeRequestDto searchexamCodeDto { get; set; }
    }
}
