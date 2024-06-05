using SCS_Backend_API.Models1;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SCS_Backend_API.DTO
{
    public class CreateWatchListDto
    {
        public string Type { get; set; }
        public string VehicleClassId { get; set; }
        public string RegMark { get; set; } = string.Empty;
        public string ChassisNumber { get; set; } = string.Empty;
        public string Model { get; set; }
        public double? PGVWeight { get; set; }
        public int WhLst_Rsn_Key { get; set; }
        public string Remarks { get; set; }
        public DateTime CreatedDate { get; set; }
        
        public string Status { get; set; }
        
        public int ManufactureYear { get; set; }
        public DateTime FirstRegDate { get; set; }
        public long? BodyType { get; set; }
        public long? EngineType { get; set; }
        public int Ctr_Key { get; set; }
        public string Last_Txn_UserId { get; set; }
        public string Last_Txn_Type_Code { get; set; }
        public DateTime Last_Rec_Txn_Date { get; set; }
    }

    public class CreateWatchListDtoResponse : HttpStatusResponse
    {
        public CreateWatchListDto? data { get; set; }
    }
}
