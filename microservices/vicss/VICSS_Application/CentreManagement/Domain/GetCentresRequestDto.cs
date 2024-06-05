namespace VICSS.Service.CentreManagement.Domain
{
    using MediatR;
    public class GetCentresRequestDto : IRequest<GetCentresResponseDto>
    {
        public GetCentresRequestDto(string status)
        {
            this.status = status;
        }
        public string status { get; set; }
    }
}