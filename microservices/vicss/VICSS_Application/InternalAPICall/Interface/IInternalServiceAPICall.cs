namespace VICSS.Infrastructure.InternalAPICall.Interface
{
    public interface IInternalServiceAPICall
    {
        public Task<string> CallInternalAPI(HttpMethod method, string endPoint, string jsonData = "");
    }
}
