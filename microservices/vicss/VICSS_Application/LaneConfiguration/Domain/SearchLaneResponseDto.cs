namespace VICSS.Service.LaneConfiguration.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.LaneConfiguration;

    public class SearchLaneResponseDto : ApiErrorMessage
    {

        public SearchLaneResponseDto()
        {
            lanes = new List<LanesByCenterIdDto>();
        }



        [JsonPropertyName("lanes")]
        public List<LanesByCenterIdDto> lanes { get; set; }
  

    }
}
