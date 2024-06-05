using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.CodeAnalysis;

namespace VICSS.Service.Artu.Domain
{
    [ExcludeFromCodeCoverage]
    public class VeeCommandControlRequestDto : IRequest<VeeCommandControlResponseDto>
    {
        public string ArtuEndpointId { get; set; }
        public int caseNumber { get; set; }
    }
}