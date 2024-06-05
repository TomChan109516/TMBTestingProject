namespace VICSS.Service.Vehicle.Domain
{
    using VICSS.Shared.Models.Common;
    public class SearchRegMarkResponseDto : ApiErrorMessage
    {
        public List<string>? VehicleRegMarkNumber { get; set; }
    }
}
