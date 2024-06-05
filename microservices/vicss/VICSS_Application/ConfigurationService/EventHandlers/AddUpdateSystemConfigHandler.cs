namespace VICSS.Service.ConfigurationService.EventHandlers
{
    using System.Net;
    using System.Text.Json;
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Configuration;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.ConfigurationService.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.ConfigurationService;

    public class AddUpdateSystemConfigHandler : IRequestHandler<SystemConfigRequestDto, SystemConfigResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<ConfigurationServiceDBContext, SystemConfig> genericRepository;
        private readonly IUnitOfWork<ConfigurationServiceDBContext> unitOfWork;
        private readonly ILogger<AddUpdateSystemConfigHandler> logger;

        public AddUpdateSystemConfigHandler(IMapper mapper, IGenericRepository<ConfigurationServiceDBContext, SystemConfig> genericRepository, IUnitOfWork<ConfigurationServiceDBContext> unitOfWork, ILogger<AddUpdateSystemConfigHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        public async Task<SystemConfigResponseDto> Handle(SystemConfigRequestDto request, CancellationToken cancellationToken)
        {
            SystemConfigResponseDto response = new SystemConfigResponseDto();
            string trackingId = Guid.NewGuid().ToString();            
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.ConfigurationService, "AddUpdateSystemConfigHandler", $"AddUpdateSystemConfigHandler initiated with data {JsonSerializer.Serialize(request)}");
                
                if (request == null || request.addUpdateSystemConfigRequestDto == null)
                {
                    response.Message = CommonMessages.OperationUnsuccessful;
                    response.HttpStatusCode = HttpStatusCode.BadRequest;

                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.ConfigurationService, "AddUpdateSystemConfigHandler", "Bad Request");                    
                }
                //Add new System config
                else if (string.IsNullOrEmpty(request.addUpdateSystemConfigRequestDto.Id) && IsValidRequestForAdding(request.addUpdateSystemConfigRequestDto))
                {
                    bool status = await AddSystemConfig(request.addUpdateSystemConfigRequestDto);
                    response.Message = CommonMessages.OperationSuccessful;
                    response.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSystemConfigHandler", $"Data Added {JsonSerializer.Serialize(request)}");                    
                }
                //Update System Config
                else if(!string.IsNullOrEmpty(request.addUpdateSystemConfigRequestDto.Id) && IsValidRequestForUpdating(request.addUpdateSystemConfigRequestDto))
                {                                           
                    if (await UpdateSystemConfig(request.addUpdateSystemConfigRequestDto))
                    {                            
                        response.Message = CommonMessages.OperationSuccessful;
                        response.HttpStatusCode = HttpStatusCode.OK;
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSystemConfigHandler", $"Data Updated {JsonSerializer.Serialize(request)}");
                    }
                    else
                    {
                        response.Message = CommonMessages.NoRecordFound;
                        response.HttpStatusCode = HttpStatusCode.NotFound;
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSystemConfigHandler", "No Record Found");
                    }                                        
                }

            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.InternalServerError;
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.ConfigurationService, "AddUpdateSystemConfigHandler", ex);                
            }

            return response;
        }


        private async Task<bool> AddSystemConfig(SystemConfigDto systemConfigRequestDto)
        {
            bool isAdded = false;
            
            SystemConfig addSystemConfig = mapper.Map<SystemConfig>(systemConfigRequestDto);
            addSystemConfig.Id = Guid.NewGuid().ToString();
            addSystemConfig.LastRecordTransactionDateTime = DateTime.UtcNow;
            addSystemConfig.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
            addSystemConfig.LastRecordTransactionUserId = systemConfigRequestDto.UserId;
            await genericRepository.Add(addSystemConfig);
            await unitOfWork.SaveChanges();
            isAdded = true;            

            return isAdded;
        }

        private async Task<bool> UpdateSystemConfig(SystemConfigDto systemConfigRequestDto)
        {
            bool isUpdated = false;
            var systemConfigDetail = await genericRepository.GetByQueryFirstOrDefault(x => x.Id == systemConfigRequestDto.Id);

            if (systemConfigDetail != null)
            {
                systemConfigDetail.SystemConfigText = systemConfigRequestDto.SystemConfigText;
                systemConfigDetail.SystemConfigDescription = systemConfigRequestDto.SystemConfigDescription;
                systemConfigDetail.LastRecordTransactionDateTime = DateTime.UtcNow;
                systemConfigDetail.LastRecordTransactionTypeCode = CommonConstants.UpdateTranTypeCode;
                systemConfigDetail.LastRecordTransactionUserId = systemConfigRequestDto.UserId;
                genericRepository.Update(systemConfigDetail);
                await unitOfWork.SaveChanges();
                isUpdated = true;
            }            
            
            return isUpdated;
        }

        private bool IsValidRequestForAdding(SystemConfigDto systemConfigRequestDto)
        {
            bool isValidRequest = false;

            if(systemConfigRequestDto != null && 
                !string.IsNullOrEmpty(systemConfigRequestDto.SystemConfigId) &&
                !string.IsNullOrEmpty(systemConfigRequestDto.SystemConfigDescription) &&
                !string.IsNullOrEmpty(systemConfigRequestDto.SystemConfigText)
                )
            {
                isValidRequest = true;
            }

            return isValidRequest;
        }

        private bool IsValidRequestForUpdating(SystemConfigDto systemConfigRequestDto)
        {
            bool isValidRequest = false;

            if (systemConfigRequestDto != null &&
                !string.IsNullOrEmpty(systemConfigRequestDto.SystemConfigId) &&
                !string.IsNullOrEmpty(systemConfigRequestDto.SystemConfigDescription) &&
                !string.IsNullOrEmpty(systemConfigRequestDto.SystemConfigText) &&
                !string.IsNullOrEmpty(systemConfigRequestDto.Id)
                )
            {
                isValidRequest = true;
            }

            return isValidRequest;
        }
    }
}

