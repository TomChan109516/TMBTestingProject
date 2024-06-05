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

    public class DisableWatchlistReasonHandler : IRequestHandler<DisableWatchlistReasonRequestDto, DisableWatchlistReasonResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<VehicleDBContext, WatchlistReason> genericRepository;
        private readonly IUnitOfWork<VehicleDBContext> unitOfWork;
        private readonly ILogger<DisableWatchlistReasonHandler> logger;
        DisableWatchlistReasonResponseDto? disableWatchlistReasonResponseDto;

        public DisableWatchlistReasonHandler(IMapper mapper, IGenericRepository<VehicleDBContext, WatchlistReason> genericRepository, IUnitOfWork<VehicleDBContext> unitOfWork, ILogger<DisableWatchlistReasonHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
            this.disableWatchlistReasonResponseDto = new DisableWatchlistReasonResponseDto();
        }

        public async Task<DisableWatchlistReasonResponseDto> Handle(DisableWatchlistReasonRequestDto request, CancellationToken cancellationToken)
        {
            disableWatchlistReasonResponseDto.Message = CommonMessages.OperationUnsuccessful;
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "DisableWatchlistReasonHandler", $"DisableWatchlistReasonHandler Initiated");

                if (request != null)
                {
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "DisableWatchlistReasonHandler", $"DisableWatchlistReasonHandler Initiated With RequestData: {JsonSerializer.Serialize(request)}");
                    var watchlistReasonData = mapper.Map<WatchlistReason>(request);

                    var existingWatchlistReason = await genericRepository.GetByQuery(x => x.Id == watchlistReasonData.Id);
                    if (existingWatchlistReason.Any())
                    {
                        var existingWatchlistReasonEntity = existingWatchlistReason.First();
                        if (existingWatchlistReasonEntity.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode)
                        {
                            await UpdateWatchlistReason(existingWatchlistReasonEntity, trackingId, disableWatchlistReasonResponseDto);
                        }
                        else
                        {
                            disableWatchlistReasonResponseDto.Message = CommonMessages.watchlistReasonAlreadyDisabledMessage;
                            disableWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                        }
                    }
                    else
                    {
                        disableWatchlistReasonResponseDto.Message = CommonMessages.NoRecordFound;
                        disableWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    disableWatchlistReasonResponseDto.Message = CommonMessages.BadRequest;
                    disableWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception ex)
            {
                disableWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                disableWatchlistReasonResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "DisableWatchlistReasonHandler", ex.ToString());
            }
            return disableWatchlistReasonResponseDto;
        }

        private async Task<bool> UpdateWatchlistReason(WatchlistReason existingWatchlistReasonEntity, string trackingId, DisableWatchlistReasonResponseDto disableWatchlistReasonResponseDto)
        {
            bool watchlistReasonUpdated = false;
            existingWatchlistReasonEntity.LastRecordTransactionDateTime = DateTime.UtcNow;
            existingWatchlistReasonEntity.LastRecordTransactionTypeCode = CommonConstants.DeleteTranTypeCode;
            genericRepository.Update(existingWatchlistReasonEntity);
            await unitOfWork.SaveChanges();
            watchlistReasonUpdated = true;
            disableWatchlistReasonResponseDto.Message = CommonMessages.OperationSuccessful;
            disableWatchlistReasonResponseDto.HttpStatusCode = HttpStatusCode.OK;
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.VehicleServiceName, "DisableWatchlistReasonHandler", $"Watchlist Reason Updated With Data: {JsonSerializer.Serialize(existingWatchlistReasonEntity)}");

            return watchlistReasonUpdated;
        }
    }
}