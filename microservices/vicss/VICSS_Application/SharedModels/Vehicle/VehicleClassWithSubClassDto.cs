namespace VICSS.Shared.Models.Vehicle
{
    using System.Text.Json.Serialization;

    public class VehicleClassWithSubClassDto
    {
        public VehicleClassWithSubClassDto()
        {
            ListOfSubClasses = new List<VehicleSubClassDto>();
        }

        [JsonPropertyName("classID")]
        public string ClassID { get; set; }

        [JsonPropertyName("classCode")]
        public string ClassCode { get; set; }

        [JsonPropertyName("subClasses")]
        public List<VehicleSubClassDto> ListOfSubClasses { get; set; }
    }
}
