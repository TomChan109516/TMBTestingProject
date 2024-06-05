namespace VICSS.Service.Inspection.Domain
{
    using MediatR;
    public class MaintainEquipmentRequestDto : IRequest<MaintainEquipmentResponseDto>
    {
        public string? Id { get; set; }
        public string EquipmentNumber { get; set; }
        public string? EquipmentName { get; set; }
        public string? ChineseDescription { get; set; }
        public string DynoRoomNoLaneNo { get; set; }
        public string StationId { get; set; }
        public string Type { get; set; }
        public string? Make { get; set; }
        public string? Model { get; set; }
        public string? Rating { get; set; }
        public string? WithOrWithoutARTU { get; set; }
        public string? EquipmentSerialNumber { get; set; }
        public string? ManufactureFactory { get; set; }
        public string? ManufactureCycle { get; set; }
        public DateTime? ScheduledMaintenenceFrom { get; set; }
        public DateTime? ScheduledMaintenenceTo { get; set; }
        public string Status { get; set; }
        public bool ActivateInd { get; set; }
        public string? Remark { get; set; }
        public string UserId { get; set; }
    }

}
