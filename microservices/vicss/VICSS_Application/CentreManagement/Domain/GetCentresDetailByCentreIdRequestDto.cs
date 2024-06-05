namespace VICSS.Service.CentreManagement.Domain
{
    using MediatR;
    public class GetCentresDetailByCentreIdRequestDto : IRequest<GetCentresDetailByCentreIdResponseDto>
    {
        public GetCentresDetailByCentreIdRequestDto(List<string> centreId)
        {
            this.centreId = centreId;
        }
        public List<string> centreId { get; set; }
    }
}
