namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class SearchSkipTestReasonRequestDto : IRequest<SearchSkipTestReasonResponseDto>
    {
        public string? Id { get; set; }
        public string? TestType { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
    }
}