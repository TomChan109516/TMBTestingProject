namespace VICSS.Service.ConfigurationService.Domain
{
    using System.Text.Json.Serialization;
    using MediatR;
    using VICSS.Shared.Models.ConfigurationService;

    public class SystemConfigRequestDto : IRequest<SystemConfigResponseDto>
    {

        public SystemConfigRequestDto(SystemConfigDto requestDto) 
        {
            this.addUpdateSystemConfigRequestDto = requestDto; 
        }

        [JsonPropertyName("addUpdateSystemConfigRequestDto")]
        public SystemConfigDto addUpdateSystemConfigRequestDto {  get; set; }


    }
}