namespace SCS_Backend_API.DTO
{
    public class VehicleClassesDto
    {
        public string VehicleClassId { get; set; }
        public string VehicleClassName { get; set; } = string.Empty;
    }
    
    public class VehicleClassResponse : HttpStatusResponse
    { 
        public List<VehicleClassesDto>? data { get; set; }
    }
}
