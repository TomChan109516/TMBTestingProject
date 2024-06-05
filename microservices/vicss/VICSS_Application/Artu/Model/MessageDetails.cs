namespace VICSS.Services.Artu.Model
{
    using System.Diagnostics.CodeAnalysis;
    using VICSS.Service.Artu.Domain;

    [ExcludeFromCodeCoverage]
    public class MessageDetails
    {
        public string? TrackingUuId { get; set; }
        public GetArtuMessageResponseDto? getArtuMessageResponseDto { get; set; }
    }
}