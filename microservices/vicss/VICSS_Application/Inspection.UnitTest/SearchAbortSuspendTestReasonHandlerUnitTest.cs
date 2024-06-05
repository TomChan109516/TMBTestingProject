namespace VICSS.Test.Services.Inspection.UnitTest
{
    using AutoMapper;
    using Microsoft.Extensions.Logging;
    using Moq;
    using System.Linq.Expressions;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.EventHandlers;
    using VICSS.Service.Inspection.Mappers;

    public class SearchAbortSuspendTestReasonHandlerUnitTest
    {
        [Fact]
        public void SearchAbortSuspendTestReasonHandlerAllReasonsUnitTest()
        {
            //Arrange
            List<AbortSuspendTestReason> data = new List<AbortSuspendTestReason>();
            data.Add(new AbortSuspendTestReason { Code = "Code1", Description = "Description1", ReasonType = "Type1" });
            SearchAbortSuspendTestReasonRequestDto searchAbortSuspendTestReasonRequestDto = new SearchAbortSuspendTestReasonRequestDto();

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AbortSuspendTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<SearchAbortSuspendTestReasonHandler>>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();

            genericRepo.Setup(i => i.GetAll()).ReturnsAsync(data);

            SearchAbortSuspendTestReasonHandler searchAbortSuspendTestReasonHandler = new SearchAbortSuspendTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);

            //Act
            var returnedData = searchAbortSuspendTestReasonHandler.Handle(searchAbortSuspendTestReasonRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetAll(), Times.Once);
            Assert.Single(returnedData.Result.searchAbortSuspendTestReason);
            Assert.Equal(data[0].Code, returnedData.Result.searchAbortSuspendTestReason[0].Code);
        }

        [Fact]
        public void SearchAbortSuspendTestReasonHandlerSearchReasonWithResultUnitTest()
        {
            //Arrange
            List<AbortSuspendTestReason> data = new List<AbortSuspendTestReason>();
            data.Add(new AbortSuspendTestReason { Code = "Code1", Description = "Description1", ReasonType = "Type1" });
            SearchAbortSuspendTestReasonRequestDto searchAbortSuspendTestReasonRequestDto = new SearchAbortSuspendTestReasonRequestDto();
            searchAbortSuspendTestReasonRequestDto.Code = "Code1";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AbortSuspendTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var mockLogger = new Mock<ILogger<SearchAbortSuspendTestReasonHandler>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>())).ReturnsAsync(data);

            SearchAbortSuspendTestReasonHandler searchAbortSuspendTestReasonHandler = new SearchAbortSuspendTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);

            //Act
            var returnedData = searchAbortSuspendTestReasonHandler.Handle(searchAbortSuspendTestReasonRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>()), Times.Once);
            Assert.Single(returnedData.Result.searchAbortSuspendTestReason);
            Assert.Equal(data[0].Code, returnedData.Result.searchAbortSuspendTestReason[0].Code);
        }

        [Fact]
        public void SearchAbortSuspendTestReasonHandlerSearchReasonWithoutResultUnitTest()
        {
            //Arrange
            List<AbortSuspendTestReason> data = new List<AbortSuspendTestReason>();
            SearchAbortSuspendTestReasonRequestDto searchAbortSuspendTestReasonRequestDto = new SearchAbortSuspendTestReasonRequestDto();
            searchAbortSuspendTestReasonRequestDto.Code = "Code2";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AbortSuspendTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var mockLogger = new Mock<ILogger<SearchAbortSuspendTestReasonHandler>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>())).ReturnsAsync(data);

            SearchAbortSuspendTestReasonHandler searchAbortSuspendTestReasonHandler = new SearchAbortSuspendTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);

            //Act
            var returnedData = searchAbortSuspendTestReasonHandler.Handle(searchAbortSuspendTestReasonRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>()), Times.Once);
            Assert.Empty(returnedData.Result.searchAbortSuspendTestReason);
        }
        [Fact]
        public void SearchAbortSuspendTestReasonHandlerSearchByDescriptionUnitTest()
        {
            //Arrange
            List<AbortSuspendTestReason> data = new List<AbortSuspendTestReason>();
            data.Add(new AbortSuspendTestReason { Code = "Code1", Description = "Description1", ReasonType = "Type1" });
            SearchAbortSuspendTestReasonRequestDto searchAbortSuspendTestReasonRequestDto = new SearchAbortSuspendTestReasonRequestDto();
            searchAbortSuspendTestReasonRequestDto.Description = "Description1";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AbortSuspendTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var mockLogger = new Mock<ILogger<SearchAbortSuspendTestReasonHandler>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>())).ReturnsAsync(data);

            SearchAbortSuspendTestReasonHandler searchAbortSuspendTestReasonHandler = new SearchAbortSuspendTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);

            //Act
            var returnedData = searchAbortSuspendTestReasonHandler.Handle(searchAbortSuspendTestReasonRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>()), Times.Once);
            Assert.Single(returnedData.Result.searchAbortSuspendTestReason);
            Assert.Equal(data[0].Description, returnedData.Result.searchAbortSuspendTestReason[0].Description);
        }

        [Fact]
        public void SearchAbortSuspendTestReasonHandlerSearchByReasonTypeUnitTest()
        {
            //Arrange
            List<AbortSuspendTestReason> data = new List<AbortSuspendTestReason>();
            data.Add(new AbortSuspendTestReason { Code = "Code1", Description = "Description1", ReasonType = "Type1" });
            SearchAbortSuspendTestReasonRequestDto searchAbortSuspendTestReasonRequestDto = new SearchAbortSuspendTestReasonRequestDto();
            searchAbortSuspendTestReasonRequestDto.ReasonType = "Type1";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AbortSuspendTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var mockLogger = new Mock<ILogger<SearchAbortSuspendTestReasonHandler>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>())).ReturnsAsync(data);

            SearchAbortSuspendTestReasonHandler searchAbortSuspendTestReasonHandler = new SearchAbortSuspendTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);

            //Act
            var returnedData = searchAbortSuspendTestReasonHandler.Handle(searchAbortSuspendTestReasonRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>()), Times.Once);
            Assert.Single(returnedData.Result.searchAbortSuspendTestReason);
            Assert.Equal(data[0].ReasonType, returnedData.Result.searchAbortSuspendTestReason[0].ReasonType);
        }

        [Fact]
        public void SearchAbortSuspendTestReasonHandlerSearchByNonExistingCodeUnitTest()
        {
            //Arrange
            List<AbortSuspendTestReason> data = new List<AbortSuspendTestReason>();
            SearchAbortSuspendTestReasonRequestDto searchAbortSuspendTestReasonRequestDto = new SearchAbortSuspendTestReasonRequestDto();
            searchAbortSuspendTestReasonRequestDto.Code = "Code2";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AbortSuspendTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var mockLogger = new Mock<ILogger<SearchAbortSuspendTestReasonHandler>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>())).ReturnsAsync(data);

            SearchAbortSuspendTestReasonHandler searchAbortSuspendTestReasonHandler = new SearchAbortSuspendTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);

            //Act
            var returnedData = searchAbortSuspendTestReasonHandler.Handle(searchAbortSuspendTestReasonRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>()), Times.Once);
            Assert.Empty(returnedData.Result.searchAbortSuspendTestReason);
        }

        [Fact]
        public void SearchAbortSuspendTestReasonHandlerSearchByNonExistingDescriptionUnitTest()
        {
            //Arrange
            List<AbortSuspendTestReason> data = new List<AbortSuspendTestReason>();
            SearchAbortSuspendTestReasonRequestDto searchAbortSuspendTestReasonRequestDto = new SearchAbortSuspendTestReasonRequestDto();
            searchAbortSuspendTestReasonRequestDto.Description = "Description2";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AbortSuspendTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();
            var mockLogger = new Mock<ILogger<SearchAbortSuspendTestReasonHandler>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>())).ReturnsAsync(data);

            SearchAbortSuspendTestReasonHandler searchAbortSuspendTestReasonHandler = new SearchAbortSuspendTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);

            //Act
            var returnedData = searchAbortSuspendTestReasonHandler.Handle(searchAbortSuspendTestReasonRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<AbortSuspendTestReason, bool>>>()), Times.Once);
            Assert.Empty(returnedData.Result.searchAbortSuspendTestReason);
        }
        [Fact]
        public void SearchAbortSuspendTestReasonHandlerExceptionTest()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AbortSuspendTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<SearchAbortSuspendTestReasonHandler>>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, AbortSuspendTestReason>>();

            // Setup the repository to throw an exception when called
            genericRepo.Setup(i => i.GetAll()).Throws(new Exception("Test exception"));

            SearchAbortSuspendTestReasonHandler searchAbortSuspendTestReasonHandler = new SearchAbortSuspendTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);
            SearchAbortSuspendTestReasonRequestDto searchAbortSuspendTestReasonRequestDto = new SearchAbortSuspendTestReasonRequestDto();

            // Act
            var returnedData = searchAbortSuspendTestReasonHandler.Handle(searchAbortSuspendTestReasonRequestDto, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, returnedData.Result.HttpStatusCode);
            mockLogger.Verify(
                x => x.Log(
                    It.IsAny<LogLevel>(),
                    It.IsAny<EventId>(),
                    It.Is<It.IsAnyType>((v, t) => true),
                    It.IsAny<Exception>(),
                    It.Is<Func<It.IsAnyType, Exception, string>>((v, t) => true)), Times.Exactly(2));
        }
    }
}
