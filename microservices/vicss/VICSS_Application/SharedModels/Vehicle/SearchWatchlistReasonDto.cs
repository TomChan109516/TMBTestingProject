namespace VICSS.Shared.Models.Vehicle
{
    using System.Text.Json.Serialization;
    public class SearchWatchlistReasonDto
    {
        public SearchWatchlistReasonDto() { }
    
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("centreId")]
        public string CentreId { get; set; }

        [JsonPropertyName("CentreCode")]
        public string CentreCode { get; set; }

        [JsonPropertyName("watchlistReasonType")]
        public string WatchlistReasonType { get; set; }

        [JsonPropertyName("reasonCode")]
        public string? ReasonCode { get; set; }

        [JsonPropertyName("description")]
        public string? Description { get; set; }

        [JsonPropertyName("activeIndicator")]
        public bool ActiveIndicator { get; set; }

        [JsonPropertyName("systemRecordIndicator")]
        public string SystemRecordIndicator { get; set; }
    }
}
