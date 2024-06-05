
USE [VICSS_DEV]
GO
DROP TABLE test
GO
/****** Object:  Table [VICSS_DEV_OWNER].[test]     ******/
CREATE TABLE  [test](
	[id] [nvarchar](40) NOT NULL,
	[insp_id] [nvarchar](40) NOT NULL,
	[station_id] [nvarchar](40) NULL,
	[user_id] [nvarchar](40) NOT NULL,
	[test_items_id] [nvarchar](40) NOT NULL,
	[mode] [nvarchar](8) NOT NULL,
	[attempt] [int] NOT NULL,
	[test_start_time] [datetime] NULL,
	[test_end_time] [datetime] NULL,
	[skip_approval_ind] [bit] NULL,
	[skip_test_follow_up_action] [nvarchar](32) NULL,
	[abort_suspend_test_reason_id] [nvarchar](40) NULL,
	[abort_test_remark] [nvarchar](max) NULL,
	[end_result] [nvarchar](3) NOT NULL,
	[remark] [nvarchar](max) NULL,
	[last_rec_txn_datetime] [datetime] NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
CONSTRAINT [test_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
 
ALTER TABLE  [test]  WITH CHECK ADD  CONSTRAINT [test_FK_absort_suspend_test_reason_id_abort_suspend_test_reason] FOREIGN KEY([abort_suspend_test_reason_id])
REFERENCES  [abort_suspend_test_reason] ([id])
GO
 
ALTER TABLE  [test] CHECK CONSTRAINT [test_FK_absort_suspend_test_reason_id_abort_suspend_test_reason]
GO
 
ALTER TABLE  [test]  WITH CHECK ADD  CONSTRAINT [test_FK_insp_id_insp] FOREIGN KEY([insp_id])
REFERENCES  [inspection] ([id])
GO
 
ALTER TABLE  [test] CHECK CONSTRAINT [test_FK_insp_id_insp]
GO
 
ALTER TABLE  [test]  WITH CHECK ADD  CONSTRAINT [test_FK_skip_test_reason_id_skip_test_reason] FOREIGN KEY([skip_test_reason_id])
REFERENCES  [skip_test_reason] ([id])
GO
 
ALTER TABLE  [test] CHECK CONSTRAINT [test_FK_skip_test_reason_id_skip_test_reason]
GO
 
ALTER TABLE  [test]  WITH CHECK ADD  CONSTRAINT [test_FK_station_id_station] FOREIGN KEY([station_id])
REFERENCES  [station] ([id])
GO
 
ALTER TABLE  [test] CHECK CONSTRAINT [test_FK_station_id_station]
GO
 
ALTER TABLE  [test]  WITH CHECK ADD  CONSTRAINT [test_FK_test_items_id_test_item] FOREIGN KEY([test_items_id])
REFERENCES  [test_items] ([id])
GO
 
ALTER TABLE  [test] CHECK CONSTRAINT [test_FK_test_items_id_test_item]
GO

/****** ALTER SCRIPTS     ******/ 

ALTER TABLE [test_result_axle_weight]  WITH CHECK ADD  CONSTRAINT [test_result_axle_weight_FK_skip_test_reason_id_skip_test_reason] FOREIGN KEY([skip_test_reason_id])
REFERENCES [skip_test_reason] ([id])
GO
ALTER TABLE [test_result_axle_weight] CHECK CONSTRAINT [test_result_axle_weight_FK_skip_test_reason_id_skip_test_reason]
GO
ALTER TABLE [test_result_axle_weight]  WITH CHECK ADD  CONSTRAINT [test_result_axle_weight_FK_test_id_test] FOREIGN KEY([test_id])
REFERENCES [test] ([id])
GO
ALTER TABLE [test_result_axle_weight] CHECK CONSTRAINT [test_result_axle_weight_FK_test_id_test]
GO
ALTER TABLE [test_result_headlamp]  WITH CHECK ADD FOREIGN KEY([skip_test_reason_id])
REFERENCES [skip_test_reason] ([id])
GO
ALTER TABLE [test_result_headlamp]  WITH CHECK ADD FOREIGN KEY([test_id])
REFERENCES [test] ([id])
GO
ALTER TABLE [test_result_ohm]  WITH CHECK ADD FOREIGN KEY([skip_test_reason_id])
REFERENCES [skip_test_reason] ([id])
GO
ALTER TABLE [test_result_ohm]  WITH CHECK ADD FOREIGN KEY([test_id])
REFERENCES [test] ([id])
GO
ALTER TABLE [test_result_visual]  WITH CHECK ADD  CONSTRAINT [test_result_visual_FK_skip_test_reason_id_skip_test_reason] FOREIGN KEY([skip_test_reason_id])
REFERENCES [skip_test_reason] ([id])
GO
ALTER TABLE [test_result_visual] CHECK CONSTRAINT [test_result_visual_FK_skip_test_reason_id_skip_test_reason]
GO
ALTER TABLE [test_result_visual]  WITH CHECK ADD  CONSTRAINT [test_result_visual_FK_test_id_test] FOREIGN KEY([test_id])
REFERENCES [test] ([id])
GO
ALTER TABLE [test_result_visual] CHECK CONSTRAINT [test_result_visual_FK_test_id_test]
GO