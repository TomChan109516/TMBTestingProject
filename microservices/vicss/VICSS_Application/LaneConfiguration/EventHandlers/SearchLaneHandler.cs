namespace VICSS.Service.LaneConfiguration.EventHandlers
{
    using System.Linq.Expressions;
    using System.Net;
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.LaneConfiguration.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.LaneConfiguration;

    public class SearchLaneHandler : IRequestHandler<Domain.SearchLaneRequestDto, SearchLaneResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<LaneConfigurationDBContext, Lane> genericRepository;
        private readonly ILogger<SearchLaneHandler> logger;
        public SearchLaneHandler(IMapper mapper, IGenericRepository<LaneConfigurationDBContext, Lane> genericRepository, ILogger<SearchLaneHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }
        public async Task<SearchLaneResponseDto> Handle(Domain.SearchLaneRequestDto request, CancellationToken cancellationToken)
        {
            SearchLaneResponseDto searchLaneResponseDto = new SearchLaneResponseDto();

            List<Lane> lanesDetail = new List<Lane>();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "GetLaneHandler", "GetLaneHandler initiated");
                if (!string.IsNullOrEmpty(request.SearchLaneRequest.CentreId))
                {
                    lanesDetail = (List<Lane>)await genericRepository.GetByQuery(CreateSearchQuery(request.SearchLaneRequest));

                    var laneFilteredData = mapper.Map<List<LanesByCenterIdDto>>(lanesDetail);

                    searchLaneResponseDto.lanes = (from leftData in laneFilteredData
                                                                             join rightData in laneFilteredData on leftData.LaneId equals rightData.VirtualLaneId
                                                                             into joinedData from jD in joinedData.DefaultIfEmpty()
                                                                             select new LanesByCenterIdDto
                                                                             {                                                                                 
                                                                                 LaneId = leftData.LaneId,
                                                                                 LaneStatus = leftData.LaneStatus,
                                                                                 LaneDescription = leftData.LaneDescription,
                                                                                 LaneName = leftData.LaneName,
                                                                                 PhysicalLaneName = jD?.LaneName,
                                                                                 LaneType = leftData.LaneType,
                                                                                 CentreId = leftData.CentreId
                                                                             }).ToList();                    

                    if (searchLaneResponseDto.lanes.Count > 0)
                    {
                        searchLaneResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        searchLaneResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    searchLaneResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }

            }
            catch (Exception ex)
            {
                searchLaneResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                searchLaneResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;

                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "GetLaneHandler", ex.ToString());
            }

            return searchLaneResponseDto;
        }

        private Expression<Func<Lane, bool>> CreateSearchQuery(Shared.Models.LaneConfiguration.SearchLaneRequestDto searchLaneRequestDto)
        {
            Expression<Func<Lane, bool>> query = null;

            query = x => (x.CentreId == searchLaneRequestDto.CentreId && (string.IsNullOrEmpty(searchLaneRequestDto.LaneId) || x.LaneId == searchLaneRequestDto.LaneId) && (string.IsNullOrEmpty(searchLaneRequestDto.LaneName) || x.LaneName == searchLaneRequestDto.LaneName));

            return query;
        }
    }
}
