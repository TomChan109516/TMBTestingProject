using SCS_Backend_API.Models;

namespace SCS_Backend_API.DTO
{
    public class VehicleAppointmentDto
    {
        public List<VehicleInfoDto>? VehicleInfo { get; set; }
        public List<CreateAppointmentDto>? RecentAppointments { get; set; }
        public List<string> NotesAndAlerts { get; set; } = new List<string>();
    }

    public class VehicleAppointmentResponse : HttpStatusResponse
    {
        public VehicleAppointmentDto? data { get; set; }
    }
}
