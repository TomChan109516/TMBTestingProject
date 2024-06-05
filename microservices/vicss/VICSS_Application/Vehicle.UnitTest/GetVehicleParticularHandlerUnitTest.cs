namespace VICSS.Test.Services.Vehicle.UnitTest
{
    using Microsoft.Extensions.Logging;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    public class GetVehicleParticularHandlerUnitTest
    {
        [Fact]
        public void VehicleParticularHandlerVehicleFoundUnitTest()
        {
            //Arrange
            List<Vehicle> data = new List<Vehicle>();
            data.Add(new Vehicle { VehicleId = "DEBD6B8F-3E5E-400E-81F7-55BC9B29BA0F", VehicleMakeId = "001", LastRecordTransactionTypeCode = 'I' });
            GetVehicleParticularsRequestDto getVehicleParticularsRequestDto = new GetVehicleParticularsRequestDto("DEBD6B8F-3E5E-400E-81F7-55BC9B29BA0F");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new VehicleParticularMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            var logger = new Mock<ILogger<GetVehicleParticularHandler>>();
            ILogger<GetVehicleParticularHandler> mockLogger = logger.Object;
            //(Expression<Func<TEntity, bool>> selector, params Expression<Func<TEntity, object>>[] navigationProperties)

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake, param3 => param3.VehicleModel, param4 => param4.Country, param5 => param5.VehicleBodyType, param6 => param6.VehicleEngineType, param6 => param6.VehicleCancelReason, param7 => param7.VehicleStatus)).ReturnsAsync(data);

            GetVehicleParticularHandler handler = new GetVehicleParticularHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = handler.Handle(getVehicleParticularsRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake, param3 => param3.VehicleModel, param4 => param4.Country, param5 => param5.VehicleBodyType,
                        param6 => param6.VehicleEngineType, param6 => param6.VehicleCancelReason, param7 => param7.VehicleStatus), Times.Once);
            Assert.Single(returnedData.Result.vehicleDetails);
            Assert.Equal(data[0].VehicleId, returnedData.Result.vehicleDetails[0].VehicleId);
        }

        [Fact]
        public void VehicleParticularHandlerVehicleNotFoundUnitTest()
        {
            //Arrange
            List<Vehicle> data = new List<Vehicle>();
            //data.Add(new Vehicle { VehicleId = "DEBD6B8F-3E5E-400E-81F7-55BC9B29BA0F", VehicleMakeId = "001", LastRecordTransactionTypeCode = 'I' });
            GetVehicleParticularsRequestDto getVehicleParticularsRequestDto = new GetVehicleParticularsRequestDto("DEBD6B8F-3E5E");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new VehicleParticularMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            var logger = new Mock<ILogger<GetVehicleParticularHandler>>();
            ILogger<GetVehicleParticularHandler> mockLogger = logger.Object;


            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake, param3 => param3.VehicleModel, param4 => param4.Country, param5 => param5.VehicleBodyType,
                        param6 => param6.VehicleEngineType, param6 => param6.VehicleCancelReason, param7 => param7.VehicleStatus)).ReturnsAsync(data);

            GetVehicleParticularHandler handler = new GetVehicleParticularHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = handler.Handle(getVehicleParticularsRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake, param3 => param3.VehicleModel, param4 => param4.Country, param5 => param5.VehicleBodyType,
                        param6 => param6.VehicleEngineType, param6 => param6.VehicleCancelReason, param7 => param7.VehicleStatus), Times.Once);            
            Assert.Empty(returnedData.Result.vehicleDetails);
        }

    }
}
