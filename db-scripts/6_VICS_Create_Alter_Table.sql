--=============================================================================================================================
-- Login witn User VICSS_DEV_OWNER and Execute the following Scripts in VICSS_DEV Database 
--==============================================================================================================================

USE [VICSS_DEV]
GO
/****** Object:  Table [VICSS_DEV_OWNER].[STATION]     ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [station](
       [id] [nvarchar](40) NOT NULL,
       [lane_id] [nvarchar](40) NOT NULL,
       [station_name] [nvarchar](10) NOT NULL,
       [station_description] [text] NOT NULL,
       [station_actv_ind] [nvarchar](1) NOT NULL,
       [last_rec_txn_datetime] [datetime] NOT NULL,
       [last_rec_txn_type_code] [nvarchar](1) NOT NULL,
       [last_rec_txn_user_id] [nvarchar](32) NOT NULL,
CONSTRAINT [PK_station] PRIMARY KEY CLUSTERED 
(
       [id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [station]  WITH CHECK ADD  CONSTRAINT [FK_station_lane_lane_id] FOREIGN KEY([lane_id])
REFERENCES  [lane] ([id])
ON DELETE CASCADE
GO

ALTER TABLE [station] CHECK CONSTRAINT [FK_station_lane_lane_id]
GO


/****** Object:  Table [VICSS_DEV_OWNER].[skip_test_reason]     ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [skip_test_reason](
       [id] [nvarchar](40) NOT NULL,
       [code] [nvarchar](16) NOT NULL,
       [description] [varchar](max) NOT NULL,
       [test_type] [nvarchar](20) NOT NULL,
       [activate_ind] [bit] NOT NULL,
       [last_rec_txn_datetime] [datetime] NOT NULL,
       [last_rec_txn_type_code] [nvarchar](1) NOT NULL,
       [last_rec_txn_user_id] [nvarchar](32) NOT NULL,
       [exempt_from_dyno_ind] [bit] NULL,
CONSTRAINT [PK_skip_test_reason] PRIMARY KEY CLUSTERED 
(
       [id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

/****** Object:  Table [VICSS_DEV_OWNER].[abort_suspend_test_reason]     ******/

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [abort_suspend_test_reason](
       [id] [nvarchar](40) NOT NULL,
       [code] [nvarchar](16) NOT NULL,
       [description] [varchar](max) NOT NULL,
       [reason_type] [nvarchar](1) NOT NULL,
       [activate_ind] [bit] NOT NULL,
       [last_rec_txn_datetime] [datetime] NOT NULL,
       [last_rec_txn_type_code] [nvarchar](1) NOT NULL,
       [last_rec_txn_user_id] [nvarchar](32) NOT NULL,
CONSTRAINT [PK_abort_suspend_test_reason] PRIMARY KEY CLUSTERED 
(
       [id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

/****** Object:  Table [VICSS_DEV_OWNER].[test_items] -- New VICS Tables shared by Yashu Sharma   ******/

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [test_items](
	[id] [nvarchar](40) NOT NULL,
	[test_items] [nvarchar](50) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [test_items_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [VICSS_DEV_OWNER].[test_result_axle_weight] -- New VICS Tables shared by Yashu Sharma   ******/

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [test_result_axle_weight](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[axlew1] [numeric](10, 1) NULL,
	[axlew2] [numeric](10, 1) NULL,
	[axlew3] [numeric](10, 1) NULL,
	[axlew4] [numeric](10, 1) NULL,
	[axlew5] [numeric](10, 1) NULL,
	[axlew6] [numeric](10, 1) NULL,
	[axlew7] [numeric](10, 1) NULL,
	[axlew8] [numeric](10, 1) NULL,
	[overall_weight] [numeric](10, 1) NULL,
	[result] [nvarchar](1) NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
 CONSTRAINT [test_result_axle_weight_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [VICSS_DEV_OWNER].[test_result_headlamp] -- New VICS Tables shared by Yashu Sharma   ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [test_result_headlamp](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[left_main_intensity] [nvarchar](12) NULL,
	[right_main_intensity] [nvarchar](12) NULL,
	[left_main_height] [nvarchar](12) NULL,
	[right_main_height] [nvarchar](12) NULL,
	[left_dipped_height] [nvarchar](12) NULL,
	[right_dipped_height] [nvarchar](12) NULL,
	[left_main_v_offset] [nvarchar](12) NULL,
	[left_main_h_offset] [nvarchar](12) NULL,
	[right_main_v_offset] [nvarchar](12) NULL,
	[right_main_h_offset] [nvarchar](12) NULL,
	[left_dipped_v_offset] [nvarchar](12) NULL,
	[left_dipped_h_offset] [nvarchar](12) NULL,
	[right_dipped_v_offset] [nvarchar](12) NULL,
	[right_dipped_h_offset] [nvarchar](12) NULL,
	[left_dipped_upward_angle] [nvarchar](30) NULL,
	[right_dipped_upward_angle] [nvarchar](30) NULL,
	[left_dipped_horizont_alangle] [nvarchar](30) NULL,
	[right_dipped_horizont_alangle] [nvarchar](30) NULL,
	[left_main_v_offset_h] [nvarchar](30) NULL,
	[right_main_v_offset_h] [nvarchar](30) NULL,
	[left_dipped_v_offset_h] [nvarchar](30) NULL,
	[right_dipped_v_offset_h] [nvarchar](30) NULL,
	[left_total_adj] [nvarchar](2) NULL,
	[right_total_adj] [nvarchar](2) NULL,
	[left_is_cap_angle_ind] [nvarchar](1) NULL,
	[right_is_cap_angle_ind] [nvarchar](1) NULL,
	[result] [nvarchar](1) NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
 CONSTRAINT [test_result_headlamp_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [VICSS_DEV_OWNER].[test_result_ohm] -- New VICS Tables shared by Yashu Sharma   ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [test_result_ohm](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[length] [int] NOT NULL,
	[width] [int] NOT NULL,
	[height] [int] NOT NULL,
	[result] [nvarchar](1) NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
 CONSTRAINT [test_result_ohm_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [VICSS_DEV_OWNER].[test_result_visual] -- New VICS Tables shared by Yashu Sharma   ******/

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [test_result_visual](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[num_fixed_axles] [int] NULL,
	[num_retract_axles] [int] NULL,
	[num_total_axles] [int] NULL,
	[retract_axles_pos] [nvarchar](1) NULL,
	[axle_test_level] [nvarchar](8) NULL,
	[axles_test_result] [nvarchar](1) NULL,
	[brake_test_level] [nvarchar](8) NULL,
	[brake_test_result] [nvarchar](1) NULL,
	[chsss_test_level] [nvarchar](8) NULL,
	[chsss_test_result] [nvarchar](1) NULL,
	[dimension_test_level] [nvarchar](8) NULL,
	[dimension_test_result] [nvarchar](1) NULL,
	[document_test_level] [nvarchar](8) NULL,
	[document_test_result] [nvarchar](1) NULL,
	[door_test_level] [nvarchar](8) NULL,
	[door_test_result] [nvarchar](1) NULL,
	[driver_cab_test_level] [nvarchar](8) NULL,
	[driver_cab_test_result] [nvarchar](1) NULL,
	[driver_view_test_level] [nvarchar](8) NULL,
	[driver_view_test_result] [nvarchar](1) NULL,
	[result] [nvarchar](1) NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
 CONSTRAINT [test_result_visual_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

