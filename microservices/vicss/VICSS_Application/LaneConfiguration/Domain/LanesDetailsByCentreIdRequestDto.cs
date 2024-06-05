namespace VICSS.Service.LaneConfiguration.Domain
{
    using MediatR;

    public class LanesDetailsByCentreIdRequestDto : IRequest<LanesDetailsByCenterIdResponseDto>
    {
        public LanesDetailsByCentreIdRequestDto(List<string> centreId)
        {
            this.centreId = centreId;
        }
        public List<string> centreId { get; set; }
    }
}
