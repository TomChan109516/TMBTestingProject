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
    public class AddUnconfirmedListHandler : IRequestHandler<AddUnconfirmedListRequestDto, AddUnconfirmedListResponseDto>
    {
        private readonly IGenericRepository<InspectionDBContext, UnconfirmedList> genericRepository;
        private readonly IMapper mapper;
        private readonly ILogger<AddUnconfirmedListHandler> logger;
        private readonly IUnitOfWork<InspectionDBContext> unitOfWork;

        public AddUnconfirmedListHandler(IGenericRepository<InspectionDBContext, UnconfirmedList> genericRepository,
            IMapper mapper, ILogger<AddUnconfirmedListHandler> logger, IUnitOfWork<InspectionDBContext> unitOfWork)
        {
            this.genericRepository = genericRepository;
            this.mapper = mapper;
            this.logger = logger;
            this.unitOfWork = unitOfWork;
        }
        public async Task<AddUnconfirmedListResponseDto> Handle(AddUnconfirmedListRequestDto request, CancellationToken cancellationToken)
        {
            AddUnconfirmedListResponseDto response = new();
            string trackingId = Guid.NewGuid().ToString();
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUnconfirmedListHandler", "GetUnconfirmedListHandler initiated");
            response.HttpStatusCode = HttpStatusCode.NotModified;
            response.IsSuccess = false;
            response.Message = CommonMessages.OperationUnsuccessful;

            try
            {
                var unconfirmedList = mapper.Map<UnconfirmedList>(request);
                if (unconfirmedList != null)
                {
                    unconfirmedList.Id = Guid.NewGuid().ToString();
                    unconfirmedList.CreateDatetime = DateTime.UtcNow;
                    await genericRepository.Add(unconfirmedList);
                    await unitOfWork.SaveChanges();
                    response.IsSuccess = true;
                    response.Message = CommonMessages.OperationSuccessful;
                    response.HttpStatusCode = HttpStatusCode.Created;
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUnconfirmedListHandler", "GetUnconfirmedListHandler completed");
                }
            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AddUnconfirmedListHandler", ex.ToString());
            }

            return response;

        }
    }
}
