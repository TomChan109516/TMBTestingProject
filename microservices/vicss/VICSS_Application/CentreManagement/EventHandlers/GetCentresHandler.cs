namespace VICSS.Service.CentreManagement.EventHandlers
{
    using System.Net;
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Centre;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.CentreManagement.Domain;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Common;

    public class GetCentresHandler : IRequestHandler<GetCentresRequestDto, GetCentresResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<CentreDBContext, Centre> genericRepository;
        private readonly ILogger<GetCentresHandler> logger;

        public GetCentresHandler(IMapper mapper, IGenericRepository<CentreDBContext, Centre> genericRepository, ILogger<GetCentresHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }
        public async Task<GetCentresResponseDto> Handle(GetCentresRequestDto getCentresRequestDto, CancellationToken cancellationToken)
        {
            GetCentresResponseDto getCentresResponseDto = new GetCentresResponseDto();
            List<Centre>? centres = new List<Centre>();
            string errorTrackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, errorTrackingId, CommonConstants.CentreServiceName, "GetCentresHandler", "GetCentresHandler initiated");

                //All Records
                if (getCentresRequestDto.status == CommonConstants.AllStatus)
                {
                    centres = (List<Centre>)await genericRepository.GetAll();
                }
                //Active Records
                else if (getCentresRequestDto.status == CommonConstants.ActiveStatus)
                {
                    centres = (List<Centre>)await genericRepository.GetByQuery(x => x.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode);
                }
                //Inactive Records
                else if (getCentresRequestDto.status == CommonConstants.InactiveStatus)
                {
                    centres = (List<Centre>)await genericRepository.GetByQuery(x => x.LastRecordTransactionTypeCode == CommonConstants.DeleteTranTypeCode);
                }

                getCentresResponseDto.centres = mapper.Map<List<CentresDto>>(centres);
                getCentresResponseDto.HttpStatusCode = HttpStatusCode.OK;

            }
            catch (Exception ex)
            {
                getCentresResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                getCentresResponseDto.ErrorMessage = ex.Message;
                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, errorTrackingId, CommonConstants.CentreServiceName, "GetCentresHandler", ex.ToString());
            }

            return getCentresResponseDto;
        }
    }
}


