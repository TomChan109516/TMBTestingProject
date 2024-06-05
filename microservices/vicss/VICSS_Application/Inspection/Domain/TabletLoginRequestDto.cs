namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class TabletLoginRequestDto : IRequest<TabletLoginResponseDto>
    {
        public string IpAddress { get; set; }
    }
}
