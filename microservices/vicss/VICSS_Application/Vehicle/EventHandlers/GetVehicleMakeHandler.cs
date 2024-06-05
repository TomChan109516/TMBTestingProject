namespace VICSS.Service.Vehicle.EventHandlers
{
    using System.Net;
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Vehicle.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Vehicle;

    public class GetVehicleMakeHandler : IRequestHandler<GetVehicleMakeRequestDto, GetVehicleMakeResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<VehicleDBContext , VehicleMake> genericRepository;
        private readonly ILogger<GetVehicleMakeHandler> logger;

        public GetVehicleMakeHandler(IMapper mapper, IGenericRepository<VehicleDBContext, VehicleMake> genericRepository, ILogger<GetVehicleMakeHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }


        public async Task<GetVehicleMakeResponseDto> Handle(GetVehicleMakeRequestDto getVehicleMakeRequestDto, CancellationToken cancellationToken)
        {
            GetVehicleMakeResponseDto getVehicleMakeResponseDto = new GetVehicleMakeResponseDto();
            List<VehicleMake>? vehicleMakes = new List<VehicleMake>();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.VehicleServiceName, "GetVehicleMakeHandler", "GetVehicleMakeHandler initiated");

                //All Records
                if (getVehicleMakeRequestDto.status == CommonConstants.AllStatus)
                {
                    vehicleMakes = (List<VehicleMake>)await genericRepository.GetAll();
                }
                //Active Records
                else if (getVehicleMakeRequestDto.status == CommonConstants.ActiveStatus)
                {
                    vehicleMakes = (List<VehicleMake>)await genericRepository.GetByQuery(x=> x.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode);
                }
                //Inactive Records
                else if(getVehicleMakeRequestDto.status == CommonConstants.InactiveStatus)
                {
                    vehicleMakes = (List<VehicleMake>)await genericRepository.GetByQuery(x => x.LastRecordTransactionTypeCode == CommonConstants.DeleteTranTypeCode);
                }

                getVehicleMakeResponseDto.vehicleMakes = mapper.Map<List<VehicleMakeDto>>(vehicleMakes);

                if(getVehicleMakeResponseDto.vehicleMakes.Count > 0)
                {
                    getVehicleMakeResponseDto.HttpStatusCode = HttpStatusCode.OK;
                }
                else
                {
                    getVehicleMakeResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                }

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.VehicleServiceName, "GetVehicleMakeHandler", "GetVehicleMakeHandler completed");

            }
            catch(Exception ex) 
            {
                getVehicleMakeResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                //getVehicleMakeResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                getVehicleMakeResponseDto.ErrorMessage = ex.Message;
                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.VehicleServiceName, "GetVehicleMakeHandler", ex.ToString());
            }

            return getVehicleMakeResponseDto;
        }
    }
}
