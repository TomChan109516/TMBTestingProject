using System.Net;

namespace SCS_Backend_API.DTO
{
    public class AmendVVandMPVRequestDto
    {
        public string FloatName { get; set; } = string.Empty;
        public string ChassisNumber { get; set; } = string.Empty;
        public int? ManufactureYear { get; set; }
        public string BodyType { get; set; } = string.Empty;
        public int? EngineSize { get; set; }
        public string EngineType { get; set; } = string.Empty;
    }
    public class AmendVVandMPVDto : CreateNewNonValidVehicleDto
    {

    }
    public class AmendVVandMPVResponseDto: HttpStatusResponse
    {
        public AmendVVandMPVDto? data { get; set; }
    }
}
