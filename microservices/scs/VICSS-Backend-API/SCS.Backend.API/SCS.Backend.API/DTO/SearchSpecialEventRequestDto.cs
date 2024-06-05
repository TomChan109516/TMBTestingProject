using NLog.LayoutRenderers;
using SCS_Backend_API.Models1;

namespace SCS_Backend_API.DTO
{
    public class SearchSpecialEventRequestDto
    {
        public string EventId { get; set; }
        public string Ctr_Id { get; set; }
        public DateTime? spcl_event_start_date { get; set; }
        public DateTime? spcl_event_end_date { get; set; }
    }
    public class SearchSpecialEventDto
    {
        public string EventId { get; set; }
        public string? Ctr_Id { get; set; } = string.Empty;
        public string? spcl_event_description { get; set; }
        public DateTime? spcl_event_start_date { get; set; }
        public DateTime? spcl_event_end_date { get; set; }
        public int? TotalAppointments { get; set; }
        public int? AffectedAppointments { get; set; }

    }
    public class SearchSpecialEventResponseDto : HttpStatusResponse
    {
        public List<SearchSpecialEventDto>? data { get; set; }
    }
}
