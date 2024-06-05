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

    public class GetVehicleClassWithSubclassHandler : IRequestHandler<GetVehicleClassWithSubclassRequestDto, GetVehicleClassWithSubclassResponseDto>
    {        
        private readonly IMapper mapper;
        private readonly IGenericRepository<VehicleDBContext, VehicleClass> genericRepository;
        private readonly ILogger<GetVehicleClassWithSubclassHandler> logger;

        public GetVehicleClassWithSubclassHandler(IMapper mapper, IGenericRepository<VehicleDBContext, VehicleClass> genericRepository, ILogger<GetVehicleClassWithSubclassHandler> logger) 
        {            
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<GetVehicleClassWithSubclassResponseDto> Handle(GetVehicleClassWithSubclassRequestDto getVehicleClassWithSubclassRequestDto , CancellationToken cancellationToken)
        {
            GetVehicleClassWithSubclassResponseDto getVehicleClassWithSubclassResponseDto = new GetVehicleClassWithSubclassResponseDto();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.VehicleServiceName, "GetVehicleClassWithSubclassHandler", "GetVehicleClassWithSubclassHandler initiated");

                List<VehicleClass> vehicleClasses = new List<VehicleClass>();                
                
                if(getVehicleClassWithSubclassRequestDto.status == CommonConstants.AllStatus)
                {
                    vehicleClasses = (List<VehicleClass>)await genericRepository.GetAll();
                }
                else if(getVehicleClassWithSubclassRequestDto.status == CommonConstants.ActiveStatus)
                {
                    vehicleClasses = (List<VehicleClass>)await genericRepository.GetByQuery(x => x.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode);
                }
                else if(getVehicleClassWithSubclassRequestDto.status == CommonConstants.InactiveStatus)
                {
                    vehicleClasses = (List<VehicleClass>)await genericRepository.GetByQuery(x => x.LastRecordTransactionTypeCode == CommonConstants.DeleteTranTypeCode);
                }
                
                getVehicleClassWithSubclassResponseDto.VehicleClassWithSubClasses = await PrepareDropDownData(vehicleClasses);

                if(getVehicleClassWithSubclassResponseDto.VehicleClassWithSubClasses.Count > 0)
                {
                    getVehicleClassWithSubclassResponseDto.HttpStatusCode = HttpStatusCode.OK;
                }
                else
                {
                    getVehicleClassWithSubclassResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                }
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.VehicleServiceName, "GetVehicleClassWithSubclassHandler", "GetVehicleClassWithSubclassHandler completed");

            }
            catch(Exception ex) 
            {
                getVehicleClassWithSubclassResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                getVehicleClassWithSubclassResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, "", CommonConstants.VehicleServiceName, "GetVehicleClassWithSubclassHandler", ex.ToString());

            }            

            return getVehicleClassWithSubclassResponseDto;
        }


        private async Task<List<VehicleClassWithSubClassDto>> PrepareDropDownData(List<VehicleClass> vehicleClasses)
        {
            List<VehicleClassWithSubClassDto> vehicleClassWithSubClasses = new List<VehicleClassWithSubClassDto>();

            try
            {
                vehicleClasses.ForEach(vehicleClass =>
                {
                    //Class already present in list..Add only subclass
                    if(vehicleClassWithSubClasses.Exists(i => i.ClassCode == vehicleClass.VehicleClassCode))
                    {
                        var subClasses = vehicleClassWithSubClasses.FirstOrDefault(i => i.ClassCode == vehicleClass.VehicleClassCode).ListOfSubClasses;
                        if(subClasses != null && !subClasses.Exists(i => i.SubClassCode == vehicleClass.VehicleSubClass))
                        {
                            subClasses.Add(new VehicleSubClassDto
                            {
                                SubClassID = vehicleClass.VehicleClassId,
                                SubClassCode = vehicleClass.VehicleSubClass,
                            });
                        }
                    }
                    //Class not present in list..Add both class and subclass
                    else
                    {
                        List<VehicleSubClassDto> x = new List<VehicleSubClassDto>();
                        x.Add(new VehicleSubClassDto { SubClassID = vehicleClass.VehicleClassId, SubClassCode = vehicleClass.VehicleSubClass });

                        vehicleClassWithSubClasses.Add(new VehicleClassWithSubClassDto
                        {
                            ClassID = vehicleClass.VehicleClassCode,
                            ClassCode = vehicleClass.VehicleClassCode,
                            ListOfSubClasses = x,
                        });
                    }
                });
            }
            catch(Exception ex)
            {
                //To Do
                throw;
            }

            return vehicleClassWithSubClasses;
        }
    }
}
