using VICSS.Shared.Models.Common;
using MediatR;
namespace VICSS.Service.Inspection.Domain
{
    public class DisableReactiveMaintainEquipmentResponseDto : ApiErrorMessage
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
}
