namespace VICSS.Shared.Models.Inspection
{
    using System.Text.Json.Serialization;
    public class AvailableQuotaForSelectedDateRangeRequestDto
    {
        public AvailableQuotaForSelectedDateRangeRequestDto()
        {
        }

        [JsonPropertyName("fromDate")]
        public DateTime FromDate { get; set; }

        [JsonPropertyName("toDate")]
        public DateTime ToDate { get; set; }

        [JsonPropertyName("centreId")]
        public string CentreId { get; set; }

        [JsonPropertyName("examCodeId")]
        public List<string> InspectionTypeId { get; set; }

        [JsonPropertyName("vehicleClassId")]
        public string VehicleClassId { get; set; }
    }
}
