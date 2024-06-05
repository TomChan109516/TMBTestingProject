--=============================================================================================================================
-- Log off from SDADMIN User and Connect with User VICSS_DEV_OWNER and Execute the following Scripts in VICSS_DEV Database 
--==============================================================================================================================

USE [VICSS_DEV]
GO

/****** Object:  Table [VICSS_DEV_OWNER].[appointment_reschedule_history]     ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [appointment_reschedule_history](
	[id] [nvarchar](40) NOT NULL,
	[appt_id] [nvarchar](40) NOT NULL,
	[ctr_id] [nvarchar](40) NOT NULL,
	[lane_id] [nvarchar](40) NOT NULL,
	[lane_timeslot_id] [nvarchar](40) NOT NULL,
	[appt_timeslot_seq_num] [int] NULL,
	[exact_schd_insp_datetime] [datetime] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_appointment_reschedule_history] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


/****** Object:  Table [VICSS_DEV_OWNER].[attachments]     ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [attachments](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
	[appt_id] [nvarchar](40) NOT NULL,
	[ctr_id] [nvarchar](40) NOT NULL,
	[file_name] [nvarchar](8) NOT NULL,
	[file_url] [nvarchar](128) NOT NULL,
	[description] [text] NULL,
	[add_message] [text] NULL,
	[upload_user_id] [nvarchar](40) NOT NULL,
	[upload_datetime] [datetime] NOT NULL,
 CONSTRAINT [PK_attachments] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

/****** Object:  Table [VICSS_DEV_OWNER].[centre_holiday]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [centre_holiday](
	[id] [nvarchar](40) NOT NULL,
	[ctr_id] [nvarchar](40) NOT NULL,
	[hdy_date] [datetime] NOT NULL,
	[hdy_name] [nvarchar](100) NOT NULL,
	[hdy_chi_name] [nvarchar](100) NULL,
	[all_day_hdy] [nvarchar](1) NOT NULL,
	[hdy_start_time] [datetime] NULL,
	[hdy_end_time] [datetime] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_centre_holiday] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


/****** Object:  Table [VICSS_DEV_OWNER].[country]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [country](
	[id] [nvarchar](40) NOT NULL,
	[cntry_code] [nvarchar](3) NOT NULL,
	[cntry_name] [nvarchar](30) NOT NULL,
	[description] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_country] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_country_cntry_code] UNIQUE NONCLUSTERED 
(
	[cntry_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


/****** Object:  Table [VICSS_DEV_OWNER].[dyno_record]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dyno_record](
	[id] [nvarchar](40) NOT NULL,
	[dyno_room_id] [nvarchar](40) NOT NULL,
	[start] [datetime] NOT NULL,
	[end] [datetime] NOT NULL,
	[dyno_schd_desp] [text] NOT NULL,
 CONSTRAINT [PK_dyno_record] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [VICSS_DEV_OWNER].[dyno_room]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dyno_room](
	[id] [nvarchar](40) NOT NULL,
	[dyno_room_name] [nvarchar](40) NOT NULL,
	[dyno_room_desp] [text] NOT NULL,
	[dyno_room_actv_ind] [nvarchar](1) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dyno_room] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [VICSS_DEV_OWNER].[inspection]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [inspection](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
	[lane_id] [nvarchar](40) NOT NULL,
	[second_lane_id] [nvarchar](40) NOT NULL,
	[dyno_room_id] [nvarchar](40) NULL,
	[dyno_test_select_type] [nvarchar](1) NULL,
	[insp_add_info_text] [text] NULL,
	[insp_contact_name] [nvarchar](50) NULL,
	[insp_contact_num] [nvarchar](20) NULL,
	[insp_status] [nvarchar](20) NOT NULL,
	[insp_start_datetime] [datetime] NOT NULL,
	[insp_end_datetime] [datetime] NOT NULL,
	[insp_end_result] [nvarchar](1) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_inspection] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [inspection_exam_code]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [inspection_exam_code](
	[id] [nvarchar](40) NOT NULL,
	[insp_id] [nvarchar](40) NOT NULL,
	[exam_code] [nvarchar](16) NOT NULL,
 CONSTRAINT [PK_inspection_exam_code] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [inspection_schedule]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [inspection_schedule](
	[id] [nvarchar](40) NOT NULL,
	[ctr_id] [nvarchar](40) NOT NULL,
	[effective_period_start] [datetime] NOT NULL,
	[effective_period_end] [datetime] NOT NULL,
	[action] [nvarchar](1) NOT NULL,
	[description] [nvarchar](max) NOT NULL,
	[type] [nvarchar](16) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
	[bi_level_code] [nvarchar](5) NOT NULL,
 CONSTRAINT [PK_inspection_schedule] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [inspection_schedule_detail]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [inspection_schedule_detail](
	[id] [nvarchar](40) NOT NULL,
	[insp_schedule_id] [nvarchar](40) NOT NULL,
	[physical_lane_id] [nvarchar](40) NOT NULL,
	[virtual_lane_id] [nvarchar](40) NULL,
	[weekday] [nvarchar](16) NOT NULL,
	[timeslot] [nvarchar](16) NOT NULL,
	[quota] [int] NOT NULL,
	[reserve_quota] [int] NOT NULL,
	[block] [nvarchar](1) NOT NULL,
	[schedule_type] [nvarchar](16) NOT NULL,
	[day_session_code] [nvarchar](16) NOT NULL,
 CONSTRAINT [PK_inspection_schedule_detail] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [inspection_schedule_examcode]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [inspection_schedule_examcode](
	[id] [nvarchar](40) NOT NULL,
	[insp_schedule_detail_id] [nvarchar](40) NOT NULL,
	[insp_type_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_inspection_schedule_examcode] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [inspection_schedule_vhcl_cls]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [inspection_schedule_vhcl_cls](
	[id] [nvarchar](40) NOT NULL,
	[insp_schedule_detail_id] [nvarchar](40) NOT NULL,
	[vhcl_class_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_inspection_schedule_vhcl_cls] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [inspection_type]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [inspection_type](
	[id] [nvarchar](40) NOT NULL,
	[exam_code] [nvarchar](16) NOT NULL,
	[exam_clss] [nvarchar](16) NOT NULL,
	[insp_type_name] [nvarchar](50) NOT NULL,
	[insp_type_description] [text] NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_inspection_type] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_inspection_type_exam_code] UNIQUE NONCLUSTERED 
(
	[exam_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [lane]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [lane](
	[id] [nvarchar](40) NOT NULL,
	[ctr_id] [nvarchar](40) NOT NULL,
	[lane_name] [nvarchar](50) NOT NULL,
	[lane_type] [nvarchar](10) NOT NULL,
	[lane_description] [text] NOT NULL,
	[lane_actv_ind] [nvarchar](1) NOT NULL,
	[default_capacity] [int] NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_lane] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [lane_avail_insp_type]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [lane_avail_insp_type](
	[id] [nvarchar](40) NOT NULL,
	[lane_id] [nvarchar](40) NOT NULL,
	[insp_type_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_lane_avail_insp_type] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [lane_avail_vehicle]    Script Date: 2/21/2024 7:26:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [lane_avail_vehicle](
	[id] [nvarchar](40) NOT NULL,
	[lane_id] [nvarchar](40) NOT NULL,
	[vhcl_type_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_lane_avail_vehicle] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [LaneTimeslot]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [LaneTimeslot](
	[id] [nvarchar](40) NOT NULL,
	[lane_id] [nvarchar](40) NOT NULL,
	[start] [datetime] NOT NULL,
	[end] [datetime] NOT NULL,
	[exam_schd_desp] [text] NOT NULL,
	[capacity] [int] NOT NULL,
 CONSTRAINT [PK_LaneTimeslot] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [Appointment]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [Appointment](
	[id] [nvarchar](40) NOT NULL,
	[user_id] [nvarchar](40) NOT NULL,
	[ctr_id] [nvarchar](40) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
	[lane_id] [nvarchar](40) NOT NULL,
	[lane_timeslot_id] [nvarchar](40) NOT NULL,
	[insp_id] [nvarchar](40) NULL,
	[payment_id] [nvarchar](40) NOT NULL,
	[appt_num] [nvarchar](18) NULL,
	[security_code] [nvarchar](6) NOT NULL,
	[appt_add_info_text] [text] NOT NULL,
	[appt_bill_datetime] [datetime] NULL,
	[appt_confirm_datetime] [datetime] NULL,
	[appt_contact_name] [nvarchar](50) NULL,
	[appt_contact_num] [nvarchar](20) NULL,
	[appt_create_datetime] [datetime] NOT NULL,
	[appt_create_sys_id] [nvarchar](10) NOT NULL,
	[appt_remark_text] [nvarchar](256) NULL,
	[appt_timeslot_seq_num] [int] NULL,
	[appt_status] [nvarchar](10) NOT NULL,
	[exact_schd_insp_datetime] [datetime] NULL,
	[insp_type_id] [nvarchar](40) NOT NULL,
	[insp_datetime] [datetime] NULL,
	[orig_vis_appt_key] [bigint] NULL,
	[recheck_ind] [nvarchar](1) NOT NULL,
	[allow_overbook_ind] [nvarchar](1) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_Appointment] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [centre]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [centre](
	[id] [nvarchar](40) NOT NULL,
	[ctr_code] [nvarchar](4) NOT NULL,
	[ctr_name] [nvarchar](50) NOT NULL,
	[ctr_chi_name] [nvarchar](50) NOT NULL,
	[ctr_addr] [text] NULL,
	[ctr_chi_addr] [text] NULL,
	[ctr_phone1] [nvarchar](15) NULL,
	[ctr_phone2] [nvarchar](15) NULL,
	[ctr_begin_date] [datetime] NOT NULL,
	[ctr_end_date] [datetime] NOT NULL,
	[ctr_mon_oprt_time_start] [nvarchar](4) NOT NULL,
	[ctr_mon_oprt_time_end] [nvarchar](4) NOT NULL,
	[ctr_tue_oprt_time_start] [nvarchar](4) NOT NULL,
	[ctr_tue_oprt_time_end] [nvarchar](4) NOT NULL,
	[ctr_wed_oprt_time_start] [nvarchar](4) NOT NULL,
	[ctr_wed_oprt_time_end] [nvarchar](4) NOT NULL,
	[ctr_thu_oprt_time_start] [nvarchar](4) NOT NULL,
	[ctr_thu_oprt_time_end] [nvarchar](4) NOT NULL,
	[ctr_fri_oprt_time_start] [nvarchar](4) NOT NULL,
	[ctr_fri_oprt_time_end] [nvarchar](4) NOT NULL,
	[ctr_sat_oprt_time_start] [nvarchar](4) NOT NULL,
	[ctr_sat_oprt_time_end] [nvarchar](4) NOT NULL,
	[ctr_sun_oprt_time_start] [nvarchar](4) NOT NULL,
	[ctr_sun_oprt_time_end] [nvarchar](4) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_centre] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [vehicle]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_rec_type_code] [nvarchar](5) NOT NULL,
	[vhcl_valid_id] [nvarchar](9) NULL,
	[vhcl_reg_mark_num] [nvarchar](10) NULL,
	[vhcl_clss_id] [nvarchar](40) NOT NULL,
	[vhcl_form] [nvarchar](1) NULL,
	[vhcl_alert_id] [nvarchar](40) NULL,
	[vhcl_last_allow_appt_date] [datetime] NULL,
	[vhcl_chsss_num] [nvarchar](25) NOT NULL,
	[vhcl_chsss_location] [nvarchar](30) NULL,
	[vin_location] [text] NULL,
	[cntry_id] [nvarchar](40) NULL,
	[vhcl_make_id] [nvarchar](40) NULL,
	[vhcl_mfc_year] [int] NULL,
	[vhcl_num_axle] [int] NULL,
	[vhcl_axle_weight_1] [numeric](6, 2) NULL,
	[vhcl_axle_weight_2] [numeric](6, 2) NULL,
	[vhcl_axle_weight_3] [numeric](6, 2) NULL,
	[vhcl_axle_weight_4] [numeric](6, 2) NULL,
	[vhcl_axle_weight_5] [numeric](6, 2) NULL,
	[vhcl_axle_weight_6] [numeric](6, 2) NULL,
	[vhcl_axle_weight_7] [numeric](6, 2) NULL,
	[vhcl_axle_weight_8] [numeric](6, 2) NULL,
	[vhcl_tyre_size_1] [numeric](6, 2) NULL,
	[vhcl_tyre_size_2] [numeric](6, 2) NULL,
	[vhcl_tyre_size_3] [numeric](6, 2) NULL,
	[vhcl_tyre_size_4] [numeric](6, 2) NULL,
	[vhcl_tyre_size_5] [numeric](6, 2) NULL,
	[vhcl_tyre_size_6] [numeric](6, 2) NULL,
	[vhcl_tyre_size_7] [numeric](6, 2) NULL,
	[vhcl_tyre_size_8] [numeric](6, 2) NULL,
	[vhcl_tyre_size_front] [numeric](6, 2) NULL,
	[vhcl_tyre_size_rear] [numeric](6, 2) NULL,
	[size_l] [numeric](6, 2) NULL,
	[size_w] [numeric](6, 2) NULL,
	[size_h] [numeric](6, 2) NULL,
	[vhcl_wght_code] [numeric](6, 2) NULL,
	[vhcl_pgv_wght] [numeric](6, 2) NULL,
	[vhcl_grs_wght] [numeric](6, 2) NULL,
	[vhcl_lug_wght] [numeric](6, 2) NULL,
	[vhcl_owner_name_chi] [nvarchar](150) NULL,
	[vhcl_owner_name_eng] [nvarchar](150) NULL,
	[vhcl_contact_person] [nvarchar](30) NULL,
	[vhcl_telephone_no] [nvarchar](500) NULL,
	[vhcl_district_code] [nvarchar](30) NULL,
	[vhcl_district_location] [nvarchar](30) NULL,
	[vhcl_district_location_chi_name] [nvarchar](30) NULL,
	[vhcl_sts_id] [nvarchar](40) NULL,
	[vhcl_model_num] [nvarchar](80) NULL,
	[vhcl_model_id] [nvarchar](40) NULL,
	[vhcl_body_type_id] [nvarchar](40) NULL,
	[vhcl_lower_seat_cap_qty] [int] NULL,
	[vhcl_upper_seat_cap_qty] [int] NULL,
	[vhcl_stand_cap_qty] [int] NULL,
	[vhcl_lic_end_date] [datetime] NULL,
	[vhcl_frst_reg_date] [datetime] NULL,
	[vhcl_propulsion] [nvarchar](10) NULL,
	[vhcl_engn_num] [nvarchar](25) NULL,
	[vhcl_engn_type_id] [nvarchar](40) NULL,
	[vhcl_engn_size_qty] [numeric](5, 0) NULL,
	[vhcl_engn_make] [nvarchar](50) NULL,
	[vhcl_service_brake] [nvarchar](50) NULL,
	[vhcl_parking_brake] [nvarchar](50) NULL,
	[vhcl_steering_system] [nvarchar](50) NULL,
	[vhcl_left_hand_strg_ind] [nvarchar](1) NULL,
	[vhcl_type_aprv_num] [nvarchar](40) NULL,
	[vhcl_prmy_color_id] [nvarchar](40) NULL,
	[vhcl_scnd_color_id] [nvarchar](40) NULL,
	[vhcl_cncl_rsn_id] [nvarchar](40) NULL,
	[vhcl_insp_ord_id] [nvarchar](40) NULL,
	[lantau_vhcl_ind] [nvarchar](1) NULL,
	[prvt_road_vhcl_ind] [nvarchar](1) NULL,
	[vhcl_pvrm_trim_text] [nvarchar](8) NULL,
	[vhcl_pvrm_dbl_line_ind] [nvarchar](1) NULL,
	[vhcl_pvrm_line_1_text] [nvarchar](4) NULL,
	[vhcl_pvrm_line_2_text] [nvarchar](4) NULL,
	[vhcl_rate_pwr] [numeric](9, 2) NULL,
	[vhcl_rate_rpm] [numeric](9, 2) NULL,
	[vhcl_max_rpm] [numeric](9, 2) NULL,
	[vhcl_wheel_span] [numeric](9, 2) NULL,
	[vhcl_vico_date] [datetime] NULL,
	[adv_aprv_date] [datetime] NULL,
	[vhcl_cur_rnw_date] [datetime] NULL,
	[vhcl_srvc_annot_text] [nvarchar](4) NULL,
	[vhcl_srvc_rstr_text] [nvarchar](50) NULL,
	[hybd_vhcl_ind] [nvarchar](1) NULL,
	[ce_ref_num] [nvarchar](14) NULL,
	[vhcl_reg_doc_txn_num] [nvarchar](14) NULL,
	[vhcl_psl_list] [nvarchar](16) NULL,
	[vhcl_prm_list] [nvarchar](500) NULL,
	[vhcl_permit_num] [nvarchar](20) NULL,
	[vhcl_vv_num] [nvarchar](20) NULL,
	[vhcl_mve_insp_date] [datetime] NULL,
	[vhcl_rmk_text] [nvarchar](600) NULL,
	[manual_message_eng] [text] NULL,
	[manual_message_chi] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
	[vhcl_type_aprv_ref_num] [nvarchar](40) NULL,
 CONSTRAINT [PK_vehicle] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [watchlist]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [watchlist](
	[id] [nvarchar](40) NOT NULL,
	[watchlist_type] [nvarchar](16) NOT NULL,
	[watchlist_reason_code] [nvarchar](16) NOT NULL,
	[watchlist_reason_text] [text] NOT NULL,
	[watchlist_create_date] [datetime] NOT NULL,
	[trigger_action] [nvarchar](32) NOT NULL,
	[status] [nvarchar](32) NULL,
	[remark] [text] NULL,
	[cncl_reason_text] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_watchlist] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [NotesAndAlerts]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [NotesAndAlerts](
	[NoteId] [int] IDENTITY(1,1) NOT NULL,
	[NoteDesc] [nvarchar](max) NOT NULL,
	[AppointmentNumber] [bigint] NOT NULL,
	[VehicleId] [int] NOT NULL,
	[Date] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_NotesAndAlerts] PRIMARY KEY CLUSTERED 
(
	[NoteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [payment]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [payment](
	[id] [nvarchar](40) NOT NULL,
	[pymt_txn_datetime] [datetime] NULL,
	[pymt_txn_num] [nvarchar](40) NOT NULL,
	[pymt_type_code] [nvarchar](10) NOT NULL,
	[pymt_amount] [numeric](7, 2) NULL,
	[pymt_method] [nvarchar](2) NULL,
	[pymt_status_code] [nvarchar](5) NOT NULL,
	[remark] [text] NULL,
	[ctr_id] [nvarchar](40) NULL,
	[extl_ref_num] [nvarchar](40) NULL,
	[wave_actv_ind] [nvarchar](1) NOT NULL,
	[wave_insp_fee_amt] [numeric](7, 2) NULL,
	[no_fee_appt_ind] [nvarchar](1) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_payment] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [random_check]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [random_check](
	[id] [nvarchar](40) NOT NULL,
	[appt_id] [nvarchar](40) NOT NULL,
	[random_check_config_id] [nvarchar](40) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_random_check] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [random_check_config]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [random_check_config](
	[id] [nvarchar](40) NOT NULL,
	[ctr_id] [nvarchar](40) NOT NULL,
	[name] [nvarchar](32) NOT NULL,
	[percentage] [numeric](3, 2) NOT NULL,
	[min_draw_num] [int] NOT NULL,
	[check_type] [nvarchar](8) NOT NULL,
	[draw_by_section] [nvarchar](1) NOT NULL,
 CONSTRAINT [PK_random_check_config] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [random_check_config_detail]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [random_check_config_detail](
	[id] [nvarchar](40) NOT NULL,
	[random_check_config_id] [nvarchar](40) NOT NULL,
	[vhcl_class] [nvarchar](4) NULL,
	[vhcl_sub_class] [nvarchar](1) NULL,
	[attribute] [nvarchar](32) NULL,
	[exam_code] [nvarchar](16) NOT NULL,
 CONSTRAINT [PK_random_check_config_detail] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [special_event]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [special_event](
	[id] [nvarchar](40) NOT NULL,
	[ctr_id] [nvarchar](40) NOT NULL,
	[spcl_evnt_name] [nvarchar](50) NOT NULL,
	[spcl_evnt_description] [text] NOT NULL,
	[spcl_evnt_start_date] [datetime] NOT NULL,
	[spcl_evnt_start_time] [datetime] NULL,
	[spcl_evnt_end_date] [datetime] NOT NULL,
	[spcl_evnt_end_time] [datetime] NULL,
	[appt_rschd_bgn_date] [datetime] NOT NULL,
	[appt_rschd_end_date] [datetime] NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_special_event] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [special_event_schedule]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [special_event_schedule](
	[id] [nvarchar](40) NOT NULL,
	[special_event_id] [nvarchar](40) NOT NULL,
	[quota] [int] NOT NULL,
 CONSTRAINT [PK_special_event_schedule] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [special_event_schedule_examcode]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [special_event_schedule_examcode](
	[id] [nvarchar](40) NOT NULL,
	[special_event_schedule_id] [nvarchar](40) NOT NULL,
	[insp_type_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_special_event_schedule_examcode] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [special_event_schedule_lane]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [special_event_schedule_lane](
	[id] [nvarchar](40) NOT NULL,
	[special_event_schedule_id] [nvarchar](40) NOT NULL,
	[lane_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_special_event_schedule_lane] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [special_event_schedule_timeslot]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [special_event_schedule_timeslot](
	[id] [nvarchar](40) NOT NULL,
	[special_event_schedule_id] [nvarchar](40) NOT NULL,
	[timeslot] [nvarchar](16) NOT NULL,
 CONSTRAINT [PK_special_event_schedule_timeslot] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [special_event_schedule_vhcl_cls]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [special_event_schedule_vhcl_cls](
	[id] [nvarchar](40) NOT NULL,
	[special_event_schedule_id] [nvarchar](40) NOT NULL,
	[vhcl_class_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_special_event_schedule_vhcl_cls] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [special_event_schedule_weekday]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [special_event_schedule_weekday](
	[id] [nvarchar](40) NOT NULL,
	[special_event_schedule_id] [nvarchar](40) NOT NULL,
	[weekday] [nvarchar](16) NOT NULL,
 CONSTRAINT [PK_special_event_schedule_weekday] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [test]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [test](
	[id] [nvarchar](40) NOT NULL,
	[inspection_id] [nvarchar](40) NOT NULL,
	[station_id] [nvarchar](40) NOT NULL,
	[user_id] [nvarchar](40) NOT NULL,
	[test_type] [nvarchar](16) NOT NULL,
	[mode] [nvarchar](8) NOT NULL,
	[attempt] [int] NOT NULL,
	[test_start_time] [datetime] NULL,
	[test_end_time] [datetime] NULL,
	[skip_reason_code] [nvarchar](16) NULL,
	[skip_approval] [nvarchar](1) NULL,
	[skip_test_follow_up_action] [nvarchar](32) NULL,
	[abort_reason_code] [nvarchar](16) NULL,
	[abort_test_remark] [text] NULL,
	[end_result] [nvarchar](1) NOT NULL,
	[remark] [text] NOT NULL,
 CONSTRAINT [PK_test] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [user]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [user](
	[id] [nvarchar](40) NOT NULL,
	[privilege_id] [nvarchar](40) NOT NULL,
	[ctr_id] [nvarchar](40) NOT NULL,
	[user_ctr_role_bgn_date] [datetime] NOT NULL,
	[user_ctr_role_end_date] [datetime] NOT NULL,
	[user_ctr_role] [nvarchar](32) NOT NULL,
	[user_ctr_role_rmk_text] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [user_auth]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [user_auth](
	[id] [nvarchar](40) NOT NULL,
	[user_id] [nvarchar](40) NOT NULL,
	[user_name] [nvarchar](40) NOT NULL,
	[pwd_hash_text] [text] NOT NULL,
	[acct_sts_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_user_auth] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [user_group]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [user_group](
	[id] [nvarchar](40) NOT NULL,
	[privilege_id] [nvarchar](40) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_user_group] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [user_group_privilege]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [user_group_privilege](
	[id] [nvarchar](40) NOT NULL,
	[privilege_id] [nvarchar](40) NOT NULL,
	[user_group_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_user_group_privilege] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [user_in_user_group]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [user_in_user_group](
	[id] [nvarchar](40) NOT NULL,
	[user_id] [nvarchar](40) NOT NULL,
	[user_grp_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_user_in_user_group] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [user_privilege]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [user_privilege](
	[id] [nvarchar](40) NOT NULL,
	[privilege_level] [int] NOT NULL,
	[privilege_desp] [text] NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_user_privilege] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [user_role]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [user_role](
	[id] [nvarchar](40) NOT NULL,
	[role_name] [int] NOT NULL,
	[role_desp] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_user_role] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [user_station]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [user_station](
	[id] [nvarchar](40) NOT NULL,
	[user_id] [nvarchar](40) NOT NULL,
	[lane_id] [nvarchar](40) NOT NULL,
	[station_id] [nvarchar](40) NOT NULL,
	[assignment_start_datetime] [datetime] NOT NULL,
	[assignment_end_datetime] [datetime] NOT NULL,
 CONSTRAINT [PK_user_station] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [user_workday]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [user_workday](
	[id] [nvarchar](40) NOT NULL,
	[user_id] [nvarchar](40) NOT NULL,
	[user_duty_start_time_mon] [nvarchar](4) NOT NULL,
	[user_duty_end_time_mon] [nvarchar](4) NOT NULL,
	[user_duty_start_time_tue] [nvarchar](4) NOT NULL,
	[user_duty_end_time_tue] [nvarchar](4) NOT NULL,
	[user_duty_start_time_wed] [nvarchar](4) NOT NULL,
	[user_duty_end_time_wed] [nvarchar](4) NOT NULL,
	[user_duty_start_time_thu] [nvarchar](4) NOT NULL,
	[user_duty_end_time_thu] [nvarchar](4) NOT NULL,
	[user_duty_start_time_fri] [nvarchar](4) NOT NULL,
	[user_duty_end_time_fri] [nvarchar](4) NOT NULL,
	[user_duty_start_time_sat] [nvarchar](4) NOT NULL,
	[user_duty_end_time_sat] [nvarchar](4) NOT NULL,
	[user_duty_start_time_sun] [nvarchar](4) NOT NULL,
	[user_duty_end_time_sun] [nvarchar](4) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_user_workday] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [valid_vehicle]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [valid_vehicle](
	[id] [nvarchar](40) NOT NULL,
	[date_update] [nvarchar](10) NOT NULL,
	[vhcl_valid_id] [nvarchar](9) NOT NULL,
	[reg_mark] [nvarchar](8) NOT NULL,
	[vhcl_clss_code] [nvarchar](3) NOT NULL,
	[cntry_code] [nvarchar](3) NOT NULL,
	[vhcl_make_id] [nvarchar](3) NOT NULL,
	[vhcl_chsss_num] [nvarchar](25) NOT NULL,
	[vhcl_mfc_year] [int] NOT NULL,
	[vhcl_axle_1_wght] [numeric](5, 2) NOT NULL,
	[vhcl_axle_2_wght] [numeric](5, 2) NOT NULL,
	[vhcl_axle_3_wght] [numeric](5, 2) NOT NULL,
	[vhcl_axle_4_wght] [numeric](5, 2) NOT NULL,
	[vhcl_axle_5_wght] [numeric](5, 2) NOT NULL,
	[vhcl_axle_6_wght] [numeric](5, 2) NOT NULL,
	[vhcl_axle_7_wght] [numeric](5, 2) NOT NULL,
	[vhcl_pgv_wght] [numeric](5, 2) NOT NULL,
	[vhcl_grs_wght] [numeric](5, 2) NOT NULL,
	[vhcl_lug_wght] [numeric](5, 2) NOT NULL,
	[vhcl_ownr_name] [nvarchar](150) NOT NULL,
	[vhcl_ownr_chi_name] [nvarchar](150) NOT NULL,
	[vhcl_sts_code] [nvarchar](1) NOT NULL,
	[vhcl_model_num] [nvarchar](80) NOT NULL,
	[vhcl_model_code] [nvarchar](100) NOT NULL,
	[vhcl_body_type_code] [nvarchar](2) NOT NULL,
	[vhcl_lower_seat_cap_qty] [int] NOT NULL,
	[vhcl_upper_seat_cap_qty] [int] NOT NULL,
	[vhcl_stand_cap_qty] [int] NOT NULL,
	[vhcl_lic_end_date] [datetime] NOT NULL,
	[vhcl_frst_reg_date] [datetime] NOT NULL,
	[vhcl_engn_num] [nvarchar](25) NOT NULL,
	[vhcl_engn_type_code] [nvarchar](1) NOT NULL,
	[vhcl_engn_size_qty] [numeric](9, 0) NOT NULL,
	[vhcl_left_hand_strg_ind] [nvarchar](1) NOT NULL,
	[vhcl_type_aprv_num] [nvarchar](40) NOT NULL,
	[vhcl_prmy_color_code] [nvarchar](1) NOT NULL,
	[vhcl_scnd_color_code] [nvarchar](1) NOT NULL,
	[vhcl_cncl_rsn_code] [nvarchar](1) NOT NULL,
	[vhcl_insp_ord_code] [nvarchar](2) NOT NULL,
	[lantau_vhcl_ind] [nvarchar](1) NOT NULL,
	[prvt_road_vhcl_ind] [nvarchar](1) NOT NULL,
	[vhcl_pvrm_trim_text] [nvarchar](8) NOT NULL,
	[vhcl_pvrm_dbl_line_ind] [nvarchar](1) NOT NULL,
	[vhcl_pvrm_line_1_text] [nvarchar](4) NOT NULL,
	[vhcl_pvrm_line_2_text] [nvarchar](4) NOT NULL,
	[vhcl_rate_pwr] [numeric](7, 2) NOT NULL,
	[vhcl_vico_date] [datetime] NOT NULL,
	[adv_aprv_date] [datetime] NOT NULL,
	[vhcl_cur_rnw_date] [datetime] NOT NULL,
	[a03R_sub_type_ind] [nvarchar](1) NOT NULL,
	[vhcl_srvc_rstr_text] [nvarchar](50) NOT NULL,
	[vhcl_psl_list] [nvarchar](500) NOT NULL,
	[vhcl_prm_list] [nvarchar](600) NOT NULL,
	[hybd_vhcl_ind] [nvarchar](1) NOT NULL,
	[ce_ref_num] [nvarchar](14) NOT NULL,
	[vhcl_reg_doc_txn_num] [nvarchar](8) NOT NULL,
 CONSTRAINT [PK_valid_vehicle] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_alert]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_alert](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_alert_code] [nvarchar](8) NOT NULL,
	[vhcl_alert_name] [nvarchar](30) NOT NULL,
	[description] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vehicle_alert] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_vehicle_alert_vhcl_alert_code] UNIQUE NONCLUSTERED 
(
	[vhcl_alert_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_cancel_reason]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_cancel_reason](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_cncl_rsn_code] [nvarchar](1) NOT NULL,
	[vhcl_cncl_rsn_name] [nvarchar](30) NOT NULL,
	[description] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vehicle_cancel_reason] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_vehicle_cancel_reason_vhcl_cncl_rsn_code] UNIQUE NONCLUSTERED 
(
	[vhcl_cncl_rsn_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_class]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_class](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_clss_code] [nvarchar](4) NOT NULL,
	[vhcl_sbclss_code] [nvarchar](1) NOT NULL,
	[vhcl_clss_name] [nvarchar](30) NOT NULL,
	[description] [text] NULL,
	[vhcl_min_pgv_weight] [numeric](6, 2) NOT NULL,
	[vhcl_max_pgv_weight] [numeric](6, 2) NOT NULL,
	[vhcl_body_type_code] [nvarchar](2) NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vehicle_class] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_clss_for_inspection_type]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_clss_for_inspection_type](
	[id] [nvarchar](40) NOT NULL,
	[insp_type_id] [nvarchar](40) NOT NULL,
	[vhcl_clss_id] [nvarchar](40) NOT NULL,
	[NewVehicleClassVehicleClassId] [nvarchar](40) NULL,
 CONSTRAINT [PK_vehicle_clss_for_inspection_type] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_color]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_color](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_color_code] [nvarchar](1) NOT NULL,
	[vhcl_color_name] [nvarchar](30) NOT NULL,
	[description] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vehicle_color] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_vehicle_color_vhcl_color_code] UNIQUE NONCLUSTERED 
(
	[vhcl_color_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_engine_type]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_engine_type](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_engine_type_code] [nvarchar](2) NOT NULL,
	[vhcl_engine_type_name] [nvarchar](30) NOT NULL,
	[description] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vehicle_engine_type] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_vehicle_engine_type_vhcl_engine_type_code] UNIQUE NONCLUSTERED 
(
	[vhcl_engine_type_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_inspection_order]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_inspection_order](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_insp_ord_code] [nvarchar](2) NOT NULL,
	[vhcl_insp_ord_name] [nvarchar](30) NOT NULL,
	[description] [text] NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vehicle_inspection_order] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_vehicle_inspection_order_vhcl_insp_ord_code] UNIQUE NONCLUSTERED 
(
	[vhcl_insp_ord_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_make]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_make](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_make_id] [nvarchar](3) NOT NULL,
	[vhcl_make_name] [nvarchar](30) NOT NULL,
	[description] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vehicle_make] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_vehicle_make_vhcl_make_id] UNIQUE NONCLUSTERED 
(
	[vhcl_make_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_model]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_model](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_model_code] [nvarchar](100) NOT NULL,
	[vhcl_model_name] [nvarchar](100) NOT NULL,
	[description] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vehicle_model] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_vehicle_model_vhcl_model_code] UNIQUE NONCLUSTERED 
(
	[vhcl_model_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_reg_mark_history]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_reg_mark_history](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_id] [nvarchar](40) NOT NULL,
	[current_reg_mark] [nvarchar](10) NOT NULL,
	[previous_reg_mark] [nvarchar](10) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vehicle_reg_mark_history] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [vehicle_status]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vehicle_status](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_sts_code] [nvarchar](1) NOT NULL,
	[vhcl_status_name] [nvarchar](30) NOT NULL,
	[description] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vehicle_status] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_vehicle_status_vhcl_sts_code] UNIQUE NONCLUSTERED 
(
	[vhcl_sts_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [vhcl_body_type]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [vhcl_body_type](
	[id] [nvarchar](40) NOT NULL,
	[vhcl_body_type_code] [nvarchar](2) NOT NULL,
	[vhcl_body_type_name] [nvarchar](30) NOT NULL,
	[description] [text] NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_vhcl_body_type] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [AK_vhcl_body_type_vhcl_body_type_code] UNIQUE NONCLUSTERED 
(
	[vhcl_body_type_code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [watchlist_user_access]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [watchlist_user_access](
	[id] [nvarchar](40) NOT NULL,
	[watchlist_id] [nvarchar](40) NOT NULL,
	[user_id] [nvarchar](40) NOT NULL,
	[alert_target] [nvarchar](1) NOT NULL,
 CONSTRAINT [PK_watchlist_user_access] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table  [watchlist_vehicle]    Script Date: 2/21/2024 7:26:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [watchlist_vehicle](
	[id] [nvarchar](40) NOT NULL,
	[watchlist_id] [nvarchar](40) NOT NULL,
	[vehicle_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [PK_watchlist_vehicle] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO