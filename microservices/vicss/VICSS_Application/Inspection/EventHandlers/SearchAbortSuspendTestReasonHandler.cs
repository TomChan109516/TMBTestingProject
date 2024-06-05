namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using VICSS.Service.Inspection.Domain;
    using MediatR;
    using System.Linq.Expressions;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Helper;
    using System.Net;
    using VICSS.Shared.Models.Common;

    public class SearchAbortSuspendTestReasonHandler : IRequestHandler<SearchAbortSuspendTestReasonRequestDto, SearchAbortSuspendTestReasonResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, AbortSuspendTestReason> genericRepository;
        private readonly ILogger<SearchAbortSuspendTestReasonHandler> logger;

        public SearchAbortSuspendTestReasonHandler(IMapper mapper, IGenericRepository<InspectionDBContext, AbortSuspendTestReason> genericRepository, ILogger<SearchAbortSuspendTestReasonHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<SearchAbortSuspendTestReasonResponseDto> Handle(SearchAbortSuspendTestReasonRequestDto searchAbortSuspendTestReasonRequestDto, CancellationToken cancellationToken)
        {
            SearchAbortSuspendTestReasonResponseDto searchAbortSuspendTestReasonResponseDto = new SearchAbortSuspendTestReasonResponseDto();
            List<AbortSuspendTestReason>? abortSuspendTestReasons = null;
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchAbortSuspendTestReasonHandler", "SearchAbortSuspendTestReasonHandler initiated");

                if (CommonMethods.AreAllStringPropertiesNullOrEmpty(searchAbortSuspendTestReasonRequestDto))
                {
                    abortSuspendTestReasons = (List<AbortSuspendTestReason>)await genericRepository.GetAll();
                }
                else
                {
                    abortSuspendTestReasons = (List<AbortSuspendTestReason>)await genericRepository.GetByQuery(CreateSearchQuery(searchAbortSuspendTestReasonRequestDto));
                }
                searchAbortSuspendTestReasonResponseDto.searchAbortSuspendTestReason = mapper.Map<List<SearchAbortSuspendTestReasonDto>>(abortSuspendTestReasons);
                if (searchAbortSuspendTestReasonResponseDto.searchAbortSuspendTestReason.Count > 0)
                {
                    searchAbortSuspendTestReasonResponseDto.HttpStatusCode = HttpStatusCode.OK;
                }
                else
                {
                    searchAbortSuspendTestReasonResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                }
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchAbortSuspendTestReasonHandler", "SearchAbortSuspendTestReasonHandler completed");

            }
            catch (Exception ex)
            {
                searchAbortSuspendTestReasonResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchAbortSuspendTestReasonHandler", ex.ToString());

            }

            return searchAbortSuspendTestReasonResponseDto;
        }

        private Expression<Func<AbortSuspendTestReason, bool>> CreateSearchQuery(SearchAbortSuspendTestReasonRequestDto request)
        {
            return abortSuspendTestReason =>
                (string.IsNullOrEmpty(request.Id) || abortSuspendTestReason.Id == request.Id) &&
                (string.IsNullOrEmpty(request.Code) || abortSuspendTestReason.Code == request.Code) &&
                (string.IsNullOrEmpty(request.Description) || abortSuspendTestReason.Description == request.Description) &&
                (string.IsNullOrEmpty(request.ReasonType) || abortSuspendTestReason.ReasonType == request.ReasonType);
        }
    }
}