using Microsoft.Extensions.Configuration;
using System.Net.Http.Headers;
using System.Text;
using VICSS.Infrastructure.InternalAPICall.Interface;

namespace ICSS.Infrastructure.InternalAPICall.Helper
{
    public class InternalServiceAPICall : IInternalServiceAPICall
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private string _url = string.Empty;   //Gateway service

        public InternalServiceAPICall(IHttpClientFactory httpClientFactory, IConfiguration config)
        {
            this._httpClientFactory = httpClientFactory ?? this._httpClientFactory ?? throw new ArgumentException(nameof(httpClientFactory));
        }

        public async Task<string> CallInternalAPI(HttpMethod method, string endPoint, string jsonData = "") //EndPoint should be the Gateway point
        {
            HttpResponseMessage responseMessage = new();
            var httpClient = this._httpClientFactory.CreateClient("InternalServiceAPICall"); //Creating Clinet Manually

            if (httpClient == null)
                return string.Empty;

            var internalSerivceApiUrl = new Uri(httpClient.BaseAddress, endPoint);

            //IF Post change the request Body. Else SKIP
            if (method == HttpMethod.Post)
            {
                var content = new StringContent(jsonData, Encoding.UTF8, new MediaTypeHeaderValue("application/json"));
                responseMessage = await httpClient.PostAsync(internalSerivceApiUrl, content);
            }
            else if (method == HttpMethod.Get)
            {
                responseMessage = await httpClient.GetAsync(internalSerivceApiUrl);
            }

            //Check if the Request was OK
            if (responseMessage.IsSuccessStatusCode)
            {
                return await responseMessage.Content.ReadAsStringAsync();
            }
            else
                throw new HttpRequestException($"Failed to call internal API {responseMessage.StatusCode}");

        }
    }
}
