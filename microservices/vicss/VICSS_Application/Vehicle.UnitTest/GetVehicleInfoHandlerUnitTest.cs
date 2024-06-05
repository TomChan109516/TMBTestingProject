namespace VICSS.Test.Services.Vehicle.UnitTest
{
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;

    public class GetVehicleInfoHandlerUnitTest
    {
        [Fact]
        public void GetVehicleInfoHandlerValidVehicleIdUnitTest()
        {
            // Arrange
            var vehicleId = "Vehicle1";
            var vehicle = new Vehicle { VehicleId = vehicleId, VehicleMakeId = "001", VehicleRegMarkNumber = "DDD1688", VehicleRecordTypeCode = "NV", LastRecordTransactionTypeCode = 'I' };
            var request = new GetVehicleInfoRequestDto { vehicleId = vehicleId };
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetVehicleInfoMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            genericRepo.Setup(i => i.GetById(vehicleId)).ReturnsAsync(vehicle);
            var handler = new GetVehicleInfoHandler(mapper, genericRepo.Object);

            // Act
            var result = handler.Handle(request, CancellationToken.None).Result;

            // Assert
            genericRepo.Verify(x => x.GetById(vehicleId), Times.Once);
            Assert.NotNull(result);
            Assert.Equal(vehicleId, result.VehicleId);
        }

        [Fact]
        public void GetVehicleInfoHandlerInvalidVehicleIdUnitTest()
        {
            // Arrange
            var vehicleId = "InvalidVehicleId";
            var request = new GetVehicleInfoRequestDto { vehicleId = vehicleId };
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetVehicleInfoMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            genericRepo.Setup(i => i.GetById(vehicleId)).ReturnsAsync((Vehicle)null);
            var handler = new GetVehicleInfoHandler(mapper, genericRepo.Object);

            // Act
            var result = handler.Handle(request, CancellationToken.None).Result;

            // Assert
            genericRepo.Verify(x => x.GetById(vehicleId), Times.Once);
            Assert.NotNull(result);
            Assert.Null(result.VehicleId);
        }

        [Fact]
        public void GetVehicleInfoHandlerExceptionUnitTest()
        {
            // Arrange
            var vehicleId = "Vehicle1";
            var request = new GetVehicleInfoRequestDto { vehicleId = vehicleId };
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetVehicleInfoMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            genericRepo.Setup(i => i.GetById(vehicleId)).ThrowsAsync(new Exception());
            var handler = new GetVehicleInfoHandler(mapper, genericRepo.Object);

            // Act
            var result = handler.Handle(request, CancellationToken.None).Result;

            // Assert
            genericRepo.Verify(x => x.GetById(vehicleId), Times.Once);
            Assert.NotNull(result);
            Assert.Null(result.VehicleId);
        }
    }
}