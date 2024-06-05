namespace VICSS.Service.ConfigurationService.EventHandlers
{
    using System.Net;
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Configuration;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.ConfigurationService.Domain;
    using VICSS.Shared.Models.Common;

    public class DisableSystemConfigHandler : IRequestHandler<DisableSystemConfigRequestDto, DisableSystemConfigResponseDto>
    {
        private readonly IGenericRepository<ConfigurationServiceDBContext, SystemConfig> genericRepository;
        private readonly ILogger<DisableSystemConfigHandler> logger;        
        private readonly IUnitOfWork<ConfigurationServiceDBContext> unitOfWork;
        public DisableSystemConfigHandler(
            IGenericRepository<ConfigurationServiceDBContext, SystemConfig> genericRepository,
            IUnitOfWork<ConfigurationServiceDBContext> unitOfWork,
            ILogger<DisableSystemConfigHandler> logger
            )
        {
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;            
            this.logger = logger;
        }
        public async Task<DisableSystemConfigResponseDto> Handle(DisableSystemConfigRequestDto request, CancellationToken cancellationToken)
        {
            DisableSystemConfigResponseDto response = new();
            string trackingId = Guid.NewGuid().ToString();
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.ConfigurationService, "DisableSystemConfigHandler", "DisableSystemConfigHandler Initiated.");            

            try
            {
                if (request == null || request?.disableSystemConfig == null)
                {                    
                    response.HttpStatusCode = HttpStatusCode.BadRequest;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "DisableSystemConfigHandler", "Bad Request");                    
                }
                else
                {
                    var existingSystemConfig = await genericRepository.GetByQueryFirstOrDefault(x => x.Id == request.disableSystemConfig.Id);
                    if (existingSystemConfig != null)
                    {                        
                        if (existingSystemConfig.LastRecordTransactionTypeCode == CommonConstants.DeleteTranTypeCode)
                        {
                            response.HttpStatusCode = HttpStatusCode.InternalServerError;
                            response.Message = CommonErrorMessage.InternalServerError;
                            logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.ConfigurationService, "DisableSystemConfigHandler", "Record status already deleted");
                        }
                        else
                        {
                            existingSystemConfig.LastRecordTransactionTypeCode = CommonConstants.DeleteTranTypeCode;
                            existingSystemConfig.LastRecordTransactionDateTime = DateTime.UtcNow;
                            existingSystemConfig.LastRecordTransactionUserId = request?.disableSystemConfig?.UserId;
                            genericRepository.Update(existingSystemConfig);
                            await unitOfWork.SaveChanges();

                            response.Message = CommonMessages.OperationSuccessful;
                            response.HttpStatusCode = HttpStatusCode.OK;
                            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.ConfigurationService, "DisableSystemConfigHandler", "Record status updated");
                        }                        
                    }
                    else
                    {
                        response.Message = CommonMessages.NoRecordFound;
                        response.HttpStatusCode = HttpStatusCode.NotFound;
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.ConfigurationService, "DisableSystemConfigHandler", "Record Not Found");
                    }
                }
            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.ConfigurationService, "DisableSystemConfigHandler", ex.ToString());                
            }

            return response;
        }        
    }
}