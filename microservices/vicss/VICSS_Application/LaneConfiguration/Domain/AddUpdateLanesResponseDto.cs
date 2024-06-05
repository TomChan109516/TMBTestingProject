

namespace VICSS.Service.LaneConfiguration.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    public class AddUpdateLanesResponseDto:ApiErrorMessage
    {
        [JsonPropertyName("message")]
        public string Message { get; set; }
    }
}
