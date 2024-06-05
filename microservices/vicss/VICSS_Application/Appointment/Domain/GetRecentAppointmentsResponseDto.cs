using System.Text.Json.Serialization;
using VICSS.Service.Models.Appointment;
using VICSS.Shared.Models.Common;

namespace VICSS.Service.Appointment.Domain
{
    public class GetRecentAppointmentsResponseDto : ApiErrorMessage
    {
        public GetRecentAppointmentsResponseDto()
        {
            appointmentDetails = new List<RecentAppointmentsDetailsDto>();
        }

        [JsonPropertyName("appointmentDetails")]
        public List<RecentAppointmentsDetailsDto> appointmentDetails { get; set; }
    }    
}
