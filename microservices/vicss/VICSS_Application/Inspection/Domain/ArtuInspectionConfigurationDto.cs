using MediatR;

namespace VICSS.Service.Inspection.Domain
{
    public class ArtuInspectionConfigurationDto : IRequest<ArtuInspectionConfigurationDtoResponse>
    {
        public string? VehicleRegMark { get; set; } = string.Empty;


        public string? VehicleClass { get; set; } = string.Empty;

        public string? Make { get; set; } = string.Empty;


        public string? Model { get; set; } = string.Empty;


        public string? YearOfManufacture { get; set; } = string.Empty;


        public string? TypeApprovalNo { get; set; } = string.Empty;


        public string? PassengerSeat { get; set; } = string.Empty;


        public string? ChassisNo { get; set; } = string.Empty;


        public string? EngineNo { get; set; } = string.Empty;


        public string? ExamCode { get; set; } = string.Empty;


        public string? FuelType { get; set; } = string.Empty;


        public string? UnladenWeight { get; set; } = string.Empty;


        public string? GVW { get; set; } = string.Empty;


        public string? MaxPAxleWeight { get; set; } = string.Empty;


        public string? WAxle1 { get; set; } = string.Empty;


        public string? WAxle2 { get; set; } = string.Empty;


        public string? WAxle3 { get; set; } = string.Empty;


        public string? WAxle4 { get; set; } = string.Empty;


        public string? WAxle5 { get; set; } = string.Empty;


        public string? WAxle6 { get; set; } = string.Empty;


        public string? WAxle7 { get; set; } = string.Empty;


        public string? WAxle8 { get; set; } = string.Empty;


        public string? VehicleLength { get; set; } = string.Empty;


        public string? VehicleWidth { get; set; } = string.Empty;


        public string? VehicleHeight { get; set; } = string.Empty;


        public char? AWBMeasurementMode { get; set; } = 'N';


        public string? BrakeSystem { get; set; } = string.Empty;


        public int? VehicleAxlesNo { get; set; } = 0;


        public string? BRTAxles { get; set; } = string.Empty;


        public string? SecondaryAxles { get; set; } = string.Empty;


        public string? ParkAxles { get; set; } = string.Empty;


        public char? IsTBPark { get; set; } = 'N';


        public string? SteeringAxlesType { get; set; } = string.Empty;


        public int? LoadType { get; set; } = 0;


        public string? LoadAxles { get; set; } = string.Empty;


        public char? ParkType { get; set; } = 'N';


        public char? IsTricycle { get; set; } = 'N';


        public int? TricycleTread { get; set; } = 0;


        public int? WheelBase { get; set; } = 0;


        public string? Propulsion { get; set; } = string.Empty;


        public string? SpeedOperationMode { get; set; } = string.Empty;


        public char? Steering { get; set; } = 'N';


        public char? VehicleHeadlampSystem { get; set; } = 'N';


        public int? MainBeamAdjustable { get; set; } = 0;


        public string? AirIntakeSystem { get; set; } = string.Empty;


        public string? OilSupplyMethod { get; set; } = string.Empty;


        public char? IsThreeWayCC { get; set; } = 'N';


        public int? IsDoubleAxlePropulsion { get; set; } = 0;


        public int? RatedPower { get; set; } = 0;


        public int? RatedSpeed { get; set; } = 0;


        public DateTime? CreateTime { get; set; } = DateTime.UtcNow;


        public DateTime? UpdateTime { get; set; } = DateTime.UtcNow;


        public string? ExamItem { get; set; } = string.Empty;


        public string? ConnectedState { get; set; } = string.Empty;


        public string? AuxBrkCalType { get; set; } = string.Empty;


        public string? AuxBrkSpType { get; set; } = string.Empty;


        public string? AloneCheckAuxBrk { get; set; } = string.Empty;


        public string? OhmMeasurementMode { get; set; } = string.Empty;


        public string? ParkingType { get; set; } = string.Empty;


        public string? BRTMeasureMethod { get; set; } = string.Empty;


        public string? HeadlampMeasurementMode { get; set; } = string.Empty;


        public string? InspItem { get; set; } = string.Empty;


