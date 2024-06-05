using Microsoft.AspNetCore.Http;

namespace SCS_Backend_API.DTO
{
    public class HttpStatusResponse
    {
        public int StatusCode { get; set; }
        public string Message { get; set; } = String.Empty;
    }

}

