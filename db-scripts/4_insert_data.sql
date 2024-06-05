USE [VICSS_DEV]

INSERT  [centre] ([id], [ctr_code], [ctr_name], [ctr_chi_name], [ctr_addr], [ctr_chi_addr], [ctr_phone1], [ctr_phone2], [ctr_begin_date], [ctr_end_date], [ctr_mon_oprt_time_start], [ctr_mon_oprt_time_end], [ctr_tue_oprt_time_start], [ctr_tue_oprt_time_end], [ctr_wed_oprt_time_start], [ctr_wed_oprt_time_end], [ctr_thu_oprt_time_start], [ctr_thu_oprt_time_end], [ctr_fri_oprt_time_start], [ctr_fri_oprt_time_end], [ctr_sat_oprt_time_start], [ctr_sat_oprt_time_end], [ctr_sun_oprt_time_start], [ctr_sun_oprt_time_end], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'23321883-2885-463B-80B0-3D23450E8EF1', N'TY1', N'KOWLOON BAY VEHICLE EXAMINATION CENTRE', N'KOWLOON BAY VEHICLE EXAMINATION CENTRE', N'20 Sai Tso Wan Road Tsing Yi Hong Kong', N'20 Sai Tso Wan Road Tsing Yi Hong Kong', N'+85211111111', N'+95211111111', CAST(N'2024-02-06T09:58:49.753' AS DateTime), CAST(N'2024-04-06T09:58:49.753' AS DateTime), N'0900', N'2100', N'0900', N'2100', N'0900', N'2100', N'0900', N'2100', N'0900', N'2100', N'0900', N'2100', N'-', N'-', CAST(N'2024-02-06T09:58:49.753' AS DateTime), N'I', N'Admin')
INSERT  [centre] ([id], [ctr_code], [ctr_name], [ctr_chi_name], [ctr_addr], [ctr_chi_addr], [ctr_phone1], [ctr_phone2], [ctr_begin_date], [ctr_end_date], [ctr_mon_oprt_time_start], [ctr_mon_oprt_time_end], [ctr_tue_oprt_time_start], [ctr_tue_oprt_time_end], [ctr_wed_oprt_time_start], [ctr_wed_oprt_time_end], [ctr_thu_oprt_time_start], [ctr_thu_oprt_time_end], [ctr_fri_oprt_time_start], [ctr_fri_oprt_time_end], [ctr_sat_oprt_time_start], [ctr_sat_oprt_time_end], [ctr_sun_oprt_time_start], [ctr_sun_oprt_time_end], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'9242E680-CDE1-4683-A2F1-484C70F8A158', N'TYG', N'TSINGI-Yuhan BAY VEHICLE EXAMINATION CENTRE', N'TSINGI-Yuhan BAY VEHICLE EXAMINATION CENTRE', N'18 Sai Tso Wan Road Tsing Yi Hong Kong', N'18 Sai Tso Wan Road Tsing Yi Hong Kong', N'+85288888888', N'+95288888888', CAST(N'2024-02-06T09:58:49.753' AS DateTime), CAST(N'2024-04-06T09:58:49.753' AS DateTime), N'0900', N'2100', N'0900', N'2100', N'0900', N'2100', N'0900', N'2100', N'0900', N'2100', N'0900', N'2100', N'-', N'-', CAST(N'2024-02-06T09:58:49.753' AS DateTime), N'I', N'Admin')
GO
INSERT  [lane] ([id], [ctr_id], [lane_name], [lane_type], [lane_description], [lane_actv_ind], [default_capacity], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'01309054-B436-4410-B5D6-4936BE1E0A3F', N'9242E680-CDE1-4683-A2F1-484C70F8A158', N'11A', N'virtual', N'Lane 11A', N'Y', 10, CAST(N'2024-02-06T09:59:12.917' AS DateTime), N'I', N'Admin')
INSERT  [lane] ([id], [ctr_id], [lane_name], [lane_type], [lane_description], [lane_actv_ind], [default_capacity], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', N'9242E680-CDE1-4683-A2F1-484C70F8A158', N'11', N'physical', N'Lane 11', N'Y', 10, CAST(N'2024-02-06T09:59:12.917' AS DateTime), N'I', N'Admin')
INSERT  [lane] ([id], [ctr_id], [lane_name], [lane_type], [lane_description], [lane_actv_ind], [default_capacity], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'D6D51060-C827-4F3E-BA2D-96EA300EEA0B', N'23321883-2885-463B-80B0-3D23450E8EF1', N'12', N'physical', N'Lane 12', N'Y', 10, CAST(N'2024-02-06T09:59:12.917' AS DateTime), N'I', N'Admin')
GO
INSERT  [LaneTimeslot] ([id], [lane_id], [start], [end], [exam_schd_desp], [capacity]) VALUES (N'BAC5D0AC-1C96-4F2F-A50A-002DB64DE8FE', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', CAST(N'2024-02-21T08:45:00.000' AS DateTime), CAST(N'2025-02-21T09:00:00.000' AS DateTime), N'Exam Timetable start from 2018', 1)
GO
INSERT  [inspection_type] ([id], [exam_code], [exam_clss], [insp_type_name], [insp_type_description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'377424D5-FE75-46D7-8513-A4C11B9CFE1A', N'003', N'Primary', N'Re-Registration', N'Re-Registration', CAST(N'2024-02-06T10:03:32.517' AS DateTime), N'I', N'Admin')
INSERT  [inspection_type] ([id], [exam_code], [exam_clss], [insp_type_name], [insp_type_description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'5574D7D9-44E3-4E3F-ACDA-3BF85EFFB8C1', N'001', N'Primary', N'Pre Registration: New, Imported Used', N'Pre Registration: New, Imported Used', CAST(N'2024-02-06T10:03:32.517' AS DateTime), N'I', N'Admin')
INSERT  [inspection_type] ([id], [exam_code], [exam_clss], [insp_type_name], [insp_type_description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'ACE0F738-A854-4DD0-B703-72C64F82B6DC', N'052', N'Supplementary', N'VIO - Verification of Window Glass', N'VIO - Verification of Window Glass', CAST(N'2024-02-06T10:03:32.517' AS DateTime), N'I', N'Admin')
INSERT  [inspection_type] ([id], [exam_code], [exam_clss], [insp_type_name], [insp_type_description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'BB50296A-7F36-443C-A877-0E5886A5879D', N'051', N'Supplementary', N'Window Glass Exemption', N'Window Glass Exemption', CAST(N'2024-02-06T10:03:32.517' AS DateTime), N'I', N'Admin')
INSERT  [inspection_type] ([id], [exam_code], [exam_clss], [insp_type_name], [insp_type_description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'C7DA445C-FFF6-48D6-8158-14D1EE89EACC', N'004', N'Supplementary', N'Change of Body Type', N'Change of Body Type', CAST(N'2024-02-06T10:03:32.517' AS DateTime), N'I', N'Admin')
INSERT  [inspection_type] ([id], [exam_code], [exam_clss], [insp_type_name], [insp_type_description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'D104B5DF-8986-4F46-BE9F-79B1A1F0828E', N'010', N'Primary', N'Re-licensinsing after cancellation', N'Re-licensinsing after cancellation', CAST(N'2024-02-06T10:03:32.517' AS DateTime), N'I', N'Admin')
INSERT  [inspection_type] ([id], [exam_code], [exam_clss], [insp_type_name], [insp_type_description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'D3B6BA33-B689-416E-9218-84A00D398E49', N'08R', N'Primary', N'Recheck for exam type 008', N'Recheck for exam type 008', CAST(N'2024-02-06T10:03:32.517' AS DateTime), N'I', N'Admin')
INSERT  [inspection_type] ([id], [exam_code], [exam_clss], [insp_type_name], [insp_type_description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'D8504B77-E541-4532-9E01-8631AA7B4618', N'005', N'Supplementary', N'Seating Capacity', N'Seating Capacity', CAST(N'2024-02-06T10:03:32.517' AS DateTime), N'I', N'Admin')
INSERT  [inspection_type] ([id], [exam_code], [exam_clss], [insp_type_name], [insp_type_description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'FE637C33-679B-40F4-AE09-D62B53A22E9A', N'006', N'Supplementary', N'Stamping Chassis Number', N'Stamping Chassis Number', CAST(N'2024-02-06T10:03:32.517' AS DateTime), N'I', N'Admin')
INSERT  [inspection_type] ([id], [exam_code], [exam_clss], [insp_type_name], [insp_type_description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'FE7B5EAC-9409-480F-B6AE-F7226598E944', N'008', N'Primary', N'Annual Inspection', N'Annual Inspection', CAST(N'2024-02-06T10:03:32.517' AS DateTime), N'I', N'Admin')
GO
INSERT  [vehicle_class] ([id], [vhcl_clss_code], [vhcl_sbclss_code], [vhcl_clss_name], [description], [vhcl_min_pgv_weight], [vhcl_max_pgv_weight], [vhcl_body_type_code], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'92238E80-6125-4FD3-B50C-7290A85928B3', N'001', N'A', N'Public Light Vehicle', N'Public Light Vehicle', CAST(5.51 AS Numeric(6, 2)), CAST(16.01 AS Numeric(6, 2)), N'B', CAST(N'2024-02-06T09:59:20.377' AS DateTime), N'I', N'Admin')
INSERT  [vehicle_class] ([id], [vhcl_clss_code], [vhcl_sbclss_code], [vhcl_clss_name], [description], [vhcl_min_pgv_weight], [vhcl_max_pgv_weight], [vhcl_body_type_code], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'FA17A723-27C5-4559-8884-4D2F78DED554', N'002', N'B', N'Public Bus', N'Public Bus', CAST(10.51 AS Numeric(6, 2)), CAST(30.01 AS Numeric(6, 2)), N'B', CAST(N'2024-02-06T09:59:20.377' AS DateTime), N'I', N'Admin')
GO
INSERT  [vehicle_make] ([id], [vhcl_make_id], [vhcl_make_name], [description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'5E4C8B2B-3A1E-4FED-A86B-DBE136D1350C', N'002', N'MC', N'Mercedes Benz', CAST(N'2024-02-06T09:59:34.220' AS DateTime), N'I', N'Admin')
INSERT  [vehicle_make] ([id], [vhcl_make_id], [vhcl_make_name], [description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'C102E9B5-8C96-42C3-8680-C6C4A80AC5E3', N'001', N'HY', N'HYUNDAI', CAST(N'2024-02-06T09:59:34.220' AS DateTime), N'I', N'Admin')
GO
INSERT  [vehicle_model] ([id], [vhcl_model_code], [vhcl_model_name], [description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'C8428802-BC82-4140-8AA3-BD35E3345890', N'CLS400', N'FACELIFT', N'CLS400 FACELIFT(C218)', CAST(N'2024-02-06T10:02:38.627' AS DateTime), N'I', N'Admin')
INSERT  [vehicle_model] ([id], [vhcl_model_code], [vhcl_model_name], [description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'EEE57FBD-8CBF-4B20-8284-A8CD38F5898E', N'SX', N'SX FACELIFT', N'SX FACELIFT(2024)', CAST(N'2024-02-06T10:02:38.627' AS DateTime), N'I', N'Admin')
GO
INSERT  [vehicle] ([id], [vhcl_rec_type_code], [vhcl_valid_id], [vhcl_reg_mark_num], [vhcl_clss_id], [vhcl_form], [vhcl_alert_id], [vhcl_last_allow_appt_date], [vhcl_chsss_num], [vhcl_chsss_location], [vin_location], [cntry_id], [vhcl_make_id], [vhcl_mfc_year], [vhcl_num_axle], [vhcl_axle_weight_1], [vhcl_axle_weight_2], [vhcl_axle_weight_3], [vhcl_axle_weight_4], [vhcl_axle_weight_5], [vhcl_axle_weight_6], [vhcl_axle_weight_7], [vhcl_axle_weight_8], [vhcl_tyre_size_1], [vhcl_tyre_size_2], [vhcl_tyre_size_3], [vhcl_tyre_size_4], [vhcl_tyre_size_5], [vhcl_tyre_size_6], [vhcl_tyre_size_7], [vhcl_tyre_size_8], [vhcl_tyre_size_front], [vhcl_tyre_size_rear], [size_l], [size_w], [size_h], [vhcl_wght_code], [vhcl_pgv_wght], [vhcl_grs_wght], [vhcl_lug_wght], [vhcl_owner_name_chi], [vhcl_owner_name_eng], [vhcl_contact_person], [vhcl_telephone_no], [vhcl_district_code], [vhcl_district_location], [vhcl_district_location_chi_name], [vhcl_sts_id], [vhcl_model_num], [vhcl_model_id], [vhcl_body_type_id], [vhcl_lower_seat_cap_qty], [vhcl_upper_seat_cap_qty], [vhcl_stand_cap_qty], [vhcl_lic_end_date], [vhcl_frst_reg_date], [vhcl_propulsion], [vhcl_engn_num], [vhcl_engn_type_id], [vhcl_engn_size_qty], [vhcl_engn_make], [vhcl_service_brake], [vhcl_parking_brake], [vhcl_steering_system], [vhcl_left_hand_strg_ind], [vhcl_type_aprv_num], [vhcl_prmy_color_id], [vhcl_scnd_color_id], [vhcl_cncl_rsn_id], [vhcl_insp_ord_id], [lantau_vhcl_ind], [prvt_road_vhcl_ind], [vhcl_pvrm_trim_text], [vhcl_pvrm_dbl_line_ind], [vhcl_pvrm_line_1_text], [vhcl_pvrm_line_2_text], [vhcl_rate_pwr], [vhcl_rate_rpm], [vhcl_max_rpm], [vhcl_wheel_span], [vhcl_vico_date], [adv_aprv_date], [vhcl_cur_rnw_date], [vhcl_srvc_annot_text], [vhcl_srvc_rstr_text], [hybd_vhcl_ind], [ce_ref_num], [vhcl_reg_doc_txn_num], [vhcl_psl_list], [vhcl_prm_list], [vhcl_permit_num], [vhcl_vv_num], [vhcl_mve_insp_date], [vhcl_rmk_text], [manual_message_eng], [manual_message_chi], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id], [vhcl_type_aprv_ref_num]) VALUES (N'DEBD6B8F-3E5E-400E-81F7-55BC9B29BA0F', N'NV', N'002695142', N'DDD1688', N'92238E80-6125-4FD3-B50C-7290A85928B3', N'1', NULL, NULL, N'JTGFN418802001699', N'S/N', N'Hong kong', NULL, N'C102E9B5-8C96-42C3-8680-C6C4A80AC5E3', 2023, 8, CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(1900.03 AS Numeric(6, 2)), CAST(4.50 AS Numeric(6, 2)), CAST(5.10 AS Numeric(6, 2)), CAST(16.00 AS Numeric(6, 2)), CAST(0.00 AS Numeric(6, 2)), CAST(0.00 AS Numeric(6, 2)), CAST(0.00 AS Numeric(6, 2)), NULL, N'Sarang', N'Sarang', N'9876543210', N'LAMMA ISLAND', N'YUNG SHUE WAN', NULL, NULL, N'EEE57FBD-8CBF-4B20-8284-A8CD38F5898E', N'EEE57FBD-8CBF-4B20-8284-A8CD38F5898E', NULL, 6, 0, 0, CAST(N'2024-01-20T16:14:56.523' AS DateTime), CAST(N'2020-01-20T16:14:56.523' AS DateTime), NULL, N'2GR-0399562', NULL, CAST(3456 AS Numeric(5, 0)), N'HYUNDAI', N'HYDRAULIC FRONT & REAR', N'MECHANICAL REAR WHEEL', N'HYDRAULIC ASSISTANCE', N'N', N'40261001', NULL, NULL, NULL, NULL, N'N', N'N', N'CDRAG0N8', N'N', N'BLAN', N'BLAN', CAST(114.00 AS Numeric(9, 2)), CAST(114.00 AS Numeric(9, 2)), CAST(1400.00 AS Numeric(9, 2)), CAST(1100.00 AS Numeric(9, 2)), CAST(N'2024-01-20T16:14:56.523' AS DateTime), CAST(N'2024-01-20T16:14:56.523' AS DateTime), CAST(N'2024-04-20T16:14:56.523' AS DateTime), N'Y', NULL, N'N', N'002963-02-0001', N'E09-0036', N'12390CC02', N'1902572CPW', N'003665', N'VV3665', NULL, N'Test Vehicle', N'Okay', NULL, CAST(N'2024-02-06T10:14:44.167' AS DateTime), N'I', N'Admin', N'40261002')
GO
INSERT  [inspection] ([id], [vhcl_id], [lane_id], [second_lane_id], [dyno_room_id], [dyno_test_select_type], [insp_add_info_text], [insp_contact_name], [insp_contact_num], [insp_status], [insp_start_datetime], [insp_end_datetime], [insp_end_result], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'B67F0048-5E6A-4A81-AB66-3FFB48F508A7', N'DEBD6B8F-3E5E-400E-81F7-55BC9B29BA0F', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', N'', NULL, NULL, NULL, NULL, NULL, N'', CAST(N'1900-01-01T00:00:00.000' AS DateTime), CAST(N'1900-01-01T00:00:00.000' AS DateTime), N'', CAST(N'2024-02-21T06:29:50.597' AS DateTime), N'I', N'Admin')
GO
INSERT  [payment] ([id], [pymt_txn_datetime], [pymt_txn_num], [pymt_type_code], [pymt_amount], [pymt_method], [pymt_status_code], [remark], [ctr_id], [extl_ref_num], [wave_actv_ind], [wave_insp_fee_amt], [no_fee_appt_ind], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'4100AD2F-33A0-4A18-932F-D19B37C5777F', CAST(N'1900-01-01T00:00:00.000' AS DateTime), N'0088F270DE9540F493EA045162FE1217', N'APPT', CAST(585.00 AS Numeric(7, 2)), NULL, N'CMPLT', N'Ok', N'9242E680-CDE1-4683-A2F1-484C70F8A158', N'6551901079000556', N'Y', CAST(630.00 AS Numeric(7, 2)), N'N', CAST(N'2024-02-21T08:43:19.247' AS DateTime), N'I', N'Admin')
GO
INSERT  [Appointment] ([id], [user_id], [ctr_id], [vhcl_id], [lane_id], [lane_timeslot_id], [insp_id], [payment_id], [appt_num], [security_code], [appt_add_info_text], [appt_bill_datetime], [appt_confirm_datetime], [appt_contact_name], [appt_contact_num], [appt_create_datetime], [appt_create_sys_id], [appt_remark_text], [appt_timeslot_seq_num], [appt_status], [exact_schd_insp_datetime], [insp_type_id], [insp_datetime], [orig_vis_appt_key], [recheck_ind], [allow_overbook_ind], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'04FF331E-D314-4398-903C-E5E9789A6DC7', N'User1', N'9242E680-CDE1-4683-A2F1-484C70F8A158', N'DEBD6B8F-3E5E-400E-81F7-55BC9B29BA0F', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', N'BAC5D0AC-1C96-4F2F-A50A-002DB64DE8FE', N'B67F0048-5E6A-4A81-AB66-3FFB48F508A7', N'4100AD2F-33A0-4A18-932F-D19B37C5777F', N'1234567890', N'123456', N'okay', CAST(N'2024-02-21T09:00:00.000' AS DateTime), CAST(N'2024-02-21T09:00:00.000' AS DateTime), N'Test', N'123456789', CAST(N'2024-02-21T09:00:00.000' AS DateTime), N'CABC', NULL, 1, N'CREATED', CAST(N'2024-02-25T09:00:00.000' AS DateTime), N'FE7B5EAC-9409-480F-B6AE-F7226598E944', CAST(N'2024-02-25T09:00:00.000' AS DateTime), 0, N'N', N'N', CAST(N'2024-02-21T12:52:12.447' AS DateTime), N'I', N'Admin')
GO
INSERT  [inspection_schedule] ([id], [ctr_id], [effective_period_start], [effective_period_end], [action], [description], [type], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id], [bi_level_code]) VALUES (N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'9242E680-CDE1-4683-A2F1-484C70F8A158', CAST(N'2024-02-01T07:34:53.763' AS DateTime), CAST(N'2024-12-31T07:34:53.763' AS DateTime), N'Y', N'Test', N'Regular', CAST(N'2024-02-06T10:16:10.917' AS DateTime), N'I', N'Admin', N'NA')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'19B292C9-C9C6-4D71-ABB0-59CB97A7C06C', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Friday', N'08:45-09:00', 5, 0, N'N', N'Regular', N'AM1')
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'5FCB1137-DB79-4F93-9108-52B702B52320', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Thursday', N'08:45-09:00', 5, 0, N'N', N'Regular', N'AM1')
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'6D50DD53-38A2-4004-9B5F-E05A50F3A13F', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Monday', N'08:45-09:00', 5, 0, N'N', N'Regular', N'AM1')
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'8787B634-D460-4E08-9433-38C75D47ADD2', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Wednesday', N'08:45-09:00', 5, 0, N'N', N'Regular', N'AM1')
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'8E0365CE-DE4D-475B-BA91-3959598F9F9A', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Saturday', N'08:45-09:00', 5, 0, N'N', N'Regular', N'AM1')
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'C6C52603-5C13-4C2B-BA7D-2BBBB583AA61', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Tuesday', N'08:45-09:00', 5, 0, N'N', N'Regular', N'AM1')
GO
INSERT  [inspection_exam_code] ([id], [insp_id], [exam_code]) VALUES (N'5BBA86B0-E294-4F84-8A89-C89E12933A60', N'B67F0048-5E6A-4A81-AB66-3FFB48F508A7', N'008')
GO


USE [VICSS_DEV]
Go
---------centre_holiday---------
INSERT INTO  [centre_holiday]
           ([id]
           ,[ctr_id]
           ,[hdy_date]
           ,[hdy_name]
           ,[hdy_chi_name]
           ,[all_day_hdy]
           ,[hdy_start_time]
           ,[hdy_end_time]
           ,[last_rec_txn_datetime]
           ,[last_rec_txn_type_code]
           ,[last_rec_txn_user_id])
     VALUES
           (NewId()
           ,'9242E680-CDE1-4683-A2F1-484C70F8A158'
           ,'2024-03-18 00:00:00.000'
           ,'Holiday1'
           ,'NA'
           ,'Y'
           ,'2024-03-18 12:00:00.000'
           ,'2024-03-18 23:00:00.000'
           ,GETUTCDATE()
           ,'I'
           ,'Admin'
		   ),
		   (NewId()
           ,'9242E680-CDE1-4683-A2F1-484C70F8A158'
           ,'2024-03-25 00:00:00.000'
           ,'Holiday2'
           ,'NA'
           ,'Y'
           ,'2024-03-25 12:00:00.000'
           ,'2024-03-25 23:00:00.000'
           ,GETUTCDATE()
           ,'I'
           ,'Admin'
		   )
GO
select * from [centre_holiday]

---lane_avail_insp_type---
INSERT INTO  [lane_avail_insp_type]
           ([id]
           ,[lane_id]
           ,[insp_type_id])
     VALUES
           (NewId()
           ,(Select id from Lane where ctr_id ='9242E680-CDE1-4683-A2F1-484C70F8A158' and lane_name='11')
           ,(Select id from inspection_type where exam_code ='001')),
           (NewId()
           ,(Select id from Lane where ctr_id ='9242E680-CDE1-4683-A2F1-484C70F8A158' and lane_name='11A')
           ,(Select id from inspection_type where exam_code ='008')),
		   (NewId()
           ,(Select id from Lane where ctr_id ='9242E680-CDE1-4683-A2F1-484C70F8A158' and lane_name='11')
           ,(Select id from inspection_type where exam_code ='052'))
GO
select * from lane_avail_insp_type

-----------inspection_schedule_examcode--------------
INSERT INTO  [inspection_schedule_examcode]
           ([id]
           ,[insp_schedule_detail_id]
           ,[insp_type_id])
     VALUES
           (NewId()
           ,'6D50DD53-38A2-4004-9B5F-E05A50F3A13F'
           ,'FE7B5EAC-9409-480F-B6AE-F7226598E944'),
		   (NewId()
           ,'C6C52603-5C13-4C2B-BA7D-2BBBB583AA61'
           ,'FE7B5EAC-9409-480F-B6AE-F7226598E944'),
		   (NewId()
           ,'8787B634-D460-4E08-9433-38C75D47ADD2'
           ,'FE7B5EAC-9409-480F-B6AE-F7226598E944'),
		   (NewId()
           ,'5FCB1137-DB79-4F93-9108-52B702B52320'
           ,'FE7B5EAC-9409-480F-B6AE-F7226598E944'),
		   (NewId()
           ,'19B292C9-C9C6-4D71-ABB0-59CB97A7C06C'
           ,'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO
select * from inspection_schedule_examcode

-----------------[inspection_schedule_vhcl_cls]----------
INSERT INTO  [inspection_schedule_vhcl_cls]
           ([id]
           ,[insp_schedule_detail_id]
           ,[vhcl_class_id])
     VALUES
           (NewId()
           ,'6D50DD53-38A2-4004-9B5F-E05A50F3A13F'
           ,'92238E80-6125-4FD3-B50C-7290A85928B3'),
		   (NewId()
           ,'C6C52603-5C13-4C2B-BA7D-2BBBB583AA61'
           ,'92238E80-6125-4FD3-B50C-7290A85928B3'),
		   (NewId()
           ,'8787B634-D460-4E08-9433-38C75D47ADD2'
           ,'92238E80-6125-4FD3-B50C-7290A85928B3'),
		   (NewId()
           ,'5FCB1137-DB79-4F93-9108-52B702B52320'
           ,'92238E80-6125-4FD3-B50C-7290A85928B3'),
		   (NewId()
           ,'19B292C9-C9C6-4D71-ABB0-59CB97A7C06C'
           ,'92238E80-6125-4FD3-B50C-7290A85928B3'),
		   (NewId()
           ,'6D50DD53-38A2-4004-9B5F-E05A50F3A13F'
           ,'FA17A723-27C5-4559-8884-4D2F78DED554'),
		   (NewId()
           ,'C6C52603-5C13-4C2B-BA7D-2BBBB583AA61'
           ,'FA17A723-27C5-4559-8884-4D2F78DED554'),
		   (NewId()
           ,'8787B634-D460-4E08-9433-38C75D47ADD2'
           ,'FA17A723-27C5-4559-8884-4D2F78DED554'),
		   (NewId()
           ,'5FCB1137-DB79-4F93-9108-52B702B52320'
           ,'FA17A723-27C5-4559-8884-4D2F78DED554'),
		   (NewId()
           ,'19B292C9-C9C6-4D71-ABB0-59CB97A7C06C'
           ,'FA17A723-27C5-4559-8884-4D2F78DED554')
GO