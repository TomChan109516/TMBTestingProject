namespace VICSS.Service.ConfigurationService.Domain
{

    using MediatR;
    using System.Text.Json.Serialization;
    public class SearchSystemConfigRequestDto : IRequest<SearchSystemConfigResponseDto>
    {

        public SearchSystemConfigRequestDto(VICSS.Shared.Models.ConfigurationService.SearchSystemConfigRequestDto searchSystemConfigRequestDto) 
        {
            this.searchSystemConfigRequestDto = searchSystemConfigRequestDto;
        }

        public VICSS.Shared.Models.ConfigurationService.SearchSystemConfigRequestDto searchSystemConfigRequestDto { get; set; }

    }
}


