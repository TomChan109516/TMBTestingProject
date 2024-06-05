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

    public class AddUpdateSkipTestReasonHandler : IRequestHandler<AddUpdateSkipTestReasonRequestDto, TestReasonResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, SkipTestReason> genericRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly ILogger<AddUpdateSkipTestReasonHandler> logger;

        public AddUpdateSkipTestReasonHandler(IMapper mapper, IGenericRepository<InspectionDBContext, SkipTestReason> genericRepository, IUnitOfWork<InspectionDBContext> unitOfWork, ILogger<AddUpdateSkipTestReasonHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        public async Task<TestReasonResponseDto> Handle(AddUpdateSkipTestReasonRequestDto request, CancellationToken cancellationToken)
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
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSkipTestReasonHandler", $"AddUpdateSkipTestReasonHandler initiated with RequestId: {request.Id}, TestType: {request.TestType}, Code: {request.Code}, Description: {request.Description}, ActiveIndicator: {request.ActiveIndicator}");

                SkipTestReason skipTestReason;

                if (string.IsNullOrEmpty(request.Id))
                {
                    // Validate request parameters
                    if ((string.IsNullOrEmpty(request.TestType) || !CommonConstants.validTestTypes.Contains(request.TestType)) || string.IsNullOrEmpty(request.Code) || string.IsNullOrEmpty(request.Description) || request.ActiveIndicator == null)
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSkipTestReasonHandler", $"Bad request for RequestId: {request.Id}, TestType: {request.TestType}, Code: {request.Code}, Description: {request.Description}, ActiveIndicator: {request.ActiveIndicator}");
                        data.Message = CommonMessages.BadRequest;
                        return data;

                    }
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSkipTestReasonHandler", $"Adding new SkipTestReason with TestType: {request.TestType}, Code: {request.Code}, Description: {request.Description}, ActiveIndicator: {request.ActiveIndicator}");
                    // Add new SkipTestReason
                    skipTestReason = new SkipTestReason
                    {
                        Id = Guid.NewGuid().ToString("N"),
                        TestType = request.TestType,
                        Code = request.Code,
                        Description = request.Description,
                        ActivateIndicator = request.ActiveIndicator,
                        LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                        LastRecordTransactionDateTime = DateTime.UtcNow,
                        LastRecordTransactionUserId = request.UserId
                    };
                    await genericRepository.Add(skipTestReason);
                    data.HttpStatusCode = HttpStatusCode.Created;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSkipTestReasonHandler", $"SkipTestReason added successfully with Id: {skipTestReason.Id}, TestType: {skipTestReason.TestType}, Code: {skipTestReason.Code}, Description: {skipTestReason.Description}, ActiveIndicator: {skipTestReason.ActivateIndicator}");

                }
                else
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSkipTestReasonHandler", $"Updating existing SkipTestReason with Id: {request.Id}, TestType: {request.TestType}, Code: {request.Code}, Description: {request.Description}, ActiveIndicator: {request.ActiveIndicator}");

                    // Fetch the existing SkipTestReason from the database
                    skipTestReason = await genericRepository.GetById(request.Id);

                    if (skipTestReason == null)
                    {
                        data.Message = CommonMessages.TestReasonNotFound;
                        data.HttpStatusCode = HttpStatusCode.NotFound;
                        return data;
                    }

                    // Update existing SkipTestReason
                    if (!string.IsNullOrEmpty(request.TestType) && CommonConstants.validTestTypes.Contains(request.TestType))
                    {
                        skipTestReason.TestType = request.TestType;
                    }
                    else
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSkipTestReasonHandler", $"Updating SkipTestReason failed with Id: {request.Id}, and TestType: {request.TestType} is not valid.");
                        data.Message = CommonMessages.BadRequest;
                        return data;
                    }

                    if (!string.IsNullOrEmpty(request.Code))
                    {
                        skipTestReason.Code = request.Code;
                    }

                    if (!string.IsNullOrEmpty(request.Description))
                    {
                        skipTestReason.Description = request.Description;
                    }

                    if (request.ActiveIndicator != null)
                    {
                        skipTestReason.ActivateIndicator = (bool)request.ActiveIndicator;
                    }
                    skipTestReason.LastRecordTransactionTypeCode = CommonConstants.UpdateTranTypeCode;
                    skipTestReason.LastRecordTransactionDateTime = DateTime.UtcNow;
                    skipTestReason.LastRecordTransactionUserId = request.UserId;
                    genericRepository.Update(skipTestReason);
                    data.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSkipTestReasonHandler", $"SkipTestReason updated successfully with Id: {skipTestReason.Id}, TestType: {skipTestReason.TestType}, Code: {skipTestReason.Code}, Description: {skipTestReason.Description}, ActiveIndicator: {skipTestReason.ActivateIndicator}");

                }
                await unitOfWork.SaveChanges();

                data.Message = CommonMessages.OperationSuccessful;
                data.IsSuccess = true;
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSkipTestReasonHandler", $"AddUpdateSkipTestReasonHandler completed for RequestId: {request.Id}, TestType: {request.TestType}, Code: {request.Code}, Description: {request.Description}, ActiveIndicator: {request.ActiveIndicator}");

            }
            catch (Exception ex)
            {
                data.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateSkipTestReasonHandler", $"An error occurred for RequestId: {request.Id}, TestType: {request.TestType}, Code: {request.Code}, Description: {request.Description}, ActiveIndicator: {request.ActiveIndicator}. Error: {ex.Message}");
            }

            return data;
        }
    }
}