namespace VICSS.Shared.Models.Vehicle
{
    using System.Text.Json.Serialization;

    public class VehicleParticularDetailsByVehicleIdDto
    {
        public VehicleParticularDetailsByVehicleIdDto() { }

        [JsonPropertyName("vehicleClassId")]
        public string VehicleClassId { get; set; }

        [JsonPropertyName("vehicleClassCode")]
        public string? VehicleClassCode { get; set; }

        [JsonPropertyName("vehicleId")]
        public string VehicleId { get; set; }

        [JsonPropertyName("vehicleRecordTypeCode")]
        public string VehicleRecordTypeCode { get; set; }

        [JsonPropertyName("vehicleValidId")]
        public string? VehicleValidId { get; set; }

        [JsonPropertyName("vehicleRegMarkNumber")]
        public string? VehicleRegMarkNumber { get; set; }

        [JsonPropertyName("vehicleChasisNumber")]
        public string VehicleChasisNumber { get; set; }

        [JsonPropertyName("vehicleMakeId")]
        public string? VehicleMakeId { get; set; }

        [JsonPropertyName("vehicleMakeName")]
        public string VehicleMakeName { get; set; }

        [JsonPropertyName("vehicleMakeDescription")]
        public string? VehicleMakeDescription { get; set; }

        [JsonPropertyName("vehicleMfcYear")]
        public int? VehicleMfcYear { get; set; }

        [JsonPropertyName("vehicleWeightCode")]
        public float? VehicleWeightCode { get; set; }

        [JsonPropertyName("vehicleModelCode")]
        public string VehicleModelCode { get; set; }

        [JsonPropertyName("vehicleModelName")]
        public string VehicleModelName { get; set; }

        [JsonPropertyName("vehicleModelDescription")]
        public string? VehicleModelDescription { get; set; }

        [JsonPropertyName("vehicleLowerSeatCapQuantity")]
        public int? VehicleLowerSeatCapQuantity { get; set; }

        [JsonPropertyName("vehicleUpperSeatCapQuantity")]
        public int? VehicleUpperSeatCapQuantity { get; set; }

        [JsonPropertyName("vehiclStandardCapQuantity")]
        public int? VehiclStandardCapQuantity { get; set; }

        [JsonPropertyName("vehicleLicenceEndDate")]
        public DateTime? VehicleLicenceEndDate { get; set; }

        [JsonPropertyName("vehicleFrstRegDate")]
        public DateTime? VehicleFrstRegDate { get; set; }

        [JsonPropertyName("vehicleTypeApprovalNumber")]
        public string? VehicleTypeApprovalNumber { get; set; }

        [JsonPropertyName("vehicleTypeApprovalReferenceNumber")]
        public string? VehicleTypeApprovalReferenceNumber { get; set; }

        [JsonPropertyName("vehicleInspectionOrderId")]
        public string? VehicleInspectionOrderId { get; set; }

        [JsonPropertyName("lantanVehicleIndicator")]
        public string? LantanVehicleIndicator { get; set; }

        [JsonPropertyName("vehicleVICOUptoDate")]
        public DateTime? VehicleVICOUptoDate { get; set; }

        [JsonPropertyName("cERefNumber")]
        public string? CERefNumber { get; set; }

        [JsonPropertyName("vehicleRegistrationDocumentTransactionNumber")]
        public string? VehicleRegistrationDocumentTransactionNumber { get; set; }

        [JsonPropertyName("vehicleStatusId")]
        public string? VehicleStatusId { get; set; }

        [JsonPropertyName("vehicleStatusCode")]
        public string? VehicleStatusCode { get; set; }

        [JsonPropertyName("vehicleStatusName")]
        public string? VehicleStatusName { get; set; }

        [JsonPropertyName("vehicleCancelReasonId")]
        public string? VehicleCancelReasonId { get; set; }

        [JsonPropertyName("vehicleCancelReasonCode")]
        public string? VehicleCancelReasonCode { get; set; }

        [JsonPropertyName("vehicleCancelReasonName")]
        public string? VehicleCancelReasonName { get; set; }

        [JsonPropertyName("vehicleEngineTypeId")]
        public string? VehicleEngineTypeId { get; set; }

        [JsonPropertyName("vehicleEngineTypeCode")]
        public string? VehicleEngineTypeCode { get; set; }

        [JsonPropertyName("vehicleEngineTypeName")]
        public string? VehicleEngineTypeName { get; set; }
        [JsonPropertyName("countryId")]
        public string? CountryId { get; set; }

        [JsonPropertyName("countryCode")]
        public string? CountryCode { get; set; }

        [JsonPropertyName("countryName")]
        public string? CountryName { get; set; }
        [JsonPropertyName("vehicleBodyTypeId")]
        public string? VehicleBodyTypeId { get; set; }
        [JsonPropertyName("vehicleBodyTypeName")]
        public string? VehicleBodyTypeName { get; set; }
        [JsonPropertyName("vehicleBodyTypeCode")]
        public string VehicleBodyTypeCode { get; set; }
        [JsonPropertyName("vehicleNumberOfAxle")]
        public int? VehicleNumberOfAxle { get; set; }
        [JsonPropertyName("vehicleWheelSpan")]
        public float? VehicleWheelSpan { get; set; }
        [JsonPropertyName("vinLocation")]
        public string? VinLocation { get; set; }

