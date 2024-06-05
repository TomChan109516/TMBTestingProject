using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class WatchListRequestDto
    {
        
        public string[]? Type { get; set; }
        public string? CreatedDateFrom { get; set; } 
        public string? CreatedDateTo { get; set; }
        public int? Center_Key { get; set; }
        public string? Status { get; set; }
        public int? Rsn_Key { get; set; }
        public string? VhlClassId { get; set; }  

    }

    public class WatchListDto
    {

        public string Type { get; set; }
        public string VhlClassId { get; set; }
        public string RegMark { get; set; } 
        public string ChassisNumber { get; set; }
        public string Model { get; set; }
        public double? PGVWeight { get; set; }
        public int WhLst_Rsn_Key { get; set; }
        public string? Remarks { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Status { get; set; }
        public string? CancelReason { get; set; }
        public int ManufactureYear { get; set; }
        public DateTime FirstRegDate { get; set; }
        public long? BodyType { get; set; }
        public long? EngineType { get; set; }
        public int Center_Key { get; set; }
        public string Last_Txn_UserId { get; set; }
        public string Last_Txn_Type_Code { get; set; }
        public DateTime Last_Rec_Txn_Date { get; set; }
       
       

    }
    public class SearchWatchListResponseDto : HttpStatusResponse
    {
        public List<WatchListDto>? data { get; set; }

    }


}
