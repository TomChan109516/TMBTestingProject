namespace VICSS.Service.Artu.Mappers
{
    using AutoMapper;
    using System.Diagnostics.CodeAnalysis;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Service.Artu.Domain;

    [ExcludeFromCodeCoverage]
    public class AddVeePairingMapper : Profile
    {
        public AddVeePairingMapper()
        {
            CreateMap<AddVeePairingRequestDto, ArtuConfig>();
            CreateMap<ArtuConfig, EntityDto>();
        }
    }
}