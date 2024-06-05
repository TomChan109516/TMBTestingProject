namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.Interface;
    using VICSS.Shared.Models.Common;

    public class MaintainEquipmentHandler : IRequestHandler<MaintainEquipmentRequestDto, MaintainEquipmentResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, Equipment> genericRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly ICommonMethods methods;
        private readonly ILogger<MaintainEquipmentHandler> logger;

        public MaintainEquipmentHandler(IMapper mapper,
               IGenericRepository<InspectionDBContext,
               Equipment> genericRepository,
               IUnitOfWork<InspectionDBContext> unitOfWork,
               ICommonMethods methods,
               ILogger<MaintainEquipmentHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.methods = methods;
            this.logger = logger;
        }

        public async Task<MaintainEquipmentResponseDto> Handle(MaintainEquipmentRequestDto request, CancellationToken cancellationToken)
        {
            MaintainEquipmentResponseDto response = new();
            string trackingId = Guid.NewGuid().ToString();
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddMaintainEquipment", "AddMaintainEquipmentInitiated");
            response.HttpStatusCode = HttpStatusCode.NotModified;
            response.IsSuccess = false;
            response.Message = CommonMessages.OperationUnsuccessful;
            try
            {
                if(request!= null)
                {
                    var equipment = mapper.Map<Equipment>(request);
                    var station = await methods.GetStationDetailsbyLane(request.StationId, request.DynoRoomNoLaneNo);
                    if (equipment != null && string.IsNullOrEmpty(request.Id) && station != null)
                    {
                        response = AddMaintainEquipmentData(response, equipment, station, request, trackingId);
                    }
                    else if (equipment != null && !string.IsNullOrEmpty(request.Id) && station != null)
                    {
                        response = UpdateMaintainEquipmentData(response, equipment, station, request, trackingId);
                    }
                    await unitOfWork.SaveChanges();
                }
                else
                {
                    response.HttpStatusCode = HttpStatusCode.BadRequest;
                    response.Message= CommonMessages.OperationUnsuccessful;
                }
            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.InternalServerError;
                response.IsSuccess = false;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddMantainEquipmentFailed", ex.Message);
            }
            return response;
        }
        private MaintainEquipmentResponseDto UpdateMaintainEquipmentData(MaintainEquipmentResponseDto response, Equipment equipment, Station station, MaintainEquipmentRequestDto request, string trackingId)
        {
            equipment.StationId = station.Id;
            equipment.LastRecordTransactionTypeCode = CommonConstants.UpdateTranTypeCode;
            equipment.LastRecordTransactionDateTime = DateTime.UtcNow;
            equipment.LastRecordTransactionUserId = request.UserId;
            genericRepository.Update(equipment);
            response.IsSuccess = true;
            response.Message = CommonMessages.OperationSuccessful;
            response.HttpStatusCode = HttpStatusCode.OK;
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "MaintainEquipmentHandler", "UpdateMaintainEquipmentCompleted");
            return response;
        }
        private MaintainEquipmentResponseDto AddMaintainEquipmentData(MaintainEquipmentResponseDto response, Equipment equipment, Station station, MaintainEquipmentRequestDto request, string trackingId)
        {
            equipment.Id = Guid.NewGuid().ToString();
            equipment.StationId = station.Id;
            equipment.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
            equipment.LastRecordTransactionDateTime = DateTime.UtcNow;
            equipment.LastRecordTransactionUserId = request.UserId;
            genericRepository.Add(equipment);
            response.IsSuccess = true;
            response.Message = CommonMessages.OperationSuccessful;
            response.HttpStatusCode = HttpStatusCode.Created;
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "MaintainEquipmentHandler", "AddMaintainEquipmentCompleted");
            return response;
        }
    }

}



