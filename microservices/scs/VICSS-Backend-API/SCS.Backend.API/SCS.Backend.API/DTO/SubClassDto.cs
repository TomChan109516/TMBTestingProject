namespace SCS_Backend_API.DTO
{
    public class SubClassDto
    {
        public string VehicleSubClassId { get; set; }

        public string VehicleSubClassName { get; set; }
    }

    public class SubClassResponse : HttpStatusResponse
    {
        public List<SubClassDto>? data { get; set; }
    }
}
