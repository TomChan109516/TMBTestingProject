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

    public class SearchSkipTestReasonHandlerUnitTest
    {       
        [Fact]
        public void SearchSkipTestReasonHandlerAllReasonsUnitTest()
        {
            //Arrange
            List<SkipTestReason> data = new List<SkipTestReason>();
            data.Add(new SkipTestReason { Id = "001", TestType = "Type1", Code = "Code1", Description = "Description1" });
            SearchSkipTestReasonRequestDto searchSkipTestReasonRequestDto = new SearchSkipTestReasonRequestDto();

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SkipTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<SearchSkipTestReasonHandler>>();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();

            genericRepo.Setup(i => i.GetAll()).ReturnsAsync(data);

            SearchSkipTestReasonHandler searchSkipTestReasonHandler = new SearchSkipTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);

            //Act
            var returnedData = searchSkipTestReasonHandler.Handle(searchSkipTestReasonRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetAll(), Times.Once);
            Assert.Single(returnedData.Result.searchSkipTestReason);
            Assert.Equal(data[0].Id, returnedData.Result.searchSkipTestReason[0].Id);
        }

        [Fact]
        public void SearchSkipTestReasonHandlerSearchReasonWithResultUnitTest()
        {
            //Arrange
            List<SkipTestReason> data = new List<SkipTestReason>();
            data.Add(new SkipTestReason { Id = "001", TestType = "Type1", Code = "Code1", Description = "Description1" });
            SearchSkipTestReasonRequestDto searchSkipTestReasonRequestDto = new SearchSkipTestReasonRequestDto();
            searchSkipTestReasonRequestDto.Code = "Code1";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SkipTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<SearchSkipTestReasonHandler>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<SkipTestReason, bool>>>())).ReturnsAsync(data);

            SearchSkipTestReasonHandler searchSkipTestReasonHandler = new SearchSkipTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);

            //Act
            var returnedData = searchSkipTestReasonHandler.Handle(searchSkipTestReasonRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<SkipTestReason, bool>>>()), Times.Once);
            Assert.Single(returnedData.Result.searchSkipTestReason);
            Assert.Equal(data[0].Id, returnedData.Result.searchSkipTestReason[0].Id);
        }

        [Fact]
        public void SearchSkipTestReasonHandlerSearchReasonWithoutResultUnitTest()
        {
            //Arrange
            List<SkipTestReason> data = new List<SkipTestReason>();
            SearchSkipTestReasonRequestDto searchSkipTestReasonRequestDto = new SearchSkipTestReasonRequestDto();
            searchSkipTestReasonRequestDto.Code = "Code2";

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SkipTestReasonMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            var genericRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<SearchSkipTestReasonHandler>>();
            genericRepo.Setup(i => i.GetByQuery(It.IsAny<Expression<Func<SkipTestReason, bool>>>())).ReturnsAsync(data);

            SearchSkipTestReasonHandler searchSkipTestReasonHandler = new SearchSkipTestReasonHandler(mapper, genericRepo.Object, mockLogger.Object);

            //Act
            var returnedData = searchSkipTestReasonHandler.Handle(searchSkipTestReasonRequestDto, CancellationToken.None);

            //Assert
            genericRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<SkipTestReason, bool>>>()), Times.Once);
            Assert.Empty(returnedData.Result.searchSkipTestReason);
        }

        [Fact]
        public async Task AllStringPropertiesNullOrEmptyReturnsAllReasonsUnitTest()
        {
            // Arrange
            var mockMapper = new Mock<IMapper>();
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<SearchSkipTestReasonHandler>>();
            var handler = new SearchSkipTestReasonHandler(mockMapper.Object, mockRepo.Object, mockLogger.Object);
            var request = new SearchSkipTestReasonRequestDto();

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            mockRepo.Verify(repo => repo.GetAll(), Times.Once);
        }

        [Fact]
        public async Task SomeStringPropertiesNotNullOrEmptyReturnsFilteredReasonsUnitTest()
        {
            // Arrange
            var mockMapper = new Mock<IMapper>();
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<SearchSkipTestReasonHandler>>();
            var handler = new SearchSkipTestReasonHandler(mockMapper.Object, mockRepo.Object, mockLogger.Object);
            var request = new SearchSkipTestReasonRequestDto { Code = "001" };

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            mockRepo.Verify(repo => repo.GetByQuery(It.IsAny<Expression<Func<SkipTestReason, bool>>>()), Times.Once);
        }

        [Fact]
        public async Task GetAllThrowsExceptionReturnsInternalServerErrorUnitTest()
        {
            // Arrange
            var mockMapper = new Mock<IMapper>();
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            mockRepo.Setup(repo => repo.GetAll()).ThrowsAsync(new Exception());
            var mockLogger = new Mock<ILogger<SearchSkipTestReasonHandler>>();
            var handler = new SearchSkipTestReasonHandler(mockMapper.Object, mockRepo.Object, mockLogger.Object);
            var request = new SearchSkipTestReasonRequestDto();

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }

        [Fact]
        public async Task GetByQueryThrowsExceptionReturnsInternalServerErrorUnitTest()
        {
            // Arrange
            var mockMapper = new Mock<IMapper>();
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<SearchSkipTestReasonHandler>>();
            mockRepo.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<SkipTestReason, bool>>>())).ThrowsAsync(new Exception());
            var handler = new SearchSkipTestReasonHandler(mockMapper.Object, mockRepo.Object, mockLogger.Object);
            var request = new SearchSkipTestReasonRequestDto { Code = "001" };

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }

        [Fact]
        public async Task NoMatchingReasonsReturnsEmptyListUnitTest()
        {
            // Arrange
            var mockMapper = new Mock<IMapper>();
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, SkipTestReason>>();
            var mockLogger = new Mock<ILogger<SearchSkipTestReasonHandler>>();
            var handler = new SearchSkipTestReasonHandler(mockMapper.Object, mockRepo.Object, mockLogger.Object);
            var request = new SearchSkipTestReasonRequestDto { Code = "NonExistentCode" };

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            mockRepo.Verify(repo => repo.GetByQuery(It.IsAny<Expression<Func<SkipTestReason, bool>>>()), Times.Once);
            Assert.Empty(result.searchSkipTestReason);
        }
    }
}