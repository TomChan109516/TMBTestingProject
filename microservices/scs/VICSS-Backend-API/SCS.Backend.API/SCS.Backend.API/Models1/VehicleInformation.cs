using System.Collections.Specialized;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCS_Backend_API.Models1
{
    public class VehicleInformation
    {
        [Key]
        
        public int Vhcl_Key { get; set; }//Id
        [StringLength(5)]
        public string VhclTypeCode { get; set; } = string.Empty;//V,NV,VV,MPV
        public DateTime LastUpdated { get; set; }//vehcile update date
        [StringLength(25)]
        public string? VehicleId { get; set; } = string.Empty;//VehicleNumber
        [StringLength(10)]
        public string RegMark { get; set; }
        public string? RegMarkDispText { get; set; } = string.Empty;
        public string VehicleClassId { get; set; }//vehicle class code
        public string VehicleSubClassId { get; set; }//vehicle subclass code
        [StringLength(25)]
        public string ChassisNumber { get; set; } = string.Empty;
        
        public string ChassisTrimText { get; set; } = string.Empty;
        public string? DocNumber { get; set; }
        public string? CountryCode { get; set; }
        public string? MakeId { get; set; }
        public int? ManufactureYear { get; set; }

        
        public double? Axle1Weight { get; set; }
        public double? Axle2Weight { get; set; }
        public double? Axle3Weight { get; set; }
        public double? Axle4Weight { get; set; }
        public double? Axle5Weight { get; set; }
        public double? Axle6Weight { get; set; }
        public double? Axle7Weight { get; set; }

        public char? WeightCode { get; set; }
        public double? PGVWeight { get; set; }
        public double? PCVWeight { get; set; }
        public double? GRSWeight { get; set; }//GrossWeight
        public double? LUGWeight { get; set; }

        public string? OwnerName { get; set; }
        public string? OwnerNameChinese { get; set; }
        public char? StatusCode { get; set; }
        public string? Model { get; set; }
        public string? ModelCode { get; set; }//ModelRemarkText?

        public string? BodyType { get; set; }
        [Column("LowerSeatCapacity",TypeName = "nvarchar(max)")]
        public string? SeatCapacity { get; set; }
 
        public string? UpperSeatCapacity { get; set; }

        public string? StandSeatCapacity { get; set; }

        public DateTime? LicenceExpiry { get; set; }//vehicleLicenseEnddate?


        public DateTime CreatedDate { get; set; }//vehicle first registration date
        
        public long? EngineNumber { get; set; }

        public int? EngineSize { get; set; }
  
        public string? EngineType { get; set; }
  
        public bool? leftHandSteeringIndicator { get; set; }

       
        public string? TANumber { get; set; }
   
        public string? PrimaryColor { get; set; }
        
        public string? SecondaryColor { get; set; }

        public string? CancelReason { get; set; }

        public string? InspectionOrder { get; set; }


        public string? InspectionOrderCodeList { get; set; }
        public string? Make { get; set; }//VehicleMakeName
        
       
        public DateTime? VICO { get; set; }
       
        
        public string? FloatName { get; set; }//
       
        
        public string? CENumber { get; set; }
        public bool? LantauVehicle { get; set; }
        public string? Attribute { get; set; }//
        
        
        public DateTime ModifiedDate { get; set; }//vehicle current renewal date
        

        public bool IsActive { get; set; } = true;
        
        [Column("VehiclePermitNumber")]
        public string? Permit { get; set; }
        public DateTime? ADApprovalDate { get; set; }
        public string? ReferenceNumber { get; set; }
        
       
        public DateTime? FirstRegDate { get; set; }
        
        public string? PSL { get; set; }
        public DateTime? RenewalDate { get; set; }
        
        

        public char? HybridVehicle { get; set; }
        public string? PVRMTrimText { get; set; }
        public char? PVRMDoubleLineIndicator { get; set; }
        public string? PVRMLine1Text { get; set; }
        public string? PVRMLine2Text { get; set; }
        
        public string? FrontTireSize { get; set; }
        public string? RearTireSize { get; set; }
        public float? RatedPower { get; set; }
        public bool? PrivateRoadVehicleInd { get; set; }
        public string? leftHandSteering { get; set; }//remove
       
        public string? DisplayRegMark { get; set; }
        public string? ServiceAnnotationText { get; set; }
        public DateTime? ServiceRestrictionDate { get; set; }
        public string? VehicleRemarkText { get; set; }
        public string InterfaceRecordHashText { get; set; } = "NoHashText";
        public string? VehRegistractionDocTransNumber { get; set; }
        public DateTime? LastAllowExamDate { get; set; }
        public double? VehicleLength { get; set; }
        public double? VehicleWidth { get; set; }
        public double? VehicleHeight { get; set; }
        public DateTime LastRecordedTranscDate { get; set; }
        public string LastRecordedTranscTypeCode { get; set; }
        public string? LastRecordedTranscUserId{ get; set; }

        public string? ContactPerson { get; set; }
        public long? PhoneNumber { get; set; }

        public string? EngineMake { get; set; }
        public string? DistrictCode { get; set; }
        public string? DistrictLocation { get; set; }
        public string? ServiceBreak { get; set; }
        public string? ParkingBrake { get; set; }
        public string? Location { get; set; }
        public string? LocationChinese { get; set; }

        [ForeignKey("VehicleClassId")]
        public virtual VehicleClass? VehicleClasses { get; set; }

        public ICollection<Appointment>? Appointments { get; set; }

        [ForeignKey("CountryCode")]
        public virtual VehicleCountryCode? VehicleCountryCode { get; set; }
        public virtual VehicleMessages VehicleMessage { get; set; }


    }
}
