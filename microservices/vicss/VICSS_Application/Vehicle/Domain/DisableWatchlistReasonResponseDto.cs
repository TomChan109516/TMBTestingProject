namespace VICSS.Service.Vehicle.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    public class DisableWatchlistReasonResponseDto : ApiErrorMessage
    {
        [JsonPropertyName("message")]
        public string Message { get; set; }
    }
}