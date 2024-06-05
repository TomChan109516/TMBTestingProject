using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VICSS.Shared.Models.Vehicle;

namespace Models.Kafka
{
    public class KafkaResponseVehicleDto
    {
        public KafkaResponseVehicleDto()
        {
            VehicleParticularDetailsByVehicleId= new VehicleParticularDetailsByVehicleIdDto();
        }
        public VehicleParticularDetailsByVehicleIdDto VehicleParticularDetailsByVehicleId { get; set; }
    }
}
