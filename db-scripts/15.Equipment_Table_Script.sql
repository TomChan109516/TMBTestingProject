USE [VICSS_DEV]
GO
/****** Object:  Table  [equipment]    Script Date: 5/6/2024 12:30:51 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [equipment](
	[id] [nvarchar](40) NOT NULL,
	[equipment_no] [nvarchar](10) NOT NULL,
	[equipment_name] [nvarchar](80) NULL,
	[chi_desc] [nvarchar](80) NULL,
	[dyno_room_no_lane_no] [nvarchar](2) NOT NULL,
	[station_id] [nvarchar](40) NOT NULL,
	[type] [nvarchar](1) NOT NULL,
	[make] [nvarchar](32) NULL,
	[model] [nvarchar](32) NULL,
	[rating] [nvarchar](32) NULL,
	[with_without_ART] [nvarchar](32) NULL,
	[equipment_SN] [nvarchar](32) NULL,
	[manufacture_factory] [nvarchar](32) NULL,
	[manufacture_cycle] [nvarchar](1) NULL,
	[scheduled_maintenence_from] [datetime] NULL,
	[scheduled_maintenence_to] [datetime] NULL,
	[status] [nvarchar](1) NOT NULL,
	[activate_ind] [bit] NOT NULL,
	[remark] [varchar](max) NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](40) NOT NULL,
 CONSTRAINT [equipment_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE  [equipment]  WITH CHECK ADD  CONSTRAINT [FK_equipment_station] FOREIGN KEY([station_id])
REFERENCES  [station] ([id])
GO
ALTER TABLE  [equipment] CHECK CONSTRAINT [FK_equipment_station]
GO
