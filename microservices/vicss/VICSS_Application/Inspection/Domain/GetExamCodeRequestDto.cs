namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class GetExamCodeRequestDto : IRequest<GetExamCodeResponseDto>
    {
        public GetExamCodeRequestDto(string status)
        {
            this.status = status;
        }

        public string status { get; set; }
    }
}
