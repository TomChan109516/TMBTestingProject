USE [VICSS_DEV]
GO

INSERT [test_items] ([id], [test_items], [last_rec_txn_datetime], [last_rec_txn_type_code], [last_rec_txn_user_id]) VALUES (N'D6E80591-5559-4914-A2BC-D5AD3AA8CC96', N'TSTP', CAST(N'2024-03-14T16:16:00.000' AS DateTime), N'I', N'1')
GO

INSERT [exam_code_test_items] ([id], [inspection_type_id], [test_items_id]) VALUES (N'B6664BA7-8B01-46B9-BF29-1E0EAD01DFB9', N'FE7B5EAC-9409-480F-B6AE-F7226598E944', N'D6E80591-5559-4914-A2BC-D5AD3AA8CC96')

GO
