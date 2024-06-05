namespace VICSS.Service.Inspection.Domain
{
    using VICSS.Shared.Models.Common;
    public class GetAllTestResultsResponseDto : ApiErrorMessage
    {

        public string? OhmResult { get; set; }
        public string? OhmTestId { get; set; }
        public string? HeadlampResult { get; set; }
        public string? HeadlampTestId { get; set; }
        public string? AxleWeightResult { get; set; }
        public string? AxleWeightTestId { get; set; }
        public string? VisualResult { get; set; }
        public string? VisualTestId { get; set; }
        public string? BrakeResult { get; set; }
        public string? BrakeTestId { get; set; }
        public string? SpeedometerResult { get; set; }
        public string? SpeedometerTestId { get; set; }
        public string? TaximeterResult { get; set; }
        public string? TaximeterTestId { get; set; }
        public string? UnderCarriageResult { get; set; }
        public string? UnderCarriageTestId { get; set; }
        public string? ExhaustResult { get; set; }
        public string? ExhaustTestId { get; set; }
        public string? TiltingTestResult { get; set; }
        public string? TiltingTestId { get; set; }

    }
}
