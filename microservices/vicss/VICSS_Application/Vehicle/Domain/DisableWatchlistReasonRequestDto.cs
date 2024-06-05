namespace VICSS.Service.Vehicle.Domain
{
    using MediatR;
    using System.Text.Json.Serialization;
    public class DisableWatchlistReasonRequestDto : IRequest<DisableWatchlistReasonResponseDto>
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("lastRecordTransactionUserId")]
        public string LastRecordTransactionUserId { get; set; }
    }
}