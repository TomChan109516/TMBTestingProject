namespace VICSS.Service.Inspection.EventHandlers
{
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;

    public class ActivateDeactivateSkipTestReasonHandler : IRequestHandler<ActivateDeactivateSkipTestReasonRequestDto, TestReasonResponseDto>
    {
        private readonly IGenericRepository<InspectionDBContext, SkipTestReason> genericRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly ILogger<ActivateDeactivateSkipTestReasonHandler> logger;

        public ActivateDeactivateSkipTestReasonHandler(IGenericRepository<InspectionDBContext, SkipTestReason> genericRepository, IUnitOfWork<InspectionDBContext> unitOfWork, ILogger<ActivateDeactivateSkipTestReasonHandler> logger)
        {
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        public async Task<TestReasonResponseDto> Handle(ActivateDeactivateSkipTestReasonRequestDto request, CancellationToken cancellationToken)
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
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ActivateDeactivateSkipTestReasonHandler", $"ActivateDeactivateSkipTestReasonHandler initiated with Id: {request.Id} and ActivateIndicator: {request.ActivateIndicator}");

                var skipTestReason = await genericRepository.GetById(request.Id);
                if (skipTestReason == null)
                {
                    data.Message = CommonMessages.TestReasonNotFound;
                    data.HttpStatusCode = HttpStatusCode.NotFound;
                    return data;
                }

                if (skipTestReason.ActivateIndicator != request.ActivateIndicator)
                {
                    skipTestReason.ActivateIndicator = request.ActivateIndicator;
                    skipTestReason.LastRecordTransactionDateTime = DateTime.UtcNow;
                    genericRepository.Update(skipTestReason);
                    await unitOfWork.SaveChanges();
                    data.Message = CommonMessages.OperationSuccessful;
                    data.IsSuccess = true;
                    data.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ActivateDeactivateSkipTestReasonHandler", $"ActivateDeactivateSkipTestReasonHandler completed with Id: {request.Id} and ActivateIndicator: {request.ActivateIndicator}");
                }
                else
                {
                    data.Message = CommonMessages.NoUpdateRequired;
                    data.IsSuccess = true;
                    data.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ActivateDeactivateSkipTestReasonHandler", $"ActivateDeactivateSkipTestReasonHandler completed without changes for Id: {request.Id} as ActivateIndicator was the same");
                }
            }
            catch(Exception ex)
            {
                data.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "ActivateDeactivateSkipTestReasonHandler", $"An error occurred for RequestId: {request.Id}, ActivateIndicator: {request.ActivateIndicator}. Error: {ex.Message}");

            }
            return data;
        }
    }
}