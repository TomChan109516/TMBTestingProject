namespace SCS_Backend_API.DTO
{
    public class GetAllLanesDto
    {
        public string LaneId { get; set; }
        public string LaneType { get; set; } = string.Empty;
        public string Floor { get; set; } = string.Empty;
    }

    public class GetAllLanesResponse : HttpStatusResponse
    {
        public List<GetAllLanesDto>? data { get; set; }
    }
}
