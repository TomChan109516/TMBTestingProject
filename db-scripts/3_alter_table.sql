USE [VICSS_DEV]

ALTER TABLE  [inspection_schedule] ADD  DEFAULT (N'') FOR [type]
GO
ALTER TABLE  [inspection_schedule] ADD  DEFAULT ('0001-01-01T00:00:00.000') FOR [last_rec_txn_datetime]
GO
ALTER TABLE  [inspection_schedule] ADD  DEFAULT (N'') FOR [last_rec_txn_type_code]
GO
ALTER TABLE  [inspection_schedule] ADD  DEFAULT (N'') FOR [last_rec_txn_user_id]
GO
ALTER TABLE  [inspection_schedule] ADD  DEFAULT (N'') FOR [bi_level_code]
GO
ALTER TABLE  [inspection_schedule_detail] ADD  DEFAULT (N'') FOR [day_session_code]
GO
ALTER TABLE  [centre] ADD  DEFAULT (N'') FOR [ctr_code]
GO
ALTER TABLE  [appointment_reschedule_history]  WITH CHECK ADD  CONSTRAINT [FK_appointment_reschedule_history_lane_lane_id] FOREIGN KEY([lane_id])
REFERENCES  [lane] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [appointment_reschedule_history] CHECK CONSTRAINT [FK_appointment_reschedule_history_lane_lane_id]
GO
ALTER TABLE  [appointment_reschedule_history]  WITH CHECK ADD  CONSTRAINT [FK_appointment_reschedule_history_LaneTimeslot_lane_timeslot_id] FOREIGN KEY([lane_timeslot_id])
REFERENCES  [LaneTimeslot] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [appointment_reschedule_history] CHECK CONSTRAINT [FK_appointment_reschedule_history_LaneTimeslot_lane_timeslot_id]
GO
ALTER TABLE  [appointment_reschedule_history]  WITH CHECK ADD  CONSTRAINT [FK_appointment_reschedule_history_Appointment_appt_id] FOREIGN KEY([appt_id])
REFERENCES  [Appointment] ([id])
GO
ALTER TABLE  [appointment_reschedule_history] CHECK CONSTRAINT [FK_appointment_reschedule_history_Appointment_appt_id]
GO
ALTER TABLE  [appointment_reschedule_history]  WITH CHECK ADD  CONSTRAINT [FK_appointment_reschedule_history_centre_ctr_id] FOREIGN KEY([ctr_id])
REFERENCES  [centre] ([id])
GO
ALTER TABLE  [appointment_reschedule_history] CHECK CONSTRAINT [FK_appointment_reschedule_history_centre_ctr_id]
GO
ALTER TABLE  [attachments]  WITH CHECK ADD  CONSTRAINT [FK_attachments_Appointment_id] FOREIGN KEY([id])
REFERENCES  [Appointment] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [attachments] CHECK CONSTRAINT [FK_attachments_Appointment_id]
GO
ALTER TABLE  [attachments]  WITH CHECK ADD  CONSTRAINT [FK_attachments_centre_ctr_id] FOREIGN KEY([ctr_id])
REFERENCES  [centre] ([id])
GO
ALTER TABLE  [attachments] CHECK CONSTRAINT [FK_attachments_centre_ctr_id]
GO
ALTER TABLE  [attachments]  WITH CHECK ADD  CONSTRAINT [FK_attachments_vehicle_id] FOREIGN KEY([id])
REFERENCES  [vehicle] ([id])
GO
ALTER TABLE  [attachments] CHECK CONSTRAINT [FK_attachments_vehicle_id]
GO
ALTER TABLE  [attachments]  WITH CHECK ADD  CONSTRAINT [FK_attachments_user_upload_user_id] FOREIGN KEY([upload_user_id])
REFERENCES  [user] ([id])
GO
ALTER TABLE  [attachments] CHECK CONSTRAINT [FK_attachments_user_upload_user_id]
GO
ALTER TABLE  [centre_holiday]  WITH CHECK ADD  CONSTRAINT [FK_centre_holiday_centre_ctr_id] FOREIGN KEY([ctr_id])
REFERENCES  [centre] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [centre_holiday] CHECK CONSTRAINT [FK_centre_holiday_centre_ctr_id]
GO
ALTER TABLE  [inspection]  WITH CHECK ADD  CONSTRAINT [FK_inspection_lane_lane_id] FOREIGN KEY([lane_id])
REFERENCES  [lane] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [inspection] CHECK CONSTRAINT [FK_inspection_lane_lane_id]
GO
ALTER TABLE  [inspection]  WITH CHECK ADD  CONSTRAINT [FK_inspection_vehicle_vhcl_id] FOREIGN KEY([vhcl_id])
REFERENCES  [vehicle] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [inspection] CHECK CONSTRAINT [FK_inspection_vehicle_vhcl_id]
GO
ALTER TABLE  [inspection_exam_code]  WITH CHECK ADD  CONSTRAINT [FK_inspection_exam_code_inspection_insp_id] FOREIGN KEY([insp_id])
REFERENCES  [inspection] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [inspection_exam_code] CHECK CONSTRAINT [FK_inspection_exam_code_inspection_insp_id]
GO
ALTER TABLE  [inspection_exam_code]  WITH CHECK ADD  CONSTRAINT [FK_inspection_exam_code_inspection_type_exam_code] FOREIGN KEY([exam_code])
REFERENCES  [inspection_type] ([exam_code])
GO
ALTER TABLE  [inspection_exam_code] CHECK CONSTRAINT [FK_inspection_exam_code_inspection_type_exam_code]
GO
ALTER TABLE  [inspection_schedule]  WITH CHECK ADD  CONSTRAINT [FK_inspection_schedule_centre_ctr_id] FOREIGN KEY([ctr_id])
REFERENCES  [centre] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [inspection_schedule] CHECK CONSTRAINT [FK_inspection_schedule_centre_ctr_id]
GO
ALTER TABLE  [inspection_schedule_detail]  WITH CHECK ADD  CONSTRAINT [FK_inspection_schedule_detail_inspection_schedule_insp_schedule_id] FOREIGN KEY([insp_schedule_id])
REFERENCES  [inspection_schedule] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [inspection_schedule_detail] CHECK CONSTRAINT [FK_inspection_schedule_detail_inspection_schedule_insp_schedule_id]
GO
ALTER TABLE  [inspection_schedule_detail]  WITH CHECK ADD  CONSTRAINT [FK_inspection_schedule_detail_lane_physical_lane_id] FOREIGN KEY([physical_lane_id])
REFERENCES  [lane] ([id])
GO
ALTER TABLE  [inspection_schedule_detail] CHECK CONSTRAINT [FK_inspection_schedule_detail_lane_physical_lane_id]
GO
ALTER TABLE  [inspection_schedule_examcode]  WITH CHECK ADD  CONSTRAINT [FK_inspection_schedule_examcode_inspection_schedule_detail_insp_schedule_detail_id] FOREIGN KEY([insp_schedule_detail_id])
REFERENCES  [inspection_schedule_detail] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [inspection_schedule_examcode] CHECK CONSTRAINT [FK_inspection_schedule_examcode_inspection_schedule_detail_insp_schedule_detail_id]
GO
ALTER TABLE  [inspection_schedule_examcode]  WITH CHECK ADD  CONSTRAINT [FK_inspection_schedule_examcode_inspection_type_insp_type_id] FOREIGN KEY([insp_type_id])
REFERENCES  [inspection_type] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [inspection_schedule_examcode] CHECK CONSTRAINT [FK_inspection_schedule_examcode_inspection_type_insp_type_id]
GO
ALTER TABLE  [inspection_schedule_vhcl_cls]  WITH CHECK ADD  CONSTRAINT [FK_inspection_schedule_vhcl_cls_inspection_schedule_detail_insp_schedule_detail_id] FOREIGN KEY([insp_schedule_detail_id])
REFERENCES  [inspection_schedule_detail] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [inspection_schedule_vhcl_cls] CHECK CONSTRAINT [FK_inspection_schedule_vhcl_cls_inspection_schedule_detail_insp_schedule_detail_id]
GO
ALTER TABLE  [inspection_schedule_vhcl_cls]  WITH CHECK ADD  CONSTRAINT [FK_inspection_schedule_vhcl_cls_vehicle_class_vhcl_class_id] FOREIGN KEY([vhcl_class_id])
REFERENCES  [vehicle_class] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [inspection_schedule_vhcl_cls] CHECK CONSTRAINT [FK_inspection_schedule_vhcl_cls_vehicle_class_vhcl_class_id]
GO
ALTER TABLE  [lane]  WITH CHECK ADD  CONSTRAINT [FK_lane_centre_ctr_id] FOREIGN KEY([ctr_id])
REFERENCES  [centre] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [lane] CHECK CONSTRAINT [FK_lane_centre_ctr_id]
GO
ALTER TABLE  [lane_avail_insp_type]  WITH CHECK ADD  CONSTRAINT [FK_lane_avail_insp_type_inspection_type_insp_type_id] FOREIGN KEY([insp_type_id])
REFERENCES  [inspection_type] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [lane_avail_insp_type] CHECK CONSTRAINT [FK_lane_avail_insp_type_inspection_type_insp_type_id]
GO
ALTER TABLE  [lane_avail_insp_type]  WITH CHECK ADD  CONSTRAINT [FK_lane_avail_insp_type_lane_lane_id] FOREIGN KEY([lane_id])
REFERENCES  [lane] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [lane_avail_insp_type] CHECK CONSTRAINT [FK_lane_avail_insp_type_lane_lane_id]
GO
ALTER TABLE  [lane_avail_vehicle]  WITH CHECK ADD  CONSTRAINT [FK_lane_avail_vehicle_lane_lane_id] FOREIGN KEY([lane_id])
REFERENCES  [lane] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [lane_avail_vehicle] CHECK CONSTRAINT [FK_lane_avail_vehicle_lane_lane_id]
GO
--ALTER TABLE  [lane_avail_vehicle]  WITH CHECK ADD  CONSTRAINT [FK_lane_avail_vehicle_vehicle_type_vhcl_type_id] FOREIGN KEY([vhcl_type_id])
--REFERENCES  [vehicle_type] ([id])
--ON DELETE CASCADE
--GO
--ALTER TABLE  [lane_avail_vehicle] CHECK CONSTRAINT [FK_lane_avail_vehicle_vehicle_type_vhcl_type_id]
--GO
ALTER TABLE  [LaneTimeslot]  WITH CHECK ADD  CONSTRAINT [FK_LaneTimeslot_lane_lane_id] FOREIGN KEY([lane_id])
REFERENCES  [lane] ([id])
GO
ALTER TABLE  [LaneTimeslot] CHECK CONSTRAINT [FK_LaneTimeslot_lane_lane_id]
GO
ALTER TABLE  [Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_inspection_insp_id] FOREIGN KEY([insp_id])
REFERENCES  [inspection] ([id])
GO
ALTER TABLE  [Appointment] CHECK CONSTRAINT [FK_Appointment_inspection_insp_id]
GO
ALTER TABLE  [Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_inspection_type_insp_type_id] FOREIGN KEY([insp_type_id])
REFERENCES  [inspection_type] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [Appointment] CHECK CONSTRAINT [FK_Appointment_inspection_type_insp_type_id]
GO
ALTER TABLE  [Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_lane_lane_id] FOREIGN KEY([lane_id])
REFERENCES  [lane] ([id])
GO
ALTER TABLE  [Appointment] CHECK CONSTRAINT [FK_Appointment_lane_lane_id]
GO
ALTER TABLE  [Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_LaneTimeslot_lane_timeslot_id] FOREIGN KEY([lane_timeslot_id])
REFERENCES  [LaneTimeslot] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [Appointment] CHECK CONSTRAINT [FK_Appointment_LaneTimeslot_lane_timeslot_id]
GO
ALTER TABLE  [Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_centre_ctr_id] FOREIGN KEY([ctr_id])
REFERENCES  [centre] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [Appointment] CHECK CONSTRAINT [FK_Appointment_centre_ctr_id]
GO
ALTER TABLE  [Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_vehicle_vhcl_id] FOREIGN KEY([vhcl_id])
REFERENCES  [vehicle] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [Appointment] CHECK CONSTRAINT [FK_Appointment_vehicle_vhcl_id]
GO
ALTER TABLE  [Appointment]  WITH CHECK ADD  CONSTRAINT [FK_Appointment_payment_payment_id] FOREIGN KEY([payment_id])
REFERENCES  [payment] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [Appointment] CHECK CONSTRAINT [FK_Appointment_payment_payment_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_country_cntry_id] FOREIGN KEY([cntry_id])
REFERENCES  [country] ([id])
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_country_cntry_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_vehicle_alert_vhcl_alert_id] FOREIGN KEY([vhcl_alert_id])
REFERENCES  [vehicle_alert] ([id])
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_vehicle_alert_vhcl_alert_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_vehicle_cancel_reason_vhcl_cncl_rsn_id] FOREIGN KEY([vhcl_cncl_rsn_id])
REFERENCES  [vehicle_cancel_reason] ([id])
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_vehicle_cancel_reason_vhcl_cncl_rsn_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_vehicle_class_vhcl_clss_id] FOREIGN KEY([vhcl_clss_id])
REFERENCES  [vehicle_class] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_vehicle_class_vhcl_clss_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_vehicle_color_vhcl_scnd_color_id] FOREIGN KEY([vhcl_scnd_color_id])
REFERENCES  [vehicle_color] ([id])
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_vehicle_color_vhcl_scnd_color_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_vehicle_engine_type_vhcl_engn_type_id] FOREIGN KEY([vhcl_engn_type_id])
REFERENCES  [vehicle_engine_type] ([id])
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_vehicle_engine_type_vhcl_engn_type_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_vehicle_inspection_order_vhcl_insp_ord_id] FOREIGN KEY([vhcl_insp_ord_id])
REFERENCES  [vehicle_inspection_order] ([id])
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_vehicle_inspection_order_vhcl_insp_ord_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_vehicle_make_vhcl_make_id] FOREIGN KEY([vhcl_make_id])
REFERENCES  [vehicle_make] ([id])
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_vehicle_make_vhcl_make_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_vehicle_model_vhcl_model_id] FOREIGN KEY([vhcl_model_id])
REFERENCES  [vehicle_model] ([id])
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_vehicle_model_vhcl_model_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_vehicle_status_vhcl_sts_id] FOREIGN KEY([vhcl_sts_id])
REFERENCES  [vehicle_status] ([id])
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_vehicle_status_vhcl_sts_id]
GO
ALTER TABLE  [vehicle]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_vhcl_body_type_vhcl_body_type_id] FOREIGN KEY([vhcl_body_type_id])
REFERENCES  [vhcl_body_type] ([id])
GO
ALTER TABLE  [vehicle] CHECK CONSTRAINT [FK_vehicle_vhcl_body_type_vhcl_body_type_id]
GO
ALTER TABLE  [payment]  WITH CHECK ADD  CONSTRAINT [FK_payment_centre_ctr_id] FOREIGN KEY([ctr_id])
REFERENCES  [centre] ([id])
GO
ALTER TABLE  [payment] CHECK CONSTRAINT [FK_payment_centre_ctr_id]
GO
ALTER TABLE  [random_check]  WITH CHECK ADD  CONSTRAINT [FK_random_check_random_check_config_random_check_config_id] FOREIGN KEY([random_check_config_id])
REFERENCES  [random_check_config] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [random_check] CHECK CONSTRAINT [FK_random_check_random_check_config_random_check_config_id]
GO
ALTER TABLE  [random_check_config_detail]  WITH CHECK ADD  CONSTRAINT [FK_random_check_config_detail_random_check_config_random_check_config_id] FOREIGN KEY([random_check_config_id])
REFERENCES  [random_check_config] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [random_check_config_detail] CHECK CONSTRAINT [FK_random_check_config_detail_random_check_config_random_check_config_id]
GO
ALTER TABLE  [special_event]  WITH CHECK ADD  CONSTRAINT [FK_special_event_centre_ctr_id] FOREIGN KEY([ctr_id])
REFERENCES  [centre] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [special_event] CHECK CONSTRAINT [FK_special_event_centre_ctr_id]
GO
ALTER TABLE  [special_event_schedule]  WITH CHECK ADD  CONSTRAINT [FK_special_event_schedule_special_event_special_event_id] FOREIGN KEY([special_event_id])
REFERENCES  [special_event] ([id])
GO
ALTER TABLE  [special_event_schedule] CHECK CONSTRAINT [FK_special_event_schedule_special_event_special_event_id]
GO
ALTER TABLE  [special_event_schedule_examcode]  WITH CHECK ADD  CONSTRAINT [FK_special_event_schedule_examcode_inspection_type_insp_type_id] FOREIGN KEY([insp_type_id])
REFERENCES  [inspection_type] ([id])
GO
ALTER TABLE  [special_event_schedule_examcode] CHECK CONSTRAINT [FK_special_event_schedule_examcode_inspection_type_insp_type_id]
GO
ALTER TABLE  [special_event_schedule_examcode]  WITH CHECK ADD  CONSTRAINT [FK_special_event_schedule_examcode_special_event_schedule_special_event_schedule_id] FOREIGN KEY([special_event_schedule_id])
REFERENCES  [special_event_schedule] ([id])
GO
ALTER TABLE  [special_event_schedule_examcode] CHECK CONSTRAINT [FK_special_event_schedule_examcode_special_event_schedule_special_event_schedule_id]
GO
ALTER TABLE  [special_event_schedule_lane]  WITH CHECK ADD  CONSTRAINT [FK_special_event_schedule_lane_lane_lane_id] FOREIGN KEY([lane_id])
REFERENCES  [lane] ([id])
GO
ALTER TABLE  [special_event_schedule_lane] CHECK CONSTRAINT [FK_special_event_schedule_lane_lane_lane_id]
GO
ALTER TABLE  [special_event_schedule_lane]  WITH CHECK ADD  CONSTRAINT [FK_special_event_schedule_lane_special_event_schedule_special_event_schedule_id] FOREIGN KEY([special_event_schedule_id])
REFERENCES  [special_event_schedule] ([id])
GO
ALTER TABLE  [special_event_schedule_lane] CHECK CONSTRAINT [FK_special_event_schedule_lane_special_event_schedule_special_event_schedule_id]
GO
ALTER TABLE  [special_event_schedule_timeslot]  WITH CHECK ADD  CONSTRAINT [FK_special_event_schedule_timeslot_special_event_schedule_special_event_schedule_id] FOREIGN KEY([special_event_schedule_id])
REFERENCES  [special_event_schedule] ([id])
GO
ALTER TABLE  [special_event_schedule_timeslot] CHECK CONSTRAINT [FK_special_event_schedule_timeslot_special_event_schedule_special_event_schedule_id]
GO
ALTER TABLE  [special_event_schedule_vhcl_cls]  WITH CHECK ADD  CONSTRAINT [FK_special_event_schedule_vhcl_cls_special_event_schedule_special_event_schedule_id] FOREIGN KEY([special_event_schedule_id])
REFERENCES  [special_event_schedule] ([id])
GO
ALTER TABLE  [special_event_schedule_vhcl_cls] CHECK CONSTRAINT [FK_special_event_schedule_vhcl_cls_special_event_schedule_special_event_schedule_id]
GO
ALTER TABLE  [special_event_schedule_vhcl_cls]  WITH CHECK ADD  CONSTRAINT [FK_special_event_schedule_vhcl_cls_vehicle_class_vhcl_class_id] FOREIGN KEY([vhcl_class_id])
REFERENCES  [vehicle_class] ([id])
GO
ALTER TABLE  [special_event_schedule_vhcl_cls] CHECK CONSTRAINT [FK_special_event_schedule_vhcl_cls_vehicle_class_vhcl_class_id]
GO
ALTER TABLE  [special_event_schedule_weekday]  WITH CHECK ADD  CONSTRAINT [FK_special_event_schedule_weekday_special_event_schedule_special_event_schedule_id] FOREIGN KEY([special_event_schedule_id])
REFERENCES  [special_event_schedule] ([id])
GO
ALTER TABLE  [special_event_schedule_weekday] CHECK CONSTRAINT [FK_special_event_schedule_weekday_special_event_schedule_special_event_schedule_id]
GO
ALTER TABLE  [user]  WITH CHECK ADD  CONSTRAINT [FK_user_centre_ctr_id] FOREIGN KEY([ctr_id])
REFERENCES  [centre] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [user] CHECK CONSTRAINT [FK_user_centre_ctr_id]
GO
ALTER TABLE  [user]  WITH CHECK ADD  CONSTRAINT [FK_user_user_privilege_privilege_id] FOREIGN KEY([privilege_id])
REFERENCES  [user_privilege] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [user] CHECK CONSTRAINT [FK_user_user_privilege_privilege_id]
GO
ALTER TABLE  [user_auth]  WITH CHECK ADD  CONSTRAINT [FK_user_auth_user_user_id] FOREIGN KEY([user_id])
REFERENCES  [user] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [user_auth] CHECK CONSTRAINT [FK_user_auth_user_user_id]
GO
ALTER TABLE  [user_group]  WITH CHECK ADD  CONSTRAINT [FK_user_group_user_privilege_privilege_id] FOREIGN KEY([privilege_id])
REFERENCES  [user_privilege] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [user_group] CHECK CONSTRAINT [FK_user_group_user_privilege_privilege_id]
GO
ALTER TABLE  [user_group_privilege]  WITH CHECK ADD  CONSTRAINT [FK_user_group_privilege_user_group_user_group_id] FOREIGN KEY([user_group_id])
REFERENCES  [user_group] ([id])
GO
ALTER TABLE  [user_group_privilege] CHECK CONSTRAINT [FK_user_group_privilege_user_group_user_group_id]
GO
ALTER TABLE  [user_group_privilege]  WITH CHECK ADD  CONSTRAINT [FK_user_group_privilege_user_privilege_privilege_id] FOREIGN KEY([privilege_id])
REFERENCES  [user_privilege] ([id])
GO
ALTER TABLE  [user_group_privilege] CHECK CONSTRAINT [FK_user_group_privilege_user_privilege_privilege_id]
GO
ALTER TABLE  [user_in_user_group]  WITH CHECK ADD  CONSTRAINT [FK_user_in_user_group_user_group_user_grp_id] FOREIGN KEY([user_grp_id])
REFERENCES  [user_group] ([id])
GO
ALTER TABLE  [user_in_user_group] CHECK CONSTRAINT [FK_user_in_user_group_user_group_user_grp_id]
GO
ALTER TABLE  [user_in_user_group]  WITH CHECK ADD  CONSTRAINT [FK_user_in_user_group_user_user_id] FOREIGN KEY([user_id])
REFERENCES  [user] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [user_in_user_group] CHECK CONSTRAINT [FK_user_in_user_group_user_user_id]
GO
ALTER TABLE  [user_station]  WITH CHECK ADD  CONSTRAINT [FK_user_station_lane_lane_id] FOREIGN KEY([lane_id])
REFERENCES  [lane] ([id])
GO
ALTER TABLE  [user_station] CHECK CONSTRAINT [FK_user_station_lane_lane_id]
GO

