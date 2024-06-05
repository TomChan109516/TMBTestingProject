namespace VICSS.Service.CentreManagement.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Common;

    public class GetCentresDetailByCentreIdResponseDto : ApiErrorMessage
    {
        public GetCentresDetailByCentreIdResponseDto()
        {
            CentresDto = new List<CentresDto>();
        }

        [JsonPropertyName("centresDto")]
        public List<CentresDto> CentresDto { get; set; }
    }
}
