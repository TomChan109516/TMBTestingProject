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


    public class AddUpdateAbortSuspendTestReasonHandler : IRequestHandler<AddUpdateAbortSuspendTestReasonRequestDto, TestReasonResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, AbortSuspendTestReason> genericRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly ILogger<AddUpdateAbortSuspendTestReasonHandler> logger;

        public AddUpdateAbortSuspendTestReasonHandler(IMapper mapper, IGenericRepository<InspectionDBContext, AbortSuspendTestReason> genericRepository, IUnitOfWork<InspectionDBContext> unitOfWork, ILogger<AddUpdateAbortSuspendTestReasonHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        public async Task<TestReasonResponseDto> Handle(AddUpdateAbortSuspendTestReasonRequestDto request, CancellationToken cancellationToken)
        {
            TestReasonResponseDto data = new TestReasonResponseDto
            {
                Message = CommonMessages.OperationUnsuccessful,
                IsSuccess = false,
                HttpStatusCode = HttpStatusCode.BadRequest
            };
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateAbortSuspendTestReasonHandler", $"AddUpdateAbortSuspendTestReasonHandler initiated with RequestId: {request.Id}, Code: {request.Code}, Description: {request.Description}, ReasonType: {request.ReasonType}, ActiveIndicator: {request.ActiveIndicator}");

                AbortSuspendTestReason abortSuspendTestReason;

                if (string.IsNullOrEmpty(request.Id))
                {
                    // Validate request parameters
                    if (string.IsNullOrEmpty(request.Code) || string.IsNullOrEmpty(request.Description) || string.IsNullOrEmpty(request.ReasonType) || string.IsNullOrEmpty(request.UserId))
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateAbortSuspendTestReasonHandler", $"Bad request while adding AbortSuspendTestReason for RequestId: {request.Id} Code: {request.Code}, Description: {request.Description}, ReasonType: {request.ReasonType}, ActiveIndicator: {request.ActiveIndicator}");
                        data.Message = CommonMessages.BadRequest;
                        return data;
                    }
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateAbortSuspendTestReasonHandler", $"Adding new AbortSuspendTestReason with Code: {request.Code}, Description: {request.Description}, ReasonType: {request.ReasonType}, ActiveIndicator: {request.ActiveIndicator}");

                    // Add new AbortSuspendTestReason
                    abortSuspendTestReason = new AbortSuspendTestReason
                    {
                        Id = Guid.NewGuid().ToString("N"),
                        Code = request.Code,
                        Description = request.Description,
                        ReasonType = request.ReasonType,
                        ActivateIndicator = request.ActiveIndicator,
                        LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                        LastRecordTransactionDateTime = DateTime.UtcNow,
                        LastRecordTransactionUserId = request.UserId,
                    };
                    await genericRepository.Add(abortSuspendTestReason);
                    data.HttpStatusCode = HttpStatusCode.Created;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateAbortSuspendTestReasonHandler", $"AbortSuspendTestReason added successfully with Id: {abortSuspendTestReason.Id}, Code: {abortSuspendTestReason.Code}, Description: {abortSuspendTestReason.Description}, ReasonType: {abortSuspendTestReason.ReasonType}, ActiveIndicator: {abortSuspendTestReason.ActivateIndicator}");
                }
                else
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateAbortSuspendTestReasonHandler", $"Updating existing AbortSuspendTestReason with RequestId: {request.Id}, Code: {request.Code}, Description: {request.Description}, ReasonType: {request.ReasonType}, ActiveIndicator: {request.ActiveIndicator}");

                    // Fetch existing AbortSuspendTestReason
                    abortSuspendTestReason = await genericRepository.GetById(request.Id);

                    if (abortSuspendTestReason == null)
                    {
                        data.Message = CommonMessages.TestReasonNotFound;
                        data.HttpStatusCode = HttpStatusCode.NotFound;
                        return data;
                    }

                    // Update existing AbortSuspendTestReason
                    if (!string.IsNullOrEmpty(request.Code))
                    {
                        abortSuspendTestReason.Code = request.Code;
                    }

                    if (!string.IsNullOrEmpty(request.Description))
                    {
                        abortSuspendTestReason.Description = request.Description;
                    }

                    if (!string.IsNullOrEmpty(request.ReasonType))
                    {
                        abortSuspendTestReason.ReasonType = request.ReasonType;
                    }

                    abortSuspendTestReason.LastRecordTransactionDateTime = DateTime.UtcNow;
                    abortSuspendTestReason.LastRecordTransactionUserId = request.UserId;
                    genericRepository.Update(abortSuspendTestReason);
                    data.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateAbortSuspendTestReasonHandler", $"AbortSuspendTestReason updated successfully with Id: {abortSuspendTestReason.Id}, Code: {abortSuspendTestReason.Code}, Description: {abortSuspendTestReason.Description}, ReasonType: {abortSuspendTestReason.ReasonType}, ActiveIndicator: {abortSuspendTestReason.ActivateIndicator}");
                }
                await unitOfWork.SaveChanges();

                data.Message = CommonMessages.OperationSuccessful;
                data.IsSuccess = true;
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateAbortSuspendTestReasonHandler", $"AbortSuspendTestReason completed successfully with RequestId: {request.Id}, Code: {request.Code}, Description: {request.Description}, ReasonType: {request.ReasonType}, ActiveIndicator: {request.ActiveIndicator}");


            }
            catch (Exception ex)
            {
                data.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateAbortSuspendTestReasonHandler", $"An error occurred for RequestId: {request.Id} , Code:  {request.Code} , Description:  {request.Description} , ReasonType:  {request.ReasonType} , ActiveIndicator: {request.ActiveIndicator}. Error: {ex.Message}");
            }

            return data;
        }
    }
}