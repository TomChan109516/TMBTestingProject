namespace VICSS.Service.LaneConfiguration.Domain
{
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.LaneConfiguration;
    public class GetExamsByCentreResponseDto : ApiErrorMessage
    {
        public GetExamsByCentreResponseDto()
        {
            ExamCodeByLaneIdDtos = new List<ExamCodeByLaneIdDto>();

        }
        public List<ExamCodeByLaneIdDto> ExamCodeByLaneIdDtos { get; set; }
    }
}
