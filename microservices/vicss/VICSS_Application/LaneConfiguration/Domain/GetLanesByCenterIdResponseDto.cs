namespace VICSS.Service.LaneConfiguration.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.LaneConfiguration;
    public class GetLanesByCenterIdResponseDto : ApiErrorMessage
    {
        public GetLanesByCenterIdResponseDto()
        {
            LanesDto = new List<LanesByCenterIdDto>();
        }
        [JsonPropertyName("laneDetails")]
        public List<LanesByCenterIdDto> LanesDto { get; set; }
    }
}
