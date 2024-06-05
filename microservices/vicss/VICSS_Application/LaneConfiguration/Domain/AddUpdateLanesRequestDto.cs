

namespace VICSS.Service.LaneConfiguration.Domain
{
    using MediatR;
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.LaneConfiguration;

    public class AddUpdateLanesRequestDto:IRequest<AddUpdateLanesResponseDto>
    {
        public AddUpdateLanesRequestDto(AddUpdateLaneDto addUpdateLaneDto)
        {
                this.addUpdateLaneDto = addUpdateLaneDto;
        }
        [JsonPropertyName("addUpdateLaneDto")]
        public AddUpdateLaneDto addUpdateLaneDto { get; set; }

    }
}
