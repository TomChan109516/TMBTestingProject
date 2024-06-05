namespace VICSS.Shared.Models.Inspection
{
    using System.Text.Json.Serialization;
    public class ExamSlotsAvailabilityDto
    {
        public ExamSlotsAvailabilityDto()
        {

        }
        [JsonPropertyName("quota")]
        public int Quota { get; set; }

        [JsonPropertyName("timeSlot")]
        public string TimeSlot { get; set; }

        [JsonPropertyName("physicalLaneId")]
        public string PhysicalLaneId { get; set; }

        [JsonPropertyName("virtualLaneId")]
        public string VirtualLaneId { get; set; }

        [JsonPropertyName("dayOfSession")]
        public string DayOfSession {  get; set; }

        [JsonPropertyName("laneTimeSlotId")]
        public string LaneTimeSlotId {  get; set; }
    }
}
