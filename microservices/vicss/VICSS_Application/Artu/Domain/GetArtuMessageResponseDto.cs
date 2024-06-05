using System.Diagnostics.CodeAnalysis;

namespace VICSS.Service.Artu.Domain
{
    [ExcludeFromCodeCoverage]
    public class GetArtuMessageResponseDto
    {
        public string code { get; set; }
        public string message { get; set; }
    }

}
