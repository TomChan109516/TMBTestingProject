namespace VICSS.Test.Services.Vehicle.UnitTest
{
    using Microsoft.Extensions.Logging;
    using System.Net;
    using System.Text.RegularExpressions;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Shared.Models.Common;

    public class SearchVehicleHandlerUnitTest
    {
        [Fact]
        public void SearchVehicleHandlerAllVehicleUnitTest()
        {
            //Arrange
            List<Vehicle> data = new List<Vehicle>();
            data.Add(new Vehicle { VehicleId = "Vehicle1", VehicleMakeId = "001", VehicleRegMarkNumber = "DDD1688", VehicleRecordTypeCode = "NV", LastRecordTransactionTypeCode = 'I' });
            SearchVehicleRequestDto searchVehicleRequestDto = new SearchVehicleRequestDto();

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchVehicleMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var logger = new Mock<ILogger<SearchVehicleHandler>>();
            ILogger<SearchVehicleHandler> mockLogger = logger.Object;
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();

            genericRepo.Setup(i => i.GetAll(param1 => param1.VehicleClass, param2 => param2.VehicleMake)).ReturnsAsync(data);

            SearchVehicleHandler searchVehicleHandler = new SearchVehicleHandler(mapper, genericRepo.Object,mockLogger);

            //Act
            var returnedData = searchVehicleHandler.Handle(searchVehicleRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetAll(param1 => param1.VehicleClass, param2 => param2.VehicleMake), Times.Once);
            Assert.Single(returnedData.Result.searchVehicle);
            Assert.Equal(data[0].VehicleId, returnedData.Result.searchVehicle[0].VehicleId);
        }

        [Fact]
        public void SearchVehicleHandlerSearchVehicleWithResultUnitTest()
        {
            //Arrange
            List<Vehicle> data = new List<Vehicle>();
            data.Add(new Vehicle { VehicleId = "Vehicle1", VehicleMakeId = "001", VehicleRegMarkNumber = "c", VehicleRecordTypeCode = "NV", LastRecordTransactionTypeCode = 'I' });
            SearchVehicleRequestDto searchVehicleRequestDto = new SearchVehicleRequestDto();
            searchVehicleRequestDto.VehicleRegMarkNumber = "DDD1688";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchVehicleMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            var logger = new Mock<ILogger<SearchVehicleHandler>>();
            ILogger<SearchVehicleHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake)).ReturnsAsync(data);

            SearchVehicleHandler searchVehicleHandler = new SearchVehicleHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = searchVehicleHandler.Handle(searchVehicleRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake),Times.Once);
            Assert.Single(returnedData.Result.searchVehicle);
            Assert.Equal(data[0].VehicleId, returnedData.Result.searchVehicle[0].VehicleId);
        }


        [Fact]
        public void SearchVehicleHandlerSearchVehicleWithoutresultUnitTest()
        {
            //Arrange
            List<Vehicle> data = new List<Vehicle>();
            //data.Add(new Vehicle { VehicleId = "Vehicle1", VehicleMakeId = "001", VehicleRegMarkNumber = "c", VehicleRecordTypeCode = "NV", LastRecordTransactionTypeCode = 'I' });
            SearchVehicleRequestDto searchVehicleRequestDto = new SearchVehicleRequestDto();
            searchVehicleRequestDto.VehicleRegMarkNumber = "DDD1681";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchVehicleMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            var logger = new Mock<ILogger<SearchVehicleHandler>>();
            ILogger<SearchVehicleHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake)).ReturnsAsync(data);

            SearchVehicleHandler searchVehicleHandler = new SearchVehicleHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = searchVehicleHandler.Handle(searchVehicleRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake), Times.Once);
            Assert.Empty(returnedData.Result.searchVehicle);
        }

        [Fact]
        public void SearchVehicleHandlerSearchVehicleWithResultBasedOnVehicleClassUnitTest()
        {
            //Arrange
            List<Vehicle> data = new List<Vehicle>();
            data.Add(new Vehicle { VehicleId = "Vehicle1",VehicleClassId = "001", VehicleRegMarkNumber = "DDD1688", VehicleMakeId = "001", VehicleRecordTypeCode = "NV", LastRecordTransactionTypeCode = 'I' });
            SearchVehicleRequestDto searchVehicleRequestDto = new SearchVehicleRequestDto();
            searchVehicleRequestDto.VehicleRegMarkNumber = "DDD1688";
            searchVehicleRequestDto.VehicleClassId = "001";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchVehicleMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            var logger = new Mock<ILogger<SearchVehicleHandler>>();
            ILogger<SearchVehicleHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake)).ReturnsAsync(data);

            SearchVehicleHandler searchVehicleHandler = new SearchVehicleHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = searchVehicleHandler.Handle(searchVehicleRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake), Times.Once);
            Assert.Single(returnedData.Result.searchVehicle);
            Assert.Equal(data[0].VehicleId, returnedData.Result.searchVehicle[0].VehicleId);
        }

        [Fact]
        public void SearchVehicleHandlerSearchVehicleWithResultBasedOnVehicleSubClassUnitTest()
        {
            //Arrange
            List<Vehicle> data = new List<Vehicle>();
            data.Add(new Vehicle { VehicleId = "Vehicle1", VehicleClassId = "001", VehicleRegMarkNumber = "DDD1688", VehicleMakeId = "001", VehicleRecordTypeCode = "NV", LastRecordTransactionTypeCode = 'I' });
            SearchVehicleRequestDto searchVehicleRequestDto = new SearchVehicleRequestDto();
            searchVehicleRequestDto.VehicleRegMarkNumber = "DDD1688";
            searchVehicleRequestDto.VehicleClassId = "001";
            searchVehicleRequestDto.VehicleSubclassId = "001";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchVehicleMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();
            var logger = new Mock<ILogger<SearchVehicleHandler>>();
            ILogger<SearchVehicleHandler> mockLogger = logger.Object;

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake)).ReturnsAsync(data);

            SearchVehicleHandler searchVehicleHandler = new SearchVehicleHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = searchVehicleHandler.Handle(searchVehicleRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake), Times.Once);
            Assert.Single(returnedData.Result.searchVehicle);
            Assert.Equal(data[0].VehicleId, returnedData.Result.searchVehicle[0].VehicleId);
        }

        [Fact]
        public void SearchVehicleHandlerWithWildcardCharacterUnitTest()
        {
            //Arrange
            List<Vehicle> data = new List<Vehicle>();
            data.Add(new Vehicle { VehicleId = "Vehicle1", VehicleMakeId = "001", VehicleRegMarkNumber = "DDD1688", VehicleRecordTypeCode = "NV", LastRecordTransactionTypeCode = 'I' });
            SearchVehicleRequestDto searchVehicleRequestDto = new SearchVehicleRequestDto();
            searchVehicleRequestDto.VehicleChasisNumber = "*";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchVehicleMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var logger = new Mock<ILogger<SearchVehicleHandler>>();
            ILogger<SearchVehicleHandler> mockLogger = logger.Object;
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake)).ReturnsAsync(data);

            SearchVehicleHandler searchVehicleHandler = new SearchVehicleHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = searchVehicleHandler.Handle(searchVehicleRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake), Times.Once);
            Assert.Single(returnedData.Result.searchVehicle);
            Assert.Equal(data[0].VehicleId, returnedData.Result.searchVehicle[0].VehicleId);
        }

        [Fact]
        public void SearchVehicleHandlerWithRemoveSpecialCharactersUnitTest()
        {
            //Arrange
            List<Vehicle> data = new List<Vehicle>();
            data.Add(new Vehicle { VehicleId = "Vehicle1", VehicleMakeId = "001", VehicleRegMarkNumber = "DDD1688", VehicleRecordTypeCode = "NV", LastRecordTransactionTypeCode = 'I' });
            SearchVehicleRequestDto searchVehicleRequestDto = new SearchVehicleRequestDto();
            searchVehicleRequestDto.VehicleChasisNumber = "ABC@123";
            searchVehicleRequestDto.RemoveSpecialCharacters = true;

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchVehicleMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var logger = new Mock<ILogger<SearchVehicleHandler>>();
            ILogger<SearchVehicleHandler> mockLogger = logger.Object;
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake)).ReturnsAsync(data);

            SearchVehicleHandler searchVehicleHandler = new SearchVehicleHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = searchVehicleHandler.Handle(searchVehicleRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake), Times.Once);
            Assert.Single(returnedData.Result.searchVehicle);
            Assert.Equal(data[0].VehicleId, returnedData.Result.searchVehicle[0].VehicleId);
        }

        [Fact]
        public void SearchVehicleHandlerExceptionHandlingUnitTest()
        {
            //Arrange
            SearchVehicleRequestDto searchVehicleRequestDto = new SearchVehicleRequestDto();
            searchVehicleRequestDto.VehicleChasisNumber = "ABC123";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchVehicleMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var logger = new Mock<ILogger<SearchVehicleHandler>>();
            ILogger<SearchVehicleHandler> mockLogger = logger.Object;
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();

            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake)).Throws(new Exception());

            SearchVehicleHandler searchVehicleHandler = new SearchVehicleHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = searchVehicleHandler.Handle(searchVehicleRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<Vehicle, bool>>>(), param1 => param1.VehicleClass, param2 => param2.VehicleMake), Times.Once);
            Assert.Equal(HttpStatusCode.InternalServerError, returnedData.Result.HttpStatusCode);
            Assert.Equal(CommonErrorMessage.ErrorMessage, returnedData.Result.ErrorMessage);
        }

        [Fact]
        public void RemoveSpecialCharactersUnitTest()
        {
            //Arrange
            string input = "ABC@123";

            //Act
            string result = Regex.Replace(input, CommonConstants.RemoveSpecialCharactersPattern, "");

            //Assert
            Assert.Equal("ABC123", result);
        }

        [Fact]
        public void SearchVehicleHandlerWithNullVehicleChasisNumberUnitTest()
        {
            //Arrange
            List<Vehicle> data = new List<Vehicle>();
            data.Add(new Vehicle { VehicleId = "Vehicle1", VehicleMakeId = "001", VehicleRegMarkNumber = "DDD1688", VehicleRecordTypeCode = "NV", LastRecordTransactionTypeCode = 'I' });

            SearchVehicleRequestDto searchVehicleRequestDto = new SearchVehicleRequestDto();
            searchVehicleRequestDto.VehicleChasisNumber = null;

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchVehicleMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var logger = new Mock<ILogger<SearchVehicleHandler>>();
            ILogger<SearchVehicleHandler> mockLogger = logger.Object;
            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, Vehicle>>();

            genericRepo.Setup(i => i.GetAll(param1 => param1.VehicleClass, param2 => param2.VehicleMake)).ReturnsAsync(data);

            SearchVehicleHandler searchVehicleHandler = new SearchVehicleHandler(mapper, genericRepo.Object, mockLogger);

            //Act
            var returnedData = searchVehicleHandler.Handle(searchVehicleRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetAll(param1 => param1.VehicleClass, param2 => param2.VehicleMake), Times.Once);
            Assert.Single(returnedData.Result.searchVehicle);
            Assert.Null(returnedData.Result.searchVehicle.FirstOrDefault().VehicleChasisNumber);
        }
    }
}