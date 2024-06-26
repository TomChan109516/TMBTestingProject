USE VICSS_DEV
GO

CREATE TABLE  [exam_code_test_items](
	[id] [nvarchar](40) NOT NULL,
	[inspection_type_id] [nvarchar](40) NOT NULL,
	[test_items_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [exam_code_test_items_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_config_axle_weight]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON

GO

 CREATE TABLE  [test_config_axle_weight](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[awb_measuring_method] [nvarchar](32) NOT NULL,
	[awb_test] [nvarchar](32) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_user_id] [nvarchar](40) NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [test_config_axle_weight_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table  [test_config_brake]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_config_brake](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[num_of_axles] [int] NOT NULL,
	[test_type] [nvarchar](32) NOT NULL,
	[brake_test_method] [nvarchar](32) NOT NULL,
	[service_brake_efficiency_formula] [nvarchar](32) NOT NULL,
	[parking_brake_efficiency_formula] [nvarchar](32) NOT NULL,
	[secondary_brake] [nvarchar](32) NOT NULL,
	[electronic_park_brake_sys] [nvarchar](32) NOT NULL,
	[steering_axle_position] [int] NOT NULL,
	[pull_parking_brake_in_advance] [nvarchar](32) NOT NULL,
	[position_dual_tri_axle] [nvarchar](32) NULL,
	[separate_secondary_brake_test] [nvarchar](32) NOT NULL,
	[secondary_brake_efficiency_formula] [nvarchar](32) NOT NULL,
	[service_brake] [nvarchar](4) NULL,
	[parking_brake] [nvarchar](4) NULL,
	[tb_parking] [nvarchar](4) NOT NULL,
	[brake_system] [nvarchar](32) NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_user_id] [nvarchar](40) NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [test_config_brake_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_config_exhaust]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_config_exhaust](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[air_intake_system] [nvarchar](32) NOT NULL,
	[propulsion] [nvarchar](32) NOT NULL,
	[pgvw] [nvarchar](32) NOT NULL,
	[num_of_axles] [int] NOT NULL,
	[hsu_limit] [int] NOT NULL,
	[rpm_limit] [int] NOT NULL,
	[idle_detection_time] [int] NOT NULL,
	[high_idel_detection_time] [int] NOT NULL,
	[num_fat_test] [int] NOT NULL,
	[max_rpm] [int] NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_user_id] [nvarchar](40) NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [test_config_exhaust_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_config_headlamp]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_config_headlamp](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[num_headlamp] [nvarchar](32) NOT NULL,
	[main_beam_adjustable] [nvarchar](32) NOT NULL,
	[headlight_measuring_method] [nvarchar](32) NOT NULL,
	[steering_position] [nvarchar](32) NOT NULL,
	[left_main_lamp] [bit] NOT NULL,
	[right_main_lamp] [bit] NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_user_id] [nvarchar](40) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
 CONSTRAINT [test_config_headlamp_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_config_ohm]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_config_ohm](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[ohm_measuring_method] [int] NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_user_id] [nvarchar](40) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
 CONSTRAINT [test_config_ohm_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_config_speedometer]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_config_speedometer](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[speed_setting] [int] NOT NULL,
	[speed_test_mode] [nvarchar](1) NOT NULL,
	[propulsion] [nvarchar](4) NOT NULL,
	[wheel_test_type] [nvarchar](1) NOT NULL,
	[mileage_seg_first] [int] NOT NULL,
	[mileage_seg_second] [int] NOT NULL,
	[mileage_seg_third] [int] NOT NULL,
	[mileage_seg_forth] [int] NOT NULL,
	[speed_limit_device] [bit] NOT NULL,
	[speedometer_test] [bit] NOT NULL,
	[speed_display_device_test] [bit] NOT NULL,
	[taximeter_test] [bit] NOT NULL,
	[long_distance_test] [bit] NOT NULL,
	[anti_tempering] [bit] NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_user_id] [nvarchar](40) NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [test_config_speedometer_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_config_taximeter]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_config_taximeter](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[speed_setting] [int] NOT NULL,
	[speed_test_mode] [nvarchar](1) NOT NULL,
	[propulsion] [nvarchar](4) NOT NULL,
	[wheel_test_type] [nvarchar](1) NOT NULL,
	[mileage_seg_first] [int] NOT NULL,
	[mileage_seg_second] [int] NOT NULL,
	[mileage_seg_third] [int] NOT NULL,
	[mileage_seg_forth] [int] NOT NULL,
	[speed_limit_device] [bit] NOT NULL,
	[speedometer_test] [bit] NOT NULL,
	[speed_display_device_test] [bit] NOT NULL,
	[taximeter_test] [bit] NOT NULL,
	[long_distance_test] [bit] NOT NULL,
	[anti_tempering] [bit] NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_user_id] [nvarchar](40) NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [test_config_taximeter_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_result_brake]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_result_brake](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[weight_l_axle1] [nvarchar](50) NULL,
	[weight_l_axle2] [nvarchar](50) NULL,
	[weight_l_axle3] [nvarchar](50) NULL,
	[weight_l_axle4] [nvarchar](50) NULL,
	[weight_l_axle5] [nvarchar](50) NULL,
	[weight_l_axle6] [nvarchar](50) NULL,
	[weight_l_axle7] [nvarchar](50) NULL,
	[weight_l_axle8] [nvarchar](50) NULL,
	[weight_r_axle1] [nvarchar](50) NULL,
	[weight_r_axle2] [nvarchar](50) NULL,
	[weight_r_axle3] [nvarchar](50) NULL,
	[weight_r_axle4] [nvarchar](50) NULL,
	[weight_r_axle5] [nvarchar](50) NULL,
	[weight_r_axle6] [nvarchar](50) NULL,
	[weight_r_axle7] [nvarchar](50) NULL,
	[weight_r_axle8] [nvarchar](50) NULL,
	[brake_l_axle1] [nvarchar](50) NULL,
	[brake_l_axle2] [nvarchar](50) NULL,
	[brake_l_axle3] [nvarchar](50) NULL,
	[brake_l_axle4] [nvarchar](50) NULL,
	[brake_l_axle5] [nvarchar](50) NULL,
	[brake_l_axle6] [nvarchar](50) NULL,
	[brake_l_axle7] [nvarchar](50) NULL,
	[brake_l_axle8] [nvarchar](50) NULL,
	[brake_r_axle1] [nvarchar](50) NULL,
	[brake_r_axle2] [nvarchar](50) NULL,
	[brake_r_axle3] [nvarchar](50) NULL,
	[brake_r_axle4] [nvarchar](50) NULL,
	[brake_r_axle5] [nvarchar](50) NULL,
	[brake_r_axle6] [nvarchar](50) NULL,
	[brake_r_axle7] [nvarchar](50) NULL,
	[brake_r_axle8] [nvarchar](50) NULL,
	[brake_imb_axle1] [nvarchar](50) NULL,
	[brake_imb_axle2] [nvarchar](50) NULL,
	[brake_imb_axle3] [nvarchar](50) NULL,
	[brake_imb_axle4] [nvarchar](50) NULL,
	[brake_imb_axle5] [nvarchar](50) NULL,
	[brake_imb_axle6] [nvarchar](50) NULL,
	[brake_imb_axle7] [nvarchar](50) NULL,
	[brake_imb_axle8] [nvarchar](50) NULL,
	[second_brake_l_axle1] [nvarchar](50) NULL,
	[second_brake_l_axle2] [nvarchar](50) NULL,
	[second_brake_l_axle3] [nvarchar](50) NULL,
	[second_brake_l_axle4] [nvarchar](50) NULL,
	[second_brake_l_axle5] [nvarchar](50) NULL,
	[second_brake_l_axle6] [nvarchar](50) NULL,
	[second_brake_l_axle7] [nvarchar](50) NULL,
	[second_brake_l_axle8] [nvarchar](50) NULL,
	[second_brake_r_axle1] [nvarchar](50) NULL,
	[second_brake_r_axle2] [nvarchar](50) NULL,
	[second_brake_r_axle3] [nvarchar](50) NULL,
	[second_brake_r_axle4] [nvarchar](50) NULL,
	[second_brake_r_axle5] [nvarchar](50) NULL,
	[second_brake_r_axle6] [nvarchar](50) NULL,
	[second_brake_r_axle7] [nvarchar](50) NULL,
	[second_brake_r_axle8] [nvarchar](50) NULL,
	[parking_brake_l_axle1] [nvarchar](50) NULL,
	[parking_brake_l_axle2] [nvarchar](50) NULL,
	[parking_brake_l_axle3] [nvarchar](50) NULL,
	[parking_brake_l_axle4] [nvarchar](50) NULL,
	[parking_brake_l_axle5] [nvarchar](50) NULL,
	[parking_brake_l_axle6] [nvarchar](50) NULL,
	[parking_brake_l_axle7] [nvarchar](50) NULL,
	[parking_brake_l_axle8] [nvarchar](50) NULL,
	[parking_brake_r_axle1] [nvarchar](50) NULL,
	[parking_brake_r_axle2] [nvarchar](50) NULL,
	[parking_brake_r_axle3] [nvarchar](50) NULL,
	[parking_brake_r_axle4] [nvarchar](50) NULL,
	[parking_brake_r_axle5] [nvarchar](50) NULL,
	[parking_brake_r_axle6] [nvarchar](50) NULL,
	[parking_brake_r_axle7] [nvarchar](50) NULL,
	[parking_brake_r_axle8] [nvarchar](50) NULL,
	[parking_brake_imb_axle1] [nvarchar](50) NULL,
	[parking_brake_imb_axle2] [nvarchar](50) NULL,
	[parking_brake_imb_axle3] [nvarchar](50) NULL,
	[parking_brake_imb_axle4] [nvarchar](50) NULL,
	[parking_brake_imb_axle5] [nvarchar](50) NULL,
	[parking_brake_imb_axle6] [nvarchar](50) NULL,
	[parking_brake_imb_axle7] [nvarchar](50) NULL,
	[parking_brake_imb_axle8] [nvarchar](50) NULL,
	[service_brake] [numeric](4, 2) NOT NULL,
	[service_brake_efficiency] [numeric](4, 2) NOT NULL,
	[secondary_brake] [numeric](4, 2) NOT NULL,
	[secondary_brake_efficiency] [numeric](4, 2) NOT NULL,
	[parking_brake] [numeric](4, 2) NOT NULL,
	[parking_brake_efficiency] [numeric](4, 2) NOT NULL,
	[result] [nvarchar](1) NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
 CONSTRAINT [test_result_brake_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_result_exhaust]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_result_exhaust](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[petrol_ind] [bit] NOT NULL,
	[CO_idle] [int] NULL,
	[CO_high_idle] [int] NULL,
	[HC_idle] [int] NULL,
	[HC_high_idle] [int] NULL,
	[CO2_idle] [int] NULL,
	[CO2_high_idle] [int] NULL,
	[O2_idle] [int] NULL,
	[O2_high_idle] [int] NULL,
	[NO_idle] [int] NULL,
	[NO_high_idle] [int] NULL,
	[lambda_high_idle] [int] NULL,
	[hsu_1] [int] NULL,
	[hsu_2] [int] NULL,
	[hsu_3] [int] NULL,
	[hsu_4] [int] NULL,
	[hsu_5] [int] NULL,
	[hsu_6] [int] NULL,
	[hsu_7] [int] NULL,
	[hsu_8] [int] NULL,
	[hsu_9] [int] NULL,
	[hsu_10] [int] NULL,
	[hsu_avg] [int] NULL,
	[rpm_1] [int] NULL,
	[rpm_2] [int] NULL,
	[rpm_3] [int] NULL,
	[rpm_4] [int] NULL,
	[rpm_5] [int] NULL,
	[rpm_6] [int] NULL,
	[rpm_7] [int] NULL,
	[rpm_8] [int] NULL,
	[rpm_9] [int] NULL,
	[rpm_10] [int] NULL,
	[rpm_avg] [int] NULL,
	[result] [nvarchar](1) NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
	[dyno_ind] [bit] NOT NULL,
 CONSTRAINT [test_result_exhaust_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_result_speedometer]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_result_speedometer](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[testing_speed] [int] NOT NULL,
	[measured_speed] [int] NOT NULL,
	[result] [nvarchar](1) NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
 CONSTRAINT [test_result_speedometer_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_result_taximeter]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_result_taximeter](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[test_1] [int] NOT NULL,
	[test_2] [int] NOT NULL,
	[test_3] [int] NOT NULL,
	[test_4] [int] NOT NULL,
	[waiting_time_result] [nvarchar](1) NOT NULL,
	[long_distance_test_result] [nvarchar](1) NOT NULL,
	[anti_tampering_result] [nvarchar](1) NOT NULL,
	[result] [nvarchar](1) NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
	[dyno_ind] [bit] NOT NULL,
 CONSTRAINT [test_result_taximeter_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test_result_undercarriage]    Script Date: 4/1/2024 4:36:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE  [test_result_undercarriage](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[num_fixed_axles] [int] NULL,
	[num_retract_axles] [int] NULL,
	[num_total_axles] [int] NULL,
	[retract_axles_pos] [nvarchar](1) NULL,
	[brake_system_test_level] [nvarchar](8) NULL,
	[brake_system_test_result] [nvarchar](1) NULL,
	[chassis_structure_test_level] [nvarchar](8) NULL,
	[chassis_structure_test_result] [nvarchar](1) NULL,
	[driver_cab_test_level] [nvarchar](8) NULL,
	[driver_cab_test_result] [nvarchar](1) NULL,
	[eletrical_system_test_level] [nvarchar](8) NULL,
	[eletrical_system_test_result] [nvarchar](1) NULL,
	[engine_test_level] [nvarchar](8) NULL,
	[engine_test_result] [nvarchar](1) NULL,
	[exhaust_attachment_test_level] [nvarchar](8) NULL,
	[exhaust_attachment_test_result] [nvarchar](1) NULL,
	[fuel_system_test_level] [nvarchar](8) NULL,
	[fuel_system_test_result] [nvarchar](1) NULL,
	[other_test_level] [nvarchar](8) NULL,
	[other_test_result] [nvarchar](1) NULL,
	[steering_attachment_test_level] [nvarchar](8) NULL,
	[steering_attachment_test_result] [nvarchar](1) NULL,
	[suspension_system_test_level] [nvarchar](8) NULL,
	[suspension_system_test_result] [nvarchar](1) NULL,
	[tyre_test_level] [nvarchar](8) NULL,
	[tyre_test_result] [nvarchar](1) NULL,
	[vehicle_equipment_test_level] [nvarchar](8) NULL,
	[vehicle_equipment_test_result] [nvarchar](1) NULL,
	[wheel_alignment_test_level] [nvarchar](8) NULL,
	[wheel_alignment_test_result] [nvarchar](1) NULL,
	[wheel_test_level] [nvarchar](8) NULL,
	[wheel_test_result] [nvarchar](1) NULL,
	[wheelguard_test_level] [nvarchar](8) NULL,
	[wheelguard_test_result] [nvarchar](1) NULL,
	[result] [nvarchar](1) NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
 CONSTRAINT [test_result_undercarriage_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


ALTER TABLE  [exam_code_test_items]  WITH CHECK ADD FOREIGN KEY([inspection_type_id])
REFERENCES  [inspection_type] ([id])
GO
ALTER TABLE  [exam_code_test_items]  WITH CHECK ADD FOREIGN KEY([test_items_id])
REFERENCES  [test_items] ([id])
GO
ALTER TABLE  [test_config_axle_weight]  WITH CHECK ADD  CONSTRAINT [FK_test_config_axle_weight_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_config_axle_weight] CHECK CONSTRAINT [FK_test_config_axle_weight_test]
GO
ALTER TABLE  [test_config_axle_weight]  WITH CHECK ADD  CONSTRAINT [FK_test_config_axle_weight_vehicle] FOREIGN KEY([vhcl_id])
REFERENCES  [vehicle] ([id])
GO
ALTER TABLE  [test_config_axle_weight] CHECK CONSTRAINT [FK_test_config_axle_weight_vehicle]
GO
ALTER TABLE  [test_config_brake]  WITH CHECK ADD  CONSTRAINT [FK_test_config_brake_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_config_brake] CHECK CONSTRAINT [FK_test_config_brake_test]
GO
ALTER TABLE  [test_config_brake]  WITH CHECK ADD  CONSTRAINT [FK_test_config_brake_vehicle] FOREIGN KEY([vhcl_id])
REFERENCES  [vehicle] ([id])
GO
ALTER TABLE  [test_config_brake] CHECK CONSTRAINT [FK_test_config_brake_vehicle]
GO
ALTER TABLE  [test_config_exhaust]  WITH CHECK ADD  CONSTRAINT [FK_test_config_exhaust_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_config_exhaust] CHECK CONSTRAINT [FK_test_config_exhaust_test]
GO
ALTER TABLE  [test_config_exhaust]  WITH CHECK ADD  CONSTRAINT [FK_test_config_exhaust_vehicle] FOREIGN KEY([vhcl_id])
REFERENCES  [vehicle] ([id])
GO
ALTER TABLE  [test_config_exhaust] CHECK CONSTRAINT [FK_test_config_exhaust_vehicle]
GO
ALTER TABLE  [test_config_headlamp]  WITH CHECK ADD  CONSTRAINT [FK_test_config_headlamp_test_id] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_config_headlamp] CHECK CONSTRAINT [FK_test_config_headlamp_test_id]
GO
ALTER TABLE  [test_config_headlamp]  WITH CHECK ADD  CONSTRAINT [FK_test_config_headlamp_vehicle_vhcl_id] FOREIGN KEY([vhcl_id])
REFERENCES  [vehicle] ([id])
GO
ALTER TABLE  [test_config_headlamp] CHECK CONSTRAINT [FK_test_config_headlamp_vehicle_vhcl_id]
GO
ALTER TABLE  [test_config_ohm]  WITH CHECK ADD  CONSTRAINT [FK_test_config_ohm_test_id] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_config_ohm] CHECK CONSTRAINT [FK_test_config_ohm_test_id]
GO
ALTER TABLE  [test_config_ohm]  WITH CHECK ADD  CONSTRAINT [FK_test_config_ohm_vehicle_id] FOREIGN KEY([vhcl_id])
REFERENCES  [vehicle] ([id])
GO
ALTER TABLE  [test_config_ohm] CHECK CONSTRAINT [FK_test_config_ohm_vehicle_id]
GO
ALTER TABLE  [test_config_speedometer]  WITH CHECK ADD  CONSTRAINT [FK_test_config_speedometer_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_config_speedometer] CHECK CONSTRAINT [FK_test_config_speedometer_test]
GO
ALTER TABLE  [test_config_speedometer]  WITH CHECK ADD  CONSTRAINT [FK_test_config_speedometer_vehicle] FOREIGN KEY([vhcl_id])
REFERENCES  [vehicle] ([id])
GO
ALTER TABLE  [test_config_speedometer] CHECK CONSTRAINT [FK_test_config_speedometer_vehicle]
GO
ALTER TABLE  [test_config_taximeter]  WITH CHECK ADD  CONSTRAINT [FK_test_config_taximeter_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_config_taximeter] CHECK CONSTRAINT [FK_test_config_taximeter_test]
GO
ALTER TABLE  [test_config_taximeter]  WITH CHECK ADD  CONSTRAINT [FK_test_config_taximeter_vehicle] FOREIGN KEY([vhcl_id])
REFERENCES  [vehicle] ([id])
GO
ALTER TABLE  [test_config_taximeter] CHECK CONSTRAINT [FK_test_config_taximeter_vehicle]
GO
ALTER TABLE  [test_result_brake]  WITH CHECK ADD  CONSTRAINT [test_result_brake_FK_skip_test_reason_id_skip_test_reason] FOREIGN KEY([skip_test_reason_id])
REFERENCES  [skip_test_reason] ([id])
GO
ALTER TABLE  [test_result_brake] CHECK CONSTRAINT [test_result_brake_FK_skip_test_reason_id_skip_test_reason]
GO
ALTER TABLE  [test_result_brake]  WITH CHECK ADD  CONSTRAINT [test_result_brake_FK_test_id_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_result_brake] CHECK CONSTRAINT [test_result_brake_FK_test_id_test]
GO
ALTER TABLE  [test_result_exhaust]  WITH CHECK ADD  CONSTRAINT [test_result_exhaust_FK_skip_test_reason_id_skip_test_reason] FOREIGN KEY([skip_test_reason_id])
REFERENCES  [skip_test_reason] ([id])
GO
ALTER TABLE  [test_result_exhaust] CHECK CONSTRAINT [test_result_exhaust_FK_skip_test_reason_id_skip_test_reason]
GO
ALTER TABLE  [test_result_exhaust]  WITH CHECK ADD  CONSTRAINT [test_result_exhaust_FK_test_id_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_result_exhaust] CHECK CONSTRAINT [test_result_exhaust_FK_test_id_test]
GO
ALTER TABLE  [test_result_speedometer]  WITH CHECK ADD  CONSTRAINT [test_result_speedometer_FK_skip_test_reason_id_skip_test_reason] FOREIGN KEY([skip_test_reason_id])
REFERENCES  [skip_test_reason] ([id])
GO
ALTER TABLE  [test_result_speedometer] CHECK CONSTRAINT [test_result_speedometer_FK_skip_test_reason_id_skip_test_reason]
GO
ALTER TABLE  [test_result_speedometer]  WITH CHECK ADD  CONSTRAINT [test_result_speedometer_FK_test_id_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_result_speedometer] CHECK CONSTRAINT [test_result_speedometer_FK_test_id_test]
GO
ALTER TABLE  [test_result_taximeter]  WITH CHECK ADD  CONSTRAINT [test_result_taximeter_FK_skip_test_reason_id_skip_test_reason] FOREIGN KEY([skip_test_reason_id])
REFERENCES  [skip_test_reason] ([id])
GO
ALTER TABLE  [test_result_taximeter] CHECK CONSTRAINT [test_result_taximeter_FK_skip_test_reason_id_skip_test_reason]
GO
ALTER TABLE  [test_result_taximeter]  WITH CHECK ADD  CONSTRAINT [test_result_taximeter_FK_test_id_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_result_taximeter] CHECK CONSTRAINT [test_result_taximeter_FK_test_id_test]
GO
ALTER TABLE  [test_result_undercarriage]  WITH CHECK ADD  CONSTRAINT [test_result_undercarriage_FK_skip_test_reason_id_skip_test_reason] FOREIGN KEY([skip_test_reason_id])
REFERENCES  [skip_test_reason] ([id])
GO
ALTER TABLE  [test_result_undercarriage] CHECK CONSTRAINT [test_result_undercarriage_FK_skip_test_reason_id_skip_test_reason]
GO
ALTER TABLE  [test_result_undercarriage]  WITH CHECK ADD  CONSTRAINT [test_result_undercarriage_FK_test_id_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_result_undercarriage] CHECK CONSTRAINT [test_result_undercarriage_FK_test_id_test]
GO
