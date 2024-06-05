namespace VICSS.Service.Artu.Domain
{
    using System.Diagnostics.CodeAnalysis;
    using VICSS.Shared.Models.Common;

    [ExcludeFromCodeCoverage]
    public class DeleteVeePairingResponseDto : ApiErrorMessage
    {
        public string Message { get; set; }
        public bool IsSuccess { get; set; }
    }
}