        public string? SpeedWheelType { get; set; } = string.Empty;


        public string? SetSpeed { get; set; } = string.Empty;


        public string? BeCheckedItems { get; set; } = string.Empty;


        public string? BRTMeasureMode { get; set; } = string.Empty;


        public string? TandemAxle { get; set; } = string.Empty;

        public string? ServiceBrakeCalType { get; set; } = string.Empty;


        public string? SecondaryBrakeCalType { get; set; } = string.Empty;


        public string? ParkingBrakeCalType { get; set; } = string.Empty;


        public string? TmSetMileage { get; set; } = string.Empty;


        public string? StationTimes { get; set; } = string.Empty;


        public string? ParkCheckLock { get; set; } = string.Empty;


        public string? ScanningAcceleration { get; set; } = string.Empty;


        public string? ScanningDecelerationRange { get; set; } = string.Empty;


        public string? ConstSpeedRange { get; set; } = string.Empty;


        public string? LdMaxSpeed { get; set; } = string.Empty;


        public string? LdMinSpeed { get; set; } = string.Empty;


        public string? LdProcessBeload { get; set; } = string.Empty;


        public string? ConstSpeedTime { get; set; } = string.Empty;


        public string? LdSamplingTime { get; set; } = string.Empty;


        public string? LdEndScanningSpeed { get; set; } = string.Empty;


        public string? IsAdvanceApplyParking { get; set; } = string.Empty;


        public string? LdLegalEmissionLimit { get; set; } = string.Empty;


        public string? LdRatedPowerLowSh { get; set; } = string.Empty;


        public string? LdRatedPowerHighSh { get; set; } = string.Empty;


        public string? LdRatedSpeedSh { get; set; } = string.Empty;


        public string? HsuLimit { get; set; } = string.Empty;


        public string? RpmLimit { get; set; } = string.Empty;


        public string? WhetherToReturnWeb { get; set; } = string.Empty;


        public string? VehId { get; set; } = string.Empty;


        public string? IdleCheckTime { get; set; } = string.Empty;


        public string? HIdleCheckTime { get; set; } = string.Empty;


        public string? FatCheckTimes { get; set; } = string.Empty;


        public string? LdAmendmentMode { get; set; } = string.Empty;


        public string? LdAmendmentDryair { get; set; } = string.Empty;


        public string? LdAmendmentCoefficient { get; set; } = string.Empty;


        public string? TmSetMileageMax { get; set; } = string.Empty;


        public string? LdFuelDensity { get; set; } = string.Empty;


        public string? LdFuelOilViscosity { get; set; } = string.Empty;


        public string? LdTemperature { get; set; } = string.Empty;


        public string? EngineModel { get; set; } = string.Empty;


        public string? EngineType { get; set; } = string.Empty;


        public string? WheelSpan { get; set; } = string.Empty;


        public string? BodyType { get; set; } = string.Empty;


        public string? EngineSize { get; set; } = string.Empty;


        public string? EngineCap { get; set; } = string.Empty;


        public string? LpgTankNo { get; set; } = string.Empty;


        public string? LpgTankModel { get; set; } = string.Empty;


        public DateTime? ValidationDate { get; set; } = DateTime.UtcNow;


        public string? TaximeterMake { get; set; } = string.Empty;


        public string? TaximeterModel { get; set; } = string.Empty;


        public string? UpperDeck { get; set; } = string.Empty;


        public string? LowerDeck { get; set; } = string.Empty;


        public string? Standing { get; set; } = string.Empty;


        public string? CSA { get; set; } = string.Empty;


        public string? CSA1 { get; set; } = string.Empty;


        public string? CSA2 { get; set; } = string.Empty;


        public string? CSA3 { get; set; } = string.Empty;


        public string? CSA4 { get; set; } = string.Empty;


        public string? CSA5 { get; set; } = string.Empty;


        public string? CSA6 { get; set; } = string.Empty;


        public string? CSA7 { get; set; } = string.Empty;


        public string? VhclModelNum { get; set; } = string.Empty;


        public string? VhclPrmyColorCode { get; set; } = string.Empty;


        public string? VhclScndColorCode { get; set; } = string.Empty;

