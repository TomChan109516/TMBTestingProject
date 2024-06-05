namespace SCS_Backend_API.DTO
{
    public class VehicleSearchDto
    {
        public string VhclTypeCode { get; set; } = string.Empty;
        public string? RegMark { get; set; }
        public string VehicleId { get; set; } = string.Empty;
        public string? ChassisNumber { get; set; }
        public long AppointmentNumber { get; set; }
        public string? VehicleMake { get; set; }
        public string? VehicleModel { get; set; }
        public string? VehicleClass { get; set; }
        public string? VehicleSubClass { get; set; }
        public string? FloatName { get; set; }
        public string? CENumber { get; set; }
    }
}
