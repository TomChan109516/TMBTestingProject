namespace VICSS.Service.Vehicle.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using System.Text.Json;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Vehicle.Domain;
    using VICSS.Shared.Models.Common;

    public class AddUpdateWatchlistReasonHandler : IRequestHandler<AddUpdateWatchlistReasonRequestDto, AddUpdateWatchlistReasonResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<VehicleDBContext, WatchlistReason> genericRepository;
        private readonly IUnitOfWork<VehicleDBContext> unitOfWork;
        private readonly ILogger<AddUpdateWatchlistReasonHandler> logger;
        AddUpdateWatchlistReasonResponseDto? addUpdateWatchlistReasonResponseDto;

        public AddUpdateWatchlistReasonHandler(
            IMapper mapper,
            IGenericRepository<VehicleDBContext, WatchlistReason> genericRepository,
            IUnitOfWork<VehicleDBContext> unitOfWork,
            ILogger<AddUpdateWatchlistReasonHandler> logger
            )
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
            this.unitOfWork = unitOfWork;
            addUpdateWatchlistReasonResponseDto = new AddUpdateWatchlistReasonResponseDto();
        }

        public async Task<AddUpdateWatchlistReasonResponseDto> Handle(AddUpdateWatchlistReasonRequestDto request, CancellationToken cancellationToken)
        {
            addUpdateWatchlistReasonResponseDto.Message = CommonMessages.OperationUnsuccessful;
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "AddUpdateWatchlistReasonHandler", "AddUpdateWatchlistReasonHandler Initiated");

                if (request != null)
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "AddUpdateWatchlistReasonHandler", $"AddUpdateWatchlistReasonHandler Initiated With RequestData: {JsonSerializer.Serialize(request.addUpdateWatchlistReasonDto)}");

                    var watchlistReason = mapper.Map<WatchlistReason>(request.addUpdateWatchlistReasonDto);

                    if (!CommonConstants.watchlistReasonType.Contains(watchlistReason.WatchlistReasonType))
                    {
                        addUpdateWatchlistReasonResponseDto.Message = CommonMessages.InvalidWatchlistReasonType;
                        addUpdateWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                        logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "AddUpdateWatchlistReasonHandler", $"Invalid Watchlist Reason Type: {request.addUpdateWatchlistReasonDto.WatchlistReasonType}");
                        return addUpdateWatchlistReasonResponseDto;
                    }

                    if (string.IsNullOrEmpty(watchlistReason.Id))
                    {
                        await AddWatchlistReason(watchlistReason, trackingId, addUpdateWatchlistReasonResponseDto);
                    }
                    else
                    {
                        await UpdateWatchlistReason(watchlistReason, trackingId, addUpdateWatchlistReasonResponseDto);
                    }
                }
                else
                {
                    addUpdateWatchlistReasonResponseDto.Message = CommonMessages.BadRequest;
                    addUpdateWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception ex)
            {
                addUpdateWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                addUpdateWatchlistReasonResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "AddUpdateWatchlistReasonHandler", ex.ToString());
            }
            return addUpdateWatchlistReasonResponseDto;
        }

        private async Task<bool> AddWatchlistReason(WatchlistReason watchlistReason, string trackingId, AddUpdateWatchlistReasonResponseDto addUpdateWatchlistReasonResponseDto)
        {
            bool watchlistReasonAdded = false;

            watchlistReason.Id = Guid.NewGuid().ToString();
            watchlistReason.LastRecordTransactionDateTime = DateTime.UtcNow;
            watchlistReason.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
            await genericRepository.Add(watchlistReason);
            await unitOfWork.SaveChanges();
            watchlistReasonAdded = true;
            addUpdateWatchlistReasonResponseDto.Message = CommonMessages.OperationSuccessful;
            addUpdateWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.OK;
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "AddUpdateWatchlistReasonHandler", $"Watchlist Reason Added With RequestData: {JsonSerializer.Serialize(watchlistReason)}");

            return watchlistReasonAdded;
        }

        private async Task<bool> UpdateWatchlistReason(WatchlistReason watchlistReason, string trackingId, AddUpdateWatchlistReasonResponseDto addUpdateWatchlistReasonResponseDto)
        {
            bool watchlistReasonUpdated = false;

            var existingWatchlistReason = await genericRepository.GetByQuery(x => x.Id == watchlistReason.Id);
            if (existingWatchlistReason.FirstOrDefault() != null)
            {
                watchlistReason.LastRecordTransactionDateTime = DateTime.UtcNow;
                watchlistReason.LastRecordTransactionTypeCode = CommonConstants.UpdateTranTypeCode;
                genericRepository.Update(watchlistReason);
                await unitOfWork.SaveChanges();
                watchlistReasonUpdated = true;
                addUpdateWatchlistReasonResponseDto.Message = CommonMessages.OperationSuccessful;
                addUpdateWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.OK;
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "AddUpdateWatchlistReasonHandler", $"Watchlist Reason Updated With RequestData: {JsonSerializer.Serialize(watchlistReason)}");
            }
            else
            {
                addUpdateWatchlistReasonResponseDto.Message = CommonMessages.NoRecordFound;
                addUpdateWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "AddUpdateWatchlistReasonHandler", $"No existing Watchlist Reason is found with the provided ID : {watchlistReason.Id}");
            }

            return watchlistReasonUpdated;
        }

    }
}