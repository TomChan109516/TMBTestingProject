namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class ActivateDeactivateAbortSuspendTestReasonsRequestDto : IRequest<TestReasonResponseDto>
    {
        public string? Id { get; set; }
        public bool ActivateIndicator { get; set; }
    }

}