        [JsonPropertyName("hybridVehicleIndicator")]
        public string? HybridVehicleIndicator { get; set; }

        [JsonPropertyName("vehiclePropulsion")]
        public string? VehiclePropulsion { get; set; }
        [JsonPropertyName("vehicleEngineNumber")]
        public string? VehicleEngineNumber { get; set; }
        //need to check
        [JsonPropertyName("vehicleEngineSizeQty")]
        public float? VehicleEngineSizeQty { get; set; }
        [JsonPropertyName("vehicleServiceBrake")]
        public string? VehicleServiceBrake { get; set; }
        [JsonPropertyName("vehicleParkingBrake")]
        public string? VehicleParkingBrake { get; set; }
        [JsonPropertyName("vehicleSteeringBrake")]
        public string? VehicleSteeringBrake { get; set; }
        //TB brake  and brake system, secondary brake  not found
        [JsonPropertyName("vehicleAxle1Weight")]
        public float? VehicleAxle1Weight { get; set; }

        [JsonPropertyName("vehicleAxle2Weight")]
        public float? VehicleAxle2Weight { get; set; }

        [JsonPropertyName("vehicleAxle3Weight")]
        public float? VehicleAxle3Weight { get; set; }

        [JsonPropertyName("vehicleAxle4Weight")]
        public float? VehicleAxle4Weight { get; set; }

        [JsonPropertyName("vehicleAxle5Weight")]
        public float? VehicleAxle5Weight { get; set; }

        [JsonPropertyName("vehicleAxle6Weight")]
        public float? VehicleAxle6Weight { get; set; }

        [JsonPropertyName("vehicleAxle7Weight")]
        public float? VehicleAxle7Weight { get; set; }

        [JsonPropertyName("vehicleAxle8Weight")]
        public float? VehicleAxle8Weight { get; set; }
        [JsonPropertyName("vehicleMaxRPM")]
        public float? VehicleMaxRPM { get; set; }
        [JsonPropertyName("vehicleRatePower")]
        public float? VehicleRatePower { get; set; }
        [JsonPropertyName("vehicleRateRPM")]
        public float? VehicleRateRPM { get; set; }
        [JsonPropertyName("vehiclePermitTypeList")]
        public string? VehiclePermitTypeList { get; set; }

        [JsonPropertyName("vehiclePermitNumber")]
        public string? VehiclePermitNumber { get; set; }

        [JsonPropertyName("vehiclePermittedGrossWeight")]
        public float? VehiclePermittedGrossWeight { get; set; }

        [JsonPropertyName("vehicleLuggageWeight")]
        public float? VehicleLuggageWeight { get; set; }

        [JsonPropertyName("advertisementApprovalDate")]
        public DateTime? AdvertisementApprovalDate { get; set; }

        [JsonPropertyName("vehiclePassengerServicelicenceList")]
        public string? VehiclePassengerServicelicenceList { get; set; }

        [JsonPropertyName("vehicleCurrentRenewalDate")]
        public DateTime? VehicleCurrentRenewalDate { get; set; }

        [JsonPropertyName("vehiclePVRMTrimText")]
        public string? VehiclePVRMTrimText { get; set; }

        [JsonPropertyName("vehiclePVRMDoubleLineIndicator")]
        public string? VehiclePVRMDoubleLineIndicator { get; set; }

        [JsonPropertyName("vehiclePVRMLine1Text")]
        public string? VehiclePVRMLine1Text { get; set; }

        [JsonPropertyName("vehiclePVRMLine2Text")]
        public string? VehiclePVRMLine2Text { get; set; }

        [JsonPropertyName("vehiclePrimaryColorId")]
        public string? VehiclePrimaryColorId { get; set; }

        [JsonPropertyName("vehicleSecondColorId")]
        public string? VehicleSecondColorId { get; set; }

        [JsonPropertyName("vehicleTyreFrontSize")]
        public float? VehicleTyreFrontSize { get; set; }

        [JsonPropertyName("vehicleTyreRearSize")]
        public float? VehicleTyreRearSize { get; set; }

        [JsonPropertyName("vehicleTyreSizeLength")]
        public float? VehicleTyreSizeLength { get; set; }

        [JsonPropertyName("vehicleTyreSizeWidth")]
        public float? VehicleTyreSizeWidth { get; set; }

        [JsonPropertyName("vehicleTyreSizeHeigth")]
        public float? VehicleTyreSizeHeigth { get; set; }

        [JsonPropertyName("privateRoadVehicleIndicator")]
        public string? PrivateRoadVehicleIndicator { get; set; }

        [JsonPropertyName("vehicleLeftHandStrgIndicator")]
        public string? VehicleLeftHandStrgIndicator { get; set; }

    }
}
