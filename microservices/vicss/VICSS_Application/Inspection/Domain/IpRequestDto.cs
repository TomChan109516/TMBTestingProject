using MediatR;

namespace VICSS.Service.Inspection.Domain
{
    public class IpRequestDto : IRequest<IpResponseDto>
    {
        public string IpAddress { get; set; }
        public Microsoft.AspNetCore.Http.HttpContext Context { get; set; }
    }
}
