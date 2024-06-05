namespace VICSS.Service.Vehicle.Domain
{
    using System.Text.Json;
    using System.Text.Json.Serialization;
    using MediatR;
    using VICSS.Shared.Models.Vehicle;

    public class AddUpdateWatchlistReasonRequestDto : IRequest<AddUpdateWatchlistReasonResponseDto>
    {
        public AddUpdateWatchlistReasonRequestDto(AddUpdateWatchlistReasonDto addUpdateWatchlistReasonDto)
        {
            this.addUpdateWatchlistReasonDto = addUpdateWatchlistReasonDto;
        }
        [JsonPropertyName("addUpdateWatchlistReasonDto")]
        public AddUpdateWatchlistReasonDto addUpdateWatchlistReasonDto { get; set; }
    }
}