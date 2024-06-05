namespace VICSS.Service.ConfigurationService.Domain
{
    using System.Text.Json.Serialization;
    using MediatR;
    using VICSS.Shared.Models.ConfigurationService;

    public class DisableSystemConfigRequestDto : IRequest<DisableSystemConfigResponseDto>
    {        

        public DisableSystemConfigRequestDto() { }

        public DisableSystemConfigRequestDto(DeleteSystemConfigRequestDto requestDto)
        {
            this.disableSystemConfig = requestDto;
        }
        

        [JsonPropertyName("disableSystemConfig")]
        public DeleteSystemConfigRequestDto disableSystemConfig { get; set; }
    }
}