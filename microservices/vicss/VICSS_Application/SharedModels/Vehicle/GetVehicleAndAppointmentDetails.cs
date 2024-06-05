using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using VICSS.Shared.Models.Common;
using VICSS.Shared.Models.Vehicle;

namespace VICSS.Shared.Models.Vehicle
{
    public class GetVehicleAndAppointmentDetails : VehicleParticularDetailsByVehicleIdDto
    {
        public string? InspectionId { get; set; }
        public string? ExamCode { get; set; }
        public DateTime? AppointmentDate { get; set; }
        public HttpStatusCode? HttpStatusCode { get; set; }
        public string? ErrorMessage { get; set; }
    }
}
