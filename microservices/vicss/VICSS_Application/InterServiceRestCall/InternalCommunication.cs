namespace VICSS.Infrastructure.InterServiceRestCall
{
    using System;
    using System.Text;
    using System.Threading.Tasks;

    public class InternalCommunication
    {
        private HttpClient _httpClient;
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly string _url = "https://localhost:7048/";   //Gateway service

        public InternalCommunication(IHttpClientFactory httpClientFactory)
        {
            this._httpClientFactory = httpClientFactory ?? this._httpClientFactory ?? throw new ArgumentException(nameof(httpClientFactory));
        }

        public async Task<string> CallInternalAPI(string type, string endPoint, string requestBody) //EndPoint should be the Gateway point
        {
            this._httpClient = this._httpClientFactory.CreateClient(); //Creating Clinet Manually

            this._httpClient.BaseAddress = new Uri(this._url);
            HttpResponseMessage responseMessage = new();

            //Define Headers
            this._httpClient.DefaultRequestHeaders.Clear();
            this._httpClient.DefaultRequestHeaders.Add("Accept", "application/json");

            //Call internal API
            if (type.ToUpper() == "POST")
            {
                var body = new StringContent(requestBody, Encoding.UTF8, "application/json");
                responseMessage = await this._httpClient.PostAsync(endPoint, body);
            }
            else if (type.ToUpper() == "GET")
            {
                responseMessage = await this._httpClient.GetAsync(endPoint);
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
