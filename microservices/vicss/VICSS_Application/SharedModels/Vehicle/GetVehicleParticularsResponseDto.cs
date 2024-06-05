namespace VICSS.Shared.Models.Vehicle
{    
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;

    public class GetVehicleParticularsResponseDto : ApiErrorMessage
    {
        public GetVehicleParticularsResponseDto()
        {
            vehicleDetails = new List<VehicleParticularDetailsByVehicleIdDto>();
        }
        [JsonPropertyName("vehicleDetails")]
        public List<VehicleParticularDetailsByVehicleIdDto> vehicleDetails { get; set; }
    }    
}
