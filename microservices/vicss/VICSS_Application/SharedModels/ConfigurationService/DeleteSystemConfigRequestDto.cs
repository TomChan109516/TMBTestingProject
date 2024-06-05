namespace VICSS.Shared.Models.ConfigurationService
{
    using System.Text.Json.Serialization;

    public class DeleteSystemConfigRequestDto
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }


        [JsonPropertyName("userId")]
        public string? UserId { get; set; }
    }
}
