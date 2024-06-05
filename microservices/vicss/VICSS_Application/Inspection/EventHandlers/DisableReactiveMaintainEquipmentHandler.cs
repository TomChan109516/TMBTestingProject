namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Linq.Expressions;
    using System.Net;
    using System.Reflection.Metadata.Ecma335;
    using System.Threading;
    using System.Threading.Tasks;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.Helper;
    using VICSS.Shared.Models.Common;
    public class DisableReactiveMaintainEquipmentHandler : IRequestHandler<DisableReactiveMaintainEquipmentRequestDto, DisableReactiveMaintainEquipmentResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, Equipment> genericRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly ILogger<DisableReactiveMaintainEquipmentHandler> logger;
        public DisableReactiveMaintainEquipmentHandler(IMapper mapper, IGenericRepository<InspectionDBContext, Equipment> genericRepository, IUnitOfWork<InspectionDBContext> unitOfWork, ILogger<DisableReactiveMaintainEquipmentHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }
        public async Task<DisableReactiveMaintainEquipmentResponseDto> Handle(DisableReactiveMaintainEquipmentRequestDto request, CancellationToken cancellationToken)
        {
            DisableReactiveMaintainEquipmentResponseDto disableReactiveMaintainEquipmentResponseDto = new();
            disableReactiveMaintainEquipmentResponseDto.IsSuccess = false;
            disableReactiveMaintainEquipmentResponseDto.HttpStatusCode = HttpStatusCode.NotModified;
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "DisableReactiveMaintainEquipmentHandler", "DisableReactiveMaintainEquipmentHandler initiated");
                var equipment =  genericRepository.GetByQuery(i => i.Id == request.Id).Result.FirstOrDefault();
   
                if (equipment != null)
                {
                    equipment.ActivateInd = request.ActivateInd;
                    genericRepository.Update(equipment);
                    await unitOfWork.SaveChanges();
                    disableReactiveMaintainEquipmentResponseDto.IsSuccess = true;
                    disableReactiveMaintainEquipmentResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "DisableReactiveMaintainEquipmentHandler", "DisableReactiveMaintainEquipmentHandler completed");
                }
                else
                {
                    disableReactiveMaintainEquipmentResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "DisableReactiveMaintainEquipmentHandler", "DisableReactiveMaintainEquipmentHandler completed");
                }
            }
            catch (Exception ex)
            {
                disableReactiveMaintainEquipmentResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                disableReactiveMaintainEquipmentResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "DisableReactiveMaintainEquipmentHandler", ex.ToString());
            }
            return disableReactiveMaintainEquipmentResponseDto;
        }
    }
}
