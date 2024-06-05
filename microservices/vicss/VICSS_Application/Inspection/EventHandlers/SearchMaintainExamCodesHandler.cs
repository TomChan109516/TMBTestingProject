namespace VICSS.Service.Inspection.EventHandlers
{
    using System.Linq.Expressions;
    using System.Net;
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.Helper;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;

    public class SearchMaintainExamCodesHandler : IRequestHandler<SearchMaintainExamCodesRequestDto, SearchMaintainExamCodesResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, InspectionType> genericRepository;
        private readonly ILogger<SearchMaintainExamCodesHandler> logger;

        public SearchMaintainExamCodesHandler(IMapper mapper, IGenericRepository<InspectionDBContext, InspectionType> genericRepository, ILogger<SearchMaintainExamCodesHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<SearchMaintainExamCodesResponseDto> Handle(SearchMaintainExamCodesRequestDto searchMaintainExamCodesRequestDto, CancellationToken cancellationToken)
        {
            SearchMaintainExamCodesResponseDto searchMaintainExamCodesResponseDto = new SearchMaintainExamCodesResponseDto();
            List<InspectionType>? inspectionType = null;
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchMaintainExamCodesHandler", "SearchMaintainExamCodesHandler initiated");

                if (CommonMethods.AreAllStringPropertiesNullOrEmpty(searchMaintainExamCodesRequestDto.searchexamCodeDto))
                {
                    inspectionType = (List<InspectionType>)await genericRepository.GetAll();
                }
                else
                {
                    inspectionType = (List<InspectionType>)await genericRepository.GetByQuery(CreateSearchQuery(searchMaintainExamCodesRequestDto));
                }
                searchMaintainExamCodesResponseDto.ListMaintainExamCodes = mapper.Map<List<ExamCodeDto>>(inspectionType);
                if (searchMaintainExamCodesResponseDto.ListMaintainExamCodes?.Count > 0)
                {
                    searchMaintainExamCodesResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchMaintainExamCodesHandler", "SearchMaintainExamCodesHandler Data Found");
                }
                else
                {
                    searchMaintainExamCodesResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchMaintainExamCodesHandler", "SearchMaintainExamCodesHandler Data Not Found");
                }
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchMaintainExamCodesHandler", "SearchMaintainExamCodesHandler completed");
            }
            catch (Exception ex)
            {
                searchMaintainExamCodesResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                searchMaintainExamCodesResponseDto.ErrorMessage = CommonErrorMessage.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchMaintainExamCodesHandler", ex.ToString());

            }

            return searchMaintainExamCodesResponseDto;
        }

        private Expression<Func<InspectionType, bool>> CreateSearchQuery(SearchMaintainExamCodesRequestDto request)
        {
            return inspectionType =>
                (string.IsNullOrEmpty(request.searchexamCodeDto.ExamCode) || inspectionType.ExamCode == request.searchexamCodeDto.ExamCode) &&
                (string.IsNullOrEmpty(request.searchexamCodeDto.ExamClass) || inspectionType.ExamClass == request.searchexamCodeDto.ExamClass);
        }
    }
}
