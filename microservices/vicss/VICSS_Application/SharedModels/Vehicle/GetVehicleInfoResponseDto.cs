using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace VICSS.Service.Models.Vehicle
{
    public class GetVehicleInfoResponseDto
    {
        public string VehicleId { get; set; }
        public string VehicleRecordTypeCode { get; set; }
        public string? VehicleValidId { get; set; }
        public string? VehicleRegMarkNumber { get; set; }

        [JsonPropertyName("VehicleClassName")]
        public string VehicleClassId { get; set; }//
        public string? VehicleForm { get; set; }
        [JsonPropertyName("VehicleAlertName")]
        public string? VehicleAlertId { get; set; }//
        public DateTime? LastAllowBookingDate { get; set; }
        public string VehicleChasisNumber { get; set; }
        public string? VehicleChasisLocation { get; set; }
        public string? VinLocation { get; set; }
        [JsonPropertyName("CountryName")]
        public string? CountryId { get; set; }//
        [JsonPropertyName("VehicleMakeName")]
        public string? VehicleMakeId { get; set; }//
        public int? VehicleMfcYear { get; set; }
        public int? VehicleNumberOfAxle { get; set; }
        public float? VehicleAxle1Weight { get; set; }
        public float? VehicleAxle2Weight { get; set; }
        public float? VehicleAxle3Weight { get; set; }
        public float? VehicleAxle4Weight { get; set; }
        public float? VehicleAxle5Weight { get; set; }
        public float? VehicleAxle6Weight { get; set; }
        public float? VehicleAxle7Weight { get; set; }
        public float? VehicleAxle8Weight { get; set; }
        public float? VehicleTyreSize1 { get; set; }
        public float? VehicleTyreSize2 { get; set; }
        public float? VehicleTyreSize3 { get; set; }
        public float? VehicleTyreSize4 { get; set; }
        public float? VehicleTyreSize5 { get; set; }
        public float? VehicleTyreSize6 { get; set; }
        public float? VehicleTyreSize7 { get; set; }
        public float? VehicleTyreSize8 { get; set; }
        public float? VehicleTyreFrontSize { get; set; }
        public float? VehicleTyreRearSize { get; set; }
        public float? VehicleTyreSizeLength { get; set; }
        public float? VehicleTyreSizeWidth { get; set; }
        public float? VehicleTyreSizeHeigth { get; set; }
        public float? VehiclePgvw { get; set; }
        public float? VehicleWeightCode { get; set; }
        public float? VehiclePermittedGrossWeight { get; set; }
        public float? VehicleGrossWeight { get; set; }
        public float? VehicleLuggageWeight { get; set; }
        public string? VehicleOwnerChineseName { get; set; }
        public string? VehicleOwnerNameEnglish { get; set; }
        public string? VehicleContactPerson { get; set; }
        public string? VehicleTelephoneNo { get; set; }
        public string? VehicleDistrictCode { get; set; }
        public string? VehicleDistrictLocation { get; set; }
        public string? VehicleDistrictLocationChineseName { get; set; }
        public string? VehicleStatusId { get; set; }//
        public string? VehicleModelNumber { get; set; }
        [JsonPropertyName("VehicleModelName")]
        public string? VehicleModelId { get; set; }//
        [JsonPropertyName("VehicleBodyTypeName")]
        public string? VehicleBodyTypeId { get; set; }//
        public int? VehicleLowerSeatCapQuantity { get; set; }
        public int? VehicleUpperSeatCapQuantity { get; set; }
        public int? VehiclStandardCapQuantity { get; set; }
        public DateTime? VehicleLicenceEndDate { get; set; }
        public DateTime? VehicleFrstRegDate { get; set; }
        public string? VehiclePropulsion { get; set; }
        public string? VehicleEngineNumber { get; set; }
        [JsonPropertyName("VehicleEngineType")]
        public string? VehicleEngineTypeId { get; set; }//
        public float? VehicleEngineSizeQty { get; set; }
        public string? VehicleEngineMake { get; set; }
        public string? VehicleServiceBrake { get; set; }
        public string? VehicleParkingBrake { get; set; }
        public string? VehicleSteeringBrake { get; set; }
        public string? VehicleLeftHandStrgIndicator { get; set; }
        public string? VehicleTypeApprovalNumber { get; set; }
        [JsonPropertyName("VehiclePrimaryColor")]
        public string? VehiclePrimaryColorId { get; set; }//
        [JsonPropertyName("VehicleSecondaryColor")]
        public string? VehicleSecondColorId { get; set; }//
        public string? VehicleCancelReasonId { get; set; }
        public string? VehicleInspectionOrderId { get; set; }
        public string? LantanVehicleIndicator { get; set; }
        public string? PrivateRoadVehicleIndicator { get; set; }
        public string? VehiclePVRMTrimText { get; set; }
        public string? VehiclePVRMDoubleLineIndicator { get; set; }
        public string? VehiclePVRMLine1Text { get; set; }
        public string? VehiclePVRMLine2Text { get; set; }
        public float? VehicleRatePower { get; set; }
        public float? VehicleRateRPM { get; set; }
        public float? VehicleMaxRPM { get; set; }
        public float? VehicleWheelSpan { get; set; }
        public DateTime? VehicleVICOUptoDate { get; set; }
        public DateTime? AdvertisementApprovalDate { get; set; }
        public DateTime? VehicleCurrentRenewalDate { get; set; }
        public string? VehicleServiceAnnotationText { get; set; }
        public string? VehicleServiceRestrictionText { get; set; }
        public string? HybridVehicleIndicator { get; set; }
        public string? CERefNumber { get; set; }
        public string? VehicleRegistrationDocumentTransactionNumber { get; set; }
        public string? VehiclePassengerServicelicenceList { get; set; }
        public string? VehiclePermitTypeList { get; set; }
        public string? VehiclePermitNumber { get; set; }
        public string? VehicleVVNumber { get; set; }
        public DateTime? MVEInspectionDate { get; set; }
        public string? VehicleRemarkText { get; set; }
        public string? ManualMessageEng { get; set; }
        public string? ManualMessageChi { get; set; }
    }
}
