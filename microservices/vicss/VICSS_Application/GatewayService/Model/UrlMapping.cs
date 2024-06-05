namespace VICSS.Infrastructure.GatewayService.Model
{
    using System.Text.Json.Serialization;
    public class UrlMapping
    {
        [JsonPropertyName("apiUrl")]
        //URL to be used by UI.
        public string ApiUrl { get; set; } = string.Empty;

        [JsonPropertyName("servicePath")]
        //Path to micro service
        public string ServicePath { get; set; } =  string.Empty;
    }
}
