namespace SCS_Backend_API.DTO
{
    public class CancelWatchListDto
    {
        public long Vhcl_WhLst_Key { get; set; }
        public string Cncl_reason { get; set; }
        public DateTime Cncl_Date { get; set; } 
        public string Status { get; set; }
        public string Last_Txn_UserId { get; set; }
        public string Last_Txn_Type_Code { get; set; }
        public DateTime Last_Rec_Txn_Date { get; set; }
    }

    public class WatchListCancelResponse : HttpStatusResponse
    {
        public CancelWatchListDto? data { get; set; }

    }
}
