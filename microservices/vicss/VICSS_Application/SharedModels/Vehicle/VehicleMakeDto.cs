namespace VICSS.Shared.Models.Vehicle
{
    using System.Text.Json.Serialization;

    public class VehicleMakeDto
    {
        public VehicleMakeDto() { }

        [JsonPropertyName("makeId")]
        public string MakeId { get; set; }

        [JsonPropertyName("vehicleMakeId")]
        public string VehicleMakeId { get; set; }

        [JsonPropertyName("vehicleMakeName")]
        public string VehicleMakeName { get; set; }
    }
}
