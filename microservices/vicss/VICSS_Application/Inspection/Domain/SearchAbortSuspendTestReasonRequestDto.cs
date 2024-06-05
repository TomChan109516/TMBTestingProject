namespace VICSS.Service.Inspection.Domain
{
    using MediatR;

    public class SearchAbortSuspendTestReasonRequestDto : IRequest<SearchAbortSuspendTestReasonResponseDto>
    {
        public string? Id { get; set; }
        public string? ReasonType { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
    }
}