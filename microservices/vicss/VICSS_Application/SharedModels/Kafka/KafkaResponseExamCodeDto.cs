namespace VICSS.Shared.Models.Kafka
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Inspection;

    public class KafkaResponseExamCodeDto
    {
        public KafkaResponseExamCodeDto()
        {
            ExamCodes = new List<ExamCodeDto>();
        }
        public string? TrackingUuid { get; set; }

        [JsonPropertyName("examCodes")]
        public List<ExamCodeDto> ExamCodes { get; set; }
    }
}
