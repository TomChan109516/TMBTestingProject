namespace SCS_Backend_API.DTO
{
    public class VillageAndMovementPermitVehicleDto
    {
        public string VhclTypeCode { get; set; }
        //public DateTime LastUpdated { get; set; }
        public string VehicleClassName { get; set; }
        //public string RegMark { get; set; }
        public string VehicleSubClassId { get; set; }
        public string? FloatName { get; set; }
        public string? Permit { get; set; }
        public String VehicleId { get; set; }
        public string ChassisNumber { get; set; }
        public string? CountryCode { get; set; }
        public string? Make { get; set; }
        public string? Model { get; set; }
        public string? BodyType { get; set; }
        public int? ManufactureYear { get; set; }
        public string? SeatCapacity { get; set; }
        public int? EngineSize { get; set; }
        public long? EngineNumber { get; set; }
        public string? EngineType { get; set; }
        public string? DocNumber { get; set; }
        public string? EngineMake { get; set; }
        public string? DistrictCode { get; set; }
        public string? DistrictLocation { get; set; }
        public string? ServiceBreak { get; set; }
        public string? ParkingBrake { get; set; }
        public bool? leftHandSteeringIndicator { get; set; }
        public string? Location { get; set; }
        public string? LocationChinese { get; set; }
        //public DateTime ModifiedDate { get; set; }
        public string? PrimaryColor { get; set; }
        public string? SecondaryColor { get; set; }
        public string? FrontTireSize { get; set; }
        public string? RearTireSize { get; set; }
        public double? VehicleLength { get; set; }
        public double? VehicleWidth { get; set; }
        public double? VehicleHeight { get; set; }
        public string? ContactPerson { get; set; }
        public long? PhoneNumber { get; set; }
        //public string LastRecordedTranscTypeCode { get; set; } = "OOAB";
        //public DateTime LastRecordedTranscDate { get; set; } = DateTime.Now;
    }
    public class VVandMPVResponse: VillageAndMovementPermitVehicleDto
    {
        public int Vhcl_Key { get; set; }
    }

    public class VVandMPVResponseDTO: HttpStatusResponse 
        {
        public VVandMPVResponse? data { get; set; }
    }
}

