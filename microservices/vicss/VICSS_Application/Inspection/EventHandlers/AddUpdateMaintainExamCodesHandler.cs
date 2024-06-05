namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;    
    using MediatR;
    using System.Net;
    using System.Text.Json;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.Helper;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;

    public class AddUpdateMaintainExamCodesHandler : IRequestHandler<AddUpdateMaintainExamCodesRequestDto, AddUpdateMaintainExamCodesResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, InspectionType> genericRepository;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;
        private readonly ILogger<AddUpdateMaintainExamCodesHandler> logger;

        public AddUpdateMaintainExamCodesHandler(IMapper mapper, IGenericRepository<InspectionDBContext, InspectionType> genericRepository, IUnitOfWork<InspectionDBContext> unitOfWork, ILogger<AddUpdateMaintainExamCodesHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        public async Task<AddUpdateMaintainExamCodesResponseDto> Handle(AddUpdateMaintainExamCodesRequestDto request, CancellationToken cancellationToken)
        {
            AddUpdateMaintainExamCodesResponseDto data = new AddUpdateMaintainExamCodesResponseDto();
            
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateMaintainExamCodesHandler", $"AddUpdateMaintainExamCodesHandler initiated with request {JsonSerializer.Serialize(request)}");                

                //Add ExamCode
                if (string.IsNullOrEmpty(request.examCodeDto.InspectionTypeId))
                {
                    // Validate request parameters
                    if (!ValidateAddRequest(request.examCodeDto))
                    {                        
                        data.Message = CommonMessages.BadRequest;
                        data.HttpStatusCode = HttpStatusCode.BadRequest;
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateMaintainExamCodesHandler", $"Bad request while adding MaintainExamCodes for Exam Code");
                    }
                    else
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateMaintainExamCodesHandler", $"Adding new Exam Code");
                        bool status = await AddNewInspectionType(request.examCodeDto);
                        if(status)
                        {
                            data.HttpStatusCode = HttpStatusCode.OK;
                        }                        
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateMaintainExamCodesHandler", $"MaintainExamCodes added successfully , data : {JsonSerializer.Serialize(request)}");
                    }                    
                }
                //Update Exam Code
                else if(!string.IsNullOrEmpty(request.examCodeDto.InspectionTypeId))
                {
                    // Validate request parameters
                    if (!ValidateUpdateRequest(request.examCodeDto))
                    {
                        data.Message = CommonMessages.BadRequest;
                        data.HttpStatusCode = HttpStatusCode.BadRequest;
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateMaintainExamCodesHandler", $"Bad request while adding MaintainExamCodes for Exam Code");
                    }
                    else
                    {
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateMaintainExamCodesHandler", $"Updating existing MaintainExamCodes");

                        var existingRecord = await genericRepository.GetById(request.examCodeDto.InspectionTypeId);

                        if (existingRecord == null)
                        {
                            data.Message = CommonMessages.IdNotFound;
                            data.HttpStatusCode = HttpStatusCode.NotFound;
                            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateMaintainExamCodesHandler", "Data Not Found");
                        }
                        else
                        {
                            bool status = await UpdateInspectionType(request.examCodeDto, existingRecord);

                            if (status) 
                            {
                                data.HttpStatusCode = HttpStatusCode.OK;
                                data.Message = CommonMessages.OperationSuccessful;
                                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateMaintainExamCodesHandler", $"Existing exam code updated successfully with data {JsonSerializer.Serialize(request)}");
                            }
                        }
                    }                    
                }
            }
            catch (Exception ex)
            {
                data.HttpStatusCode = HttpStatusCode.InternalServerError;
                data.ErrorMessage = CommonErrorMessage.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateMaintainExamCodesHandler", ex.ToString());
            }

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUpdateMaintainExamCodesHandler", $"Completed successfully");
            return data;
        }


        private bool ValidateAddRequest(ExamCodeDto addRequest)
        {
            bool isValid = true;
            if(string.IsNullOrEmpty(addRequest.ExamClass) || string.IsNullOrEmpty(addRequest.InspectionTypeDescription) || string.IsNullOrEmpty(addRequest.InspectionTypeName))
            {
                isValid = false;
            }
            return isValid;
        }

        private bool ValidateUpdateRequest(ExamCodeDto addRequest)
        {
            bool isValid = true;
            if (string.IsNullOrEmpty(addRequest.InspectionTypeId) || string.IsNullOrEmpty(addRequest.ExamClass) || string.IsNullOrEmpty(addRequest.InspectionTypeDescription) || string.IsNullOrEmpty(addRequest.InspectionTypeName))
            {
                isValid = false;
            }
            return isValid;
        }


        private async Task<bool> AddNewInspectionType(ExamCodeDto addNewExamCodeRequest)
        {
            bool isAdded = false;

            // Add new InspectionType
            InspectionType inspectionType = new InspectionType
            {
                InspectionTypeId = Guid.NewGuid().ToString().ToUpper(),
                ExamCode = addNewExamCodeRequest.ExamCode,
                InspectionTypeDescription = addNewExamCodeRequest.InspectionTypeDescription,
                ExamClass = (addNewExamCodeRequest.ExamClass==CommonConstants.Primary)? CommonConstants.Primary:CommonConstants.Supplementary,
                InspectionTypeName = addNewExamCodeRequest.InspectionTypeName,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionUserId=addNewExamCodeRequest.UserId
            };

            await genericRepository.Add(inspectionType);
            await unitOfWork.SaveChanges();
            isAdded = true;

            return isAdded;
        }


        private async Task<bool> UpdateInspectionType(ExamCodeDto updateExamCodeRequest, InspectionType existingRecord)
        {
            bool isUpdated = false;

            existingRecord.ExamCode = updateExamCodeRequest.ExamCode;
            existingRecord.InspectionTypeDescription = updateExamCodeRequest.InspectionTypeDescription;
            existingRecord.ExamClass = (updateExamCodeRequest.ExamClass == CommonConstants.Primary) ? CommonConstants.Primary : CommonConstants.Supplementary;
            existingRecord.InspectionTypeName = updateExamCodeRequest.InspectionTypeName;

            existingRecord.LastRecordTransactionDateTime = DateTime.UtcNow;
            existingRecord.LastRecordTransactionUserId = updateExamCodeRequest.UserId;
            existingRecord.LastRecordTransactionTypeCode = CommonConstants.UpdateTranTypeCode;

            genericRepository.Update(existingRecord);
            await unitOfWork.SaveChanges();
            isUpdated = true;

            return isUpdated;
        }
    }
}