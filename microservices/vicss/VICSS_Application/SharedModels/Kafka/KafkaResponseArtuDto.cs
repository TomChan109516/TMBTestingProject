using VICSS.Shared.Models.Artu;

namespace VICSS.Shared.Models.Kafka
{
    public class KafkaResponseArtuDto
    {
        public KafkaResponseArtuDto(string trackingUuid, GetArtuMessageResponseDto getArtuMessageResponse)
        {
            this.trackingUuid = trackingUuid;
            this.messageResponse = getArtuMessageResponse;
        }

        public string? trackingUuid { get; set; }

        public GetArtuMessageResponseDto messageResponse { get; set; }
    }
}
