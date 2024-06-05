namespace SCS_Backend_API.DTO
{
    public class AppointmentHistoryDto
    {
        public long AppointmentNumber { get; set; }
        public string Reason { get; set; }
        public DateTime TransactionDate { get; set; }
        public DateTime AppointmentDate { get; set; }

        public CreateAppointmentDto AppointmentHistoryDetails { get; set; } = new CreateAppointmentDto();
        public VehicleInfoDto VehicleInfoDto { get; set; } = new VehicleInfoDto();
    }

    public class AppointmentHistoryResponse : HttpStatusResponse
    {
        public List<AppointmentHistoryDto>? data { get; set; }
    }
}
