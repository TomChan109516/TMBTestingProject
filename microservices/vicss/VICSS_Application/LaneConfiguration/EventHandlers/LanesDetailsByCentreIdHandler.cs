namespace VICSS.Service.LaneConfiguration.EventHandlers
{
    using AutoMapper;
    using System.Net;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Entities.LaneConfiguration;
    using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
    using VICSS.Service.LaneConfiguration.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.LaneConfiguration;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;

    public class LanesDetailsByCentreIdHandler : IRequestHandler<LanesDetailsByCentreIdRequestDto, LanesDetailsByCenterIdResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<LaneConfigurationDBContext, Lane> genericRepository;
        private readonly ILogger<LanesDetailsByCentreIdHandler> logger;

        public LanesDetailsByCentreIdHandler(IMapper mapper, IGenericRepository<LaneConfigurationDBContext, Lane> genericRepository, ILogger<LanesDetailsByCentreIdHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<LanesDetailsByCenterIdResponseDto> Handle(LanesDetailsByCentreIdRequestDto request, CancellationToken cancellationToken)
        {
            LanesDetailsByCenterIdResponseDto lanesDetailsByCentreId = new LanesDetailsByCenterIdResponseDto();
            List<Lane> lanesDetail = new List<Lane>();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "LanesDetailsByCentreIdHandler", "LanesDetailsByCentreIdHandler initiated");

                if (request.centreId.Count > 0)
                {
                    lanesDetail = (List<Lane>)await genericRepository.GetByQuery(x => request.centreId.Contains(x.CentreId), param => param.LaneTimeslot);

                    lanesDetailsByCentreId.LanesDto = mapper.Map<List<LanesByCenterIdDto>>(lanesDetail);

                    if (lanesDetailsByCentreId.LanesDto?.Count > 0)
                    {
                        lanesDetailsByCentreId.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        lanesDetailsByCentreId.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    lanesDetailsByCentreId.HttpStatusCode = HttpStatusCode.NotFound;
                }

            }
            catch (Exception ex)
            {
                lanesDetailsByCentreId.HttpStatusCode = HttpStatusCode.InternalServerError;
                lanesDetailsByCentreId.ErrorMessage = CommonErrorMessage.ErrorMessage;

                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.LaneServiceName, "LanesDetailsByCentreIdHandler", ex.ToString());
            }

            return lanesDetailsByCentreId;
        }
    }
}
