namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class SkipTestReasonRequestDto : IRequest<SkipTestReasonResponseDto>
    {
        public SkipTestReasonRequestDto(int status)
        {
            this.status = status;
        }

        public int status { get; set; }
    }
}
