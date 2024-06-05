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

    public class SearchSkipTestReasonHandler : IRequestHandler<SearchSkipTestReasonRequestDto, SearchSkipTestReasonResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, SkipTestReason> genericRepository;
        private readonly ILogger<SearchSkipTestReasonHandler> logger;

        public SearchSkipTestReasonHandler(IMapper mapper, IGenericRepository<InspectionDBContext, SkipTestReason> genericRepository, ILogger<SearchSkipTestReasonHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<SearchSkipTestReasonResponseDto> Handle(SearchSkipTestReasonRequestDto searchSkipTestReasonRequestDto, CancellationToken cancellationToken)
        {
            SearchSkipTestReasonResponseDto searchSkipTestReasonResponseDto = new SearchSkipTestReasonResponseDto();
            List<SkipTestReason>? skipTestReasons = null;
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchSkipTestReasonHandler", "SearchSkipTestReasonHandler initiated");

                if (CommonMethods.AreAllStringPropertiesNullOrEmpty(searchSkipTestReasonRequestDto))
                {
                    skipTestReasons = (List<SkipTestReason>)await genericRepository.GetAll();
                }
                else
                {
                    skipTestReasons = (List<SkipTestReason>)await genericRepository.GetByQuery(CreateSearchQuery(searchSkipTestReasonRequestDto));
                }
                searchSkipTestReasonResponseDto.searchSkipTestReason = mapper.Map<List<SearchSkipTestReasonDto>>(skipTestReasons);
                if (searchSkipTestReasonResponseDto.searchSkipTestReason.Count > 0)
                {
                    searchSkipTestReasonResponseDto.HttpStatusCode = HttpStatusCode.OK;
                }
                else
                {
                    searchSkipTestReasonResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                }
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchSkipTestReasonHandler", "SearchSkipTestReasonHandler completed");

            }
            catch (Exception ex)
            {
                searchSkipTestReasonResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchSkipTestReasonHandler", ex.ToString());

            }

            return searchSkipTestReasonResponseDto;
        }

        private Expression<Func<SkipTestReason, bool>> CreateSearchQuery(SearchSkipTestReasonRequestDto searchSkipTestReasonRequestDto)
        {
            return skipTestReason =>
                (string.IsNullOrEmpty(searchSkipTestReasonRequestDto.Id) || skipTestReason.Id == searchSkipTestReasonRequestDto.Id) &&
                (string.IsNullOrEmpty(searchSkipTestReasonRequestDto.TestType) || skipTestReason.TestType == searchSkipTestReasonRequestDto.TestType) &&
                (string.IsNullOrEmpty(searchSkipTestReasonRequestDto.Code) || skipTestReason.Code == searchSkipTestReasonRequestDto.Code) &&
                (string.IsNullOrEmpty(searchSkipTestReasonRequestDto.Description) || skipTestReason.Description.Contains(searchSkipTestReasonRequestDto.Description));
        }

    }

}