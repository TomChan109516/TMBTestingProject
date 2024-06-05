namespace VICSS.Service.Inspection.EventHandlers
{
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;

    public class ActivateDeactivateAbortSuspendTestReasonsHandler : IRequestHandler<ActivateDeactivateAbortSuspendTestReasonsRequestDto, TestReasonResponseDto>
    {
        private readonly IGenericRepository<InspectionDBContext, AbortSuspendTestReason> genericRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly ILogger<ActivateDeactivateAbortSuspendTestReasonsHandler> logger;

        public ActivateDeactivateAbortSuspendTestReasonsHandler(IGenericRepository<InspectionDBContext, AbortSuspendTestReason> genericRepository, IUnitOfWork<InspectionDBContext> unitOfWork, ILogger<ActivateDeactivateAbortSuspendTestReasonsHandler> logger)
        {
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        public async Task<TestReasonResponseDto> Handle(ActivateDeactivateAbortSuspendTestReasonsRequestDto request, CancellationToken cancellationToken)
        {
            TestReasonResponseDto data = new TestReasonResponseDto
            {
                Message = CommonMessages.OperationUnsuccessful,
                IsSuccess = false,
                HttpStatusCode = HttpStatusCode.BadRequest
            };
            string trackingId = Guid.NewGuid().ToString();

            if (string.IsNullOrEmpty(request.Id))
            {
                data.Message = CommonMessages.TestReasonNotFound;
                data.HttpStatusCode = HttpStatusCode.BadRequest;
                return data;
            }

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ActivateDeactivateAbortSuspendTestReasonsHandler", $"ActivateDeactivateAbortSuspendTestReasonsHandler initiated with Id: {request.Id} with ActivateIndicator:{request.ActivateIndicator}");

                var abortSuspendTestReason = await genericRepository.GetById(request.Id);
                if (abortSuspendTestReason == null)
                {
                    data.Message = CommonMessages.TestReasonNotFound;
                    data.HttpStatusCode = HttpStatusCode.NotFound;
                    return data;
                }

                if (abortSuspendTestReason.ActivateIndicator != request.ActivateIndicator)
                {
                    abortSuspendTestReason.ActivateIndicator = request.ActivateIndicator;
                    abortSuspendTestReason.LastRecordTransactionDateTime = DateTime.UtcNow;
                    genericRepository.Update(abortSuspendTestReason);
                    await unitOfWork.SaveChanges();
                    data.Message = CommonMessages.OperationSuccessful;
                    data.IsSuccess = true;
                    data.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ActivateDeactivateAbortSuspendTestReasonsHandler", $"ActivateDeactivateAbortSuspendTestReasonsHandler completed with Id: {request.Id} with ActivateIndicator: {request.ActivateIndicator}");
                }
                else
                {
                    data.Message = CommonMessages.NoUpdateRequired;
                    data.IsSuccess = true;
                    data.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ActivateDeactivateAbortSuspendTestReasonsHandler", $"ActivateDeactivateAbortSuspendTestReasonsHandler completed without changes for Id {request.Id} as ActivateIndicator was the same");
                }
            }
            catch (Exception ex)
            {
                data.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ActivateDeactivateAbortSuspendTestReasonsHandler", $"An error occurred for RequestId: {request.Id}, ActivateIndicator: {request.ActivateIndicator}. Error: {ex.Message}");
            }
            return data;
        }
    }
}