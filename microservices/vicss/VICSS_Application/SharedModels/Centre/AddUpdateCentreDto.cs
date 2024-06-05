namespace VICSS.Shared.Models.Centre
{
    using System.Text.Json.Serialization;
    public class AddUpdateCentreDto
    {
        public AddUpdateCentreDto() 
        {

        }

        [JsonPropertyName("centreId")]
        public string CentreId { get; set; }

        [JsonPropertyName("centreCode")]
        public string CentreCode { get; set; }

        [JsonPropertyName("centreName")]
        public string CentreName { get; set; }

        [JsonPropertyName("centreAddress")]
        public string? CentreAddress { get; set; }

        [JsonPropertyName("centreChineseAddress")]
        public string? CentreChineseAddress { get; set; }

        [JsonPropertyName("centrePhone1")]
        public string? CentrePhone1 { get; set; }

        [JsonPropertyName("centrePhone2")]
        public string? CentrePhone2 { get; set; }

        [JsonPropertyName("centreMondayOprtnTimeStart")]
        public string? CentreMondayOprtnTimeStart { get; set; }

        [JsonPropertyName("centreMondayOprtnTimeEnd")]
        public string? CentreMondayOprtnTimeEnd { get; set; }

        [JsonPropertyName("centreTuesdayOprtnTimeStart")]
        public string? CentreTuesdayOprtnTimeStart { get; set; }

        [JsonPropertyName("centreTuesdayOprtnTimeEnd")]
        public string? CentreTuesdayOprtnTimeEnd { get; set; }

        [JsonPropertyName("centreWednesdayOprtnTimeStart")]
        public string? CentreWednesdayOprtnTimeStart { get; set; }

        [JsonPropertyName("centreWednesdayOprtnTimeEnd")]
        public string? CentreWednesdayOprtnTimeEnd { get; set; }

        [JsonPropertyName("centreThrusdayOprtnTimeStart")]
        public string? CentreThrusdayOprtnTimeStart { get; set; }

        [JsonPropertyName("centreThrusdayOprtnTimeEnd")]
        public string? CentreThrusdayOprtnTimeEnd { get; set; }

        [JsonPropertyName("centreFridayOprtnTimeStart")]
        public string? CentreFridayOprtnTimeStart { get; set; }

        [JsonPropertyName("centreFridayOprtnTimeEnd")]
        public string? CentreFridayOprtnTimeEnd { get; set; }

        [JsonPropertyName("centreSaturdayOprtnTimeStart")]
        public string? CentreSaturdayOprtnTimeStart { get; set; }

        [JsonPropertyName("centreSaturdayOprtnTimeEnd")]
        public string? CentreSaturdayOprtnTimeEnd { get; set; }

        [JsonPropertyName("centreSundayOprtnTimeStart")]
        public string? CentreSundayOprtnTimeStart { get; set; }

        [JsonPropertyName("centreSundayOprtnTimeEnd")]
        public string? CentreSundayOprtnTimeEnd { get; set; }

        [JsonPropertyName("centreContact1")]
        public string? CentreContact1 { get; set; }

        [JsonPropertyName("centreContact2")]
        public string? CentreContact2 { get; set; }

        [JsonPropertyName("faxNumber")]
        public string? FaxNumber { get; set; }

        [JsonPropertyName("email")]
        public string? Email { get; set; }

        [JsonPropertyName("centreMondayActiveIndicator")]
        public bool CentreMondayActiveIndicator { get; set; }

        [JsonPropertyName("centreTuesdayActiveIndicator")]
        public bool CentreTuesdayActiveIndicator { get; set; }

        [JsonPropertyName("centreWednesdayActiveIndicator")]
        public bool CentreWednesdayActiveIndicator { get; set; }

        [JsonPropertyName("centreThursdayActiveIndicator")]
        public bool CentreThursdayActiveIndicator { get; set; }

        [JsonPropertyName("centreFriayActiveIndicator")]
        public bool CentreFriayActiveIndicator { get; set; }

        [JsonPropertyName("centreSaturdayActiveIndicator")]
        public bool CentreSaturdayActiveIndicator { get; set; }

        [JsonPropertyName("centreSundayActiveIndicator")]
        public bool CentreSundayActiveIndicator { get; set; }

        [JsonPropertyName("userId")]
        public string LastRecordTransactionUserId { get; set; }


    }
}