        public string? CountryPlaceOfOrigin { get; set; } = string.Empty;


        public string? CylinderCapacity { get; set; } = string.Empty;


        public string? AllClasserExceptBus { get; set; } = string.Empty;


        public string? VhclLwrSeatCapQty { get; set; } = string.Empty;


        public string? VhclUprSeatCapQty { get; set; } = string.Empty;


        public string? VhclStndCapQty { get; set; } = string.Empty;


        public string? PrivioursClass { get; set; } = string.Empty;


        public string? ExRegistrationMark { get; set; } = string.Empty;


        public string? OriginalRegistration { get; set; } = string.Empty;


        public string? VhclPgvWght { get; set; } = string.Empty;


        public string? PermittedGrossCombinedWeight { get; set; } = string.Empty;


        public string? LantauVhclInd { get; set; } = string.Empty;


        public string? PrvtRoadVhclInd { get; set; } = string.Empty;


        public string? VhclLugWght { get; set; } = string.Empty;


        public DateTime? VhclFrstRegDate { get; set; } = DateTime.UtcNow;


        public string? StatisticInfoCode { get; set; } = string.Empty;


        public string? TricycleSingleShaft { get; set; } = string.Empty;


        public string? VinLocation { get; set; } = string.Empty;


        public string? TyreSizeAxle1 { get; set; } = string.Empty;


        public string? TyreSizeAxle2 { get; set; } = string.Empty;


        public string? TyreSizeAxle3 { get; set; } = string.Empty;


        public string? TyreSizeAxle4 { get; set; } = string.Empty;


        public string? TyreSizeAxle5 { get; set; } = string.Empty;


        public string? TyreSizeAxle6 { get; set; } = string.Empty;


        public string? TyreSizeAxle7 { get; set; } = string.Empty;


        public string? TyreSizeAxle8 { get; set; } = string.Empty;


        public string? SldMakeModel { get; set; } = string.Empty;


        public string? EdrdMakeModel { get; set; } = string.Empty;


        public string? SddMakeModel { get; set; } = string.Empty;


        public string? HybdVhclInd { get; set; } = string.Empty;


        public string? KingPinDiameter { get; set; } = string.Empty;


        public string? ElectricMotorNo1 { get; set; } = string.Empty;


        public string? ElectricMotorNo2 { get; set; } = string.Empty;


        public string? ElectricMotorNo3 { get; set; } = string.Empty;


        public string? ElectricMotorNo4 { get; set; } = string.Empty;


        public string? ElectricMotorLocation1 { get; set; } = string.Empty;


        public string? ElectricMotorLocation2 { get; set; } = string.Empty;


        public string? ElectricMotorLocation3 { get; set; } = string.Empty;


        public string? ElectricMotorLocation4 { get; set; } = string.Empty;


        public string? Gcw { get; set; } = string.Empty;


        public string? BrakeInspItem { get; set; } = string.Empty;


        public string? IsitMomAppt { get; set; } = string.Empty;


        public string? KLimit { get; set; } = string.Empty;


        public string? UnbalAxle1Limit { get; set; } = string.Empty;


        public string? UnbalAxle2Limit { get; set; } = string.Empty;


        public string? UnbalAxle3Limit { get; set; } = string.Empty;


        public string? UnbalAxle4Limit { get; set; } = string.Empty;


        public string? UnbalAxle5Limit { get; set; } = string.Empty;


        public string? UnbalAxle6Limit { get; set; } = string.Empty;


        public string? UnbalAxle7Limit { get; set; } = string.Empty;


        public string? UnbalAxle8Limit { get; set; } = string.Empty;


        public string? BAxle1Limit { get; set; } = string.Empty;


        public string? BAxle2Limit { get; set; } = string.Empty;


        public string? BAxle3Limit { get; set; } = string.Empty;


        public string? BAxle4Limit { get; set; } = string.Empty;


        public string? BAxle5Limit { get; set; } = string.Empty;


        public string? BAxle6Limit { get; set; } = string.Empty;


        public string? BAxle7Limit { get; set; } = string.Empty;


        public string? BAxle8Limit { get; set; } = string.Empty;


