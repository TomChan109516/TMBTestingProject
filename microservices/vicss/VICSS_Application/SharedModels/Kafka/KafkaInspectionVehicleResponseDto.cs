namespace VICSS.Shared.Models.Kafka
{
    using VICSS.Shared.Models.Vehicle;
    public class KafkaInspectionVehicleResponseDto
    {
        public KafkaInspectionVehicleResponseDto() { }

        public KafkaInspectionVehicleResponseDto(string trackingUuid, GetVehicleAndAppointmentDetails Vehicledetails)
        {
            this.trackingUuid = trackingUuid;
            this.Vehicledetails = Vehicledetails;
        }

        public string? trackingUuid { get; set; }

        public GetVehicleAndAppointmentDetails Vehicledetails { get; set; }
    }
}
