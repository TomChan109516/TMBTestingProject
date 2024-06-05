using System.Diagnostics.CodeAnalysis;
using VICSS.Shared.Models.Common;

namespace VICSS.Service.Artu.Domain
{
    [ExcludeFromCodeCoverage]
    public class VeeCommandControlResponseDto : ApiErrorMessage
    {
        public string? Message { get; set; }
        public bool IsSuccess { get; set; }
    }
}
