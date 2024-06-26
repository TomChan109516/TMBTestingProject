USE [VICSS_DEV]
GO
/****** Object:  Table  [test_result_tilting]    Script Date: 4/16/2024 12:22:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [test_result_tilting](
	[id] [nvarchar](40) NOT NULL,
	[test_id] [nvarchar](40) NOT NULL,
	[remark] [varchar](max) NULL,
	[result] [nvarchar](1) NOT NULL,
	[skip_test_reason_id] [nvarchar](40) NULL,
 CONSTRAINT [test_result_tilting_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table  [unconfirmed_list]    Script Date: 4/16/2024 12:22:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE  [unconfirmed_list](
	[id] [nvarchar](40) NOT NULL,
	[appt_id] [nvarchar](40) NOT NULL,
	[lane_id] [nvarchar](40) NOT NULL,
	[vehicle_id] [nvarchar](40) NOT NULL,
	[create_datetime] [datetime] NOT NULL,
	[remove_datetime] [datetime] NULL,
 CONSTRAINT [unconfirmed_list_PK] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE  [test_result_tilting]  WITH CHECK ADD  CONSTRAINT [FK_test_result_tilting_skip_test_reason] FOREIGN KEY([skip_test_reason_id])
REFERENCES  [skip_test_reason] ([id])
GO
ALTER TABLE  [test_result_tilting] CHECK CONSTRAINT [FK_test_result_tilting_skip_test_reason]
GO
ALTER TABLE  [test_result_tilting]  WITH CHECK ADD  CONSTRAINT [FK_test_result_tilting_test] FOREIGN KEY([test_id])
REFERENCES  [test] ([id])
GO
ALTER TABLE  [test_result_tilting] CHECK CONSTRAINT [FK_test_result_tilting_test]
GO
