namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;

    public class GetUnconfirmedListHandler : IRequestHandler<GetUnconfirmedListRequestDto, GetUnconfirmedListResponseDto>
    {
        private readonly IGenericRepository<InspectionDBContext, UnconfirmedList> genericRepository;
        private readonly IMapper mapper;
        private readonly ILogger<GetUnconfirmedListHandler> logger;

        public GetUnconfirmedListHandler(IGenericRepository<InspectionDBContext, UnconfirmedList> genericRepository,
            IMapper mapper, ILogger<GetUnconfirmedListHandler> logger)
        {
            this.genericRepository = genericRepository;
            this.mapper = mapper;
            this.logger = logger;

        }
        public async Task<GetUnconfirmedListResponseDto> Handle(GetUnconfirmedListRequestDto request, CancellationToken cancellationToken)
        {
            GetUnconfirmedListResponseDto response = new();
            string trackingId = Guid.NewGuid().ToString();
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetUnconfirmedListHandler", "GetUnconfirmedListHandler initiated");
            response.HttpStatusCode= HttpStatusCode.NotFound;
            try
            {
                var unconfirmedList = await genericRepository.GetAll();
                if (unconfirmedList.Any())
                {
                    var unconfirmedListDto = mapper.Map<List<UnconfirmedListDto>>(unconfirmedList);
                    if (unconfirmedListDto != null)
                    {
                        response.UnconfirmedList = unconfirmedListDto;
                        response.HttpStatusCode = HttpStatusCode.OK;
                    }
                }
            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetUnconfirmedListHandler", ex.ToString());
            }
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetUnconfirmedListHandler", "GetUnconfirmedListHandler service completed");
            return response;
        }
    }
}
