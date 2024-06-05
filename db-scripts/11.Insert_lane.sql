USE VICSS_DEV
DECLARE @NewID UNIQUEIDENTIFIER;
SET @NewID = NEWID();

INSERT [lane] 
(
	[id], 
	[ctr_id], 
	[lane_name], 
	[lane_type], 
	[lane_description], 
	[lane_actv_ind], 
	[default_capacity], 
	[last_rec_txn_datetime], 
	[last_rec_txn_type_code], 
	[last_rec_txn_user_id]
)

VALUES 
(
	@NewID,
	'23321883-2885-463B-80B0-3D23450E8EF1',  	--TY1 CENTRE ONLY
	'30', 
	'physical', 
	'Lane 30', 
	'Y', 
	10, 
	CAST('2024-02-06T09:59:12.917' AS DateTime), 
	'I', 
	'Admin'
)
GO