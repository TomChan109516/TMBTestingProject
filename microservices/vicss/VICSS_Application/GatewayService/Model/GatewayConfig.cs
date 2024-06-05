using System.Text.Json.Serialization;

namespace VICSS.Infrastructure.GatewayService.Model
{
    public class GatewayConfig
    {         
        [JsonPropertyName("serviceName")]
        public string ServiceName { get; set; } = string.Empty;

        //[JsonPropertyName("serviceBaseUrl")]
        public string ServiceBaseUrl { get; set; } = string.Empty;

        [JsonPropertyName("urlMappings")]
        public List<UrlMapping> UrlMappings { get; set; } = new List<UrlMapping>();
    }    
}