ALTER TABLE  [user_station]  WITH CHECK ADD  CONSTRAINT [FK_user_station_user_user_id] FOREIGN KEY([user_id])
REFERENCES  [user] ([id])
GO
ALTER TABLE  [user_station] CHECK CONSTRAINT [FK_user_station_user_user_id]
GO
ALTER TABLE  [user_workday]  WITH CHECK ADD  CONSTRAINT [FK_user_workday_user_user_id] FOREIGN KEY([user_id])
REFERENCES  [user] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [user_workday] CHECK CONSTRAINT [FK_user_workday_user_user_id]
GO
ALTER TABLE  [vehicle_clss_for_inspection_type]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_clss_for_inspection_type_inspection_type_insp_type_id] FOREIGN KEY([insp_type_id])
REFERENCES  [inspection_type] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [vehicle_clss_for_inspection_type] CHECK CONSTRAINT [FK_vehicle_clss_for_inspection_type_inspection_type_insp_type_id]
GO
ALTER TABLE  [vehicle_clss_for_inspection_type]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_clss_for_inspection_type_vehicle_class_NewVehicleClassVehicleClassId] FOREIGN KEY([NewVehicleClassVehicleClassId])
REFERENCES  [vehicle_class] ([id])
GO
ALTER TABLE  [vehicle_clss_for_inspection_type] CHECK CONSTRAINT [FK_vehicle_clss_for_inspection_type_vehicle_class_NewVehicleClassVehicleClassId]
GO
ALTER TABLE  [vehicle_reg_mark_history]  WITH CHECK ADD  CONSTRAINT [FK_vehicle_reg_mark_history_vehicle_vhcl_id] FOREIGN KEY([vhcl_id])
REFERENCES  [vehicle] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [vehicle_reg_mark_history] CHECK CONSTRAINT [FK_vehicle_reg_mark_history_vehicle_vhcl_id]
GO
ALTER TABLE  [watchlist_user_access]  WITH CHECK ADD  CONSTRAINT [FK_watchlist_user_access_watchlist_watchlist_id] FOREIGN KEY([watchlist_id])
REFERENCES  [watchlist] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [watchlist_user_access] CHECK CONSTRAINT [FK_watchlist_user_access_watchlist_watchlist_id]
GO
ALTER TABLE  [watchlist_user_access]  WITH CHECK ADD  CONSTRAINT [FK_watchlist_user_access_user_user_id] FOREIGN KEY([user_id])
REFERENCES  [user] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [watchlist_user_access] CHECK CONSTRAINT [FK_watchlist_user_access_user_user_id]
GO
ALTER TABLE  [watchlist_vehicle]  WITH CHECK ADD  CONSTRAINT [FK_watchlist_vehicle_vehicle_vehicle_id] FOREIGN KEY([vehicle_id])
REFERENCES  [vehicle] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [watchlist_vehicle] CHECK CONSTRAINT [FK_watchlist_vehicle_vehicle_vehicle_id]
GO
ALTER TABLE  [watchlist_vehicle]  WITH CHECK ADD  CONSTRAINT [FK_watchlist_vehicle_watchlist_watchlist_id] FOREIGN KEY([watchlist_id])
REFERENCES  [watchlist] ([id])
ON DELETE CASCADE
GO
ALTER TABLE  [watchlist_vehicle] CHECK CONSTRAINT [FK_watchlist_vehicle_watchlist_watchlist_id]
GO