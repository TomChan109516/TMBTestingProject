namespace VICSS.Service.Inspection.Domain
{
    using Newtonsoft.Json;
    using VICSS.Shared.Models.Artu;
    using VICSS.Shared.Models.Common;

    public class GetTestStatusResponseDto
    {
        public string Message { get; set; }
        public HeadLampTestResultDto HeadLampData { get; set; }
        public OhmResultDto OhmResultDto { get; set; }

    }
}
