namespace VICSS.Service.Inspection.EventHandlers
{
    using System.Net;
    using System.Reflection;
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;
    public class InspectionDetailsByInspectionIdHandler : IRequestHandler<GetInspectionDetailsByInspectionIdRequestDto, GetInspectionDetailsByInspectionIdResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, Inspection> genericRepository;
        private readonly ILogger<InspectionDetailsByInspectionIdHandler> logger;

        public InspectionDetailsByInspectionIdHandler(IMapper mapper , IGenericRepository<InspectionDBContext, Inspection> genericRepository, ILogger<InspectionDetailsByInspectionIdHandler> logger) 
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<GetInspectionDetailsByInspectionIdResponseDto> Handle(GetInspectionDetailsByInspectionIdRequestDto request, CancellationToken cancellationToken)
        {
            string trackingId = Guid.NewGuid().ToString();
            GetInspectionDetailsByInspectionIdResponseDto getInspectionDetailsByInspectionIdResponseDto = new GetInspectionDetailsByInspectionIdResponseDto();
            List<Inspection> InspectionDetails = null;
            string errorTrackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, errorTrackingId, "Inspection", MethodBase.GetCurrentMethod()?.Name, "InspectionDetailsByInspectionIdHandler initiated");

                //To Do
                if (request.InspectionId != null) 
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "InspectionDetailsByInspectionIdHandler", $"DB Work will start to get Appointment details at {DateTime.Now.ToString("HH:mm:ss tt")}");

                    InspectionDetails = (List<Inspection>)await genericRepository.GetByQuery(x => request.InspectionId.Contains(x.InspectionId), param1 => param1.InspectionExamCodes);

                    getInspectionDetailsByInspectionIdResponseDto.InspectionDetailsDtos = mapper.Map<List<InspectionDetailsDto>>(InspectionDetails);

                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "InspectionDetailsByInspectionIdHandler", $"DB Work Finished at {DateTime.Now.ToString("HH:mm:ss tt")}");

                    if (getInspectionDetailsByInspectionIdResponseDto.InspectionDetailsDtos?.Count > 0)
                    {
                        getInspectionDetailsByInspectionIdResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        getInspectionDetailsByInspectionIdResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    getInspectionDetailsByInspectionIdResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                }

            }
            catch (Exception ex) 
            {
                getInspectionDetailsByInspectionIdResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                getInspectionDetailsByInspectionIdResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, errorTrackingId, "Inspection", MethodBase.GetCurrentMethod()?.Name, ex.ToString());
            }

            return getInspectionDetailsByInspectionIdResponseDto;
        }
    }
}
