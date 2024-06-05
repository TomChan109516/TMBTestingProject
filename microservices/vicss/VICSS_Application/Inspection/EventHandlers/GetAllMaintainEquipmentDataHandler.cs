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

    public class GetAllMaintainEquipmentDataHandler : IRequestHandler<SearchMaintainEquipmentDataRequestDto, SearchMaintainEquipmentDataResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, Equipment> genericRepository;
        private readonly ILogger<GetAllMaintainEquipmentDataHandler> logger;

        public GetAllMaintainEquipmentDataHandler(IMapper mapper, IGenericRepository<InspectionDBContext, Equipment> genericRepository, ILogger<GetAllMaintainEquipmentDataHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<SearchMaintainEquipmentDataResponseDto> Handle(SearchMaintainEquipmentDataRequestDto searchMaintainEquipmentDataRequestDto, CancellationToken cancellationToken)
        {
            SearchMaintainEquipmentDataResponseDto searchMaintainEquipmentDataResponseDto = new();
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchMaintainEquipmentDataHandler", "SearchMaintainEquipmentDataHandler initiated");
                var equipments = await genericRepository.GetByQuery(i => i.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode, param => param.Station);

                if (equipments != null)
                {
                    searchMaintainEquipmentDataResponseDto.searchMaintainEquipmentData = mapper.Map<List<SearchMaintainEquipmentDataDto>>(equipments);
                    searchMaintainEquipmentDataResponseDto.HttpStatusCode = HttpStatusCode.OK;



                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchMaintainEquipmentDataHandler", "SearchMaintainEquipmentDataHandler completed");
                }
                else
                {
                    searchMaintainEquipmentDataResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchMaintainEquipmentDataHandler", "SearchMaintainEquipmentDataHandler completed");
                }
                
            }
            catch (Exception ex)
            {
                searchMaintainEquipmentDataResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                searchMaintainEquipmentDataResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchMaintainEquipmentDataHandler", ex.ToString());
            }
            return searchMaintainEquipmentDataResponseDto;
        }
      
    }
}





