using System.Diagnostics.CodeAnalysis;

namespace VICSS.Service.Artu.Domain
{
    [ExcludeFromCodeCoverage]
    public class TestResultRequestDto
    {
        public string InterfaceId { get; set; }
        public string SerialNumber { get; set; }
        public string TestResultXml { get; set; }
    }
}
