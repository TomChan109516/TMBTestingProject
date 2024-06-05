using System.Security.Policy;

namespace SCS_Backend_API.DTO
{
    public class VehicleEnquiryRequestDto
    {
        public string? VehicleId { get; set; }
        public string? RegMark { get; set; }
        public string? ChassisNumber { get; set; }
        public string? Make { get; set; }
        public string? TANumber { get; set; }
        public string? FloatName { get; set; }
        public string? CENumber { get; set; }
        public string? VehicleClassName { get; set; }
        public string? VehicleSubClassName { get; set; }
    }
    public class VehicleEnquiryDto 
    {
        public string? VehicleClass { get; set; }
        public string VehicleId { get; set; } = string.Empty;
        public string CENumber { get; set; }
        public string? RegMark { get; set; }
        public string? ChassisNumber { get; set; }
        public DateTime? LicenceExpiry { get; set; }
        public double? PGVWeight { get; set; }
        public int? ManufactureYear { get; set; }
        public string? Make { get; set; }
        public string? Model { get; set; }
    }
    public class VehicleEnquiryResponseDto : HttpStatusResponse
    {
        public List<VehicleEnquiryDto>? data { get; set; }

    }
    }
