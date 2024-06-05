using System.Text.Json.Serialization;
using VICSS.Shared.Models.LaneConfiguration;

namespace VICSS.Shared.Models.Kafka
{
    public class KafkaResponseExamIdByLanesIdDto
    {
        public KafkaResponseExamIdByLanesIdDto()
        {
            ExamCodeByLanesId = new List<ExamCodeByLaneIdDto>();

        }
        public string? TrackingUuid { get; set; }

        [JsonPropertyName("examCodeByLanesId")]
        public List<ExamCodeByLaneIdDto> ExamCodeByLanesId { get; set; }
    }
}
