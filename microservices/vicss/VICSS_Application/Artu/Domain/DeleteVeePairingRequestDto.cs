namespace VICSS.Service.Artu.Domain
{
    using MediatR;
    using System.Diagnostics.CodeAnalysis;

    [ExcludeFromCodeCoverage]
    public class DeleteVeePairingRequestDto : IRequest<DeleteVeePairingResponseDto>
    {
        public DeleteVeePairingRequestDto() { }
        public string Id { get; set; }
    }
}