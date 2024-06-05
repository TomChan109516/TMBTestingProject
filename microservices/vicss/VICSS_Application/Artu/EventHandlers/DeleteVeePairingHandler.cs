namespace VICSS.Service.Artu.EventHandlers
{
    using MediatR;
    using NLog;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Artu.Domain;
    using VICSS.Shared.Models.Common;

    public class DeleteVeePairingHandler : IRequestHandler<DeleteVeePairingRequestDto, DeleteVeePairingResponseDto>
    {
        #region Private Variable
        private readonly IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository;
        private readonly IUnitOfWork<ArtuDbContext> unitOfWork;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();

        #endregion

        #region Constructor
        public DeleteVeePairingHandler(IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository, IUnitOfWork<ArtuDbContext> unitOfWork)
        {
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
        }
        #endregion

        public async Task<DeleteVeePairingResponseDto> Handle(DeleteVeePairingRequestDto request, CancellationToken cancellationToken)
        {
            DeleteVeePairingResponseDto data = new DeleteVeePairingResponseDto();
            

            if (string.IsNullOrEmpty(request.Id))
            {
                data.Message = CommonMessages.EmptyFields;
                data.IsSuccess = false;
                data.HttpStatusCode = HttpStatusCode.BadRequest;
                logger.Warn("Request Id is null or empty.");
                return data;
            }

            try
            {
                var artu = await genericRepository.GetById(request.Id);

                if (artu == null)
                {
                    data.Message = CommonMessages.IdNotFound;
                    data.IsSuccess = false;
                    data.HttpStatusCode = HttpStatusCode.BadRequest;
                    logger.Warn($"ArtuConfig not found for Id: {request.Id}");
                    return data;
                }

                genericRepository.Delete(artu);
                await unitOfWork.SaveChanges();

                data.Message = CommonMessages.OperationSuccessful;
                data.IsSuccess = true;
                data.HttpStatusCode = HttpStatusCode.OK;
                logger.Info($"Successfully deleted ArtuConfig for Id: {request.Id}");
            }
            catch (Exception ex)
            {
                data.Message = ex.Message;
                data.IsSuccess = false;
                data.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.Error($"An error occurred while handling DeleteVeePairing: {ex.Message}");
            }
            return data;
        }
    }
}