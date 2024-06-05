namespace VICSS.Test.Services.Vehicle.UnitTest
{
    using AutoMapper;
    using global::Vehicle.Mappers;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;
    using Moq;
    using System.Net;
    using System.Threading;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Vehicle.Domain;
    using VICSS.Service.Vehicle.EventHandlers;
    using Xunit;

    public class SearchWatchlistReasonHandlerTests
    {

        [Fact]
        public async Task NoWatchlistReasonsNotFoundResponse()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            mockRepo.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ReturnsAsync(new List<WatchlistReason>());

            var mockLogger = new Mock<ILogger<SearchWatchlistReasonHandler>>();
            var mockProducer = new Mock<IKafkaProducer>();
            var mockConsumer = new Mock<IKafkaConsumer>();
            var mockConfig = new Mock<IConfiguration>();

            var handler = new SearchWatchlistReasonHandler(mockRepo.Object, mapper, mockLogger.Object, mockConsumer.Object, mockProducer.Object, mockConfig.Object);

            var request = new SearchWatchlistReasonRequestDto();

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            mockRepo.Verify(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>()), Times.Once);
        }

        [Fact]
        public async Task NoMatchingWatchlistReasonsReturnsNotFound()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            mockRepo.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ReturnsAsync(new List<WatchlistReason>());

            var mockLogger = new Mock<ILogger<SearchWatchlistReasonHandler>>();
            var mockProducer = new Mock<IKafkaProducer>();
            var mockConsumer = new Mock<IKafkaConsumer>();
            var mockConfig = new Mock<IConfiguration>();

            var handler = new SearchWatchlistReasonHandler(mockRepo.Object, mapper, mockLogger.Object, mockConsumer.Object, mockProducer.Object, mockConfig.Object);

            var request = new SearchWatchlistReasonRequestDto { CentreId = "Centre1" };

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            mockRepo.Verify(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>()), Times.Once);
        }

        [Fact]
        public async Task AllStringPropertiesNullOrEmptyReturnsAllReasons()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockLogger = new Mock<ILogger<SearchWatchlistReasonHandler>>();
            var mockProducer = new Mock<IKafkaProducer>();
            var mockConsumer = new Mock<IKafkaConsumer>();
            var mockConfig = new Mock<IConfiguration>();
            var handler = new SearchWatchlistReasonHandler(mockRepo.Object, mapper, mockLogger.Object, mockConsumer.Object, mockProducer.Object, mockConfig.Object);
            var request = new SearchWatchlistReasonRequestDto();

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            mockRepo.Verify(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>()), Times.Once);
        }

        [Fact]
        public async Task WithMatchingQueryReturnsMatchingReasons()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockLogger = new Mock<ILogger<SearchWatchlistReasonHandler>>();
            var mockProducer = new Mock<IKafkaProducer>();
            var mockConsumer = new Mock<IKafkaConsumer>();
            var mockConfig = new Mock<IConfiguration>();
            var handler = new SearchWatchlistReasonHandler(mockRepo.Object, mapper, mockLogger.Object, mockConsumer.Object, mockProducer.Object, mockConfig.Object);
            var request = new SearchWatchlistReasonRequestDto { CentreId = "Centre1" };

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            mockRepo.Verify(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>()), Times.Once);
        }

        [Fact]
        public async Task WithExceptionReturnsInternalServerError()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockLogger = new Mock<ILogger<SearchWatchlistReasonHandler>>();
            var mockProducer = new Mock<IKafkaProducer>();
            var mockConsumer = new Mock<IKafkaConsumer>();
            var mockConfig = new Mock<IConfiguration>();
            var handler = new SearchWatchlistReasonHandler(mockRepo.Object, mapper, mockLogger.Object, mockConsumer.Object, mockProducer.Object, mockConfig.Object);
            var request = new SearchWatchlistReasonRequestDto { CentreId = "Centre1" };
            mockRepo.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ThrowsAsync(new Exception());

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }

        [Fact]
        public async Task WithoutCentreDataReturnsNotFound()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockLogger = new Mock<ILogger<SearchWatchlistReasonHandler>>();
            var mockProducer = new Mock<IKafkaProducer>();
            var mockConsumer = new Mock<IKafkaConsumer>();
            var mockConfig = new Mock<IConfiguration>();
            var handler = new SearchWatchlistReasonHandler(mockRepo.Object, mapper, mockLogger.Object, mockConsumer.Object, mockProducer.Object, mockConfig.Object);
            var request = new SearchWatchlistReasonRequestDto { CentreId = "Centre1" };
            mockRepo.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ReturnsAsync(new List<WatchlistReason>());

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
        }

    }
}