        public string? BrakeEfficiencyLimit { get; set; } = string.Empty;


        public string? ParkingEfficiencyLimit { get; set; } = string.Empty;


        public string? AuxiliaryBrakeEfficiencyLimit { get; set; } = string.Empty;


        public int? SetSpeed1 { get; set; } = 0;


        public int? SetSpeed2 { get; set; } = 0;


        public int? SetSpeed3 { get; set; } = 0;


        public int? MinSpeedLimit { get; set; } = 0;


        public int? MaxSpeedLimit { get; set; } = 0;


        public string? SetLimitSpeed { get; set; } = string.Empty;


        public int? SetSddLimitSpeed { get; set; } = 0;


        public int? MinSddSpeedLimit { get; set; } = 0;

        public int? MaxSddSpeedLimit { get; set; } = 0;


        public int? SetMileage1 { get; set; } = 0;


        public int? SetMileage2 { get; set; } = 0;


        public int? SetMileage3 { get; set; } = 0;


        public int? SetMileage4 { get; set; } = 0;


        public int? SetMileage5 { get; set; } = 0;


        public int? Mileage1Limit { get; set; } = 0;


        public int? Mileage2Limit { get; set; } = 0;


        public int? Mileage3Limit { get; set; } = 0;


        public int? Mileage4Limit { get; set; } = 0;


        public int? Mileage5Limit { get; set; } = 0;


        public string? HighIdleNoLimit { get; set; } = string.Empty;


        public string? HighIdleCOLimit { get; set; } = string.Empty;


        public string? HighIdleHCLimit { get; set; } = string.Empty;


        public string? LambdaMaxLimit { get; set; } = string.Empty;


        public string? LambdaMinLimit { get; set; } = string.Empty;


        public string? IdleNoLimit { get; set; } = string.Empty;


        public string? IdleCOLimit { get; set; } = string.Empty;


        public string? IdleHCLimit { get; set; } = string.Empty;


        public string? SootMassLimit { get; set; } = string.Empty;


        public string? IntensityMinLimit { get; set; } = string.Empty;


        public string? IntensityMaxLimit { get; set; } = string.Empty;


        public string? AuxIntensityMinLimit { get; set; } = string.Empty;


        public string? AuxIntensityMaxLimit { get; set; } = string.Empty;


        public string? MainVOffsetMinLimit { get; set; } = string.Empty;


        public string? MainVOffsetMaxLimit { get; set; } = string.Empty;


        public string? DippedVOffsetMinLimit { get; set; } = string.Empty;


        public string? DippedVOffsetMaxLimit { get; set; } = string.Empty;


        public string? AuxMainVOffsetMinLimit { get; set; } = string.Empty;


        public string? AuxMainVOffsetMaxLimit { get; set; } = string.Empty;


        public string? LeftAuxHOffsetMinLimit { get; set; } = string.Empty;


        public string? LeftAuxHOffsetMaxLimit { get; set; } = string.Empty;


        public string? RightAuxHOffsetMinLimit { get; set; } = string.Empty;


        public string? RightAuxHOffsetMaxLimit { get; set; } = string.Empty;


        public string? LeftDippedHOffsetMinLimit { get; set; } = string.Empty;


        public string? LeftDippedHOffsetMaxLimit { get; set; } = string.Empty;


        public string? RightDippedHOffsetMinLimit { get; set; } = string.Empty;


        public string? RightDippedHOffsetMaxLimit { get; set; } = string.Empty;


        public string? LeftMainHOffsetMinLimit { get; set; } = string.Empty;


        public string? LeftMainHOffsetMaxLimit { get; set; } = string.Empty;


        public string? RightMainHOffsetMinLimit { get; set; } = string.Empty;


        public string? RightMainHOffsetMaxLimit { get; set; } = string.Empty;


        public string? DippedIntensityMaxLimit { get; set; } = string.Empty;


        public string? DippedIntensityMinLimit { get; set; } = string.Empty;


        public string? HpLimit { get; set; } = string.Empty;


        public string? RpmHighLimit { get; set; } = string.Empty;


        public string? RpmLowLimit { get; set; } = string.Empty;
    }
}
