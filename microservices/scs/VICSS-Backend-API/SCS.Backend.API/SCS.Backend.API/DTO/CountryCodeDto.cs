namespace SCS_Backend_API.DTO
{
    public class CountryCodeDto
    {
        public int CountryCodekey { get; set; }
        public string CountryCode { get; set; }
        public string CountryName { get; set; }
    }
    public class CountryCodeResponse : HttpStatusResponse
    {
        public List<CountryCodeDto>? data { get; set; }
    }
}
