/*****ARTU Database - Table*****/
USE [VICSS_DEV]
GO
--Object:  Table [artu_config]  
--SET ANSI_NULLS ON
--GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [artu_config](
	[id] [nvarchar](40) NOT NULL,
	[lane_id] [nvarchar](40) NOT NULL,
	[station_id] [nvarchar](40) NOT NULL,
	[vees_ip] [nvarchar](20) NOT NULL,
	[vees_port] [nvarchar](5) NULL,
	[max_log_age] [int] NOT NULL,
	[vee_heart_beat_interval] [numeric](9, 2) NOT NULL,
	[description] [nvarchar](40) NOT NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[last_rec_txn_type_code] [nvarchar](1) NOT NULL,
	[last_rec_txn_user_id] [nvarchar](32) NOT NULL,
CONSTRAINT [PK_artu_config] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT  [artu_config] ([id], [lane_id], [station_id], [vees_ip], [vees_port], [max_log_age], [vee_heart_beat_interval], [description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'073c8741-e6b0-4ab5-8587-0a3e05082868', N'30', N'C', N'192.168.116.70', N'24690', 2, CAST(600000.00 AS Numeric(9, 2)), N'Headlamp', CAST(N'2024-03-14T04:19:20.670' AS DateTime), N'I', N'User3')
GO
INSERT [artu_config] ([id], [lane_id], [station_id], [vees_ip], [vees_port], [max_log_age], [vee_heart_beat_interval], [description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'0ef5341a-097b-46aa-b2c1-e3e4359edc74', N'30', N'B', N'192.168.116.69', N'24690', 2, CAST(600000.00 AS Numeric(9, 2)), N'BrakeTest', CAST(N'2024-03-14T04:18:33.170' AS DateTime), N'I', N'User2')
GO
INSERT [artu_config] ([id], [lane_id], [station_id], [vees_ip], [vees_port], [max_log_age], [vee_heart_beat_interval], [description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'e7d05d86-55e4-46de-8d6b-387eb4bfd267', N'30', N'A', N'192.168.116.68', N'24690', 2, CAST(600000.00 AS Numeric(9, 2)), N'OHM', CAST(N'2024-03-14T04:16:02.410' AS DateTime), N'I', N'User1')
GO
INSERT [artu_config] ([id], [lane_id], [station_id], [vees_ip], [vees_port], [max_log_age], [vee_heart_beat_interval], [description], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'f691d72a-ebfa-4882-9b39-10e12054de8b', N'30', N'D', N'192.168.116.71', N'24690', 2, CAST(60000.00 AS Numeric(9, 2)), N'SLD', CAST(N'2024-03-14T19:46:38.767' AS DateTime), N'I', N'User2')
GO