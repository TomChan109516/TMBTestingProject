namespace VICSS.Service.Vehicle.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Vehicle;

    public class SearchWatchlistReasonResponseDto : ApiErrorMessage
    {
        public SearchWatchlistReasonResponseDto()
        {
            searchWatchlistReason = new List<SearchWatchlistReasonDto>();
        }
        [JsonPropertyName("searchWatchlistReason")]
        public List<SearchWatchlistReasonDto> searchWatchlistReason { get; set; }

    }
}
