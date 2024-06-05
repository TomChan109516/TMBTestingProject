using System.Text.Json.Serialization;

namespace VICSS.Shared.Models.Inspection
{
    public class ExamsAvailableDateDto
    {
        public ExamsAvailableDateDto() { }

        [JsonPropertyName("date")]
        public DateTime Date { get; set; }

        [JsonPropertyName("quota")]
        public int Quota { get; set; }

        [JsonPropertyName("weekDay")]
        public string WeekDay { get; set; }

        [JsonPropertyName("inspectionScheduledetailsId")]
        public string InspectionScheduleDetailsId { get; set; }
    }
}
