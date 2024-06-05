using Newtonsoft.Json;
using System.Runtime.Serialization;
using System.Xml.Serialization;

namespace VICSS.Service.Inspection.Domain
{
    public class StartInspectionXmlCondition
    {
        [JsonProperty("art_status")]
        public string Artu_Status { get; set; }
        [JsonProperty("lane_no")]
        public string Lane_No { get; set; }
        [JsonProperty("station")]
        public string Station { get; set; }
        [JsonProperty("vees_status")]
        public string Vees_status { get; set; }
    }

    public class StartInspectionXmlRoot
    {
        [JsonProperty("WriteCondition")]
        public StartInspectionXmlCondition startInspectionXmls { get; set; }

    }

    public class StartInspectionXmlDoc
    {
        [JsonProperty("root")]
        public StartInspectionXmlRoot startInspectionRootXmls { get; set; }
    }

    public class StartInspectionXml
    {
        [JsonProperty("xmlDoc")]
        public StartInspectionXmlDoc startInspectionRootXmls { get; set; }
    }
}