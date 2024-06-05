namespace VICSS.Shared.Models.Vehicle
{
    using System.Text.Json.Serialization;

    public class VehicleSubClassDto
    {
        public VehicleSubClassDto() { }

        [JsonPropertyName("subClassID")]
        public string SubClassID { get; set; }

        [JsonPropertyName("subClassCode")]
        public string SubClassCode { get; set; }
    }
}
