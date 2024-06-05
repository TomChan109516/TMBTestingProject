using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using VICSS.Infrastructure.GatewayService.Model;

namespace VICSS.Infrastructure.GatewayService.Helper
{
    public class GatewayMiddleware
    {
        private readonly RequestDelegate _requestDelegate;
        private readonly HttpClient _httpClient;
        private readonly IHostEnvironment _environment;
        private readonly IConfiguration _config;

        public GatewayMiddleware(RequestDelegate requestDelegate, IHostEnvironment environment, IConfiguration configuration, HttpClient httpClient)
        {
            this._requestDelegate = requestDelegate;
            this._httpClient = httpClient;
            this._environment = environment;
            this._config = configuration;
        }

        public async Task Invoke(HttpContext context)
        {
            SelectedGatewayConfig? configDetails = null;

            GetwayConfigDetails()?.ForEach(value =>
            {
                var matchingApiUrl = value.UrlMappings.Find(item => context.Request.Path.StartsWithSegments(item.ApiUrl));
                if (matchingApiUrl != null)
                {
                    configDetails = new SelectedGatewayConfig();
                    configDetails.apiUrl = matchingApiUrl.ApiUrl;
                    configDetails.servicePath = matchingApiUrl.ServicePath;
                    configDetails.serviceUrl = value.ServiceBaseUrl;
                }
            });

            try
            {
                if (configDetails != null)
                {
                    context.Request.Path = context.Request.Path.ToString().
                        Replace(configDetails.apiUrl, configDetails.servicePath);

                    if (IsSSERequest(context.Request))
                        await ForwarSSEEvent(context, configDetails.serviceUrl);
                    else
                    {
                        await ProxyRequest(context, configDetails.serviceUrl);
                    }
                }
                else
                {
                    context.Response.StatusCode = 404;
                    await context.Response.WriteAsync("Not found");
                    return;
                }
            }
            catch (Exception ex)
            {
                context.Response.StatusCode = 500;
                await context.Response.WriteAsync(ex.Message);
            }

        }

        private static bool IsSSERequest(HttpRequest request)
        {
            if (!string.Equals(request.Method, "Get", StringComparison.OrdinalIgnoreCase))
            {
                return false;
            }

            StringValues acceptHeader;
            if (request.Headers.TryGetValue("Accept", out acceptHeader) && acceptHeader.Contains("text/event-stream"))
            {
                return true;
            }

            if (request.Headers.TryGetValue("Content-Type", out acceptHeader) && acceptHeader.Contains("text/event-stream"))
            {
                return true;
            }

            return false;
        }

        private async Task ProxyRequest(HttpContext httpContext, string url)
        {
            var requestMessage = CreateRequestMessage(httpContext, url);

            var requestContent = await new StreamContent(httpContext.Request.Body).ReadAsByteArrayAsync();
            if (requestContent.Length > 0)
            {
                requestMessage.Content = new ByteArrayContent(requestContent);
                requestMessage.Content.Headers.ContentType = new System.Net.Http.Headers.
                    MediaTypeHeaderValue(httpContext.Request.ContentType ?? string.Empty);
            }
            var response = await this._httpClient.SendAsync(requestMessage);
            httpContext.Response.StatusCode = (int)response.StatusCode;
            foreach (var item in response.Headers)
            {
                httpContext.Response.Headers[item.Key] = item.Value.ToArray();
            }
            httpContext.Response.Headers.Remove("transfer-encoding");
            await response.Content.CopyToAsync(httpContext.Response.Body);
        }

        private async Task ForwarSSEEvent(HttpContext httpContext, string url)
        {
            var requestMessage = CreateRequestMessage(httpContext, url);

            using (var responseMessage = await _httpClient.SendAsync(requestMessage, HttpCompletionOption.ResponseHeadersRead, httpContext.RequestAborted))
            {
                httpContext.Response.ContentType = "text/event-stream";

                foreach (var item in responseMessage.Headers)
                {
                    httpContext.Response.Headers[item.Key] = item.Value.ToArray();
                }

                httpContext.Response.StatusCode = (int)responseMessage.StatusCode;

                using (var responseStream = await responseMessage.Content.ReadAsStreamAsync())
                {
                    await responseStream.CopyToAsync(httpContext.Response.Body);
                }
            }
        }

        private static HttpRequestMessage CreateRequestMessage(HttpContext httpContext, string url)
        {
            var requestMessage = new HttpRequestMessage();
            var targetUri = new Uri(url + httpContext.Request.Path + httpContext.Request.QueryString);
            requestMessage.Method = new HttpMethod(httpContext.Request.Method);
            requestMessage.RequestUri = targetUri;
            foreach (var header in httpContext.Request.Headers)
            {
                requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());
            }
            return requestMessage;
        }

        private List<GatewayConfig>? GetwayConfigDetails()
        {
            var path = Path.GetFullPath(Path.Combine(this._environment.ContentRootPath, _config.GetValue<string>("ConfigPath:FolderName") ?? string.Empty, _config.GetValue<string>("ConfigPath:FileName") ?? string.Empty));
            using (StreamReader r = new(path))
            {
                string json = r.ReadToEnd();
                if (string.IsNullOrEmpty(json))
                    return [];
                List<GatewayConfig>? item = JsonConvert.DeserializeObject<List<GatewayConfig>>(json);

                item?.ForEach(item =>
                {
                    if (!String.IsNullOrEmpty(item.ServiceName))
                    {
                        item.ServiceBaseUrl = _config.GetValue<string>(string.Format(_config.GetValue<string>("BaseUrlPathFormat") ?? string.Empty, item.ServiceName)) ?? string.Empty;
                    }
                });

                return item;
            }
        }
    }
}
