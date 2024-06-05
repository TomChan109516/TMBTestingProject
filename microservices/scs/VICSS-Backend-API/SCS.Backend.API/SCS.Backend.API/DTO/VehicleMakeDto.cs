using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class VehicleMakeDto
    {
        public string MakeId { get; set; } = string.Empty;
        public string MakeName { get; set; } = string.Empty;
    }

    public class VehicleMakeResponse : HttpStatusResponse
    {
        public List<VehicleMakeDto>? data { get; set; }
    }
}
