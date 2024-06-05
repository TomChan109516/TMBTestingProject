namespace VICSS.Service.Appointment.Mappers
{
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Service.Models.Vehicle;
    using VICSS.Shared.Models.Vehicle;

    public class GetVehicleInfoMapper : Profile
    {
        public GetVehicleInfoMapper()
        {
            CreateMap<Vehicle, GetVehicleInfoResponseDto>();
            CreateMap<VehicleParticularDetailsByVehicleIdDto, GetVehicleAndAppointmentDetails >();
        }
    }
}
