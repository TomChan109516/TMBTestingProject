namespace VICSS.Service.Artu.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using NLog;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Artu.Domain;
    using VICSS.Shared.Models.Common;

    public class AddVeePairingHandler : IRequestHandler<AddVeePairingRequestDto, AddVeePairingResponseDto>
    {
        #region Private Variable
        private readonly IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository;
        private readonly IUnitOfWork<ArtuDbContext> unitOfWork;
        private readonly IMapper mapper;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region Constructor
        public AddVeePairingHandler(IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository, IUnitOfWork<ArtuDbContext> unitOfWork, IMapper mapper)
        {
            this.genericRepository = genericRepository;
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }
        #endregion

        public async Task<AddVeePairingResponseDto> Handle(AddVeePairingRequestDto request, CancellationToken cancellationToken)
        {
            AddVeePairingResponseDto response = new AddVeePairingResponseDto
            {
                Message = CommonMessages.OperationUnsuccessful,
                IsSuccess = false,
                HttpStatusCode = HttpStatusCode.BadRequest
            };
            
            double epslion = 0.000000000000001;

            if (string.IsNullOrEmpty(request.LaneId) || string.IsNullOrEmpty(request.StationId) ||
                string.IsNullOrEmpty(request.VeesIp) || string.IsNullOrEmpty(request.VeesPort) ||
                request.MaxLogAge == 0 || Math.Abs(request.VEEHeartBeatInterval) < epslion ||
                string.IsNullOrEmpty(request.Description) || string.IsNullOrEmpty(request.UserId))
            {
                response.Message = CommonMessages.EmptyFields;
                logger.Warn("Some fields are null or empty in the request");
            }
            else
            {
                try
                {
                    var existingRecords = await genericRepository.GetByQuery(x => x.VeesIp == request.VeesIp && x.VeesPort == request.VeesPort);
                    if (existingRecords.Any())
                    {
                        response.Message = CommonMessages.DuplicateRecords;
                        response.HttpStatusCode = HttpStatusCode.Conflict;
                        logger.Warn("Duplicate records found.");
                    }
                    else 
                    {
                        ArtuConfig artu = mapper.Map<ArtuConfig>(request);
                        artu.ArtuConfigId = Guid.NewGuid().ToString();
                        artu.LastRecordTransactionUserId = request.UserId;
                        artu.LastRecordTransactionDateTime = DateTime.UtcNow;
                        artu.LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode;
                        await genericRepository.Add(artu);
                        await unitOfWork.SaveChanges();
                        response.HttpStatusCode = HttpStatusCode.Created;
                        response.Message = CommonMessages.OperationSuccessful;
                        response.IsSuccess = true;
                        logger.Info($"Successfully added VeePairing for IP:{request.VeesIp} and Port:{request.VeesPort} with ArtuConfigId:{artu.ArtuConfigId}");
                    }
                }
                catch (Exception ex)
                {
                    response.Message = CommonErrorMessage.InternalServerError;
                    response.HttpStatusCode = HttpStatusCode.InternalServerError;
                    logger.Error($"An error occurred while handling AddVeePairing: {ex.ToString()}");
                }
            }
            return response;
        }
    }
}