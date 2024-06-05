namespace VICSS.Service.CentreManagement.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Common;

    public class GetCentresResponseDto : ApiErrorMessage
    {
        public GetCentresResponseDto()
        {
            centres = new List<CentresDto>();
        }

        [JsonPropertyName("centres")]
        public List<CentresDto> centres { get; set; }
    }
    
}
