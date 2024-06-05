namespace VICSS.Service.Vehicle.Domain
{
    using System.Text.Json.Serialization;
    using VICSS.Shared.Models.Common;

    public class SearchVehicleResponseDto : ApiErrorMessage
    {
        public SearchVehicleResponseDto()
        {
            searchVehicle = new List<SearchVehicleDto>();
        }

        [JsonPropertyName("searchVehicle")]
        public List<SearchVehicleDto> searchVehicle { get; set; }
    }

    public class SearchVehicleDto
    {
        public SearchVehicleDto() { }

        [JsonPropertyName("vehicleId")]
        public string VehicleId { get; set; }

        [JsonPropertyName("vehicleRecordTypeCode")]
        public string? VehicleRecordTypeCode { get; set; }

        [JsonPropertyName("vehicleClassCode")]
        public string? VehicleClassCode { get; set; }

        [JsonPropertyName("vehicleValidId")]
        public string? VehicleValidId { get; set; }

        [JsonPropertyName("vehicleRegMarkNumber")]
        public string? VehicleRegMarkNumber { get; set; }

        [JsonPropertyName("vehicleChasisNumber")]
        public string? VehicleChasisNumber { get; set; }

        [JsonPropertyName("vehicleMakeId")]
        public string? VehicleMakeId { get; set; }

        [JsonPropertyName("cERefNumber")]
        public string? CERefNumber { get; set; }

        [JsonPropertyName("vehicleRegistrationDocumentTransactionNumber")]
        public string? VehicleRegistrationDocumentTransactionNumber { get; set; }

        [JsonPropertyName("vehicleTypeApprovalNumber")]
        public string? VehicleTypeApprovalNumber { get; set; }

        [JsonPropertyName("masterChild")]
        public string? MasterChild { get; set; }

    }
}
