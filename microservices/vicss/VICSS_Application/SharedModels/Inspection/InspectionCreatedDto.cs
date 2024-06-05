namespace VICSS.Shared.Models.Inspection
{
    public class InspectionCreatedDto
    {
        public InspectionCreatedDto(string inspectionId, List<string> InspectionTypeId, string vehicleId, string laneId, string userId)
        {
            this.InspectionId = inspectionId;
            this.InspectionTypeId = InspectionTypeId;
            this.VehicleId = vehicleId;
            this.LaneId = laneId;
            this.UserId = userId;
        }
        public string InspectionId { get; set; }
        public List<string> InspectionTypeId { get; set; }
        public string VehicleId { get; set; }
        public string LaneId { get; set; }

        public string UserId { get; set; }
    }
}
