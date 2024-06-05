using System.Linq.Expressions;
using Microsoft.Extensions.Logging;

namespace VICSS.Test.Services.Vehicle.UnitTest
{
    public class GetVehicleClassWithSubclassHandlerUnitTest
    {

        [Fact]
        public void GetVehicleClassWithSubclassHandlerGetAllDataUnitTest()
        {
            //Arrange            
            List<VehicleClass> data = new List<VehicleClass>();
            data.Add(new VehicleClass {
                VehicleClassId = "001",
                VehicleClassCode = "A",
                VehicleSubClass = "A-1",
                LastRecordTransactionTypeCode='I'
            });
            data.Add(new VehicleClass
            {
                VehicleClassId = "002",
                VehicleClassCode = "A",
                VehicleSubClass = "A-2",
                LastRecordTransactionTypeCode = 'I'
            });
            data.Add(new VehicleClass
            {
                VehicleClassId = "003",
                VehicleClassCode = "A",
                VehicleSubClass = "A-3",
                LastRecordTransactionTypeCode = 'U'
            });
            data.Add(new VehicleClass
            {
                VehicleClassId = "004",
                VehicleClassCode = "A",
                VehicleSubClass = "A-4",
                LastRecordTransactionTypeCode = 'D'
            });

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetVehicleMakeMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();

            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, VehicleClass>>();
            var logger = new Mock<ILogger<GetVehicleClassWithSubclassHandler>>();
            ILogger<GetVehicleClassWithSubclassHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetAll()).ReturnsAsync(data);
            GetVehicleClassWithSubclassHandler handler = new GetVehicleClassWithSubclassHandler(mapper, genericRepo.Object, mockLogger);

            GetVehicleClassWithSubclassRequestDto getVehicleClassWithSubclassRequestDto = new GetVehicleClassWithSubclassRequestDto("All");

            //Act
            var returnedData = handler.Handle(getVehicleClassWithSubclassRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetAll(), Times.Once);
            Assert.Equal(4, returnedData.Result.VehicleClassWithSubClasses[0].ListOfSubClasses.Count);
        }

        [Fact]
        public void GetVehicleClassWithSubclassHandlerGetActiveDataUnitTest()
        {
            //Arrange
            List<VehicleClass> data = new List<VehicleClass>();
            data.Add(new VehicleClass
            {
                VehicleClassId = "001",
                VehicleClassCode = "A",
                VehicleSubClass = "A-1",
                LastRecordTransactionTypeCode = 'I'
            });
            data.Add(new VehicleClass
            {
                VehicleClassId = "002",
                VehicleClassCode = "A",
                VehicleSubClass = "A-2",
                LastRecordTransactionTypeCode = 'I'
            });

            data.Add(new VehicleClass
            {
                VehicleClassId = "003",
                VehicleClassCode = "A",
                VehicleSubClass = "A-3",
                LastRecordTransactionTypeCode = 'U'
            });

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetVehicleMakeMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, VehicleClass>>();
            var logger = new Mock<ILogger<GetVehicleClassWithSubclassHandler>>();
            ILogger<GetVehicleClassWithSubclassHandler> mockLogger = logger.Object;


            GetVehicleClassWithSubclassHandler handler = new GetVehicleClassWithSubclassHandler(mapper, genericRepo.Object, mockLogger);

            GetVehicleClassWithSubclassRequestDto getVehicleClassWithSubclassRequestDto = new GetVehicleClassWithSubclassRequestDto("Active");
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<VehicleClass, bool>>>())).ReturnsAsync(data);

            //Act
            var returnedData = handler.Handle(getVehicleClassWithSubclassRequestDto, CancellationToken.None);

            //Assert

            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<VehicleClass, bool>>>()), Times.Once);
            Assert.Equal(3, returnedData.Result.VehicleClassWithSubClasses[0].ListOfSubClasses.Count);
            Assert.Single(returnedData.Result.VehicleClassWithSubClasses[0].ListOfSubClasses.Where(i => i.SubClassCode == "A-2").ToList());
        }

        [Fact]
        public void GetVehicleClassWithSubclassHandlerGetinactiveDataUnitTest()
        {
            //Arrange
            List<VehicleClass> data = new List<VehicleClass>();            
            data.Add(new VehicleClass
            {
                VehicleClassId = "004",
                VehicleClassCode = "A",
                VehicleSubClass = "A-4",
                LastRecordTransactionTypeCode = 'D'
            });

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new GetVehicleMakeMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, VehicleClass>>();
            var logger = new Mock<ILogger<GetVehicleClassWithSubclassHandler>>();
            ILogger<GetVehicleClassWithSubclassHandler> mockLogger = logger.Object;

            GetVehicleClassWithSubclassHandler handler = new GetVehicleClassWithSubclassHandler(mapper, genericRepo.Object, mockLogger);

            GetVehicleClassWithSubclassRequestDto getVehicleClassWithSubclassRequestDto = new GetVehicleClassWithSubclassRequestDto("Inactive");
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<VehicleClass, bool>>>())).ReturnsAsync(data);

            //Act
            var returnedData = handler.Handle(getVehicleClassWithSubclassRequestDto, CancellationToken.None);

            //Assert

            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<VehicleClass, bool>>>()), Times.Once);
            Assert.Single(returnedData.Result.VehicleClassWithSubClasses[0].ListOfSubClasses);
            Assert.Single(returnedData.Result.VehicleClassWithSubClasses[0].ListOfSubClasses.Where(i => i.SubClassCode == "A-4").ToList());
        }
    }
}
