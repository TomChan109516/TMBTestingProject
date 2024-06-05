namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class TestConfigOhmRequestDto : IRequest<TestConfigOhmResponseDto>
    {
        public TestConfigOhmRequestDto() { }

        public  string TestId { get; set; }
        public  int OhmMeasuringMethod { get; set; }
        public  string UserId { get; set; }
    }
}
