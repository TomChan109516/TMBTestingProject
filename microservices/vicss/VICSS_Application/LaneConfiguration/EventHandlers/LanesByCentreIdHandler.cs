namespace VICSS.Service.LaneConfiguration.EventHandlers
{
    using System.Net;
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.LaneConfiguration.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.LaneConfiguration;

    public class LanesByCentreIdHandler :  IRequestHandler<GetLanesByCentreIdRequestDto, GetLanesByCenterIdResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<LaneConfigurationDBContext, Lane> genericRepository;
        private readonly ILogger<LanesByCentreIdHandler> logger;
        public LanesByCentreIdHandler(IMapper mapper, IGenericRepository<LaneConfigurationDBContext, Lane> genericRepository, ILogger<LanesByCentreIdHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }
        public async Task<GetLanesByCenterIdResponseDto> Handle(GetLanesByCentreIdRequestDto request, CancellationToken cancellationToken)
        {
            GetLanesByCenterIdResponseDto getLanesByCenterIdResponseDto = new GetLanesByCenterIdResponseDto();
            List<Lane> lanesDetail = new List<Lane>();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "LanesByCentreIdHandler", "LanesByCentreIdHandler initiated");

                if (request.centreId.Count > 0)
                {
                    lanesDetail = (List<Lane>)await genericRepository.GetByQuery(x =>  request.centreId.Contains(x.CentreId));

                    getLanesByCenterIdResponseDto.LanesDto = mapper.Map<List<LanesByCenterIdDto>>(lanesDetail);

                    if(getLanesByCenterIdResponseDto.LanesDto?.Count > 0)
                    {
                        getLanesByCenterIdResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        getLanesByCenterIdResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    getLanesByCenterIdResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                }

            }
            catch (Exception ex)
            {
                getLanesByCenterIdResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                getLanesByCenterIdResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "LanesByCentreIdHandler", ex.ToString());
            }

            return getLanesByCenterIdResponseDto;
        }
    }
}
