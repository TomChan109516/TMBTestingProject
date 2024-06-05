namespace VICSS.Service.Vehicle.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Models.Vehicle;
    using VICSS.Service.Vehicle.Domain;

    public class GetVehicleInfoHandler : IRequestHandler<GetVehicleInfoRequestDto, GetVehicleInfoResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<VehicleDBContext, Vehicle> genericRepository;


        public GetVehicleInfoHandler(IMapper mapper, IGenericRepository<VehicleDBContext, Vehicle> genericRepository)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;

        }
        public async Task<GetVehicleInfoResponseDto> Handle(GetVehicleInfoRequestDto request, CancellationToken cancellationToken)
        {
            GetVehicleInfoResponseDto data = new();
            try
            {
                //var appointment = await genericAppointmentRepository.GetByQuery(x => x.AppointmentId == request.AppointmentNumber);//to be changed
                var vehicleInfo = (Vehicle)genericRepository.GetById(request.vehicleId).Result;
                if (vehicleInfo != null)
                {
                    var vehicleClass = await genericRepository.GetByQuery(x => x.VehicleClassId == vehicleInfo.VehicleClassId, param1 => param1.VehicleClass);
                    var vehicleMake= await genericRepository.GetByQuery(x => x.VehicleMakeId == vehicleInfo.VehicleMakeId, param1 => param1.VehicleMake);
                    var vehiclemodel = await genericRepository.GetByQuery(x => x.VehicleModelId == vehicleInfo.VehicleModelId, param1 => param1.VehicleModel);
                    
                    data = mapper.Map<GetVehicleInfoResponseDto>(vehicleInfo);
                }
            }
            catch (Exception)
            {

                //TO DO
            }
            return data;

        }
    }
}
