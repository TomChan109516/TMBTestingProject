using System;
using VICSS.Shared.Models.Common;

namespace VICSS.Service.Inspection.Domain
{
    public class MaintainEquipmentResponseDto : ApiErrorMessage
    {
        //public string Id { get; set; }
        //public string EquipmentNumber { get; set; }
        //public string ChineseDescription { get; set; }
        //public string EquipmentName { get; set; }

        //public string Status { get; set; }

        //public DateTime? NextMaintenance { get; set; }

        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
}
