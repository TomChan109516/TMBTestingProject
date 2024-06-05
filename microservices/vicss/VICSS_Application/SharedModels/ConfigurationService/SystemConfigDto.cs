namespace VICSS.Shared.Models.ConfigurationService
{
    using System.Text.Json.Serialization;
    public class SystemConfigDto
    {
        public SystemConfigDto() { }
        
        //public SystemConfigDto(string? id,string? systemConfigId, string? systemConfigText, string? systemConfigDescription, string? userId)
        //{
        //    this.Id = id;
        //    this.SystemConfigId= systemConfigId;
        //    this.SystemConfigText= systemConfigText;
        //    this.SystemConfigDescription= systemConfigDescription;
        //    this.UserId= userId;
        //}

        [JsonPropertyName("id")]
        public string Id {  get; set; }

        [JsonPropertyName("systemConfigId")]
        public string? SystemConfigId { get; set; }

        [JsonPropertyName("systemConfigText")]
        public string? SystemConfigText { get; set; }

        [JsonPropertyName("systemConfigDescription")]
        public string? SystemConfigDescription { get; set; }

        [JsonPropertyName("userId")]
        public string? UserId { get; set; }

        [JsonPropertyName("lastUpdatedTime")]
        public string? LastUpdatedTime {  get; set; }
    }
}
