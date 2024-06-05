namespace VICSS.Service.Vehicle.Domain
{
    using MediatR;
    using System.Text.Json.Serialization;

    public class SearchVehicleRequestDto : IRequest<SearchVehicleResponseDto>
    {
        [JsonPropertyName("vehicleId")]
        public string? VehicleId { get; set; }

        [JsonPropertyName("vehicleRegMarkNumber")]
        public string? VehicleRegMarkNumber { get; set; }

        [JsonPropertyName("vehicleChasisNumber")]
        public string? VehicleChasisNumber { get; set; }

        [JsonPropertyName("vehicleClassId")]
        public string? VehicleClassId { get; set; }

        [JsonPropertyName("vehicleSubclassId")]
        public string? VehicleSubclassId { get; set; }

        [JsonPropertyName("vehicleMakeId")]
        public string? VehicleMakeId { get; set; }

        [JsonPropertyName("cERefNumber")]
        public string? CERefNumber { get; set; }

        [JsonPropertyName("vehicleRegistrationDocumentTransactionNumber")]
        public string? VehicleRegistrationDocumentTransactionNumber { get; set; }

        [JsonPropertyName("vehicleTypeApprovalNumber")]
        public string? VehicleTypeApprovalNumber { get; set; }

        [JsonPropertyName("vehicleRecordTypeCode")]
        public string? VehicleRecordTypeCode { get; set; }

        [JsonPropertyName("masterChild")]
        public string? MasterChild { get; set; }

        [JsonPropertyName("removespecialcharacters")]
        public bool RemoveSpecialCharacters { get; set; }
    }
}
