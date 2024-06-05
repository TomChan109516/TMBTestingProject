using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.DTO
{
    public class VehicleInfoDto : CreateVehicleInfoDto
    {
        public string VehicleId { get; set; }       
    }

    public class VehicleInfoResponse : HttpStatusResponse
    {
        public VehicleInfoDto? data { get; set; }
    }

    public class VehicleOperationRemarkResponse : HttpStatusResponse
    {
        public string? data { get; set; }
    }
}
