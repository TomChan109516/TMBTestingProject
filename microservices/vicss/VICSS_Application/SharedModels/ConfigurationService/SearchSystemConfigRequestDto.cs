namespace VICSS.Shared.Models.ConfigurationService
{
    using System.Text.Json.Serialization;

    public class SearchSystemConfigRequestDto
    {
        public SearchSystemConfigRequestDto() { }

        public SearchSystemConfigRequestDto(string? systemConfigId, string? systemConfigDescription)
        {
            SystemConfigId = systemConfigId;
            SystemConfigDescription = systemConfigDescription;
        }

        [JsonPropertyName("systemconfigid")]
        public string? SystemConfigId { get; set; }

        [JsonPropertyName("systemconfigdescription")]
        public string? SystemConfigDescription { get; set; }
    }
}
