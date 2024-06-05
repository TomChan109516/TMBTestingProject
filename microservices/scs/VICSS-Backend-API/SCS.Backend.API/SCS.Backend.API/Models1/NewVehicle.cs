using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Channels;
using Microsoft.EntityFrameworkCore;

namespace SCS_Backend_API.Models1
{
    //To be fixed
    [Table("new_vehicle")]
    public class NewVehicle : EntryLog
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Column("autoid",TypeName = "nvarchar(40)")]        
        //public string VehicleAutoId { get; set; }

        [Column("id", TypeName = "nvarchar(40)")]
        [Key]
        public string VehicleId { get; set; }

        [Column("vhcl_rec_type_code", TypeName = "nvarchar(5)")]        
        [Required]
        public string VehicleRecordTypeCode { get; set; }

        //fk
        [Column("vhcl_valid_id", TypeName = "nvarchar(9)")]
        public string VehicleValidId { get; set; }

        //Foreign key
        [Column("vhcl_type_id", TypeName = "nvarchar(40)")]
        public string VehicleTypeId { get; set; }

        [Column("vhcl_upd_datetime", TypeName = "datetime")]
        [Required]
        public DateTime VehicleUpdateDateTime { get; set; }

        //To be checked
        [Column("valid_vhcl_num", TypeName = "bigint")]
        public Int64 ValidVehicleNumber { get; set; }

        //Unique Key
        [Column("vhcl_reg_mark_num", TypeName = "nvarchar(10)")]        
        public string VehicleRegMarkNumber { get; set; }

        //Unique Key
        [Column("vhcl_reg_mark_disp_text", TypeName = "text")]
        public string VehicleRegMarkDisplayText { get; set; }

        [Column("vhcl_clss_code", TypeName = "nvarchar(3)")]
        [Required]
        public string VehicleClassCode { get; set; }

        [Column("vhcl_sbclss_code", TypeName = "nvarchar(1)")]
        [Required]
        public string VehicleSubClassCode { get; set; }

        [Column("vhcl_chsss_num", TypeName = "nvarchar(25)")]
        [Required]
        public string VehicleChasisNumber { get; set; }

        [Column("vhcl_chsss_num_trim_text", TypeName = "nvarchar(25)")]
        public string VehicleChasisNumberTrimText { get; set; }

        [Column("vhcl_doc_num", TypeName = "nvarchar(30)")]
        public string VehicleDocumentNumber { get; set; }

        [Column("cntry_code", TypeName = "nvarchar(3)")]
        public string CountryCode { get; set; }

        [Column("vhcl_make_id", TypeName = "nvarchar(3)")]
        public string VehicleMakeId { get; set; }

        //To be checked
        [Column("vhcl_mfc_year", TypeName = "int")]
        public int VehicleMfcYear { get; set; }

        [Column("vhcl_axle_1_wght", TypeName = "numeric(6,2)")]
        public float VehicleAxle1Weight { get; set; }

        [Column("vhcl_axle_2_wght", TypeName = "numeric(6,2)")]
        public float VehicleAxle2Weight { get; set; }

        [Column("vhcl_axle_3_wght", TypeName = "numeric(6,2)")]
        public float VehicleAxle3Weight { get; set; }

        [Column("vhcl_axle_4_wght", TypeName = "numeric(6,2)")]
        public float VehicleAxle4Weight { get; set; }

        [Column("vhcl_axle_5_wght", TypeName = "numeric(6,2)")]
        public float VehicleAxle5Weight { get; set; }

        [Column("vhcl_axle_6_wght", TypeName = "numeric(6,2)")]
        public float VehicleAxle6Weight { get; set; }

        [Column("vhcl_axle_7_wght", TypeName = "numeric(6,2)")]
        public float VehicleAxle7Weight { get; set; }

        [Column("vhcl_wght_code", TypeName = "nvarchar(1)")]
        public float VehicleWeightCode { get; set; }

        [Column("vhcl_pgv_wght", TypeName = "numeric(6,2)")]
        public float VehiclePermittedGrossWeight { get; set; }

        [Column("vhcl_grs_wght", TypeName = "numeric(6,2)")]
        public float VehicleGrossWeight { get; set; }

        [Column("vhcl_lug_wght", TypeName = "numeric(6,2)")]
        public float VehicleLuggageWeight { get; set; }

        [Column("vhcl_ownr_name", TypeName = "nvarchar(150)")]
        public string VehicleOwnerName { get; set; }

        [Column("vhcl_ownr_chi_name", TypeName = "nvarchar(150)")]
        public string VehicleOwnerChineseName { get; set; }

        [Column("vhcl_sts_code", TypeName = "nvarchar(1)")]
        public string VehicleStatusCode { get; set; }

        [Column("vhcl_model_num", TypeName = "nvarchar(80)")]
        public string VehicleModelNumber { get; set; }

        [Column("vhcl_model_rmk_text", TypeName = "nvarchar(100)")]
        public string VehicleModelRemarkText { get; set; }

        [Column("vhcl_body_type_code", TypeName = "nvarchar(2)")]
        public string VehicleBodyTypeCode { get; set; }

        [Column("vhcl_lwr_seat_cap_qty", TypeName = "int")]
        public int VehicleLowerSeatCapQuantity { get; set; }

        [Column("vhcl_upr_seat_cap_qty", TypeName = "int")]
        public int VehicleUpperSeatCapQuantity { get; set; }

        [Column("vhcl_stnd_cap_qty", TypeName = "int")]
        public int VehiclStandardCapQuantity { get; set; }

        [Column("vhcl_lic_end_date", TypeName = "datetime")]
        public DateTime VehicleLicenceEndDate { get; set; }

        [Column("vhcl_frst_reg_date", TypeName = "datetime")]
        public DateTime VehicleFrstRegDate { get; set; }

        [Column("vhcl_engn_num", TypeName = "nvarchar(25)")]
        public string VehicleEngineNumber { get; set; }

        //Foreign Key
        [Column("vhcl_engn_type_code", TypeName = "nvarchar(1)")]
        public string VehicleEngineTypeCode { get; set; }

        [Column("vhcl_engn_size_qty", TypeName = "numeric(5,0)")]
        public float VehicleEngineSizeQty { get; set; }

        [Column("vhcl_left_hand_strg_ind", TypeName = "nvarchar(1)")]
        public char VehicleLeftHandStrgIndicator { get; set; }

        [Column("vhcl_type_aprv_num", TypeName = "nvarchar(40)")]
        public string VehicleTypeApprovalNumber { get; set; }

        //Foreign key
        [Column("vhcl_prmy_color_code", TypeName = "nvarchar(1)")]
        public char VehiclePrimaryColorCode { get; set; }

        //Foreign key
        [Column("vhcl_scnd_color_code", TypeName = "nvarchar(1)")]
        public char VehicleSecondColorCode { get; set; }

        //Foreign key
        [Column("vhcl_cncl_rsn_code", TypeName = "nvarchar(1)")]
        public char VehicleCancelReasonCode { get; set; }

        //Foreign key
        [Column("vhcl_insp_ord_code", TypeName = "nvarchar(2)")]
        public string VehicleInspectionOrderCode { get; set; }

        [Column("vhcl_insp_ord_code_list", TypeName = "nvarchar(30)")]
        public string VehicleInspectionOrderCodeList { get; set; }

        [Column("lantau_vhcl_ind", TypeName = "nvarchar(1)")]
        public char LantanVehicleIndicator { get; set; }

        [Column("prvt_road_vhcl_ind", TypeName = "nvarchar(1)")]
        public char PrivateRoadVehicleIndicator { get; set; }

        [Column("vhcl_pvrm_trim_text", TypeName = "nvarchar(8)")]
        public string VehiclePVRMTrimText { get; set; }

        [Column("vhcl_pvrm_dbl_line_ind", TypeName = "nvarchar(1)")]
        public char VehiclePVRMDoubleLineIndicator { get; set; }

        [Column("vhcl_pvrm_line_1_text", TypeName = "nvarchar(4)")]
        public string VehiclePVRMLine1Text { get; set; }

        [Column("vhcl_pvrm_line_2_text", TypeName = "nvarchar(4)")]
        public string VehiclePVRMLine2Text { get; set; }

        [Column("vhcl_rate_pwr", TypeName = "numeric(9,2)")]
        public float VehicleRatePower { get; set; }

        [Column("vhcl_vico_date", TypeName = "datetime")]
        public DateTime VehicleVICOUptoDate { get; set; }

        [Column("adv_aprv_date", TypeName = "datetime")]
        public DateTime AdvertisementApprovalDate { get; set; }

        [Column("vhcl_cur_rnw_date", TypeName = "datetime")]
        public DateTime VehicleCurrentRenewalDate { get; set; }

        [Column("vhcl_srvc_annot_text", TypeName = "nvarchar(4)")]
        public string VehicleServiceAnnotationText { get; set; }

        [Column("vhcl_srvc_rstr_text", TypeName = "nvarchar(50)")]
        public string VehicleServiceRestrictionText { get; set; }

        [Column("vhcl_rmk_text", TypeName = "nvarchar(40)")]
        public string VehicleRemarkText { get; set; }

        [Column("intf_rec_hash_text", TypeName = "nvarchar(128)")]
        [Required]
        public string InterfaceRecordHashText { get; set; }

        [Column("hybd_vhcl_ind", TypeName = "nvarchar(1)")]
        public char HybridVehicleIndicator { get; set; }

        [Column("ce_ref_num", TypeName = "nvarchar(14)")]
        public string CERefNumber { get; set; }

        [Column("vhcl_reg_doc_txn_num", TypeName = "nvarchar(8)")]
        public string VehicleRegistrationDocumentTransactionNumber { get; set; }

        [Column("vhcl_psl_list", TypeName = "nvarchar(500)")]
        public string VehiclePassengerServicelicenceList { get; set; }

        [Column("vhcl_prm_list", TypeName = "nvarchar(600)")]
        public string VehiclePermitTypeList { get; set; }

        [Column("vhcl_last_alw_exam_date", TypeName = "datetime")]
        public DateTime VehicleLastAllowExamDate { get; set; }


        //Foreign Key
        [Column("vhcl_last_alw_exam_grp_name", TypeName = "nvarchar(10)")]
        public string VehicleLastAllowExamGroupName { get; set; }

        [Column("vhcl_make_name", TypeName = "nvarchar(50)")]
        public string VehicleMakeName { get; set; }

        [Column("vhcl_lng", TypeName = "numeric(6,2)")]
        public float VehicleLength { get; set; }

        [Column("vhcl_wdth", TypeName = "numeric(6,2)")]
        public float VehicleWidth { get; set; }

        [Column("vhcl_hgt", TypeName = "numeric(6,2)")]
        public float VehicleHeight { get; set; }

        [Column("frnt_tyre_size_text", TypeName = "nvarchar(15)")]
        public string FrontTyreSizeText { get; set; }

        [Column("rear_tyre_size_text", TypeName = "nvarchar(15)")]
        public string RearTyreSizeText { get; set; }

        //Navigation Property
        public virtual ICollection<NewAppointment> Appointments { get; set; }

        public virtual VehicleType VehicleType { get; set; }

        public virtual ICollection<Inspection> Inspections { get; set; }

        public virtual ICollection<WatchlistVehicle> WatchlistVehicles { get; set; }

    }
}
