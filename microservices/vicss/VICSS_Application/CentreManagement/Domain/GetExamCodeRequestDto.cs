namespace VICSS.Service.CentreManagement.Domain
{
    using MediatR;
    public class GetExamCodeRequestDto : IRequest<GetExamCodeResponseDto>
    {
        public GetExamCodeRequestDto(string centreId)
        {
            this.centreId = centreId;
        }
        public string centreId { get; set; }
    }
}
