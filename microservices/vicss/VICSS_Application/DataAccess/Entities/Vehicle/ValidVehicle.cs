namespace VICSS.Infrastructure.DataAccess.Entities.Vehicle
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("valid_vehicle")]
    public class ValidVehicle
    {
        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string ValidVehicleId { get; set; }

        [Column("date_update", TypeName = "nvarchar(10)")]
        [Required]
        public string LastUpdateDate { get; set; }

        //uk
        [Column("vhcl_valid_id", TypeName = "nvarchar(9)")]
        [Required]
        public string VehicleValidId { get; set; }

        //fk
        [Column("reg_mark", TypeName = "nvarchar(8)")]
        [Required]
        public string VehicleRegMarkNumber { get; set; }

        [Column("vhcl_clss_code", TypeName = "nvarchar(3)")]
        [Required]
        public string VehicleClassCode { get; set; }

        [Column("cntry_code", TypeName = "nvarchar(3)")]
        [Required]
        public string CountryCode { get; set; }

        [Column("vhcl_make_id", TypeName = "nvarchar(3)")]
        [Required]
        public string VehicleMakeId { get; set; }

        [Column("vhcl_chsss_num", TypeName = "nvarchar(25)")]
        [Required]
        public string VehicleChasisNumber { get; set; }

        [Column("vhcl_mfc_year", TypeName = "int")]
        [Required]
        public int VehicleMfcYear { get; set; }

        [Column("vhcl_axle_1_wght", TypeName = "numeric(5,2)")]
        [Required]
        public float VehicleAxle1Weight { get; set; }

        [Column("vhcl_axle_2_wght", TypeName = "numeric(5,2)")]
        [Required]
        public float VehicleAxle2Weight { get; set; }

        [Column("vhcl_axle_3_wght", TypeName = "numeric(5,2)")]
        [Required]
        public float VehicleAxle3Weight { get; set; }

        [Column("vhcl_axle_4_wght", TypeName = "numeric(5,2)")]
        [Required]
        public float VehicleAxle4Weight { get; set; }

        [Column("vhcl_axle_5_wght", TypeName = "numeric(5,2)")]
        [Required]
        public float VehicleAxle5Weight { get; set; }

        [Column("vhcl_axle_6_wght", TypeName = "numeric(5,2)")]
        [Required]
        public float VehicleAxle6Weight { get; set; }

        [Column("vhcl_axle_7_wght", TypeName = "numeric(5,2)")]
        [Required]
        public float VehicleAxle7Weight { get; set; }

        [Column("vhcl_pgv_wght", TypeName = "numeric(5,2)")]
        [Required]
        public float VehiclePermittedGrossWeight { get; set; }

        [Column("vhcl_grs_wght", TypeName = "numeric(5,2)")]
        [Required]
        public float VehicleGrossWeight { get; set; }

        [Column("vhcl_lug_wght", TypeName = "numeric(5,2)")]
        [Required]
        public float VehicleLuggageWeight { get; set; }

        [Column("vhcl_ownr_name", TypeName = "nvarchar(150)")]
        [Required]
        public string VehicleOwnerName { get; set; }

        [Column("vhcl_ownr_chi_name", TypeName = "nvarchar(150)")]
        [Required]
        public string VehicleOwnerChineseName { get; set; }

        [Column("vhcl_sts_code", TypeName = "nvarchar(1)")]
        [Required]
        public string VehicleStatusCode { get; set; }

        [Column("vhcl_model_num", TypeName = "nvarchar(80)")]
        [Required]
        public string VehicleModelNumber { get; set; }

        [Column("vhcl_model_code", TypeName = "nvarchar(100)")]
        [Required]
        public string VehicleModelCode { get; set; }

        [Column("vhcl_body_type_code", TypeName = "nvarchar(2)")]
        [Required]
        public string VehicleBodyTypeCode { get; set; }

        [Column("vhcl_lower_seat_cap_qty", TypeName = "int")]
        [Required]
        public int VehicleLowerSeatCapQuantity { get; set; }

        [Column("vhcl_upper_seat_cap_qty", TypeName = "int")]
        [Required]
        public int VehicleUpperSeatCapQuantity { get; set; }

        [Column("vhcl_stand_cap_qty", TypeName = "int")]
        [Required]
        public int VehiclStandardCapQuantity { get; set; }

        [Column("vhcl_lic_end_date", TypeName = "datetime")]
        [Required]
        public DateTime VehicleLicenceEndDate { get; set; }

        [Column("vhcl_frst_reg_date", TypeName = "datetime")]
        [Required]
        public DateTime VehicleFrstRegDate { get; set; }

        [Column("vhcl_engn_num", TypeName = "nvarchar(25)")]
        [Required]
        public string VehicleEngineNumber { get; set; }

        //Foreign Key
        [Column("vhcl_engn_type_code", TypeName = "nvarchar(1)")]
        [Required]
        public string VehicleEngineTypeCode { get; set; }

        [Column("vhcl_engn_size_qty", TypeName = "numeric(9,0)")]
        [Required]
        public float VehicleEngineSizeQty { get; set; }

        [Column("vhcl_left_hand_strg_ind", TypeName = "nvarchar(1)")]
        [Required]
        public char VehicleLeftHandStrgIndicator { get; set; }

        [Column("vhcl_type_aprv_num", TypeName = "nvarchar(40)")]
        [Required]
        public string VehicleTypeApprovalNumber { get; set; }

        //Foreign key
        [Column("vhcl_prmy_color_code", TypeName = "nvarchar(1)")]
        [Required]
        public char VehiclePrimaryColorCode { get; set; }

        //Foreign key
        [Column("vhcl_scnd_color_code", TypeName = "nvarchar(1)")]
        [Required]
        public char VehicleSecondColorCode { get; set; }

        //Foreign key
        [Column("vhcl_cncl_rsn_code", TypeName = "nvarchar(1)")]
        [Required]
        public char VehicleCancelReasonCode { get; set; }

        //Foreign key
        [Column("vhcl_insp_ord_code", TypeName = "nvarchar(2)")]
        [Required]
        public string VehicleInspectionOrderCode { get; set; }

        [Column("lantau_vhcl_ind", TypeName = "nvarchar(1)")]
        [Required]
        public char LantanVehicleIndicator { get; set; }

        [Column("prvt_road_vhcl_ind", TypeName = "nvarchar(1)")]
        [Required]
        public char PrivateRoadVehicleIndicator { get; set; }

        [Column("vhcl_pvrm_trim_text", TypeName = "nvarchar(8)")]
        [Required]
        public string VehiclePVRMTrimText { get; set; }

        [Column("vhcl_pvrm_dbl_line_ind", TypeName = "nvarchar(1)")]
        [Required]
        public char VehiclePVRMDoubleLineIndicator { get; set; }

        [Column("vhcl_pvrm_line_1_text", TypeName = "nvarchar(4)")]
        [Required]
        public string VehiclePVRMLine1Text { get; set; }

        [Column("vhcl_pvrm_line_2_text", TypeName = "nvarchar(4)")]
        [Required]
        public string VehiclePVRMLine2Text { get; set; }

        [Column("vhcl_rate_pwr", TypeName = "numeric(7,2)")]
        [Required]
        public float VehicleRatePower { get; set; }

        [Column("vhcl_vico_date", TypeName = "datetime")]
        [Required]
        public DateTime VehicleVICOUptoDate { get; set; }

        [Column("adv_aprv_date", TypeName = "datetime")]
        [Required]
        public DateTime AdvertisementApprovalDate { get; set; }

        [Column("vhcl_cur_rnw_date", TypeName = "datetime")]
        [Required]
        public DateTime VehicleCurrentRenewalDate { get; set; }


        //[Column("vhcl_srvc_annot_text", TypeName = "nvarchar(4)")]   // have doubt  char 1  
        //[Required]
        //public string VehicleServiceAnnotationText { get; set; }

        [Column("a03R_sub_type_ind", TypeName = "nvarchar(1)")]   //new added  A03R sub-type-indicator - A03R_IND
        [Required]
        public char A03RSubTypeIndicator { get; set; }

        [Column("vhcl_srvc_rstr_text", TypeName = "nvarchar(50)")]
        public string VehicleServiceRestrictionText { get; set; }

        [Column("vhcl_psl_list", TypeName = "nvarchar(500)")]
        [Required]
        public string VehiclePassengerServicelicenceList { get; set; }

        [Column("vhcl_prm_list", TypeName = "nvarchar(600)")]
        [Required]
        public string VehiclePermitTypeList { get; set; }

        [Column("hybd_vhcl_ind", TypeName = "nvarchar(1)")]
        [Required]
        public char HybridVehicleIndicator { get; set; }

        [Column("ce_ref_num", TypeName = "nvarchar(14)")]
        [Required]
        public string CERefNumber { get; set; }

        [Column("vhcl_reg_doc_txn_num", TypeName = "nvarchar(8)")]
        [Required]
        public string VehicleRegistrationDocumentTransactionNumber { get; set; }
    }
}
