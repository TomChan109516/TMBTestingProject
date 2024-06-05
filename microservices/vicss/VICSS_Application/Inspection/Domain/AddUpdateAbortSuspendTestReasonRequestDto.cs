namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class AddUpdateAbortSuspendTestReasonRequestDto : IRequest<TestReasonResponseDto>
    {
        public AddUpdateAbortSuspendTestReasonRequestDto()
        { }
        public string? Id { get; set; }
        public string? UserId { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
        public string? ReasonType { get; set; }
        public bool ActiveIndicator { get; set; }
    }
}