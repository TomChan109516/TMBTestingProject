namespace VICSS.Service.CentreManagement.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using System.Text.Json;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Centre;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.CentreManagement.Domain;
    using VICSS.Shared.Models.Common;
    public class AddUpdateCentreHandler : IRequestHandler<AddUpdateCentreRequestDto, AddUpdateCentreResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<CentreDBContext, Centre> genericRepository;
        private readonly IUnitOfWork<CentreDBContext> unitOfWork;
        private readonly ILogger<AddUpdateCentreHandler> logger;
        AddUpdateCentreResponseDto? addUpdateCentreResponseDto;

        public AddUpdateCentreHandler(IMapper mapper, IGenericRepository<CentreDBContext, Centre> genericRepository, IUnitOfWork<CentreDBContext> unitOfWork, ILogger<AddUpdateCentreHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
            this.addUpdateCentreResponseDto = new AddUpdateCentreResponseDto();
        }

        public async Task<AddUpdateCentreResponseDto> Handle(AddUpdateCentreRequestDto request, CancellationToken cancellationToken)
        {
            AddUpdateCentreResponseDto addUpdateCentreResponseDto = new AddUpdateCentreResponseDto();
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "AddUpdateCentreHandler", "AddUpdateCentreHandler initiated");

                if (request != null)
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "AddUpdateCentreHandler", $"AddUpdateCentreHandler started, RequestData: {JsonSerializer.Serialize(request.addUpdateCentreDto)}");
                    var centreData = mapper.Map<Centre>(request.addUpdateCentreDto);

                    if (string.IsNullOrEmpty(request.addUpdateCentreDto.CentreId))
                    {
                        await AddCentre(centreData, trackingId, addUpdateCentreResponseDto);
                    }
                    else
                    {
                        await UpdateCentre(centreData, trackingId, addUpdateCentreResponseDto);
                    }
                }
                else
                {
                    addUpdateCentreResponseDto.Message = CommonMessages.BadRequest;
                    addUpdateCentreResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception ex)
            {
                addUpdateCentreResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                addUpdateCentreResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "AddUpdateCentreHandler", ex.ToString());
            }
            return addUpdateCentreResponseDto;
        }

        private async Task AddCentre(Centre centreData, string trackingId, AddUpdateCentreResponseDto addUpdateCentreResponseDto)
        {
            var existingCentreData = await genericRepository.GetByQuery(x => x.CentreCode.ToLower() == centreData.CentreCode.ToLower());
            if (existingCentreData.Count() > 0)
            {
                addUpdateCentreResponseDto.Message = CommonMessages.RecordAlredayExists;
                addUpdateCentreResponseDto.HttpStatusCode = HttpStatusCode.Conflict;
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "AddUpdateCentreHandler", $"Centre Code alreday Exists : {centreData.CentreCode}");
            }
            else
            {
                centreData.CentreId = Guid.NewGuid().ToString();
                centreData.CentreChineseName = centreData.CentreName;
                centreData.CentreBeginDate = DateTime.UtcNow;
                centreData.CentreEndDate = DateTime.UtcNow;
                centreData.CentreChineseName = centreData.CentreName;
                centreData.LastRecordTransactionDateTime = DateTime.UtcNow;
                centreData.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
                await genericRepository.Add(centreData);
                await unitOfWork.SaveChanges();
                addUpdateCentreResponseDto.Message = CommonMessages.OperationSuccessful;
                addUpdateCentreResponseDto.HttpStatusCode = HttpStatusCode.OK;
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "AddUpdateCentreHandler", "Centre Added");
            }

        }

        private async Task UpdateCentre(Centre centreData, string trackingId, AddUpdateCentreResponseDto addUpdateCentreResponseDto)
        {
            try
            {
                var existingCentreData = await genericRepository.GetByQuery(x => x.CentreId == centreData.CentreId && x.CentreCode.ToLower() == centreData.CentreCode.ToLower());
                if (existingCentreData.FirstOrDefault() != null)
                {
                    centreData.CentreChineseName = centreData.CentreName;
                    centreData.CentreBeginDate = DateTime.UtcNow;
                    centreData.CentreEndDate = DateTime.UtcNow;
                    centreData.LastRecordTransactionDateTime = DateTime.UtcNow;
                    centreData.LastRecordTransactionTypeCode = CommonConstants.UpdateTranTypeCode;
                    genericRepository.Update(centreData);
                    await unitOfWork.SaveChanges();
                    addUpdateCentreResponseDto.Message = CommonMessages.OperationSuccessful;
                    addUpdateCentreResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "AddUpdateCentreHandler", "Centre Updated");
                }
                else
                {
                    addUpdateCentreResponseDto.Message = CommonMessages.NoRecordFound;
                    addUpdateCentreResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.CentreServiceName, "AddUpdateCentreHandler", $"No existing Centre Data is found with the provided CentreID  : {centreData.CentreId} ,and Centre Code {centreData.CentreCode}");
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}