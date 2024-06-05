using MediatR;
using System;
using VICSS.Shared.Models.Common;
namespace VICSS.Service.Inspection.Domain
{
    public class GetByIdMaintainEquipmentRequestDto : IRequest<GetByIdMaintainEquipmentResponseDto>
    
    {
        public GetByIdMaintainEquipmentRequestDto(string id)
        {
            this.Id = id;
        }
        public string Id { get; set; }

    }
}
