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

    /// <summary>
    /// Handles the retrieval of headlamp configuration.
    /// </summary>
    public class GetHeadLampConfigHandler : IRequestHandler<GetHeadLampConfigRequestDto, GetHeadLampConfigResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, Test> genericTestRepository;
        private readonly ILogger<GetHeadLampConfigHandler> logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="GetHeadLampConfigHandler"/> class.
        /// </summary>
        public GetHeadLampConfigHandler(IMapper mapper, IGenericRepository<InspectionDBContext, Test> genericTestRepository,ILogger<GetHeadLampConfigHandler> logger)
        {
            this.mapper = mapper;
            this.genericTestRepository = genericTestRepository;
            this.logger = logger;
        }

        /// <summary>
        /// Handles the request to get headlamp configuration.
        /// </summary>
        public async Task<GetHeadLampConfigResponseDto> Handle(GetHeadLampConfigRequestDto request, CancellationToken cancellationToken)
        {
            GetHeadLampConfigResponseDto response = new();
            response.HttpStatusCode = HttpStatusCode.NotFound;
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetHeadLampConfigHandler", "GetHeadLampConfigHandler started");
                if (request != null && !string.IsNullOrEmpty(request.InspectionId))
                {
                    var tests = await genericTestRepository.GetByQuery(
                              test => test.InspectionId == request.InspectionId && test.TestItems.TestItem == CommonConstants.HeadlampTest,
                              param => param.TestConfigHeadLamps);

                    var test = tests.FirstOrDefault();
                    var headLampConfig = test?.TestConfigHeadLamps.FirstOrDefault();

                    if (test == null || headLampConfig == null)
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetHeadLampConfigHandler", "No Data Found");
                        response.ErrorMessage = CommonMessages.NoTestDataFound;
                        return response;
                    }

                    response = mapper.Map<GetHeadLampConfigResponseDto>(headLampConfig);
                    if (response == null)
                    {
                        response.ErrorMessage = CommonMessages.NoTestDataFound;
                    }
                    else
                    {
                        response.HttpStatusCode = HttpStatusCode.OK;
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetHeadLampConfigHandler", "Data Found");
                    }
                }
                else
                {
                    response.ErrorMessage = CommonErrorMessage.BadRequest;
                    response.HttpStatusCode = HttpStatusCode.BadRequest;
                }

            }
            catch (Exception ex)
            {

                response.ErrorMessage = CommonErrorMessage.InternalServerError;
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetHeadLampConfigHandler", ex.ToString());
            }
            return response;
        }
    }
}
