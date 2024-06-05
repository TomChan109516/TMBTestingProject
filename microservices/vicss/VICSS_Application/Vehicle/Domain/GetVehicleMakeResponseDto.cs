namespace VICSS.Service.Vehicle.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Vehicle;

    public class GetVehicleMakeResponseDto : ApiErrorMessage
    {
        public GetVehicleMakeResponseDto()
        {
            vehicleMakes = new List<VehicleMakeDto>();
        }

        [JsonPropertyName("vehicleMakes")]
        public List<VehicleMakeDto> vehicleMakes {  get; set; }
    }    
}
