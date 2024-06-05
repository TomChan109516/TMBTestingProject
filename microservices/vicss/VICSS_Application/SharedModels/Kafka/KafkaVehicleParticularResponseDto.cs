using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VICSS.Service.Models.Vehicle;
using VICSS.Shared.Models.Vehicle;

namespace VICSS.Service.Models.Kafka
{
    public class KafkaVehicleParticularResponseDto
    {
        public KafkaVehicleParticularResponseDto() { }

        public KafkaVehicleParticularResponseDto(string trackingUuid, VehicleParticularDetailsByVehicleIdDto vehicleParticular)
        {
            this.trackingUuid = trackingUuid;
            this.VehicleParticularDetailsByVehicleId = vehicleParticular;
        }

        public string? trackingUuid { get; set; }

        public VehicleParticularDetailsByVehicleIdDto VehicleParticularDetailsByVehicleId { get; set; }
    }
}
