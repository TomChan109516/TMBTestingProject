using VICSS.Service.Inspection.Domain;
using VICSS.Shared.Models.Artu;
using VICSS.Shared.Models.Inspection;

namespace VICSS.Service.Inspection.Helper
{
    public static class GlobalDataSaver
    {
        public static Dictionary<(string, string), StartInspectionXmlCondition> SaveActiveVeesStation { get; set; }
        public static Dictionary<string, HeadLampTestResultDto> SaveHeadLampTestData { get; set; }
        public static Dictionary<string, OhmResultDto> SaveOhmTestData { get; set; }
        public static Dictionary<(string, string), ValuePariForActiveStation> SaveActiveStationValue { get; set; }
        public static Dictionary<(string, string), OhmResultDto> SaveOhmTestResult { get; set; }
    }
}
