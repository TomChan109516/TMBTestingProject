namespace VICSS.Service.Inspection.Domain
{
    using MediatR;

    public class ActivateDeactivateSkipTestReasonRequestDto : IRequest<TestReasonResponseDto>
    {
        public ActivateDeactivateSkipTestReasonRequestDto()
        {

        }
        public string? Id { get; set; }
        public bool ActivateIndicator { get; set; }

    }

}