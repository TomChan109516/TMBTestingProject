using System.Text.Json.Serialization;
using VICSS.Shared.Models.Inspection;

namespace VICSS.Service.Inspection.Domain
{
    public class GetStatusofTheStationResponseDto
    {
        public GetStatusofTheStationResponseDto()
        {
            returnAppointmentNumber = string.Empty;
        }

        [JsonPropertyName("returnappointmentnumber")]
        public string returnAppointmentNumber { get; set; }
    }
}
