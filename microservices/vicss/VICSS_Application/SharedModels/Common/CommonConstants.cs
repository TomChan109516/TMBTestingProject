using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace VICSS.Shared.Models.Common
{
    public static class CommonConstants
    {
        public const char InsertTranTypeCode = 'I';
        public const char UpdateTranTypeCode = 'U';
        public const char DeleteTranTypeCode = 'D';
        public const string NotApplicable = "NA";

        public const string ActiveStatus = "Active";
        public const string AllStatus = "All";
        public const string InactiveStatus = "Inactive";
        public const char CommaSeparator = ',';
        public static string[] DaySessionCode = { "AM", "PM", "EV" };
        public const string LaneTimeSlotTimeFormat = "HH:mm";

        public const string DynamicConsumerGroup = "{0}-{1}";
        public const string Supplementary = "Supplementary";
        public const string Primary = "Primary";

        public const string InspectionServiceName = "Inspection Service";
        public const string CentreServiceName = "Centre Service";
        public const string AppointmentServiceName = "Appointment Service";
        public const string LaneServiceName = "Lane Service";
        public const string VehicleServiceName = "Vehicle Service";
        public const string ConfigurationService = "Configuration Service";

        public const string GetExamIdByLaneIdHostedService = "GetExamIdByLaneId Hosted Service";
        public const string GetExamCodeHostedService = "GetExamCode Hosted Service";
        public const string GetCentreHostedService = "GetCentre Hosted Service";
        public const string GetInspectionDetailsByIdHostedService = "GetInspectionDetailsById Hosted Service";

        public const string OverheadHeightMeasurement = "OHM";
        public const string VisualInspection = "VI";
        public const string BrakeRollerTest = "BRT";
        public const string HeadlampTest = "HT";
        public const string ExhaustEmissionTestPetrol = "Petrol";
        public const string FreeAccelerationTest = "FAT";
        public const string SpeedometerTest = "ST";
        public const string TaximeterTest = "TT";
        public const string SpeedDisplayDeviceTest = "SDD";
        public const string SealVeificationAndAssignemnet = "SVA";
        public const string UnderCarriageInspection = "UCI";
        public const string SpeedLimitDeviceTest = "SLD";
        public const string ElectronicDataRecordingDevice = "EDRD";
        public const string AxleWeightbridgeTest = "AWB";
        public const string TiltingTest = "TSTP";
        public const string AutoTestMode = "Auto";
        public const string SemTestModei = "Semi";
        public const string ManualTestMode = "Manual";
        public const string StartInspection = "Start Inspection";
        public const string NumHeadLamp = "One Lamp";
        public const string MainBeamAdjustable = "No";
        public const string HeadLightMasuringMethod = "Manual test";
        public const string SteeringPosition = "Left";

        public static HashSet<string> validValues = new HashSet<string> { "P", "F", "S" };
        public const char Yes = 'Y';
        public const char No = 'N';
        public const string AppointmentNumber = "yyyyddHHmmss";
        public const string AppointmentStatus = "Created";
        public static string[] MessageTypeCode = { "19W17", "19Q05", "19W01", "Acknowledge", "19W15", "19W16" };
        public static string[] Code = { "0", "1" };

        public static string ArtuDefaultStatus = "1";
        public static int VeesDefaultStatus = 0;
        public static string InspectionConfiguration = "Inspection_Configuration";

        public const string ExamFees = "585";
        public static List<string> validTestTypes = new List<string> { "For DYNO Tests", "For Non-DYNO Tests" };
        public const string XmlDeclaration = "<?xml version=\"1.0\" encoding=\"GBK\"?>";
        public static string JsonSuccess = "Success";
        public const string XmlDeclarationVersion = "1.0";
        public const string XmlDeclarationEncoding = "GBK";
        public const string XmlCommandElementName = "command";
        public const string XmlCodeElementName = "code";
        public const string XmlMessageElementName = "message";
        public const string XmlMessageElementContent = "1";
        public const int SendVeesAcknowledgmentCommand = 4;
        public const int Send0x01VeesCommand = 1;
        public const int Send0x02VeesCommand = 2;
        public const int Send0x03VeesCommand = 3;
        public const int Send0x04VeesCommand = 4;

        public const string xmlAcknowledgmentTemplate = "<?xml version=\"1.0\" encoding=\"GBK\"?><command><code>{0}</code><message>{1}</message></command>";
        public const string StopDetection = "停止檢測";
        public const string StartChecking = "开始检查";
        public const string SkipCurrentDevice = "跳過當前設備";
        public const string ClearCurrentResults = "清除當前結果";
        public const string DetectionCompleted = "檢測結束(VI或UCI)";
        public const string SiteClosed = "站點關閉(VI或UCI)";
        public const string IdleAndOpen = "站點空閒且打開屏幕(VI或UCI)";
        public const string InvalidVeesAction = "Invalid Vees Action";

        public const char SearchWildcardCharacter = '*'; 
        public const char WildcardPercentCharacter = '%';
        public const string RemoveSpecialCharactersPattern = @"[^0-9a-zA-Z]+";        

        public const string Virtual = "VIRTUAL";
        public const string Physical = "PHYSICAL";
        public const bool LaneStatus = true;
        public const int DefaultCapacity = 10;        

        public static List<char> watchlistReasonType = new List<char> { 'W', 'A' };
        public static char WatchlistReasonTypeWatch = 'W';
        public static string WatchlistReasonTypeWatchString = "Watch";
        public static string WatchlistReasonTypeAlertString = "Alert";



        public const string ToggleConnectionOn = "ON";
        public const string ToggleConnectionOff = "OFF";
        public const string ToggleConnectionError = "ON with error";
    }

    public enum MessageTypeCode
    {
        [Description("19W17")]
        W17 = 1,
        [Description("19Q05")]
        Q05 = 2,
        [Description("19W01")]
        W01 = 3,
        [Description("19W15")]
        W15 = 3,
    }

    public enum TestType
    {
        HT,
        OHM,
        Break,
        AxleWeight,
        VI,
        SppedoMeter,
        TaxiMeter,
        UC,
        Exhaust,
        AxleHeight
    }
}
