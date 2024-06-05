using System.Diagnostics.CodeAnalysis;

namespace VICSS.Service.Artu.Domain
{
    [ExcludeFromCodeCoverage]
    public class SetVeesStatus
    {
        public string LaneId { get; set; }
        public string StationId { get; set; }
        public string artu_status { get; set; }
        public string vees_status { get; set; }
    }
}
