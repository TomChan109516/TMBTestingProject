namespace VICSS.Test.Services.Vehicle.UnitTest
{
    using AutoMapper;
    using global::Vehicle.Mappers;
    using Microsoft.Extensions.Logging;
    using Moq;
    using System.Net;
    using System.Threading;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Shared.Models.Common;
    using Xunit;

    public class DisableWatchlistReasonHandlerUnitTest
    {
        [Fact]
        public async Task ReturnsNotFoundWhenWatchlistReasonDoesNotExist()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<DisableWatchlistReasonHandler>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();

            mockRepo.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ReturnsAsync(new List<WatchlistReason>());

            var handler = new DisableWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(new DisableWatchlistReasonRequestDto(), new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
        }

        [Fact]
        public async Task ReturnsBadRequestWhenWatchlistReasonAlreadyDisabled()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<DisableWatchlistReasonHandler>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();

            var watchlistReason = new WatchlistReason { LastRecordTransactionTypeCode = CommonConstants.DeleteTranTypeCode };
            mockRepo.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ReturnsAsync(new List<WatchlistReason> { watchlistReason });

            var handler = new DisableWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(new DisableWatchlistReasonRequestDto(), new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }

        [Fact]
        public async Task ReturnsOkWhenWatchlistReasonSuccessfullyDisabled()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<DisableWatchlistReasonHandler>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();
            var request = new DisableWatchlistReasonRequestDto
            {
                Id = "ExistingID",
                LastRecordTransactionUserId = "UserId"
            };
            var watchlistReason = new WatchlistReason();
            mockRepo.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ReturnsAsync(new List<WatchlistReason> { watchlistReason });

            var handler = new DisableWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(request, new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

        [Fact]
        public async Task ReturnsInternalServerErrorWhenExceptionThrown()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<DisableWatchlistReasonHandler>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();
            mockRepo.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ThrowsAsync(new Exception());

            var handler = new DisableWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(new DisableWatchlistReasonRequestDto(), new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }
        [Fact]
        public async Task ReturnsBadRequestWhenRequestIsNull()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new DisableWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<DisableWatchlistReasonHandler>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();

            var handler = new DisableWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(null, new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }
    }
}