namespace VICSS.Service.LaneConfiguration.Domain
{
    using MediatR;
    public class GetLanesByCentreIdRequestDto: IRequest<GetLanesByCenterIdResponseDto>
    {
        public GetLanesByCentreIdRequestDto(List<string> centreId)
        {
            this.centreId = centreId;
        }
        public List<string> centreId { get; set; }
    }
}
