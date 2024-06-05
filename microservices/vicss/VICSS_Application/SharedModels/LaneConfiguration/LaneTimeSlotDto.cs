namespace VICSS.Shared.Models.LaneConfiguration
{
    using System.Text.Json.Serialization;

    public class LaneTimeSlotDto
    {
        [JsonPropertyName("timeSlotId")]
        public string TimeSlotId { get; set; }

        [JsonPropertyName("laneId")]
        public string LaneId { get; set; }

        [JsonPropertyName("timeSlotBegin")]
        public DateTime TimeSlotBegin { get; set; }

        [JsonPropertyName("timeSlotEnd")]
        public DateTime TimeSlotEnd { get; set; }

        [JsonPropertyName("examScheduleDescription")]
        public string? ExamScheduleDescription { get; set; }        
    }
}
