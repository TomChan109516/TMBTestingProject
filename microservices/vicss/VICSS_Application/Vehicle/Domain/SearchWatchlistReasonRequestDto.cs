namespace VICSS.Service.Vehicle.Domain
{
    using MediatR;
    using System.Text.Json.Serialization;
    using Vehicle.Domain;
    public class SearchWatchlistReasonRequestDto : IRequest<SearchWatchlistReasonResponseDto>
    {
        [JsonPropertyName("centreId")]
        public string? CentreId { get; set; }

        [JsonPropertyName("watchlistReasonType")]
        public char[]? WatchlistReasonType { get; set; }

        [JsonPropertyName("reasonCode")]
        public string? ReasonCode { get; set; }

        [JsonPropertyName("description")]
        public string? Description { get; set; }

        [JsonPropertyName("activeIndicator")]
        public bool ActiveIndicator { get; set; }

        [JsonPropertyName("systemRecordIndicator")]
        public string? SystemRecordIndicator { get; set; }
    }
}
