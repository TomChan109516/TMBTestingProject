namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("vehicle")]
    public class Vehicle : EntryLog
    {

        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string VehicleId { get; set; }

        //Checks Valid or Non-Valid
        [Column("vhcl_rec_type_code", TypeName = "nvarchar(5)")]
        [Required]
        public string VehicleRecordTypeCode { get; set; }

        //fk
        [Column("vhcl_valid_id", TypeName = "nvarchar(9)")]
        public string? VehicleValidId { get; set; }

        //Unique Key
        [Column("vhcl_reg_mark_num", TypeName = "nvarchar(10)")]
        public string? VehicleRegMarkNumber { get; set; }

        //vehicle class id - need to be declare 
        //Composite PK
        [Column("vhcl_clss_id", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleClassId { get; set; }

        [Column("vhcl_form", TypeName = "nvarchar(1)")]
        public string? VehicleForm { get; set; }

        //fk
        [Column("vhcl_alert_id", TypeName = "nvarchar(40)")]
        public string? VehicleAlertId { get; set; }

        [Column("vhcl_last_allow_appt_date", TypeName = "datetime")]
        public DateTime? LastAllowBookingDate { get; set; }

        [Column("vhcl_chsss_num", TypeName = "nvarchar(25)")]
        [Required]
        public string VehicleChasisNumber { get; set; }

        [Column("vhcl_chsss_location", TypeName = "nvarchar(30)")]
        public string? VehicleChasisLocation { get; set; }

        [Column("vin_location", TypeName = "text")]
        public string? VinLocation { get; set; }

        //fk
        [Column("cntry_id", TypeName = "nvarchar(40)")]
        public string? CountryId { get; set; }

        //fk
        [Column("vhcl_make_id", TypeName = "nvarchar(40)")]
        public string? VehicleMakeId { get; set; }

        //To be checked
        [Column("vhcl_mfc_year", TypeName = "int")]
        public int? VehicleMfcYear { get; set; }

        [Column("vhcl_num_axle", TypeName = "int")]
        public int? VehicleNumberOfAxle { get; set; }

        [Column("vhcl_axle_weight_1", TypeName = "numeric(6,2)")]
        public float? VehicleAxle1Weight { get; set; }

        [Column("vhcl_axle_weight_2", TypeName = "numeric(6,2)")]
        public float? VehicleAxle2Weight { get; set; }

        [Column("vhcl_axle_weight_3", TypeName = "numeric(6,2)")]
        public float? VehicleAxle3Weight { get; set; }

        [Column("vhcl_axle_weight_4", TypeName = "numeric(6,2)")]
        public float? VehicleAxle4Weight { get; set; }

        [Column("vhcl_axle_weight_5", TypeName = "numeric(6,2)")]
        public float? VehicleAxle5Weight { get; set; }

        [Column("vhcl_axle_weight_6", TypeName = "numeric(6,2)")]
        public float? VehicleAxle6Weight { get; set; }

        [Column("vhcl_axle_weight_7", TypeName = "numeric(6,2)")]
        public float? VehicleAxle7Weight { get; set; }

        [Column("vhcl_axle_weight_8", TypeName = "numeric(6,2)")]
        public float? VehicleAxle8Weight { get; set; }

        [Column("vhcl_tyre_size_1", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSize1 { get; set; }

        [Column("vhcl_tyre_size_2", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSize2 { get; set; }

        [Column("vhcl_tyre_size_3", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSize3 { get; set; }

        [Column("vhcl_tyre_size_4", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSize4 { get; set; }

        [Column("vhcl_tyre_size_5", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSize5 { get; set; }

        [Column("vhcl_tyre_size_6", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSize6 { get; set; }

        [Column("vhcl_tyre_size_7", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSize7 { get; set; }

        [Column("vhcl_tyre_size_8", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSize8 { get; set; }

        [Column("vhcl_tyre_size_front", TypeName = "numeric(6,2)")]
        public float? VehicleTyreFrontSize { get; set; }

        [Column("vhcl_tyre_size_rear", TypeName = "numeric(6,2)")]
        public float? VehicleTyreRearSize { get; set; }

        [Column("size_l", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSizeLength { get; set; }

        [Column("size_w", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSizeWidth { get; set; }

        [Column("size_h", TypeName = "numeric(6,2)")]
        public float? VehicleTyreSizeHeigth { get; set; }
        //Need to remove
        // [Column("vhcl_pgvw", TypeName = "numeric(6,2)")]
        // public float? VehiclePgvw { get; set; }

        [Column("vhcl_wght_code", TypeName = "numeric(6,2)")]
        public float? VehicleWeightCode { get; set; }

        [Column("vhcl_pgv_wght", TypeName = "numeric(6,2)")]
        public float? VehiclePermittedGrossWeight { get; set; }

        [Column("vhcl_grs_wght", TypeName = "numeric(6,2)")]
        public float? VehicleGrossWeight { get; set; }

        [Column("vhcl_lug_wght", TypeName = "numeric(6,2)")]
        public float? VehicleLuggageWeight { get; set; }

        [Column("vhcl_owner_name_chi", TypeName = "nvarchar(150)")]
        public string? VehicleOwnerChineseName { get; set; }

        [Column("vhcl_owner_name_eng", TypeName = "nvarchar(150)")]
        public string? VehicleOwnerNameEnglish { get; set; }

        [Column("vhcl_contact_person", TypeName = "nvarchar(30)")]
        public string? VehicleContactPerson { get; set; }

        [Column("vhcl_telephone_no", TypeName = "nvarchar(500)")]
        public string? VehicleTelephoneNo { get; set; }

        [Column("vhcl_district_code", TypeName = "nvarchar(30)")]
        public string? VehicleDistrictCode { get; set; }

        [Column("vhcl_district_location", TypeName = "nvarchar(30)")]
        public string? VehicleDistrictLocation { get; set; }

        [Column("vhcl_district_location_chi_name", TypeName = "nvarchar(30)")]
        public string? VehicleDistrictLocationChineseName { get; set; }

        //fk
        [Column("vhcl_sts_id", TypeName = "nvarchar(40)")]
        public string? VehicleStatusId { get; set; }

        [Column("vhcl_model_num", TypeName = "nvarchar(80)")]
        public string? VehicleModelNumber { get; set; }

        //fk
        [Column("vhcl_model_id", TypeName = "nvarchar(40)")]
        public string? VehicleModelId { get; set; }

        //fk
        [Column("vhcl_body_type_id", TypeName = "nvarchar(40)")]
        public string? VehicleBodyTypeId { get; set; }

        [Column("vhcl_lower_seat_cap_qty", TypeName = "int")]
        public int? VehicleLowerSeatCapQuantity { get; set; }

        [Column("vhcl_upper_seat_cap_qty", TypeName = "int")]
        public int? VehicleUpperSeatCapQuantity { get; set; }

        [Column("vhcl_stand_cap_qty", TypeName = "int")]
        public int? VehiclStandardCapQuantity { get; set; }

        [Column("vhcl_lic_end_date", TypeName = "datetime")]
        public DateTime? VehicleLicenceEndDate { get; set; }

        [Column("vhcl_frst_reg_date", TypeName = "datetime")]
        public DateTime? VehicleFrstRegDate { get; set; }

        [Column("vhcl_propulsion", TypeName = "nvarchar(10)")]
        public string? VehiclePropulsion { get; set; }

        [Column("vhcl_engn_num", TypeName = "nvarchar(25)")]
        public string? VehicleEngineNumber { get; set; }

        //Foreign Key
        [Column("vhcl_engn_type_id", TypeName = "nvarchar(40)")]
        public string? VehicleEngineTypeId { get; set; }


        [Column("vhcl_engn_size_qty", TypeName = "numeric(5,0)")]
        public float? VehicleEngineSizeQty { get; set; }

        [Column("vhcl_engn_make", TypeName = "nvarchar(50)")]
        public string? VehicleEngineMake { get; set; }

        [Column("vhcl_service_brake", TypeName = "nvarchar(50)")]
        public string? VehicleServiceBrake { get; set; }

        [Column("vhcl_parking_brake", TypeName = "nvarchar(50)")]
        public string? VehicleParkingBrake { get; set; }

        [Column("vhcl_steering_system", TypeName = "nvarchar(50)")]
        public string? VehicleSteeringBrake { get; set; }

        [Column("vhcl_left_hand_strg_ind", TypeName = "nvarchar(1)")]
        public string? VehicleLeftHandStrgIndicator { get; set; }

        [Column("vhcl_type_aprv_num", TypeName = "nvarchar(40)")]
        public string? VehicleTypeApprovalNumber { get; set; }

        //Foreign key
        [Column("vhcl_prmy_color_id", TypeName = "nvarchar(40)")]
        public string? VehiclePrimaryColorId { get; set; }

        //Foreign key
        [Column("vhcl_scnd_color_id", TypeName = "nvarchar(40)")]
        public string? VehicleSecondColorId { get; set; }

        //Foreign key
        [Column("vhcl_cncl_rsn_id", TypeName = "nvarchar(40)")]
        public string? VehicleCancelReasonId { get; set; }

        //Foreign key
        [Column("vhcl_insp_ord_id", TypeName = "nvarchar(40)")]
        public string? VehicleInspectionOrderId { get; set; }

        [Column("lantau_vhcl_ind", TypeName = "nvarchar(1)")]
        public string? LantanVehicleIndicator { get; set; }

        [Column("prvt_road_vhcl_ind", TypeName = "nvarchar(1)")]
        public string? PrivateRoadVehicleIndicator { get; set; }

        [Column("vhcl_pvrm_trim_text", TypeName = "nvarchar(8)")]
        public string? VehiclePVRMTrimText { get; set; }

        [Column("vhcl_pvrm_dbl_line_ind", TypeName = "nvarchar(1)")]
        public string? VehiclePVRMDoubleLineIndicator { get; set; }

        [Column("vhcl_pvrm_line_1_text", TypeName = "nvarchar(4)")]
        public string? VehiclePVRMLine1Text { get; set; }

        [Column("vhcl_pvrm_line_2_text", TypeName = "nvarchar(4)")]
        public string? VehiclePVRMLine2Text { get; set; }

        [Column("vhcl_rate_pwr", TypeName = "numeric(9,2)")]
        public float? VehicleRatePower { get; set; }

        [Column("vhcl_rate_rpm", TypeName = "numeric(9,2)")]
        public float? VehicleRateRPM { get; set; }

        [Column("vhcl_max_rpm", TypeName = "numeric(9,2)")]
        public float? VehicleMaxRPM { get; set; }

        [Column("vhcl_wheel_span", TypeName = "numeric(9,2)")]
        public float? VehicleWheelSpan { get; set; }

        [Column("vhcl_vico_date", TypeName = "datetime")]
        public DateTime? VehicleVICOUptoDate { get; set; }

        [Column("adv_aprv_date", TypeName = "datetime")]
        public DateTime? AdvertisementApprovalDate { get; set; }

        [Column("vhcl_cur_rnw_date", TypeName = "datetime")]
        public DateTime? VehicleCurrentRenewalDate { get; set; }

        [Column("vhcl_srvc_annot_text", TypeName = "nvarchar(4)")]
        public string? VehicleServiceAnnotationText { get; set; }

        [Column("vhcl_srvc_rstr_text", TypeName = "nvarchar(50)")]
        public string? VehicleServiceRestrictionText { get; set; }

        [Column("hybd_vhcl_ind", TypeName = "nvarchar(1)")]
        public string? HybridVehicleIndicator { get; set; }

        [Column("ce_ref_num", TypeName = "nvarchar(14)")]
        public string? CERefNumber { get; set; }

        [Column("vhcl_reg_doc_txn_num", TypeName = "nvarchar(14)")]
        public string? VehicleRegistrationDocumentTransactionNumber { get; set; }

        [Column("vhcl_psl_list", TypeName = "nvarchar(16)")]
        public string? VehiclePassengerServicelicenceList { get; set; }

        //to be checked
        [Column("vhcl_prm_list", TypeName = "nvarchar(500)")]
        public string? VehiclePermitTypeList { get; set; }

        [Column("vhcl_permit_num", TypeName = "nvarchar(20)")]
        public string? VehiclePermitNumber { get; set; }

        [Column("vhcl_vv_num", TypeName = "nvarchar(20)")]
        public string? VehicleVVNumber { get; set; }

        [Column("vhcl_mve_insp_date", TypeName = "datetime")]
        public DateTime? MVEInspectionDate { get; set; }

        [Column("vhcl_rmk_text", TypeName = "nvarchar(600)")]
        public string? VehicleRemarkText { get; set; }

        [Column("manual_message_eng", TypeName = "text")]
        public string? ManualMessageEng { get; set; }

        [Column("manual_message_chi", TypeName = "text")]
        public string? ManualMessageChi { get; set; }

        [Column("vhcl_type_aprv_ref_num", TypeName = "nvarchar(40)")]
        public string? VehicleTypeApprovalReferenceNumber { get; set; }

        //Navigation Properties
        public virtual VehicleClass VehicleClass { get; }
        public virtual VehicleMake VehicleMake { get; }
        public virtual VehicleModel VehicleModel { get; }
        public virtual Country Country { get; }
        public virtual VehicleBodyType VehicleBodyType { get; }
        public virtual VehicleEngineType VehicleEngineType { get; }
        public virtual VehicleCancelReason VehicleCancelReason { get; }
        public virtual VehicleStatus VehicleStatus { get; }
    }
}
