USE VICSS_DEV
DECLARE @LaneID NVARCHAR(40);
DECLARE @CurrentDate DATETIME;

SET @LaneID = (SELECT id FROM [lane]  WHERE lane_name = '30')
SET @CurrentDate = GETDATE();

INSERT INTO [station]
           (
		   [id]
           ,[lane_id]
           ,[station_name]
           ,[station_description]
           ,[station_actv_ind]
           ,[last_rec_txn_datetime]
           ,[last_rec_txn_type_code]
           ,[last_rec_txn_user_id]
)
     VALUES
(
		   NEWID()
           ,@LaneID
           ,'A'
           ,'A'
           ,''
           ,@CurrentDate
           ,'I'
           ,'User1'
),
(
		   NEWID()
           ,@LaneID
           ,'B'
           ,'B'
           ,''
           ,@CurrentDate
           ,'I'
           ,'User1'
),
(
		   NEWID()
           ,@LaneID
           ,'C'
           ,'C'
           ,''
           ,@CurrentDate
           ,'I'
           ,'User1'
),
(
		   NEWID()
           ,@LaneID
           ,'D'
           ,'D'
           ,''
           ,@CurrentDate
           ,'I'
           ,'User1'
),
(
		   NEWID()
           ,@LaneID
           ,'E'
           ,'E'
           ,''
           ,@CurrentDate
           ,'I'
           ,'User1'
)
GO