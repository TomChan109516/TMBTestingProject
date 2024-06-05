namespace VICSS.Service.LaneConfiguration.Domain
{
    using MediatR;
    public class GetExamsByCentreRequestDto : IRequest<GetExamsByCentreResponseDto>
    {
        public GetExamsByCentreRequestDto(string centreId)
        {
            this.centreId = centreId;
        }
        public string centreId { get; set; }
    }
}
