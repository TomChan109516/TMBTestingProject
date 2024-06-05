namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class AddUpdateSkipTestReasonRequestDto : IRequest<TestReasonResponseDto>
    {
        public AddUpdateSkipTestReasonRequestDto()
        { }
        public string? Id { get; set; }
        public string? UserId { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
        public string? TestType { get; set; }
        public bool ActiveIndicator { get; set; }

    }
}