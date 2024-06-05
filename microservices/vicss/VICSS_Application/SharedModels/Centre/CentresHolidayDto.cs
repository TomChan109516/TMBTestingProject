namespace VICSS.Shared.Models.Centre
{
    using System.Text.Json.Serialization;
    public class CentresHolidayDto
    {
        public CentresHolidayDto()
        {

        }

        [JsonPropertyName("centreHolidayId")]
        public string CentreHolidayId { get; set; }

        [JsonPropertyName("holidayDate")]
        public DateTime HolidayDate { get; set; }

        [JsonPropertyName("holidayName")]
        public string HolidayName { get; set; }

        [JsonPropertyName("allDayHoliday")]
        public string AllDayHoliday { get; set; }

        [JsonPropertyName("holidayStartTime")]
        public DateTime? HolidayStartTime { get; set; }

        [JsonPropertyName("holidayEndTime")]
        public DateTime? HolidayEndTime { get; set; }
       
    }
}
