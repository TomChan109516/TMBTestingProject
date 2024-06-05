using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.Models1
{
    public class WatchListReason
    {
        [Key]
        public int WhLst_Rsn_Key { get; set; }
        public string WhLst_Rsn_Type_Code { get; set; }
        public string WhLst_Rsn_Code { get; set; }
        public string WhLst_Rsn_Desc { get; set; }
        public string Last_Txn_UserId { get; set; }
        public string Last_Txn_Type_Code { get; set; }
        public DateTime Last_Rec_Txn_Date { get; set; }
        public DateTime Last_Rec_Del_Date { get; set; }


        public ICollection<WatchList>? Watchlists { get; set; }
    }
}
