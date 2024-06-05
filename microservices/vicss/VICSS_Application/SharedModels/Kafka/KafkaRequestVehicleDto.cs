using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VICSS.Shared.Models.Kafka
{
    public class KafkaRequestVehicleDto
    {
        public KafkaRequestVehicleDto()
        {

        }

        public KafkaRequestVehicleDto(string trackingUuid, string vehicleId)
        {
            this.trackingUuid = trackingUuid;
            this.vehicleId = vehicleId;
        }

        public string? trackingUuid { get; set; }

        public string vehicleId { get; set; }
    }
}
