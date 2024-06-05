namespace VICSS.Service.Vehicle.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    public class AddUpdateWatchlistReasonResponseDto : ApiErrorMessage
    {
        [JsonPropertyName("message")]
        public string Message { get; set; }
    }
}