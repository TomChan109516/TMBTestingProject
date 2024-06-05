using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.Models1
{
    public class WatchList
    {
        [Key]
        public long Vhcl_WhLst_Key { get; set; }
        public string Type { get; set; }
        public string VehicleClassId { get; set; }
        [StringLength(10)]
        public string RegMark { get; set; } = string.Empty;
        [StringLength(25)]
        public string ChassisNumber { get; set; } = string.Empty;
        public string? Model { get; set; }
        public double? PGVWeight { get; set; }
        
        public int WhLst_Rsn_Key { get; set; }
        public string? Remarks { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime Cancelled_Date { get; set; }
        public string? Status { get; set; }
        public string? CancelReason { get; set; }
        public int ManufactureYear { get; set; }
        public DateTime FirstRegDate { get; set; }
        public long? BodyType { get; set; }
        public long? EngineType { get; set; }
        public int Ctr_Key { get; set; }
        public string Last_Txn_UserId { get; set; }
        public string Last_Txn_Type_Code { get; set; }
        public DateTime Last_Rec_Txn_Date { get; set; }

        [ForeignKey("WhLst_Rsn_Key")]
       public WatchListReason ReasonKey { get; set; }

        [ForeignKey("Ctr_Key")]
        public Center CenterKey { get; set; }


    }
}
