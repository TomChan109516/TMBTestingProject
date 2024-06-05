using VICSS.Shared.Models.Artu;

namespace VICSS.Shared.Models.Artu
{
    public class KafkaArtuResponseDto
    {
        public string TrackingUuId { get; set; }
        public GetArtuMessageResponseDto getArtuMessageResponseDto { get; set; }

    }
}
