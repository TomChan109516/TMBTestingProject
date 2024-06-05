namespace VICSS.Service.Vehicle.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Vehicle.Domain;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Shared.Models.Vehicle;
    using System.Net;
    using VICSS.Shared.Models.Common;

    public class GetVehicleParticularHandler : IRequestHandler<GetVehicleParticularsRequestDto, GetVehicleParticularsResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<VehicleDBContext, Vehicle> genericRepository;
        private readonly ILogger<GetVehicleParticularHandler> logger;
        public GetVehicleParticularHandler(IMapper mapper, IGenericRepository<VehicleDBContext, Vehicle> genericRepository, ILogger<GetVehicleParticularHandler> logger)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }
        public async Task<GetVehicleParticularsResponseDto> Handle(GetVehicleParticularsRequestDto getVehicleClassWithSubclassRequestDto, CancellationToken cancellationToken)
        {
            GetVehicleParticularsResponseDto getVehicleParticularResponseDto = new GetVehicleParticularsResponseDto();
            List<Vehicle> vehicleDetails = new List<Vehicle>();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.VehicleServiceName, "GetVehicleParticularHandler", "GetVehicleParticularHandler initiated");

                if (getVehicleClassWithSubclassRequestDto.vehicleId != null)
                {
                    vehicleDetails = (List<Vehicle>)await genericRepository.GetByQuery(x => x.VehicleId == getVehicleClassWithSubclassRequestDto.vehicleId,
                        param1 => param1.VehicleClass, param2 => param2.VehicleMake, param3 => param3.VehicleModel, param4 => param4.Country, param5 => param5.VehicleBodyType,
                        param6 => param6.VehicleEngineType, param6 => param6.VehicleCancelReason, param7 => param7.VehicleStatus);
                }
                getVehicleParticularResponseDto.vehicleDetails = mapper.Map<List<VehicleParticularDetailsByVehicleIdDto>>(vehicleDetails);

                if(getVehicleParticularResponseDto.vehicleDetails.Count > 0)
                {
                    getVehicleParticularResponseDto.HttpStatusCode = HttpStatusCode.OK;
                }
                else
                {
                    getVehicleParticularResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                }

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.VehicleServiceName, "GetVehicleParticularHandler", "GetVehicleParticularHandler completed");
            }
            catch (Exception ex)
            {
                getVehicleParticularResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                getVehicleParticularResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.VehicleServiceName, "GetVehicleParticularHandler", ex.ToString());
            }

            return getVehicleParticularResponseDto;
        }
    }
}
