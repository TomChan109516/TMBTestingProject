using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class CompleteVehicleInfoDto
    {
        public string VehicleId { get; set; }
        [Required]
        public string VhclTypeCode { get; set; } = string.Empty;
        [Required]
        public string RegMark { get; set; } = string.Empty;
        [Required]
        public string ChassisNumber { get; set; } = string.Empty;
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
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime ModifiedDate { get; set; }
        public string VehicleClassId { get; set; }
        public bool IsActive { get; set; } = true;
        public int? ManufactureYear { get; set; }
        public string? OwnerName { get; set; }
        public string? Permit { get; set; }
        public DateTime? ADApprovalDate { get; set; }
        public string? ReferenceNumber { get; set; }
        public string? CountryCode { get; set; }
        public string? BodyType { get; set; }
        public DateTime? FirstRegDate { get; set; }
        public int? EngineSize { get; set; }
        public string? EngineType { get; set; }
        public string? PSL { get; set; }
        public DateTime? RenewalDate { get; set; }
        public char? StatusCode { get; set; }
        public char? WeightCode { get; set; }
        public double? PCVWeight { get; set; }
        public double? LUGWeight { get; set; }
        public double? Axle1Weight { get; set; }
        public double? Axle2Weight { get; set; }
        public double? Axle3Weight { get; set; }
        public double? Axle4Weight { get; set; }
        public double? Axle5Weight { get; set; }
        public double? Axle6Weight { get; set; }
        public double? Axle7Weight { get; set; }
        public char? HybridVehicle { get; set; }
        public string? PVRMTrimText { get; set; }
        public char? PVRMDoubleLineIndicator { get; set; }
        public string? PVRMLine1Text { get; set; }
        public string? PVRMLine2Text { get; set; }
        public string? PrimaryColor { get; set; }
        public string? SecondaryColor { get; set; }
        public string? FrontTireSize { get; set; }
        public string? RearTireSize { get; set; }
        public float? RatedPower { get; set; }
        public string? PrivateRoadVehicle { get; set; }
        public string? leftHandSteering { get; set; }
        public string? DisplayRegMark { get; set; }
    }

    public class CompleteVehicleInfoResponse : HttpStatusResponse
    {
        public CompleteVehicleInfoDto? data { get; set; }
    }
}
