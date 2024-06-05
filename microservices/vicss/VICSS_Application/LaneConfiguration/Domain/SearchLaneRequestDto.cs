namespace VICSS.Service.LaneConfiguration.Domain
{
    using MediatR;
    using System.Text.Json.Serialization;
    public class SearchLaneRequestDto:IRequest<SearchLaneResponseDto>
    {
        public SearchLaneRequestDto() { }

        public SearchLaneRequestDto(Shared.Models.LaneConfiguration.SearchLaneRequestDto searchLaneRequest)
        {
            SearchLaneRequest = searchLaneRequest;
        }

        [JsonPropertyName("searchLaneRequestDto")]
        public Shared.Models.LaneConfiguration.SearchLaneRequestDto SearchLaneRequest { get; set; }
    }
}
