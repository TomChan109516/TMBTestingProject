namespace VICSS.Service.Artu.Domain
{
    using MediatR;
    using System.Diagnostics.CodeAnalysis;

    [ExcludeFromCodeCoverage]
    public class GetArtuMessageRequestDto : IRequest<GetArtuMessageResponseDto>
    {
        public GetArtuMessageRequestDto()
        {
        }
        public string xmlMessage { get; set; }
    }

}
