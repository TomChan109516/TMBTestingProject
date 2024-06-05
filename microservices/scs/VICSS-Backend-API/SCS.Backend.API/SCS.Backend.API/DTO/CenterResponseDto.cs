namespace SCS_Backend_API.DTO
{
    public class CenterDto
    {
        public string CenterId { get; set; } = string.Empty;
        public string CenterName { get; set; } = string.Empty;
    }

    public class CenterResponseDto : HttpStatusResponse
    {
        public List<CenterDto>? data { get; set; }
    }
}
