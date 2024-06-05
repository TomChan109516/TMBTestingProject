namespace VICSS.Shared.Models.Inspection
{
    using System.Text.Json.Serialization;
    public class ExamSlotAvailabilityDetailsRequestDto
    {
        public ExamSlotAvailabilityDetailsRequestDto()
        {

        }

        [JsonPropertyName("date")]
        public DateTime Date { get; set; }

        [JsonPropertyName("inspectionScheduleId")]
        public string InspectionScheduleId { get; set; }

        [JsonPropertyName("weekDayName")]
        public string WeekDayName { get; set; }

        [JsonPropertyName("vehicleClassId")]
        public string VehicleClassId { get; set; }

        [JsonPropertyName("examCodeId")]
        public List<string> InspectionTypeId {  get; set; }
    }
}
