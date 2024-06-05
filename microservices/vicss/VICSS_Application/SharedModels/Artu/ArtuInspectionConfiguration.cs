namespace VICSS.Shared.Models.Artu
{
    using System;
    using System.Text.Json.Serialization;

    public class ArtuInspectionConfiguration
    {
        [JsonPropertyName("ID")]
        public string? ID { get; set; } = string.Empty;

        [JsonPropertyName("APPOINTMENT_NO")]
        public string? AppointmentNo { get; set; } = string.Empty;

        [JsonPropertyName("VEHICLE_REG_MARK")]
        public string? VehicleRegMark { get; set; } = "XJ9156";

        [JsonPropertyName("VEHICLE_CLASS")]
        public string? VehicleClass { get; set; } = "011";

        [JsonPropertyName("LANE_NO")]
        public string? LaneNo { get; set; } = string.Empty;

        [JsonPropertyName("MAKE")]
        public string? Make { get; set; } = "PA";

        [JsonPropertyName("MODEL")]
        public string? Model { get; set; } = "EXPERT TRAVELLER 5-SEATER";

        [JsonPropertyName("YEAR_OF_MANUFACTURE")]
        public string? YearOfManufacture { get; set; } = "2021";

        [JsonPropertyName("TYPE_APPROVAL_NO")]
        public string? TypeApprovalNo { get; set; } = "L0086B20";

        [JsonPropertyName("PASSENGER_SEAT")]
        public string? PassengerSeat { get; set; } = "4";

        [JsonPropertyName("CHASSIS_NO")]
        public string? ChassisNo { get; set; } = "VF3VEEHZ8MZ046636";

        [JsonPropertyName("ENGINE_NO")]
        public string? EngineNo { get; set; } = "10DY3H4077617";

        [JsonPropertyName("EXAM_CODE")]
        public string? ExamCode { get; set; } = "008";

        [JsonPropertyName("FUEL_TYPE")]
        public string? FuelType { get; set; } = "1";

        [JsonPropertyName("UNLADEN_WEIGHT")]
        public string? UnladenWeight { get; set; } = string.Empty;

        [JsonPropertyName("GVW")]
        public string? GVW { get; set; } = "3100";

        [JsonPropertyName("MAX_P_AXLE_WEIGHT")]
        public string? MaxPAxleWeight { get; set; } = "0";

        [JsonPropertyName("W_AXLE_1")]
        public string? WAxle1 { get; set; } = "1500";

        [JsonPropertyName("W_AXLE_2")]
        public string? WAxle2 { get; set; } = "1800";

        [JsonPropertyName("W_AXLE_3")]
        public string? WAxle3 { get; set; } = "0";

        [JsonPropertyName("W_AXLE_4")]
        public string? WAxle4 { get; set; } = "0";

        [JsonPropertyName("W_AXLE_5")]
        public string? WAxle5 { get; set; } = "0";

        [JsonPropertyName("W_AXLE_6")]
        public string? WAxle6 { get; set; } = "0";

        [JsonPropertyName("W_AXLE_7")]
        public string? WAxle7 { get; set; } = "0";

        [JsonPropertyName("W_AXLE_8")]
        public string? WAxle8 { get; set; } = string.Empty;//

        [JsonPropertyName("VEHICLE_LENGTH")]
        public string? VehicleLength { get; set; } = string.Empty;

        [JsonPropertyName("VEHICLE_WIDTH")]
        public string? VehicleWidth { get; set; } = string.Empty;

        [JsonPropertyName("VEHICLE_HEIGHT")]
        public string? VehicleHeight { get; set; } = string.Empty;

        /* 0-This is a string or int */
        [JsonPropertyName("AWB_MEASUREMENT_MODE")]
        public char? AWBMeasurementMode { get; set; } = 'N';

        [JsonPropertyName("BRAKE_SYSTEM")]
        public string? BrakeSystem { get; set; } = "0";

        [JsonPropertyName("VEHICLE_AXLES_NO")]
        public int? VehicleAxlesNo { get; set; } = 2;

        [JsonPropertyName("BRT_AXLES")]
        public string? BRTAxles { get; set; } = string.Empty;

        [JsonPropertyName("SECONDARY_AXLES")]
        public string? SecondaryAxles { get; set; } = string.Empty;

        [JsonPropertyName("PARK_AXLES")]
        public string? ParkAxles { get; set; } = "2";

        [JsonPropertyName("IS_TB_PARK")]
        public char? IsTBPark { get; set; } = 'N';// 1- this is a string or int value

        [JsonPropertyName("STEERING_AXLES_TYPE")]
        public string? SteeringAxlesType { get; set; } = "1";

        [JsonPropertyName("LOAD_TYPE")]
        public int? LoadType { get; set; } = 0;

        [JsonPropertyName("LOAD_AXLES")]
        public string? LoadAxles { get; set; } = string.Empty;

        [JsonPropertyName("PARK_TYPE")]
        public char? ParkType { get; set; } = 'N';//0-this is a string or int

        [JsonPropertyName("IS_TRICYCLE")]
        public char? IsTricycle { get; set; } = 'N';//0-this is a string or int

        [JsonPropertyName("TRICYCLE_TREAD")]
        public int? TricycleTread { get; set; } = 0;

        [JsonPropertyName("WHEEL_BASE")]
        public int? WheelBase { get; set; } = 0;

        [JsonPropertyName("PROPULSION")]
        public string? Propulsion { get; set; } = "1";

        [JsonPropertyName("SPEED_OPERATION_MODE")]
        public string? SpeedOperationMode { get; set; } = "";

        [JsonPropertyName("STEERING")]
        public char? Steering { get; set; } = 'N';

        [JsonPropertyName("VEHICLE_HEADLAMP_SYSTEM")]
        public char? VehicleHeadlampSystem { get; set; } = 'N';//0-this is a string or int

        [JsonPropertyName("MAIN_BEAM_ADJUSTABLE")]
        public int? MainBeamAdjustable { get; set; } = 1;

        [JsonPropertyName("AIR_INTAKE_SYSTEM")]
        public string? AirIntakeSystem { get; set; } = "0";

        [JsonPropertyName("OIL_SUPPLY_METHOD")]
        public string? OilSupplyMethod { get; set; } = string.Empty;

        [JsonPropertyName("IS_THREE_WAY_CC")]
        public char? IsThreeWayCC { get; set; } = 'N';//0-this is a string or int

        [JsonPropertyName("IS_DOUBLE_AXLE_PROPULSION")]
        public int? IsDoubleAxlePropulsion { get; set; } = 0;

        [JsonPropertyName("RATED_POWER")]
        public int? RatedPower { get; set; } = 0;

        [JsonPropertyName("RATED_SPEED")]
        public int? RatedSpeed { get; set; } = 0;

        [JsonPropertyName("CREATETIME")]
        public string? CreateTime { get; set; } = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss");

        [JsonPropertyName("UPDATETIME")]
        public string? UpdateTime { get; set; } = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss");

        [JsonPropertyName("EXAM_ITEM")]
        public string? ExamItem { get; set; } = string.Empty;

        [JsonPropertyName("CONNECTED_STATE")]
        public string? ConnectedState { get; set; } = "3";

        [JsonPropertyName("AUX_BRK_CAL_TYPE")]
        public string? AuxBrkCalType { get; set; } = "1";

        [JsonPropertyName("AUX_BRK_SP_TYPE")]
        public string? AuxBrkSpType { get; set; } = string.Empty;

        [JsonPropertyName("ALONE_CHECK_AUX_BRK")]
        public string? AloneCheckAuxBrk { get; set; } = "0";

        [JsonPropertyName("OHM_MEASUREMENT_MODE")]
        public string? OhmMeasurementMode { get; set; } = string.Empty;

        [JsonPropertyName("PARKING_TYPE")]
        public string? ParkingType { get; set; } = string.Empty;

        [JsonPropertyName("BRT_MEASURE_METHOD")]
        public string? BRTMeasureMethod { get; set; } = "0";

        [JsonPropertyName("HEADLAMP_MEASUREMENT_MODE")]
        public string? HeadlampMeasurementMode { get; set; } = "1";

        //F1,C1,B0,B1,B2,BA,S1,H1,H4,X5
        [JsonPropertyName("INSP_ITEM")]
        public string? InspItem { get; set; } = "H1,H2,H3,H4";

        [JsonPropertyName("SPEED_WHEEL_TYPE")]
        public string? SpeedWheelType { get; set; } = "0";

        [JsonPropertyName("SET_SPEED")]
        public string? SetSpeed { get; set; } = "50.5";

        [JsonPropertyName("BECHECKED_ITEMS")]
        public string? BeCheckedItems { get; set; } = "X5";

        [JsonPropertyName("BRT_MEASURE_MODE")]
        public string? BRTMeasureMode { get; set; } = "1";

        [JsonPropertyName("TANDEM_AXLE")]
        public string? TandemAxle { get; set; } = string.Empty;
        [JsonPropertyName("SERVICE_BRAKE_CALTYPE")]
        public string? ServiceBrakeCalType { get; set; } = "1";

        [JsonPropertyName("SECONDARY_BRAKE_CALTYPE")]
        public string? SecondaryBrakeCalType { get; set; } = "1";

        [JsonPropertyName("PARKING_BRAKE_CALTYPE")]
        public string? ParkingBrakeCalType { get; set; } = "1";

        [JsonPropertyName("TM_SET_MILEAGE")]
        public string? TmSetMileage { get; set; } = "0,0,0,0";

        [JsonPropertyName("STATION_TIMES")]
        public string? StationTimes { get; set; } = "2";

        [JsonPropertyName("PARK_CHECK_LOCK")]
        public string? ParkCheckLock { get; set; } = string.Empty;

        [JsonPropertyName("SCANNING_ACCELERATION")]
        public string? ScanningAcceleration { get; set; } = "1";

        [JsonPropertyName("SCANNING_DECELERATION_RANGE")]
        public string? ScanningDecelerationRange { get; set; } = "1";

        [JsonPropertyName("CONST_SPEED_RANGE")]
        public string? ConstSpeedRange { get; set; } = "1";

        [JsonPropertyName("LD_MAX_SPEED")]
        public string? LdMaxSpeed { get; set; } = "100";

        [JsonPropertyName("LD_MIN_SPEED")]
        public string? LdMinSpeed { get; set; } = "50";

        [JsonPropertyName("LD_PROCESS_BELOAD")]
        public string? LdProcessBeload { get; set; } = "10";

        [JsonPropertyName("CONST_SPEED_TIME")]
        public string? ConstSpeedTime { get; set; } = "3";

        [JsonPropertyName("LD_SAMPLING_TIME")]
        public string? LdSamplingTime { get; set; } = "5";

        [JsonPropertyName("LD_END_SCANNING_SPEED")]
        public string? LdEndScanningSpeed { get; set; } = "20";

        [JsonPropertyName("IS_ADVANCE_APPLY_PARKING")]
        public string? IsAdvanceApplyParking { get; set; } = "0";

        [JsonPropertyName("LD_LEGAL_EMISSION_LIMIT")]
        public string? LdLegalEmissionLimit { get; set; } = "50";

        [JsonPropertyName("LD_RATED_POWER_LOW_SH")]
        public string? LdRatedPowerLowSh { get; set; } = "95";

        [JsonPropertyName("LD_RATED_POWER_HIGH_SH")]
        public string? LdRatedPowerHighSh { get; set; } = "105";

        [JsonPropertyName("LD_RATED_SPEED_SH")]
        public string? LdRatedSpeedSh { get; set; } = "50";

        [JsonPropertyName("HSU_LIMIT")]
        public string? HsuLimit { get; set; } = "50";

        [JsonPropertyName("RPM_LIMIT")]
        public string? RpmLimit { get; set; } = "5";

        [JsonPropertyName("STATION")]
        public string? Station { get; set; } = string.Empty;

        [JsonPropertyName("WHETHER_TO_RETURN_WEB")]
        public string? WhetherToReturnWeb { get; set; } = "1";

        [JsonPropertyName("VEH_ID")]
        public string? VehId { get; set; } = "003359068";

        [JsonPropertyName("IDLE_CHECK_TIME")]
        public string? IdleCheckTime { get; set; } = "10";

        [JsonPropertyName("H_IDLE_CHECK_TIME")]
        public string? HIdleCheckTime { get; set; } = "10";

        [JsonPropertyName("FAT_CHECK_TIMES")]
        public string? FatCheckTimes { get; set; } = "10";

        [JsonPropertyName("LD_AMENDMENT_MODE")]
        public string? LdAmendmentMode { get; set; } = string.Empty;

        [JsonPropertyName("LD_AMENDMENT_DRYAIR")]
        public string? LdAmendmentDryair { get; set; } = "99";

        [JsonPropertyName("LD_AMENDMENT_COEFFICIENT")]
        public string? LdAmendmentCoefficient { get; set; } = string.Empty;

        [JsonPropertyName("TM_SET_MILEAGE_MAX")]
        public string? TmSetMileageMax { get; set; } = "0,0,0,0";

        [JsonPropertyName("LD_FUEL_DENSITY")]
        public string? LdFuelDensity { get; set; } = "0.85";

        [JsonPropertyName("LD_FUEL_OIL_VISCOSITY")]
        public string? LdFuelOilViscosity { get; set; } = "2.6";

        [JsonPropertyName("LD_TEMPERATURE")]
        public string? LdTemperature { get; set; } = "25";

        [JsonPropertyName("ENGINE_MODEL")]
        public string? EngineModel { get; set; } = string.Empty;

        [JsonPropertyName("ENGINE_TYPE")]
        public string? EngineType { get; set; } = "1";

        [JsonPropertyName("WHEEL_SPAN")]
        public string? WheelSpan { get; set; } = string.Empty;

        [JsonPropertyName("BODY_TYPE")]
        public string? BodyType { get; set; } = "G";

        [JsonPropertyName("ENGINE_SIZE")]
        public string? EngineSize { get; set; } = string.Empty;

        [JsonPropertyName("ENGINE_CAP")]
        public string? EngineCap { get; set; } = "1997";

        [JsonPropertyName("LPG_TANK_NO")]
        public string? LpgTankNo { get; set; } = string.Empty;

        [JsonPropertyName("LPG_TANK_MODEL")]
        public string? LpgTankModel { get; set; } = string.Empty;

        [JsonPropertyName("VALIDATION_DATE")]
        public string? ValidationDate { get; set; } = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss");

        [JsonPropertyName("TAXIMETER_MAKE")]
        public string? TaximeterMake { get; set; } = string.Empty;

        [JsonPropertyName("TAXIMETER_MODEL")]
        public string? TaximeterModel { get; set; } = string.Empty;

        [JsonPropertyName("UPPER_DECK")]
        public string? UpperDeck { get; set; } = string.Empty;

        [JsonPropertyName("LOWER_DECK")]
        public string? LowerDeck { get; set; } = string.Empty;

        [JsonPropertyName("STANDING")]
        public string? Standing { get; set; } = string.Empty;

        [JsonPropertyName("CSA")]
        public string? CSA { get; set; } = string.Empty;

        [JsonPropertyName("CSA1")]
        public string? CSA1 { get; set; } = string.Empty;

        [JsonPropertyName("CSA2")]
        public string? CSA2 { get; set; } = string.Empty;

        [JsonPropertyName("CSA3")]
        public string? CSA3 { get; set; } = string.Empty;

        [JsonPropertyName("CSA4")]
        public string? CSA4 { get; set; } = string.Empty;

        [JsonPropertyName("CSA5")]
        public string? CSA5 { get; set; } = string.Empty;

        [JsonPropertyName("CSA6")]
        public string? CSA6 { get; set; } = string.Empty;

        [JsonPropertyName("CSA7")]
        public string? CSA7 { get; set; } = string.Empty;

        [JsonPropertyName("VHCL_MODEL_NUM")]
        public string? VhclModelNum { get; set; } = "V EHZ8-N2F00P";

        [JsonPropertyName("VHCL_PRMY_COLOR_CODE")]
        public string? VhclPrmyColorCode { get; set; } = "C";

        [JsonPropertyName("VHCL_SCND_COLOR_CODE")]
        public string? VhclScndColorCode { get; set; } = string.Empty;
        [JsonPropertyName("COUNTRY_PLACE_OF_ORIGIN")]
        public string? CountryPlaceOfOrigin { get; set; } = "14";

        [JsonPropertyName("CYLINDER_CAPACITY")]
        public string? CylinderCapacity { get; set; } = string.Empty;

        [JsonPropertyName("ALL_CLASSER_EXCEPT_BUS")]
        public string? AllClasserExceptBus { get; set; } = string.Empty;

        [JsonPropertyName("VHCL_LWR_SEAT_CAP_QTY")]
        public string? VhclLwrSeatCapQty { get; set; } = "4";

        [JsonPropertyName("VHCL_UPR_SEAT_CAP_QTY")]
        public string? VhclUprSeatCapQty { get; set; } = "0";

        [JsonPropertyName("VHCL_STND_CAP_QTY")]
        public string? VhclStndCapQty { get; set; } = "0";

        [JsonPropertyName("PRIVIOURS_CLASS")]
        public string? PrivioursClass { get; set; } = string.Empty;

        [JsonPropertyName("EX_REGISTRATION_MARK")]
        public string? ExRegistrationMark { get; set; } = string.Empty;

        [JsonPropertyName("ORIGINAL_REGISTRATION")]
        public string? OriginalRegistration { get; set; } = string.Empty;

        [JsonPropertyName("VHCL_PGV_WGHT")]
        public string? VhclPgvWght { get; set; } = "3.10";

        [JsonPropertyName("PERMITTED_GROSS_COMBINED_WEIGHT")]
        public string? PermittedGrossCombinedWeight { get; set; } = "0";

        [JsonPropertyName("LANTAU_VHCL_IND")]
        public string? LantauVhclInd { get; set; } = "N";

        [JsonPropertyName("PRVT_ROAD_VHCL_IND")]
        public string? PrvtRoadVhclInd { get; set; } = "N";

        [JsonPropertyName("VHCL_LUG_WGHT")]
        public string? VhclLugWght { get; set; } = "0";

        [JsonPropertyName("VHCL_FRST_REG_DATE")]
        public string? VhclFrstRegDate { get; set; } = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss");

        [JsonPropertyName("STATISTIC_INFO_CODE")]
        public string? StatisticInfoCode { get; set; } = string.Empty;

        [JsonPropertyName("TRICYCLE_SINGLE_SHAFT")]
        public string? TricycleSingleShaft { get; set; } = string.Empty;

        [JsonPropertyName("VIN_LOCATION")]
        public string? VinLocation { get; set; } = string.Empty;

        [JsonPropertyName("TYRE_SIZE_AXLE1")]
        public string? TyreSizeAxle1 { get; set; } = string.Empty;

        [JsonPropertyName("TYRE_SIZE_AXLE2")]
        public string? TyreSizeAxle2 { get; set; } = string.Empty;

        [JsonPropertyName("TYRE_SIZE_AXLE3")]
        public string? TyreSizeAxle3 { get; set; } = string.Empty;

        [JsonPropertyName("TYRE_SIZE_AXLE4")]
        public string? TyreSizeAxle4 { get; set; } = string.Empty;

        [JsonPropertyName("TYRE_SIZE_AXLE5")]
        public string? TyreSizeAxle5 { get; set; } = string.Empty;

        [JsonPropertyName("TYRE_SIZE_AXLE6")]
        public string? TyreSizeAxle6 { get; set; } = string.Empty;

        [JsonPropertyName("TYRE_SIZE_AXLE7")]
        public string? TyreSizeAxle7 { get; set; } = string.Empty;

        [JsonPropertyName("TYRE_SIZE_AXLE8")]
        public string? TyreSizeAxle8 { get; set; } = string.Empty;

        [JsonPropertyName("SLD_MAKE_MODEL")]
        public string? SldMakeModel { get; set; } = string.Empty;

        [JsonPropertyName("EDRD_MAKE_MODEL")]
        public string? EdrdMakeModel { get; set; } = string.Empty;

        [JsonPropertyName("SDD_MAKE_MODEL")]
        public string? SddMakeModel { get; set; } = string.Empty;

        [JsonPropertyName("HYBD_VHCL_IND")]
        public string? HybdVhclInd { get; set; } = string.Empty;

        [JsonPropertyName("KING_PIN_DIAMETER")]
        public string? KingPinDiameter { get; set; } = string.Empty;

        [JsonPropertyName("ELECTRIC_MOTOR_NO1")]
        public string? ElectricMotorNo1 { get; set; } = string.Empty;

        [JsonPropertyName("ELECTRIC_MOTOR_NO2")]
        public string? ElectricMotorNo2 { get; set; } = string.Empty;

        [JsonPropertyName("ELECTRIC_MOTOR_NO3")]
        public string? ElectricMotorNo3 { get; set; } = string.Empty;

        [JsonPropertyName("ELECTRIC_MOTOR_NO4")]
        public string? ElectricMotorNo4 { get; set; } = string.Empty;

        [JsonPropertyName("ELECTRIC_MOTOR_LOCATION1")]
        public string? ElectricMotorLocation1 { get; set; } = string.Empty;

        [JsonPropertyName("ELECTRIC_MOTOR_LOCATION2")]
        public string? ElectricMotorLocation2 { get; set; } = string.Empty;

        [JsonPropertyName("ELECTRIC_MOTOR_LOCATION3")]
        public string? ElectricMotorLocation3 { get; set; } = string.Empty;

        [JsonPropertyName("ELECTRIC_MOTOR_LOCATION4")]
        public string? ElectricMotorLocation4 { get; set; } = string.Empty;

        [JsonPropertyName("GCW")]
        public string? Gcw { get; set; } = "0";

        [JsonPropertyName("BRAKE_INSP_ITEM")]
        public string? BrakeInspItem { get; set; } = "B0,B1,B2,BA";

        [JsonPropertyName("ISIT_MOM_APPT")]
        public string? IsitMomAppt { get; set; } = "0";

        [JsonPropertyName("K_LIMIT")]
        public string? KLimit { get; set; } = "1.61";

        [JsonPropertyName("UNBAL_AXLE_1_LIMIT")]
        public string? UnbalAxle1Limit { get; set; } = "30";

        [JsonPropertyName("UNBAL_AXLE_2_LIMIT")]
        public string? UnbalAxle2Limit { get; set; } = "30";

        [JsonPropertyName("UNBAL_AXLE_3_LIMIT")]
        public string? UnbalAxle3Limit { get; set; } = "30";

        [JsonPropertyName("UNBAL_AXLE_4_LIMIT")]
        public string? UnbalAxle4Limit { get; set; } = "30";

        [JsonPropertyName("UNBAL_AXLE_5_LIMIT")]
        public string? UnbalAxle5Limit { get; set; } = "30";

        [JsonPropertyName("UNBAL_AXLE_6_LIMIT")]
        public string? UnbalAxle6Limit { get; set; } = "30";

        [JsonPropertyName("UNBAL_AXLE_7_LIMIT")]
        public string? UnbalAxle7Limit { get; set; } = "30";

        [JsonPropertyName("UNBAL_AXLE_8_LIMIT")]
        public string? UnbalAxle8Limit { get; set; } = "30";

        [JsonPropertyName("B_AXLE_1_LIMIT")]
        public string? BAxle1Limit { get; set; } = "50";

        [JsonPropertyName("B_AXLE_2_LIMIT")]
        public string? BAxle2Limit { get; set; } = "50";

        [JsonPropertyName("B_AXLE_3_LIMIT")]
        public string? BAxle3Limit { get; set; } = "50";

        [JsonPropertyName("B_AXLE_4_LIMIT")]
        public string? BAxle4Limit { get; set; } = "50";

        [JsonPropertyName("B_AXLE_5_LIMIT")]
        public string? BAxle5Limit { get; set; } = "50";

        [JsonPropertyName("B_AXLE_6_LIMIT")]
        public string? BAxle6Limit { get; set; } = "50";

        [JsonPropertyName("B_AXLE_7_LIMIT")]
        public string? BAxle7Limit { get; set; } = "50";

        [JsonPropertyName("B_AXLE_8_LIMIT")]
        public string? BAxle8Limit { get; set; } = "50";

        [JsonPropertyName("BRAKE_EFFICIENCY_LIMIT")]
        public string? BrakeEfficiencyLimit { get; set; } = "50";

        [JsonPropertyName("PARKING_EFFICIENCY_LIMIT")]
        public string? ParkingEfficiencyLimit { get; set; } = "16";

        [JsonPropertyName("AUXILIARY_BRAKE_EFFICIENCY_LIMIT")]
        public string? AuxiliaryBrakeEfficiencyLimit { get; set; } = "25";

        [JsonPropertyName("SET_SPEED_1")]
        public int? SetSpeed1 { get; set; } = 50;

        [JsonPropertyName("SET_SPEED_2")]
        public int? SetSpeed2 { get; set; } = 50;

        [JsonPropertyName("SET_SPEED_3")]
        public int? SetSpeed3 { get; set; } = 50;

        [JsonPropertyName("MIN_SPEED_LIMIT")]
        public int? MinSpeedLimit { get; set; } = 45;

        [JsonPropertyName("MAX_SPEED_LIMIT")]
        public int? MaxSpeedLimit { get; set; } = 55;

        [JsonPropertyName("SET_LIMIT_SPEED")]
        public string? SetLimitSpeed { get; set; } = string.Empty;

        [JsonPropertyName("SET_SDD_LIMIT_SPEED")]
        public int? SetSddLimitSpeed { get; set; } = 0;

        [JsonPropertyName("MIN_SDD_SPEED_LIMIT")]
        public int? MinSddSpeedLimit { get; set; } = 0;
        [JsonPropertyName("MAX_SDD_SPEED_LIMIT")]
        public int? MaxSddSpeedLimit { get; set; } = 0;

        [JsonPropertyName("SET_MILEAGE_1")]
        public int? SetMileage1 { get; set; } = 0;

        [JsonPropertyName("SET_MILEAGE_2")]
        public int? SetMileage2 { get; set; } = 0;

        [JsonPropertyName("SET_MILEAGE_3")]
        public int? SetMileage3 { get; set; } = 0;

        [JsonPropertyName("SET_MILEAGE_4")]
        public int? SetMileage4 { get; set; } = 0;

        [JsonPropertyName("SET_MILEAGE_5")]
        public int? SetMileage5 { get; set; } = 0;

        [JsonPropertyName("MILEAGE_1_LIMIT")]
        public int? Mileage1Limit { get; set; } = 0;

        [JsonPropertyName("MILEAGE_2_LIMIT")]
        public int? Mileage2Limit { get; set; } = 0;

        [JsonPropertyName("MILEAGE_3_LIMIT")]
        public int? Mileage3Limit { get; set; } = 0;

        [JsonPropertyName("MILEAGE_4_LIMIT")]
        public int? Mileage4Limit { get; set; } = 0;

        [JsonPropertyName("MILEAGE_5_LIMIT")]
        public int? Mileage5Limit { get; set; } = 0;

        [JsonPropertyName("HIGH_IDLE_NO_LIMIT")]
        public string? HighIdleNoLimit { get; set; } = string.Empty;

        [JsonPropertyName("HIGH_IDLE_CO_LIMIT")]
        public string? HighIdleCOLimit { get; set; } = string.Empty;

        [JsonPropertyName("HIGH_IDLE_HC_LIMIT")]
        public string? HighIdleHCLimit { get; set; } = string.Empty;

        [JsonPropertyName("LAMBDA_MAX_LIMIT")]
        public string? LambdaMaxLimit { get; set; } = string.Empty;

        [JsonPropertyName("LAMBDA_MIN_LIMIT")]
        public string? LambdaMinLimit { get; set; } = string.Empty;

        [JsonPropertyName("IDLE_NO_LIMIT")]
        public string? IdleNoLimit { get; set; } = string.Empty;

        [JsonPropertyName("IDLE_CO_LIMIT")]
        public string? IdleCOLimit { get; set; } = string.Empty;

        [JsonPropertyName("IDLE_HC_LIMIT")]
        public string? IdleHCLimit { get; set; } = string.Empty;

        [JsonPropertyName("SOOT_MASS_LIMIT")]
        public string? SootMassLimit { get; set; } = string.Empty;

        [JsonPropertyName("INTENSITY_MIN_LIMIT")]
        public string? IntensityMinLimit { get; set; } = "100";

        [JsonPropertyName("INTENSITY_MAX_LIMIT")]
        public string? IntensityMaxLimit { get; set; } = "100000";

        [JsonPropertyName("AUX_INTENSITY_MIN_LIMIT")]
        public string? AuxIntensityMinLimit { get; set; } = "100";

        [JsonPropertyName("AUX_INTENSITY_MAX_LIMIT")]
        public string? AuxIntensityMaxLimit { get; set; } = "100000";

        [JsonPropertyName("MAIN_V_OFFSET_MIN_LIMIT")]
        public string? MainVOffsetMinLimit { get; set; } = "-999";

        [JsonPropertyName("MAIN_V_OFFSET_MAX_LIMIT")]
        public string? MainVOffsetMaxLimit { get; set; } = "999";

        [JsonPropertyName("DIPPED_V_OFFSET_MIN_LIMIT")]
        public string? DippedVOffsetMinLimit { get; set; } = "-999";

        [JsonPropertyName("DIPPED_V_OFFSET_MAX_LIMIT")]
        public string? DippedVOffsetMaxLimit { get; set; } = "175";

        [JsonPropertyName("AUX_MAIN_V_OFFSET_MIN_LIMIT")]
        public string? AuxMainVOffsetMinLimit { get; set; } = string.Empty;

        [JsonPropertyName("AUX_MAIN_V_OFFSET_MAX_LIMIT")]
        public string? AuxMainVOffsetMaxLimit { get; set; } = string.Empty;

        [JsonPropertyName("LEFT_AUX_H_OFFSET_MIN_LIMIT")]
        public string? LeftAuxHOffsetMinLimit { get; set; } = string.Empty;

        [JsonPropertyName("LEFT_AUX_H_OFFSET_MAX_LIMIT")]
        public string? LeftAuxHOffsetMaxLimit { get; set; } = string.Empty;

        [JsonPropertyName("RIGHT_AUX_H_OFFSET_MIN_LIMIT")]
        public string? RightAuxHOffsetMinLimit { get; set; } = string.Empty;

        [JsonPropertyName("RIGHT_AUX_H_OFFSET_MAX_LIMIT")]
        public string? RightAuxHOffsetMaxLimit { get; set; } = string.Empty;

        [JsonPropertyName("LEFT_DIPPED_H_OFFSET_MIN_LIMIT")]
        public string? LeftDippedHOffsetMinLimit { get; set; } = "-175";

        [JsonPropertyName("LEFT_DIPPED_H_OFFSET_MAX_LIMIT")]
        public string? LeftDippedHOffsetMaxLimit { get; set; } = "999";

        [JsonPropertyName("RIGHT_DIPPED_H_OFFSET_MIN_LIMIT")]
        public string? RightDippedHOffsetMinLimit { get; set; } = "-175";

        [JsonPropertyName("RIGHT_DIPPED_H_OFFSET_MAX_LIMIT")]
        public string? RightDippedHOffsetMaxLimit { get; set; } = "999";

        [JsonPropertyName("LEFT_MAIN_H_OFFSET_MIN_LIMIT")]
        public string? LeftMainHOffsetMinLimit { get; set; } = "-999";

        [JsonPropertyName("LEFT_MAIN_H_OFFSET_MAX_LIMIT")]
        public string? LeftMainHOffsetMaxLimit { get; set; } = "999";

        [JsonPropertyName("RIGHT_MAIN_H_OFFSET_MIN_LIMIT")]
        public string? RightMainHOffsetMinLimit { get; set; } = string.Empty;

        [JsonPropertyName("RIGHT_MAIN_H_OFFSET_MAX_LIMIT")]
        public string? RightMainHOffsetMaxLimit { get; set; } = string.Empty;

        [JsonPropertyName("DIPPED_INTENSITY_MAX_LIMIT")]
        public string? DippedIntensityMaxLimit { get; set; } = "100000";

        [JsonPropertyName("DIPPED_INTENSITY_MIN_LIMIT")]
        public string? DippedIntensityMinLimit { get; set; } = "1000";

        [JsonPropertyName("HP_LIMIT")]
        public string? HpLimit { get; set; } = string.Empty;

        [JsonPropertyName("RPM_HIGH_LIMIT")]
        public string? RpmHighLimit { get; set; } = string.Empty;

        [JsonPropertyName("RPM_LOW_LIMIT")]
        public string? RpmLowLimit { get; set; } = string.Empty;
    }
}
