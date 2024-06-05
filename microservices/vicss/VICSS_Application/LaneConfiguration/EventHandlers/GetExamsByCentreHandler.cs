namespace VICSS.Service.LaneConfiguration.EventHandlers
{
    using System.Net;
    using System.Reflection;
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.DataAccesss.Entities.LaneConfiguration;
    using VICSS.Service.LaneConfiguration.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.LaneConfiguration;

    public class GetExamsByCentreHandler : IRequestHandler<GetExamsByCentreRequestDto, GetExamsByCentreResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<LaneConfigurationDBContext, LaneAvailInspType> genericRepository;
        private readonly IGenericRepository<LaneConfigurationDBContext, Lane> laneGenericRepository;
        private readonly ILogger<GetExamsByCentreHandler> logger;

        public GetExamsByCentreHandler(IMapper mapper, IGenericRepository<LaneConfigurationDBContext, LaneAvailInspType> genericRepository, IGenericRepository<LaneConfigurationDBContext, Lane> lanegenericRepository, ILogger<GetExamsByCentreHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.laneGenericRepository = lanegenericRepository;
            this.logger = logger;
        }
        public async Task<GetExamsByCentreResponseDto> Handle(GetExamsByCentreRequestDto request, CancellationToken cancellationToken)
        {
            GetExamsByCentreResponseDto getLanesByCenterIdResponseDto = new GetExamsByCentreResponseDto();
            List<Lane> lanesDetail = new List<Lane>();
            List<LaneAvailInspType> laneAvailInspType = new List<LaneAvailInspType>();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "GetExamsByCentreHandler", "GetExamsByCentreHandler initiated");

                if (request.centreId != null)
                { 
                    //Can be optimised..
                    lanesDetail = (List<Lane>)await laneGenericRepository.GetByQuery(x => x.CentreId == request.centreId);
                    List<string> lanes = lanesDetail.Select(x => x.LaneId).ToList();

                    laneAvailInspType = (List<LaneAvailInspType>)await genericRepository.GetByQuery(x => lanes.Contains(x.LaneId));

                    getLanesByCenterIdResponseDto.ExamCodeByLaneIdDtos = mapper.Map<List<ExamCodeByLaneIdDto>>(laneAvailInspType);

                    if(getLanesByCenterIdResponseDto.ExamCodeByLaneIdDtos?.Count > 0)
                    {
                        getLanesByCenterIdResponseDto.HttpStatusCode = HttpStatusCode.OK;
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "GetExamsByCentreHandler", "Data Found");
                    }
                    else
                    {
                        getLanesByCenterIdResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "GetExamsByCentreHandler", "Data not Found");
                    }
                }
                else
                {
                    getLanesByCenterIdResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "GetExamsByCentreHandler", "Bad Request");
                }
            }
            catch (Exception ex)
            {
                getLanesByCenterIdResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                getLanesByCenterIdResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "GetExamsByCentreHandler", ex.ToString());
                //To Do
            }
            return getLanesByCenterIdResponseDto;
        }
    }
}
