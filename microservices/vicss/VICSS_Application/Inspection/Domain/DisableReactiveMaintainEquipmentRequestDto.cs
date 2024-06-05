using MediatR;
using System;
using VICSS.Shared.Models.Common;
namespace VICSS.Service.Inspection.Domain
{
    public class DisableReactiveMaintainEquipmentRequestDto : IRequest<DisableReactiveMaintainEquipmentResponseDto>

    {
        public DisableReactiveMaintainEquipmentRequestDto(string id, bool activateInd)
        {
            this.Id = id;
            this.ActivateInd = activateInd;
        }
        public string Id { get; set; }
        public bool ActivateInd { get; set;}

    }
}
