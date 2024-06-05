namespace VICSS.Service.Inspection.Domain
{
    using VICSS.Shared.Models.Artu;
    public class GetOhmDataResultResponseDto
    {
        public string Message { get; set; }
        public OhmResultDto OhmResultDto { get; set; }
    }
}
