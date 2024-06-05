namespace VICSS.Services.Artu.Domain
{
    using MediatR;
    using System.Diagnostics.CodeAnalysis;
    using VICSS.Service.Artu.Domain;

    [ExcludeFromCodeCoverage]
    public class SendVeeStatusRequestDto : IRequest<SendVeesStatusResponseDto>
    {
        public SendVeeStatusRequestDto() { }
        public string xmlString { get; set; }
    }
}
