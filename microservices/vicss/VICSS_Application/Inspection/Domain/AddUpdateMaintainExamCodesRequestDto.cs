namespace VICSS.Service.Inspection.Domain
{
    using System.Text.Json.Serialization;
    using MediatR;
    using VICSS.Shared.Models.Inspection;

    public class AddUpdateMaintainExamCodesRequestDto : IRequest<AddUpdateMaintainExamCodesResponseDto>
    {
        public AddUpdateMaintainExamCodesRequestDto(ExamCodeDto examCodeDto)
        {
            this.examCodeDto = examCodeDto;   
        }
        [JsonPropertyName("examCodeDto")]
        public ExamCodeDto examCodeDto { get; set; }
    }
}
