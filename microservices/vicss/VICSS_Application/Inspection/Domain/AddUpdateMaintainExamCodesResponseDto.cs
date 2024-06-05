namespace VICSS.Service.Inspection.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    public class AddUpdateMaintainExamCodesResponseDto : ApiErrorMessage
    {
        [JsonPropertyName("message")]
        public string Message { get; set; }
    }
}
