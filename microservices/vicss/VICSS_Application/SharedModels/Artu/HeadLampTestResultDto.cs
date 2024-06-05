namespace VICSS.Shared.Models.Artu
{
    using Newtonsoft.Json;
    using System;
    using System.Text.Json;

    public class HeadLampTestResultDto
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

        [JsonProperty("LEFT_MAIN_INTENSITY")]
        public int LeftMainIntensity { get; set; }

        [JsonProperty("LEFT_MAIN_V_OFFSET")]
        public int LeftMainVOffset { get; set; }

        [JsonProperty("LEFT_MAIN_V_OFFSET_H")]
        public double LeftMainVOffsetH { get; set; }

        [JsonProperty("LEFT_MAIN_H_OFFSET")]
        public int LeftMainHOffset { get; set; }

        [JsonProperty("LEFT_MAIN_HEIGHT")]
        public int LeftMainHeight { get; set; }

        [JsonProperty("LEFT_DIPPED_INTENSITY")]
        public int LeftDippedIntensity { get; set; }

        [JsonProperty("LEFT_DIPPED_V_OFFSET")]
        public int LeftDippedVOffset { get; set; }

        [JsonProperty("LEFT_DIPPED_V_OFFSET_H")]
        public double LeftDippedVOffsetH { get; set; }

        [JsonProperty("LEFT_DIPPED_H_OFFSET")]
        public int LeftDippedHOffset { get; set; }

        [JsonProperty("LEFT_DIPPED_HEIGHT")]
        public int LeftDippedHeight { get; set; }

        [JsonProperty("LEFT_DIPPED_UPWARD_ANGLE")]
        public double LeftDippedUpwardAngle { get; set; }

        [JsonProperty("LEFT_DIPPED_HORIZONT_ALANGLE")]
        public double LeftDippedHorizontAlAngle { get; set; }

        [JsonProperty("LEFT_MAIN_INTENSITY_ADJ")]
        public int LeftMainIntensityAdj { get; set; }

        [JsonProperty("LEFT_MAIN_H_OFFSET_ADJ")]
        public int LeftMainHOffsetAdj { get; set; }

        [JsonProperty("LEFT_MAIN_V_OFFSET_ADJ")]
        public int LeftMainVOffsetAdj { get; set; }

        [JsonProperty("LEFT_DIPPED_H_OFFSET_ADJ")]
        public int LeftDippedHOffsetAdj { get; set; }

        [JsonProperty("LEFT_DIPPED_V_OFFSET_ADJ")]
        public int LeftDippedVOffsetAdj { get; set; }

        [JsonProperty("RIGHT_MAIN_INTENSITY")]
        public int RightMainIntensity { get; set; }

        [JsonProperty("RIGHT_MAIN_V_OFFSET")]
        public int RightMainVOffset { get; set; }

        [JsonProperty("RIGHT_MAIN_V_OFFSET_H")]
        public double RightMainVOffsetH { get; set; }

        [JsonProperty("RIGHT_MAIN_H_OFFSET")]
        public int RightMainHOffset { get; set; }

        [JsonProperty("RIGHT_MAIN_HEIGHT")]
        public int RightMainHeight { get; set; }

        [JsonProperty("RIGHT_DIPPED_INTENSITY")]
        public int RightDippedIntensity { get; set; }

        [JsonProperty("RIGHT_DIPPED_V_OFFSET")]
        public int RightDippedVOffset { get; set; }

        [JsonProperty("RIGHT_DIPPED_V_OFFSET_H")]
        public double RightDippedVOffsetH { get; set; }

        [JsonProperty("RIGHT_DIPPED_H_OFFSET")]
        public int RightDippedHOffset { get; set; }

        [JsonProperty("RIGHT_DIPPED_HEIGHT")]
        public int RightDippedHeight { get; set; }

        [JsonProperty("RIGHT_DIPPED_UPWARD_ANGLE")]
        public double RightDippedUpwardAngle { get; set; }

        [JsonProperty("RIGHT_DIPPED_HORIZONT_ALANGLE")]
        public double RightDippedHorizontAlAngle { get; set; }

        [JsonProperty("RIGHT_MAIN_INTENSITY_ADJ")]
        public int RightMainIntensityAdj { get; set; }

        [JsonProperty("RIGHT_MAIN_H_OFFSET_ADJ")]
        public int RightMainHOffsetAdj { get; set; }

        [JsonProperty("RIGHT_MAIN_V_OFFSET_ADJ")]
        public int RightMainVOffsetAdj { get; set; }

        [JsonProperty("RIGHT_DIPPED_H_OFFSET_ADJ")]
        public int RightDippedHOffsetAdj { get; set; }

        [JsonProperty("RIGHT_DIPPED_V_OFFSET_ADJ")]
        public int RightDippedVOffsetAdj { get; set; }
    }

    public class HeadLampTestResult
    {
        [JsonProperty("Headlamp_Test_Result")]
        public HeadLampTestResultDto headLampTestResultDto { get; set; }
    }

    public class Root
    {
        [JsonProperty("TestResult")]
        public TestResult TestResult { get; set; }
    }

    public class TestResult
    {
        [JsonProperty("interfaceId")]
        public string InterfaceId { get; set; }
        [JsonProperty("serialNumber")]
        public string SerialNumber { get; set; }
        [JsonProperty("testResultXml")]
        public string TestResultXml { get; set; }
    }
}
