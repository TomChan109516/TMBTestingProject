namespace SCS_Backend_API.DTO
{
    public class SearchLaneRequestDto
    {
        public string? Lane { get; set; }
        public string? LaneId { get; set; }       
        public string Ctr_Id { get; set; }
    }
   
    public class SearchLaneDto 
    {
        public string LaneId { get; set; }
        public string Lane { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }        
    }

    public class SearchLaneResponseDto : HttpStatusResponse
    {        
        public List<SearchLaneDto>? data { get; set; }

    }
}
