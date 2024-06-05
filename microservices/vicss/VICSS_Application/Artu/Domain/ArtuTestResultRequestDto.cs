namespace VICSS.Service.Artu.Domain
{
    using MediatR;
    using System.Diagnostics.CodeAnalysis;

    [ExcludeFromCodeCoverage]
    public class ArtuTestResultRequestDto : IRequest<ArtuTestResultResponseDto>
    {
        public string TestResult { get; set; }
        public string TypeOfMessage { get; set; }
    }
}