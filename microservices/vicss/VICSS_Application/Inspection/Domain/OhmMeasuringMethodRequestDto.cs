namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class OhmMeasuringMethodRequestDto :IRequest<OhmMeasuringMethodResponseDto>    
    {
        public OhmMeasuringMethodRequestDto(int status)
        {
            this.status = status;
        }
        public int status { get; set; }
    }
}
