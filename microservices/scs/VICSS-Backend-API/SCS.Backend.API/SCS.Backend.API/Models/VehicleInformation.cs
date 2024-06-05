using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace SCS_Backend_API.Models
{
    [ExcludeFromCodeCoverage]
    public class VehicleInformation
    {
        [Key]
        public int VehicleId { get; set; }
        public long? AppointmentNumber { get; set; }
        public string RegMark { get; set; } = string.Empty;
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
        public DateTime? LastUpdated { get; set; }

        public ICollection<Appointment>? Appointments { get; set; }

        [ForeignKey("VehicleClasses")]
        public int VehicleClassId { get; set; }
        public VehicleClass? VehicleClasses { get; set; }

    }
}
