namespace VICSS.Service.ConfigurationService.EventHandlers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Net;
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Configuration;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.ConfigurationService.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.ConfigurationService;

    public class SearchSystemConfigHandler : IRequestHandler<Domain.SearchSystemConfigRequestDto, SearchSystemConfigResponseDto>
    {
        private readonly IGenericRepository<ConfigurationServiceDBContext, SystemConfig> genericRepository;
        private readonly IMapper mapper;
        private readonly ILogger<SearchSystemConfigHandler> logger;
        public SearchSystemConfigHandler(
            IGenericRepository<ConfigurationServiceDBContext, SystemConfig> genericRepository,
            IMapper mapper,
            ILogger<SearchSystemConfigHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }
        public async Task<SearchSystemConfigResponseDto> Handle(Domain.SearchSystemConfigRequestDto request, CancellationToken cancellationToken)
        {
            SearchSystemConfigResponseDto response = new();
            List<SystemConfig> systemConfigs = new List<SystemConfig>();
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.ConfigurationService, "SearchSystemConfigHandler", "SearchSystemConfigHandler initiated");

                if (AreAllStringPropertiesNullOrEmpty(request.searchSystemConfigRequestDto))
                {
                    systemConfigs = (List<SystemConfig>)await genericRepository.GetByQuery(x => x.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode);                    
                }
                else
                {
                    systemConfigs = (List<SystemConfig>)await genericRepository.GetByQuery(CreateSearchQuery(request.searchSystemConfigRequestDto));                                        
                }

                if (systemConfigs.Count == 0)
                {
                    response.HttpStatusCode = HttpStatusCode.NotFound;
                }
                else
                {
                    response.searchSystemConfig = mapper.Map<List<SystemConfigDto>>(systemConfigs);
                    response.HttpStatusCode = HttpStatusCode.OK;
                }

            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.ConfigurationService, "SearchSystemConfigHandler", ex.ToString());

            }
            return response;
        }

        private Expression<Func<SystemConfig, bool>> CreateSearchQuery(VICSS.Shared.Models.ConfigurationService.SearchSystemConfigRequestDto request)
        {
            return systemConfig =>
            (string.IsNullOrEmpty(request.SystemConfigId) || systemConfig.SystemConfigId == request.SystemConfigId) &&

            (string.IsNullOrEmpty(request.SystemConfigDescription) || systemConfig.SystemConfigDescription == request.SystemConfigDescription) &&
            (systemConfig.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode);
        }

        public static bool AreAllStringPropertiesNullOrEmpty(object obj)
        {
            return obj.GetType().GetProperties()
                .Where(p => p.PropertyType == typeof(string))
                .All(p => string.IsNullOrEmpty((string)p.GetValue(obj)));
        }
    }
}