namespace VICSS.Service.CentreManagement.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Centre;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.CentreManagement.Domain;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Common;

    public class GetCentresDetailByCentreIdHandler : IRequestHandler<GetCentresDetailByCentreIdRequestDto, GetCentresDetailByCentreIdResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<CentreDBContext, Centre> genericRepository;
        private readonly ILogger<GetCentresDetailByCentreIdHandler> logger;

        public GetCentresDetailByCentreIdHandler(IMapper mapper, IGenericRepository<CentreDBContext, Centre> genericRepository, ILogger<GetCentresDetailByCentreIdHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }
        public async Task<GetCentresDetailByCentreIdResponseDto> Handle(GetCentresDetailByCentreIdRequestDto request, CancellationToken cancellationToken)
        {
            GetCentresDetailByCentreIdResponseDto getCentresDetailByCentreIdResponseDto = new GetCentresDetailByCentreIdResponseDto();
            List<Centre>? centres = new List<Centre>();
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "GetCentresDetailByCentreIdHandler", "GetCentresDetailByCentreIdHandler initiated");

                if (request.centreId?.Count > 0)
                {
                    centres = (List<Centre>)await genericRepository.GetByQuery(x => request.centreId.Contains(x.CentreId), param1 => param1.CentreHolidays);

                    getCentresDetailByCentreIdResponseDto.CentresDto = mapper.Map<List<CentresDto>>(centres);
                    if (getCentresDetailByCentreIdResponseDto.CentresDto?.Count > 0)
                    {
                        getCentresDetailByCentreIdResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        getCentresDetailByCentreIdResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    getCentresDetailByCentreIdResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception ex)
            {
                getCentresDetailByCentreIdResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                getCentresDetailByCentreIdResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "GetCentresDetailByCentreIdHandler", ex.ToString());
                //To Do
            }

            return getCentresDetailByCentreIdResponseDto;
        }
    }
}
