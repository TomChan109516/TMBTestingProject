using Microsoft.Extensions.Logging;

namespace VICSS.Test.Services.Vehicle.UnitTest
{
    public class GetVehicleMakeHandlerUnitTest
    {        
        [Fact]
        public void VehicleMakeHandlerGetAllDataUnitTest()
        {
            //Arrange

            List<VehicleMake> data = new List<VehicleMake>();
            data.Add(new VehicleMake { MakeId = "001", VehicleMakeId = "001", VehicleMakeName = "Make Name1" });
            data.Add(new VehicleMake { MakeId = "002", VehicleMakeId = "002", VehicleMakeName = "Make Name2" });
            GetVehicleMakeRequestDto getVehicleMakeRequestDto = new GetVehicleMakeRequestDto("All");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetVehicleMakeMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, VehicleMake>>();
            var logger = new Mock<ILogger<GetVehicleMakeHandler>>();
            ILogger<GetVehicleMakeHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetAll()).ReturnsAsync(data);
            GetVehicleMakeHandler handler = new GetVehicleMakeHandler(mapper, genericRepo.Object,mockLogger);

            //Act
            var returnedData = handler.Handle(getVehicleMakeRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetAll(), Times.Once);
            Assert.Equal(data.Count, returnedData.Result.vehicleMakes.Count);
            Assert.Equal(data[0].VehicleMakeId, returnedData.Result.vehicleMakes[0].VehicleMakeId);
        }

        [Fact]
        public void VehicleMakeHandlerGetActiveDataUnitTest()
        {
            //Arrange
            List<VehicleMake> data = new List<VehicleMake>();
            data.Add(new VehicleMake { MakeId = "001", VehicleMakeId = "001", VehicleMakeName = "Make Name1", LastRecordTransactionTypeCode = 'I' });
            GetVehicleMakeRequestDto getVehicleMakeRequestDto = new GetVehicleMakeRequestDto("Active");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetVehicleMakeMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, VehicleMake>>();
            var logger = new Mock<ILogger<GetVehicleMakeHandler>>();
            ILogger<GetVehicleMakeHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<VehicleMake, bool>>>())).ReturnsAsync(data);

            GetVehicleMakeHandler handler = new GetVehicleMakeHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = handler.Handle(getVehicleMakeRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<VehicleMake, bool>>>()), Times.Once);
            Assert.Single(returnedData.Result.vehicleMakes);
            Assert.Equal(data[0].VehicleMakeId, returnedData.Result.vehicleMakes[0].VehicleMakeId);
            Assert.Equal(data[0].MakeId, returnedData.Result.vehicleMakes[0].MakeId);
        }


        [Fact]
        public void VehicleMakeHandlerGetInActiveDataUnitTest()
        {
            //Arrange
            List<VehicleMake> data = new List<VehicleMake>();
            data.Add(new VehicleMake { MakeId = "002", VehicleMakeId = "002", VehicleMakeName = "Make Name2", LastRecordTransactionTypeCode = 'D' });
            GetVehicleMakeRequestDto getVehicleMakeRequestDto = new GetVehicleMakeRequestDto("Inactive");

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetVehicleMakeMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, VehicleMake>>();
            var logger = new Mock<ILogger<GetVehicleMakeHandler>>();
            ILogger<GetVehicleMakeHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<VehicleMake, bool>>>())).ReturnsAsync(data);

            GetVehicleMakeHandler handler = new GetVehicleMakeHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = handler.Handle(getVehicleMakeRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<VehicleMake, bool>>>()), Times.Once);
            Assert.Single(returnedData.Result.vehicleMakes);
            Assert.Equal(data[0].VehicleMakeId, returnedData.Result.vehicleMakes[0].VehicleMakeId);
            Assert.Equal(data[0].MakeId, returnedData.Result.vehicleMakes[0].MakeId);
        }
        
    }
}