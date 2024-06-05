namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Linq.Expressions;
    using System.Net;
    using System.Reflection.Metadata.Ecma335;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.Helper;
    using VICSS.Shared.Models.Common;
    public class GetByIdMaintainEquipmentHandler : IRequestHandler<GetByIdMaintainEquipmentRequestDto, GetByIdMaintainEquipmentResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, Equipment> genericRepository;
        private readonly ILogger<GetByIdMaintainEquipmentHandler> logger;

        public GetByIdMaintainEquipmentHandler (IMapper mapper, IGenericRepository<InspectionDBContext, Equipment> genericRepository, ILogger<GetByIdMaintainEquipmentHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<GetByIdMaintainEquipmentResponseDto> Handle(GetByIdMaintainEquipmentRequestDto getByIdMaintainEquipmentRequestDto, CancellationToken cancellationToken)
        {
            GetByIdMaintainEquipmentResponseDto getByIdMaintainEquipmentResponseDto = new();
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetByIdMaintainEquipmentHandler", "GetByIdMaintainEquipmentHandler initiated");
                var equipments = await genericRepository.GetByQuery(i => i.Id ==getByIdMaintainEquipmentRequestDto.Id);
                var equipment = equipments.FirstOrDefault();
                if (equipment != null)
                {
                    
                    getByIdMaintainEquipmentResponseDto = mapper.Map<GetByIdMaintainEquipmentResponseDto>(equipment);
                    getByIdMaintainEquipmentResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetByIdMaintainEquipmentHandler", "GetByIdMaintainEquipmentHandler completed");
                }
                else
                {
                    getByIdMaintainEquipmentResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetByIdMaintainEquipmentHandler", "GetByIdMaintainEquipmentHandler completed");
                }
            }
            catch (Exception ex)
            {
                getByIdMaintainEquipmentResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                getByIdMaintainEquipmentResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetByIdMaintainEquipmentHandler", ex.ToString());
            }
            return getByIdMaintainEquipmentResponseDto;
        }
    }
}
