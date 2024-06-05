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

    public class GetExamCodeHandler : IRequestHandler<GetExamCodeRequestDto, GetExamCodeResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, InspectionType> genericRepository;
        private readonly ILogger<GetExamCodeHandler> logger;

        public GetExamCodeHandler(IMapper mapper, IGenericRepository<InspectionDBContext, InspectionType> genericRepository, ILogger<GetExamCodeHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }
        public async Task<GetExamCodeResponseDto> Handle(GetExamCodeRequestDto getExamCodeRequestDto, CancellationToken cancellationToken)
        {
            GetExamCodeResponseDto getExamCodeResponseDto = new GetExamCodeResponseDto();
            List<InspectionType>? examCodes = new List<InspectionType>();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetExamCodeHandler", "GetExamCodeHandler initiated");

                //All Records
                if (getExamCodeRequestDto.status == CommonConstants.AllStatus)
                {
                    examCodes = (List<InspectionType>)await genericRepository.GetAll();
                }
                //Active Records
                else if (getExamCodeRequestDto.status == CommonConstants.ActiveStatus)
                {
                    examCodes = (List<InspectionType>)await genericRepository.GetByQuery(x => x.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode);
                }
                //Inactive Records
                else if (getExamCodeRequestDto.status == CommonConstants.InactiveStatus)
                {
                    examCodes = (List<InspectionType>)await genericRepository.GetByQuery(x => x.LastRecordTransactionTypeCode == CommonConstants.DeleteTranTypeCode);
                }
                else
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetExamCodeHandler", "Bad Request");
                    getExamCodeResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }

                getExamCodeResponseDto.ExamCodeDtos = mapper.Map<List<ExamCodeDto>>(examCodes);

                if(getExamCodeResponseDto.ExamCodeDtos?.Count > 0)
                {
                    getExamCodeResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetExamCodeHandler", "Data Found");
                }
                else
                {
                    getExamCodeResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetExamCodeHandler", "Data Not Found");
                }

            }
            catch (Exception ex)
            {
                getExamCodeResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                getExamCodeResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.InspectionServiceName, "GetExamCodeHandler", ex.ToString());
                //To Do
            }

            return getExamCodeResponseDto;
        }
    }
}
