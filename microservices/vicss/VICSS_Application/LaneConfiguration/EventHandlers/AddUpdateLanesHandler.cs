namespace VICSS.Service.LaneConfiguration.EventHandlers
{
    using AutoMapper;
    using Azure.Core;
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.LaneConfiguration.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.LaneConfiguration;

    public class AddUpdateLanesHandler : IRequestHandler<AddUpdateLanesRequestDto, AddUpdateLanesResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<LaneConfigurationDBContext, Lane> genericRepository;
        private readonly IUnitOfWork<LaneConfigurationDBContext> unitOfWork;
        private readonly ILogger<AddUpdateLanesHandler> logger;

        public AddUpdateLanesHandler(IMapper mapper, IGenericRepository<LaneConfigurationDBContext, Lane> genericRepository, IUnitOfWork<LaneConfigurationDBContext> unitOfWork, ILogger<AddUpdateLanesHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        public async Task<AddUpdateLanesResponseDto> Handle(AddUpdateLanesRequestDto request, CancellationToken cancellationToken)
        {
            AddUpdateLanesResponseDto addUpdateLanesResponseDto = new AddUpdateLanesResponseDto();
            string trackingId = Guid.NewGuid().ToString();

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.LaneServiceName, "AddUpdateLanesHandler", "AddUpdateLanesHandler initiated");

            try
            {
                if (request != null)
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.LaneServiceName, "AddUpdateLanesHandler", "AddUpdateLanesHandler started");                    

                    //Add New Lane
                    if (string.IsNullOrEmpty(request.addUpdateLaneDto.LaneId))
                    {
                        if(ValidateNewlane(request.addUpdateLaneDto))
                        {
                            if(await AddLane(request.addUpdateLaneDto))
                            {
                                addUpdateLanesResponseDto.Message = CommonMessages.OperationSuccessful;
                                addUpdateLanesResponseDto.HttpStatusCode = HttpStatusCode.OK;
                                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.LaneServiceName, "AddUpdateLanesHandler", "Lane Added");
                            }
                        }
                        else
                        {
                            addUpdateLanesResponseDto.Message = CommonMessages.BadRequest;
                            addUpdateLanesResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.LaneServiceName, "AddUpdateLanesHandler", "Bad request on new lane add.");
                        }
                    }
                    //Update lane or Disable Lane
                    else
                    {
                        //Disable Lane
                        if (IsOnlyLaneIdAndStatusProvided(request.addUpdateLaneDto))
                        {
                            var existingLaneData = await genericRepository.GetByQueryFirstOrDefault(x => x.LaneId == request.addUpdateLaneDto.LaneId);

                            if(existingLaneData != null)
                            {
                                await DisableStatus(existingLaneData, request.addUpdateLaneDto);
                                addUpdateLanesResponseDto.Message = CommonMessages.OperationSuccessful;
                                addUpdateLanesResponseDto.HttpStatusCode = HttpStatusCode.OK;
                                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.LaneServiceName, "DisableStatus", "Lane Status Updated");
                            }
                            else
                            {
                                addUpdateLanesResponseDto.Message = CommonMessages.NoRecordFound;
                                addUpdateLanesResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.LaneServiceName, "DisableStatus", $"No existing Lane Data is found with the provided LaneID : {request.addUpdateLaneDto.LaneId}");
                            }
                        }
                        //Update Lane
                        else
                        {                            
                            if(ValidateUpdateLane(request.addUpdateLaneDto))
                            {
                                var existingLaneData = await genericRepository.GetByQueryFirstOrDefault(x => x.LaneId == request.addUpdateLaneDto.LaneId);

                                if (existingLaneData != null)
                                {
                                    await UpdateLane(existingLaneData, request.addUpdateLaneDto);
                                    addUpdateLanesResponseDto.Message = CommonMessages.OperationSuccessful;
                                    addUpdateLanesResponseDto.HttpStatusCode = HttpStatusCode.OK;
                                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.LaneServiceName, "DisableStatus", "Lane Status Updated");
                                }
                                else
                                {
                                    addUpdateLanesResponseDto.Message = CommonMessages.NoRecordFound;
                                    addUpdateLanesResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.LaneServiceName, "DisableStatus", $"No existing Lane Data is found with the provided LaneID : {request.addUpdateLaneDto.LaneId}");
                                }
                            }
                            else
                            {
                                addUpdateLanesResponseDto.Message = CommonMessages.BadRequest;
                                addUpdateLanesResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.LaneServiceName, "AddUpdateLanesHandler", "Bad request on Updating lane.");
                            }
                        }
                    }
                }
                else
                {
                    addUpdateLanesResponseDto.Message = CommonMessages.BadRequest;
                    addUpdateLanesResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception ex)
            {
                addUpdateLanesResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                addUpdateLanesResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.LaneServiceName, "AddUpdateLanesHandler", ex.ToString());

            }
            return addUpdateLanesResponseDto;
        }

        private bool IsOnlyLaneIdAndStatusProvided(AddUpdateLaneDto dto)
        {
            return (!string.IsNullOrEmpty(dto.LaneId) && dto.LaneStatus != null) &&
                   (string.IsNullOrEmpty(dto.CentreId) && string.IsNullOrEmpty(dto.LaneType) &&
                   string.IsNullOrEmpty(dto.LaneName) && string.IsNullOrEmpty(dto.LaneDescription) &&
                   string.IsNullOrEmpty(dto.VirtualLaneId)) ;
        }

        private async Task<bool> AddLane(AddUpdateLaneDto newlaneData)
        {
            bool laneAdded = false;

            Lane laneData;

            laneData = mapper.Map<Lane>(newlaneData);

            laneData.LaneId = Guid.NewGuid().ToString().ToUpper();
            laneData.LastRecordTransactionDateTime = DateTime.UtcNow;
            laneData.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
            laneData.VirtualLaneId = laneData.LaneType.ToUpper() == CommonConstants.Virtual ? laneData.VirtualLaneId : null;
            laneData.LaneStatus = CommonConstants.LaneStatus;
            laneData.DefaultCapacity = CommonConstants.DefaultCapacity;
            await genericRepository.Add(laneData);
            await unitOfWork.SaveChanges();
            laneAdded = true;
             
            return laneAdded;
        }

        private async Task<bool> UpdateLane(Lane existingLaneData, AddUpdateLaneDto requestData)
        {
            bool laneUpdated = false;
            existingLaneData.LastRecordTransactionDateTime = DateTime.UtcNow;
            existingLaneData.LastRecordTransactionTypeCode = CommonConstants.UpdateTranTypeCode;
            existingLaneData.LaneDescription = requestData.LaneDescription;            
            genericRepository.Update(existingLaneData);
            await unitOfWork.SaveChanges();
            laneUpdated = true;            
            
            return laneUpdated;
        }
        private async Task<bool> DisableStatus(Lane existingLaneData, AddUpdateLaneDto requestData)
        {
            bool statusDisabled = false;

            existingLaneData.LastRecordTransactionDateTime = DateTime.UtcNow;
            existingLaneData.LastRecordTransactionTypeCode = CommonConstants.UpdateTranTypeCode;
            existingLaneData.LaneStatus = (bool)requestData.LaneStatus;
            genericRepository.Update(existingLaneData);
            await unitOfWork.SaveChanges();
            statusDisabled = true;                                

            return statusDisabled;
        }

        private bool ValidateNewlane(AddUpdateLaneDto newLaneData)
        {
            return ( !string.IsNullOrEmpty(newLaneData.LaneName) && !string.IsNullOrEmpty(newLaneData.LaneDescription) && !string.IsNullOrEmpty(newLaneData.LaneType));
        }

        private  bool ValidateUpdateLane(AddUpdateLaneDto updateLaneData)
        {
            return (!string.IsNullOrEmpty(updateLaneData.LaneId) || !string.IsNullOrEmpty(updateLaneData.LaneName) || string.IsNullOrEmpty(updateLaneData.LaneDescription) || string.IsNullOrEmpty(updateLaneData.LaneType));
        }

    }
}


