USE [VICSS_DEV]
GO

INSERT  [vehicle] ([id], [vhcl_rec_type_code], [vhcl_valid_id], [vhcl_reg_mark_num], [vhcl_clss_id], [vhcl_form], [vhcl_alert_id], [vhcl_last_allow_appt_date], [vhcl_chsss_num], [vhcl_chsss_location], [vin_location], [cntry_id], [vhcl_make_id], [vhcl_mfc_year], [vhcl_num_axle], [vhcl_axle_weight_1], [vhcl_axle_weight_2], [vhcl_axle_weight_3], [vhcl_axle_weight_4], [vhcl_axle_weight_5], [vhcl_axle_weight_6], [vhcl_axle_weight_7], [vhcl_axle_weight_8], [vhcl_tyre_size_1], [vhcl_tyre_size_2], [vhcl_tyre_size_3], [vhcl_tyre_size_4], [vhcl_tyre_size_5], [vhcl_tyre_size_6], [vhcl_tyre_size_7], [vhcl_tyre_size_8], [vhcl_tyre_size_front], [vhcl_tyre_size_rear], [size_l], [size_w], [size_h], [vhcl_wght_code], [vhcl_pgv_wght], [vhcl_grs_wght], [vhcl_lug_wght], [vhcl_owner_name_chi], [vhcl_owner_name_eng], [vhcl_contact_person], [vhcl_telephone_no], [vhcl_district_code], [vhcl_district_location], [vhcl_district_location_chi_name], [vhcl_sts_id], [vhcl_model_num], [vhcl_model_id], [vhcl_body_type_id], [vhcl_lower_seat_cap_qty], [vhcl_upper_seat_cap_qty], [vhcl_stand_cap_qty], [vhcl_lic_end_date], [vhcl_frst_reg_date], [vhcl_propulsion], [vhcl_engn_num], [vhcl_engn_type_id], [vhcl_engn_size_qty], [vhcl_engn_make], [vhcl_service_brake], [vhcl_parking_brake], [vhcl_steering_system], [vhcl_left_hand_strg_ind], [vhcl_type_aprv_num], [vhcl_prmy_color_id], [vhcl_scnd_color_id], [vhcl_cncl_rsn_id], [vhcl_insp_ord_id], [lantau_vhcl_ind], [prvt_road_vhcl_ind], [vhcl_pvrm_trim_text], [vhcl_pvrm_dbl_line_ind], [vhcl_pvrm_line_1_text], [vhcl_pvrm_line_2_text], [vhcl_rate_pwr], [vhcl_rate_rpm], [vhcl_max_rpm], [vhcl_wheel_span], [vhcl_vico_date], [adv_aprv_date], [vhcl_cur_rnw_date], [vhcl_srvc_annot_text], [vhcl_srvc_rstr_text], [hybd_vhcl_ind], [ce_ref_num], [vhcl_reg_doc_txn_num], [vhcl_psl_list], [vhcl_prm_list], [vhcl_permit_num], [vhcl_vv_num], [vhcl_mve_insp_date], [vhcl_rmk_text], [manual_message_eng], [manual_message_chi], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id], [vhcl_type_aprv_ref_num]) VALUES (N'1E793AA3-FDC4-4A85-B257-C6B594CDE2EC', N'NV', N'002695143', N'AAA1699', N'92238E80-6125-4FD3-B50C-7290A85928B3', N'1', NULL, NULL, N'ATGFN418802001600', N'S/N', N'Hong kong', NULL, N'C102E9B5-8C96-42C3-8680-C6C4A80AC5E3', 2024, 8, CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(1900.03 AS Numeric(6, 2)), CAST(4.50 AS Numeric(6, 2)), CAST(5.10 AS Numeric(6, 2)), CAST(16.00 AS Numeric(6, 2)), CAST(0.00 AS Numeric(6, 2)), CAST(0.00 AS Numeric(6, 2)), CAST(0.00 AS Numeric(6, 2)), NULL, N'Tom', N'Tom', N'9876543123', N'LAMMA ISLAND', N'YUNG SHUE WAN', NULL, NULL, N'EEE57FBD-8CBF-4B20-8284-A8CD38F5898E', N'EEE57FBD-8CBF-4B20-8284-A8CD38F5898E', NULL, 6, 0, 0, CAST(N'2024-05-20T16:14:56.523' AS DateTime), CAST(N'2020-05-20T16:14:56.523' AS DateTime), NULL, N'2GR-0499562', NULL, CAST(3456 AS Numeric(5, 0)), N'HYUNDAI', N'HYDRAULIC FRONT & REAR', N'MECHANICAL REAR WHEEL', N'HYDRAULIC ASSISTANCE', N'N', N'40261002', NULL, NULL, NULL, NULL, N'N', N'N', N'CDRAG0N9', N'N', N'BLAN', N'BLAN', CAST(114.00 AS Numeric(9, 2)), CAST(114.00 AS Numeric(9, 2)), CAST(1400.00 AS Numeric(9, 2)), CAST(1100.00 AS Numeric(9, 2)), CAST(N'2024-03-20T16:14:56.523' AS DateTime), CAST(N'2024-03-20T16:14:56.523' AS DateTime), CAST(N'2024-04-20T16:14:56.523' AS DateTime), N'Y', NULL, N'N', N'002963-02-0002', N'E09-0036', N'12390CC02', N'1902572CPW', N'003665', N'VV3665', NULL, N'Test Vehicle', N'Okay', NULL, CAST(N'2024-03-26T10:14:44.167' AS DateTime), N'I', N'Admin', N'40261003')
GO
INSERT  [vehicle] ([id], [vhcl_rec_type_code], [vhcl_valid_id], [vhcl_reg_mark_num], [vhcl_clss_id], [vhcl_form], [vhcl_alert_id], [vhcl_last_allow_appt_date], [vhcl_chsss_num], [vhcl_chsss_location], [vin_location], [cntry_id], [vhcl_make_id], [vhcl_mfc_year], [vhcl_num_axle], [vhcl_axle_weight_1], [vhcl_axle_weight_2], [vhcl_axle_weight_3], [vhcl_axle_weight_4], [vhcl_axle_weight_5], [vhcl_axle_weight_6], [vhcl_axle_weight_7], [vhcl_axle_weight_8], [vhcl_tyre_size_1], [vhcl_tyre_size_2], [vhcl_tyre_size_3], [vhcl_tyre_size_4], [vhcl_tyre_size_5], [vhcl_tyre_size_6], [vhcl_tyre_size_7], [vhcl_tyre_size_8], [vhcl_tyre_size_front], [vhcl_tyre_size_rear], [size_l], [size_w], [size_h], [vhcl_wght_code], [vhcl_pgv_wght], [vhcl_grs_wght], [vhcl_lug_wght], [vhcl_owner_name_chi], [vhcl_owner_name_eng], [vhcl_contact_person], [vhcl_telephone_no], [vhcl_district_code], [vhcl_district_location], [vhcl_district_location_chi_name], [vhcl_sts_id], [vhcl_model_num], [vhcl_model_id], [vhcl_body_type_id], [vhcl_lower_seat_cap_qty], [vhcl_upper_seat_cap_qty], [vhcl_stand_cap_qty], [vhcl_lic_end_date], [vhcl_frst_reg_date], [vhcl_propulsion], [vhcl_engn_num], [vhcl_engn_type_id], [vhcl_engn_size_qty], [vhcl_engn_make], [vhcl_service_brake], [vhcl_parking_brake], [vhcl_steering_system], [vhcl_left_hand_strg_ind], [vhcl_type_aprv_num], [vhcl_prmy_color_id], [vhcl_scnd_color_id], [vhcl_cncl_rsn_id], [vhcl_insp_ord_id], [lantau_vhcl_ind], [prvt_road_vhcl_ind], [vhcl_pvrm_trim_text], [vhcl_pvrm_dbl_line_ind], [vhcl_pvrm_line_1_text], [vhcl_pvrm_line_2_text], [vhcl_rate_pwr], [vhcl_rate_rpm], [vhcl_max_rpm], [vhcl_wheel_span], [vhcl_vico_date], [adv_aprv_date], [vhcl_cur_rnw_date], [vhcl_srvc_annot_text], [vhcl_srvc_rstr_text], [hybd_vhcl_ind], [ce_ref_num], [vhcl_reg_doc_txn_num], [vhcl_psl_list], [vhcl_prm_list], [vhcl_permit_num], [vhcl_vv_num], [vhcl_mve_insp_date], [vhcl_rmk_text], [manual_message_eng], [manual_message_chi], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id], [vhcl_type_aprv_ref_num]) VALUES (N'211675D4-AC88-4FA4-8E9B-19DCEB0D1746', N'NV', N'002695144', N'BBB1699', N'92238E80-6125-4FD3-B50C-7290A85928B3', N'1', NULL, NULL, N'BTGFN418802001700', N'S/N', N'Hong kong', NULL, N'C102E9B5-8C96-42C3-8680-C6C4A80AC5E3', 2024, 8, CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(10.20 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(205.13 AS Numeric(6, 2)), CAST(1900.03 AS Numeric(6, 2)), CAST(4.50 AS Numeric(6, 2)), CAST(5.10 AS Numeric(6, 2)), CAST(16.00 AS Numeric(6, 2)), CAST(0.00 AS Numeric(6, 2)), CAST(0.00 AS Numeric(6, 2)), CAST(0.00 AS Numeric(6, 2)), NULL, N'Sai', N'Sai', N'9878943123', N'LAMMA ISLAND', N'YUNG SHUE WAN', NULL, NULL, N'EEE57FBD-8CBF-4B20-8284-A8CD38F5898E', N'EEE57FBD-8CBF-4B20-8284-A8CD38F5898E', NULL, 6, 0, 0, CAST(N'2024-05-21T16:14:56.523' AS DateTime), CAST(N'2020-05-21T16:14:56.523' AS DateTime), NULL, N'2GR-0599562', NULL, CAST(3456 AS Numeric(5, 0)), N'HYUNDAI', N'HYDRAULIC FRONT & REAR', N'MECHANICAL REAR WHEEL', N'HYDRAULIC ASSISTANCE', N'N', N'40261003', NULL, NULL, NULL, NULL, N'N', N'N', N'CDRAG0N0', N'N', N'BLAN', N'BLAN', CAST(114.00 AS Numeric(9, 2)), CAST(114.00 AS Numeric(9, 2)), CAST(1400.00 AS Numeric(9, 2)), CAST(1100.00 AS Numeric(9, 2)), CAST(N'2024-03-21T16:14:56.523' AS DateTime), CAST(N'2024-03-21T16:14:56.523' AS DateTime), CAST(N'2024-04-21T16:14:56.523' AS DateTime), N'Y', NULL, N'N', N'002963-02-0003', N'E09-0036', N'12390CC02', N'1902572CPW', N'003665', N'VV3665', NULL, N'Test Vehicle', N'Okay', NULL, CAST(N'2024-03-26T11:14:44.167' AS DateTime), N'I', N'Admin', N'40261004')
GO

INSERT  [LaneTimeslot] ([id], [lane_id], [start], [end], [exam_schd_desp], [capacity]) VALUES (N'BC85C6E9-3D49-433C-A5AB-11FF3F2331F9', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', CAST(N'2024-02-21T10:00:00.000' AS DateTime), CAST(N'2025-02-21T11:00:00.000' AS DateTime), N'Exam Timetable start from 2018', 1)
GO
INSERT  [LaneTimeslot] ([id], [lane_id], [start], [end], [exam_schd_desp], [capacity]) VALUES (N'395BAD14-4782-4528-AA23-6456C23EB429', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', CAST(N'2024-02-21T14:00:00.000' AS DateTime), CAST(N'2025-02-21T15:00:00.000' AS DateTime), N'Exam Timetable start from 2018', 1)
GO

INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'018CB464-B8E0-4BF6-8E09-B3DB6072668F', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Friday', N'10:00-11:00', 5, 0, N'N', N'Regular', N'AM1')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'E0B5E2E7-3C78-40F8-9DDD-3BA7A22B9B4B', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Thursday', N'10:00-11:00', 5, 0, N'N', N'Regular', N'AM1')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'B9998AEC-A840-4B9A-9C8D-500A69294A56', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Monday', N'10:00-11:00', 5, 0, N'N', N'Regular', N'AM1')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'FA76168D-118B-4301-AD0F-42DFBAB88081', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Wednesday', N'10:00-11:00', 5, 0, N'N', N'Regular', N'AM1')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'9F392819-7F58-4ECD-91E6-5E15BAF28CB3', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Saturday', N'10:00-11:00', 5, 0, N'N', N'Regular', N'AM1')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'062DB5E9-2C77-4899-8B48-2F27CC6508A2', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Tuesday', N'10:00-11:00', 5, 0, N'N', N'Regular', N'AM1')
GO

INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'04A2DD68-3D31-451F-98A1-F6824DE6D004', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Friday', N'14:00-15:00', 5, 0, N'N', N'Regular', N'PM1')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'3D6C413A-87BB-4D07-A91B-81C8E271E52A', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Thursday', N'14:00-15:00', 5, 0, N'N', N'Regular', N'PM1')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'4B5177CC-DB16-40F7-946D-7080B014A437', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Monday', N'14:00-15:00', 5, 0, N'N', N'Regular', N'PM1')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'F18BF6BE-5EEB-45AB-A5FD-50BDF078C598', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Wednesday', N'14:00-15:00', 5, 0, N'N', N'Regular', N'PM1')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'CB6E826C-3F60-467D-AECB-03B1B54CDB2D', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Saturday', N'14:00-15:00', 5, 0, N'N', N'Regular', N'PM1')
GO
INSERT  [inspection_schedule_detail] ([id], [insp_schedule_id], [physical_lane_id], [virtual_lane_id], [weekday], [timeslot], [quota], [reserve_quota], [block], [schedule_type], [day_session_code]) VALUES (N'09DC6BF4-6EF6-4BB2-B89C-C4CC2FDA40E9', N'E53E7839-0E3C-4326-B2A4-274B34BA3692', N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602', NULL, N'Tuesday', N'14:00-15:00', 5, 0, N'N', N'Regular', N'PM1')
GO

UPDATE  [lane_avail_insp_type] set [lane_id] = N'A8F9AA4B-0313-45C9-9C66-DD76B54ED602' where [lane_id] = N'01309054-B436-4410-B5D6-4936BE1E0A3F'
GO

INSERT  [inspection_schedule_examcode] ([id], [insp_schedule_detail_id], [insp_type_id]) VALUES (NEWID(), N'018CB464-B8E0-4BF6-8E09-B3DB6072668F', N'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO
INSERT  [inspection_schedule_examcode] ([id], [insp_schedule_detail_id], [insp_type_id]) VALUES (NEWID(), N'04A2DD68-3D31-451F-98A1-F6824DE6D004', N'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO
INSERT  [inspection_schedule_examcode] ([id], [insp_schedule_detail_id], [insp_type_id]) VALUES (NEWID(), N'062DB5E9-2C77-4899-8B48-2F27CC6508A2', N'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO
INSERT  [inspection_schedule_examcode] ([id], [insp_schedule_detail_id], [insp_type_id]) VALUES (NEWID(), N'09DC6BF4-6EF6-4BB2-B89C-C4CC2FDA40E9', N'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO
INSERT  [inspection_schedule_examcode] ([id], [insp_schedule_detail_id], [insp_type_id]) VALUES (NEWID(), N'3D6C413A-87BB-4D07-A91B-81C8E271E52A', N'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO
INSERT  [inspection_schedule_examcode] ([id], [insp_schedule_detail_id], [insp_type_id]) VALUES (NEWID(), N'4B5177CC-DB16-40F7-946D-7080B014A437', N'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO
INSERT  [inspection_schedule_examcode] ([id], [insp_schedule_detail_id], [insp_type_id]) VALUES (NEWID(), N'F18BF6BE-5EEB-45AB-A5FD-50BDF078C598', N'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO
INSERT  [inspection_schedule_examcode] ([id], [insp_schedule_detail_id], [insp_type_id]) VALUES (NEWID(), N'B9998AEC-A840-4B9A-9C8D-500A69294A56', N'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO
INSERT  [inspection_schedule_examcode] ([id], [insp_schedule_detail_id], [insp_type_id]) VALUES (NEWID(), N'FA76168D-118B-4301-AD0F-42DFBAB88081', N'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO
INSERT  [inspection_schedule_examcode] ([id], [insp_schedule_detail_id], [insp_type_id]) VALUES (NEWID(), N'E0B5E2E7-3C78-40F8-9DDD-3BA7A22B9B4B', N'FE7B5EAC-9409-480F-B6AE-F7226598E944')
GO


INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'018CB464-B8E0-4BF6-8E09-B3DB6072668F', N'FA17A723-27C5-4559-8884-4D2F78DED554')
GO
INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'018CB464-B8E0-4BF6-8E09-B3DB6072668F', N'92238E80-6125-4FD3-B50C-7290A85928B3')
GO

INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'04A2DD68-3D31-451F-98A1-F6824DE6D004', N'FA17A723-27C5-4559-8884-4D2F78DED554')
GO
INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'04A2DD68-3D31-451F-98A1-F6824DE6D004', N'92238E80-6125-4FD3-B50C-7290A85928B3')
GO

INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'062DB5E9-2C77-4899-8B48-2F27CC6508A2', N'FA17A723-27C5-4559-8884-4D2F78DED554')
GO
INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'062DB5E9-2C77-4899-8B48-2F27CC6508A2', N'92238E80-6125-4FD3-B50C-7290A85928B3')
GO

INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'09DC6BF4-6EF6-4BB2-B89C-C4CC2FDA40E9', N'FA17A723-27C5-4559-8884-4D2F78DED554')
GO
INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'09DC6BF4-6EF6-4BB2-B89C-C4CC2FDA40E9', N'92238E80-6125-4FD3-B50C-7290A85928B3')
GO

INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'3D6C413A-87BB-4D07-A91B-81C8E271E52A', N'FA17A723-27C5-4559-8884-4D2F78DED554')
GO
INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'3D6C413A-87BB-4D07-A91B-81C8E271E52A', N'92238E80-6125-4FD3-B50C-7290A85928B3')
GO

INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'4B5177CC-DB16-40F7-946D-7080B014A437', N'FA17A723-27C5-4559-8884-4D2F78DED554')
GO
INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'4B5177CC-DB16-40F7-946D-7080B014A437', N'92238E80-6125-4FD3-B50C-7290A85928B3')
GO

INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'F18BF6BE-5EEB-45AB-A5FD-50BDF078C598', N'FA17A723-27C5-4559-8884-4D2F78DED554')
GO
INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'F18BF6BE-5EEB-45AB-A5FD-50BDF078C598', N'92238E80-6125-4FD3-B50C-7290A85928B3')
GO

INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'B9998AEC-A840-4B9A-9C8D-500A69294A56', N'FA17A723-27C5-4559-8884-4D2F78DED554')
GO
INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'B9998AEC-A840-4B9A-9C8D-500A69294A56', N'92238E80-6125-4FD3-B50C-7290A85928B3')
GO

INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'FA76168D-118B-4301-AD0F-42DFBAB88081', N'FA17A723-27C5-4559-8884-4D2F78DED554')
GO
INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'FA76168D-118B-4301-AD0F-42DFBAB88081', N'92238E80-6125-4FD3-B50C-7290A85928B3')
GO

INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'E0B5E2E7-3C78-40F8-9DDD-3BA7A22B9B4B', N'FA17A723-27C5-4559-8884-4D2F78DED554')
GO
INSERT  [inspection_schedule_vhcl_cls] ([id], [insp_schedule_detail_id], [vhcl_class_id]) VALUES (NEWID(), N'E0B5E2E7-3C78-40F8-9DDD-3BA7A22B9B4B', N'92238E80-6125-4FD3-B50C-7290A85928B3')
GO




