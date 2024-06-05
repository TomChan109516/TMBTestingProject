using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VICSS.Shared.Models.Common;

namespace VICSS.Shared.Models.Inspection
{
    public class ValuePariForActiveStation
    {
        public string AppointmentNumber { get; set; }
        public List<TestType> TestTypes { get; set; } = new List<TestType>();
        public int TotalTestCount { get; set; }
    }
}
