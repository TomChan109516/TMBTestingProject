
namespace VICSS.Service.Inspection.Domain
{
    using VICSS.Shared.Models.Common;
    public class SearchMaintainEquipmentDataResponseDto : ApiErrorMessage
    {
        
        public List<SearchMaintainEquipmentDataDto> searchMaintainEquipmentData { get; set; }   
    }

    public class SearchMaintainEquipmentDataDto
    {
        
        public string? Id { get; set; }
        public string? EquipmentNumber { get; set; }
        public string? DynoRoomNoLaneNo { get; set; }
        public string? StationId { get; set; }
        public bool ActivateInd { get; set; }
        public string? ChineseDescription { get; set; }
        public string? EquipmentName { get; set; }
        public string? Status { get; set; }
        public DateTime? ScheduledMaintenenceTo { get; set; }

        public DateTime? ScheduledMaintenenceFrom { get; set; }


}
}

