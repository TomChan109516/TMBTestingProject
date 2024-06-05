namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class GetOhmDataResultRequestDto :IRequest<GetOhmDataResultResponseDto>
    {
        public GetOhmDataResultRequestDto()
        {
            
        }
        public string AppointmentNumber { get; set; }
        public string LaneId { get; set; }
        public string StationId { get; set; }
    }
}
