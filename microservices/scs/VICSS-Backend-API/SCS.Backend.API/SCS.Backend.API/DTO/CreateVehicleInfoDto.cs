using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class CreateVehicleInfoDto
    {
        [Required]
        public string VhclTypeCode { get; set; } = string.Empty;
        [Required]
        public string RegMark { get; set; } = string.Empty;
        [Required]
        public string ChassisNumber { get; set; }= string.Empty;
        public double? PGVWeight { get; set; }
        public string? Make { get; set; }
        public string? Model { get; set; }
        public string? SeatCapacity { get; set; }
        public int? EngineNumber { get; set; }
        public DateTime? VICO { get; set; }
        public string? ModelCode { get; set; }
        public DateTime? LicenceExpiry { get; set; }
        public string? TANumber { get; set; }
        public string? FloatName { get; set; }
        public string? InspectionOrder { get; set; }
        public string? CENumber { get; set; }
        public bool? LantauVehicle { get; set; }
        public string? Attribute { get; set; }
        public string? DocNumber { get; set; }
        public string? CancelReason { get; set; }
        public DateTime LastUpdated { get; set; } 
        public DateTime CreatedDate { get; set; }= DateTime.UtcNow;
        public DateTime ModifiedDate { get; set; }
        public string VehicleClassId { get; set; }
        public bool IsActive { get; set; } = true;

    }
}
