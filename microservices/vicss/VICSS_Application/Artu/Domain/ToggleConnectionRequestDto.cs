
namespace VICSS.Service.Artu.Domain
{
    using MediatR;
    using System.Diagnostics.CodeAnalysis;

    [ExcludeFromCodeCoverage]
    public class ToggleConnectionRequestDto : IRequest<ToggleConnectionResponseDto>
    {
        public string Id { get; set; }
        public bool toggleStatus { get; set; }
        public ToggleConnectionRequestDto()
        {

        }
    }
}