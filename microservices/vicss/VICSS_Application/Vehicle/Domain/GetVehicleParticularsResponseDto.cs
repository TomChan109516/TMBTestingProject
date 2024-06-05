using VICSS.Shared.Models.Common;

namespace VICSS.Service.Vehicle.Domain
{    
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Vehicle;

    public class GGetVehicleParticularsResponseDto : ApiErrorMessage
    {
        public GGetVehicleParticularsResponseDto()
        {
            vehicleDetails = new List<VehicleParticularDetailsByVehicleIdDto>();
        }
        [JsonPropertyName("vehicleDetails")]
        public List<VehicleParticularDetailsByVehicleIdDto> vehicleDetails { get; set; }
    }    
}
