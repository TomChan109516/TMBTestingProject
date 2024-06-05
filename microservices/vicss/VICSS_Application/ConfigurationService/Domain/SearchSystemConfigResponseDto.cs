namespace VICSS.Service.ConfigurationService.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.ConfigurationService;    

    public class SearchSystemConfigResponseDto : ApiErrorMessage
    {
        public SearchSystemConfigResponseDto()
        {
            searchSystemConfig = new List<SystemConfigDto>();
        }

        [JsonPropertyName("searchSystemConfig")]
        public List<SystemConfigDto> searchSystemConfig { get; set; }

    }
}