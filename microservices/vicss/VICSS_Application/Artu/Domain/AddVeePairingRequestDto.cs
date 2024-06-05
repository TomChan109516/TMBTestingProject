namespace VICSS.Service.Artu.Domain
{
    using MediatR;
    using System.ComponentModel.DataAnnotations;
    using System.Diagnostics.CodeAnalysis;

    [ExcludeFromCodeCoverage]
    public class AddVeePairingRequestDto : IRequest<AddVeePairingResponseDto>
    {
        public AddVeePairingRequestDto()
        {
        }
        public string LaneId { get; set; }
        public string StationId { get; set; }
        public string VeesIp { get; set; }
        public string VeesPort { get; set; }
        public int MaxLogAge { get; set; }
        public float VEEHeartBeatInterval { get; set; }
        public string Description { get; set; }
        public string UserId { get; set; }
    }
}