namespace VICSS.Shared.Models.Vehicle
{
    using System.Text.Json.Serialization;
    public class AddUpdateWatchlistReasonDto
    {
        public AddUpdateWatchlistReasonDto() { }
      
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("centreId")]
        public string CentreId { get; set; }

        [JsonPropertyName("watchlistReasonType")]
        public char WatchlistReasonType { get; set; }

        [JsonPropertyName("reasonCode")]
        public string ReasonCode { get; set; }

        [JsonPropertyName("description")]
        public string Description { get; set; }

        [JsonPropertyName("activeIndicator")]
        public bool ActiveIndicator { get; set; }

        [JsonPropertyName("systemRecordIndicator")]
        public string SystemRecordIndicator { get; set; }

        [JsonPropertyName("lastRecordTransactionUserId")]
        public string LastRecordTransactionUserId { get; set; }
    }
}
