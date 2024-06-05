namespace VICSS.Service.Vehicle.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Vehicle;

    public class GetVehicleClassWithSubclassResponseDto : ApiErrorMessage
    {
        public GetVehicleClassWithSubclassResponseDto() { }

        [JsonPropertyName("vehicleClassWithSubClasses")]
        public List<VehicleClassWithSubClassDto> VehicleClassWithSubClasses { get; set; } = new List<VehicleClassWithSubClassDto>();
    }            
}
