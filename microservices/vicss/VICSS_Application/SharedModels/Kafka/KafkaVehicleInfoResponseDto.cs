using VICSS.Service.Models.Vehicle;

namespace VICSS.Service.Models.Kafka
{
    public class KafkaVehicleInfoResponseDto
    {
        public KafkaVehicleInfoResponseDto() { }

        public KafkaVehicleInfoResponseDto(string trackingUuid, GetVehicleInfoResponseDto getVehicleInfoResponse)
        {
            this.trackingUuid = trackingUuid;
            this.vehicleInfo = getVehicleInfoResponse;
        }

        public string? trackingUuid { get; set; }

        public GetVehicleInfoResponseDto vehicleInfo { get; set; }
    }
}
