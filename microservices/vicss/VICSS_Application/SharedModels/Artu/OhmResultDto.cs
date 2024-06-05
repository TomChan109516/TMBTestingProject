namespace VICSS.Shared.Models.Artu
{
    using Newtonsoft.Json;
    using System.Runtime.InteropServices;

    public class OhmResultDto
    {
        [JsonProperty("APPOINTMENT_NO")]
        public string AppointmentNo { get; set; }

        [JsonProperty("LANE_NO")]
        public string LaneNo { get; set; }

        [JsonProperty("VEHICLE_REG_MARK")]
        public string VehicleRegMark { get; set; }

        [JsonProperty("VEHICLE_CLASS")]
        public string VehicleClass { get; set; }

        [JsonProperty("ID")]
        public string Id { get; set; }

        [JsonProperty("STATION_TIMES")]
        public string StationTimes { get; set; }

        [JsonProperty("INSPECTION_BEGIN_TIME")]
        public DateTime InspectionBeginTime { get; set; }

        [JsonProperty("INSPECTION_END_TIME")]
        public DateTime InspectionEndTime { get; set; }

        [JsonProperty("VEHICLE_LENGTH")]
        public int VehicleLength { get; set; }

        [JsonProperty("VEHICLE_WIDTH")]
        public int VehicleWidth { get; set; }

        [JsonProperty("VEHICLE_HEIGHT")]
        public int VehicleHeight { get; set; }
    }
    public class OhmTestResult
    {
        [JsonProperty("Ohm_Result")]
        public OhmResultDto OhmTestResultDto { get; set; }

        [JsonProperty("Ohm_Temp_Result")]
        private OhmResultDto ohmResultDtoTwo
        {
            set
            {
                if (OhmTestResultDto == null)
                    OhmTestResultDto = value;
            }
        }
    }
}
