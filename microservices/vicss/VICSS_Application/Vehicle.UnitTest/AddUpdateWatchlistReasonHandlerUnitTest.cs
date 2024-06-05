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
    using VICSS.Shared.Models.Vehicle;
    using Xunit;



    public class AddUpdateWatchlistReasonHandlerUnitTest
    {
        [Fact]
        public async Task ReturnsBadRequestWhenRequestIsNull()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateWatchlistReasonHandler>>();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();
            var handler = new AddUpdateWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = (AddUpdateWatchlistReasonRequestDto)null!;

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
            Assert.Equal(CommonMessages.BadRequest, result.Message);
        }

        [Fact]
        public async Task ReturnsBadRequestWhenWatchlistReasonTypeIsInvalid()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateWatchlistReasonHandler>>();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();
            var handler = new AddUpdateWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = new AddUpdateWatchlistReasonRequestDto(new AddUpdateWatchlistReasonDto { WatchlistReasonType = 'X' });

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
            Assert.Equal(CommonMessages.InvalidWatchlistReasonType, result.Message);
        }

        [Fact]
        public async Task ReturnsInternalServerErrorWhenExceptionIsThrown()
        {
            // Arrange
            var mockMapper = new Mock<IMapper>();
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateWatchlistReasonHandler>>();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();
            var addUpdateWatchlistReasonDto = new AddUpdateWatchlistReasonDto();
            var watchlistReason = new WatchlistReason { };
            var handler = new AddUpdateWatchlistReasonHandler(mockMapper.Object, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            mockMapper.Setup(m => m.Map<WatchlistReason>(It.IsAny<AddUpdateWatchlistReasonDto>())).Throws(new Exception());
            var request = new AddUpdateWatchlistReasonRequestDto(addUpdateWatchlistReasonDto);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
            Assert.Equal(CommonErrorMessage.ErrorMessage, result.ErrorMessage);
        }

        [Fact]
        public async Task ReturnsOkWhenAddingNewWatchlistReason()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateWatchlistReasonHandler>>();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();
            var addUpdateWatchlistReasonDto = new AddUpdateWatchlistReasonDto
            {
                Id = string.Empty,
                WatchlistReasonType = 'W'
            };

            var handler = new AddUpdateWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = new AddUpdateWatchlistReasonRequestDto(addUpdateWatchlistReasonDto);
            // Act
            var result = await handler.Handle(request, new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

        [Fact]
        public async Task ReturnsOkWhenUpdatingExistingWatchlistReason()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateWatchlistReasonHandler>>();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();

            mockRepo.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ReturnsAsync(new List<WatchlistReason> { new WatchlistReason() });

            var handler = new AddUpdateWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);
            var addUpdateWatchlistReasonDto = new AddUpdateWatchlistReasonDto
            {
                Id = "ExistingId",
                WatchlistReasonType = 'W'
            };

            var request = new AddUpdateWatchlistReasonRequestDto(addUpdateWatchlistReasonDto);
            // Act
            var result = await handler.Handle(request, new CancellationToken());
            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

        [Fact]
        public async Task ReturnsNotFoundWhenUpdatingNonExistingWatchlistReason()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateWatchlistReasonHandler>>();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();

            var addUpdateWatchlistReasonDto = new AddUpdateWatchlistReasonDto
            {
                Id = "ExistingId",
                WatchlistReasonType = 'W'
            };

            mockRepo.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ReturnsAsync(new List<WatchlistReason>());

            var handler = new AddUpdateWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = new AddUpdateWatchlistReasonRequestDto(addUpdateWatchlistReasonDto);
            // Act
            var result = await handler.Handle(request, new CancellationToken());
            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
        }
        [Fact]
        public async Task ReturnsOkWhenUpdatingExistingWatchlistReasonn()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();

            var mockLogger = new Mock<ILogger<AddUpdateWatchlistReasonHandler>>();
            var mockRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();
            List<WatchlistReason> data = new List<WatchlistReason>();
            var addUpdateWatchlistReasonDto = new AddUpdateWatchlistReasonDto { Id = "001", WatchlistReasonType = 'W', LastRecordTransactionUserId = "Admin" };
            data.Add(new WatchlistReason { Id = "001", WatchlistReasonType = 'W', LastRecordTransactionUserId = "Admin" });
            var handler = new AddUpdateWatchlistReasonHandler(mapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            mockRepo.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>())).ReturnsAsync(data);
            mockRepo.Setup(r => r.Update(It.IsAny<WatchlistReason>())).Verifiable();
            var request = new AddUpdateWatchlistReasonRequestDto(addUpdateWatchlistReasonDto);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            mockRepo.Verify(x => x.GetByQuery(It.IsAny<Expression<Func<WatchlistReason, bool>>>()), Times.Once);
            mockRepo.Verify(x => x.Update(It.IsAny<WatchlistReason>()), Times.Once);
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationSuccessful, result.Message);
        }

        [Fact]
        public async Task ReturnsOkWhenAddingNewWatchlistReasonn()
        {
            var request = new AddUpdateWatchlistReasonRequestDto
             (
               new AddUpdateWatchlistReasonDto
               {
                   Id = "",
                   WatchlistReasonType = 'W',
                   LastRecordTransactionUserId = "Admin"
               }
              );

            var watchlistReasonData = new WatchlistReason
            {
                WatchlistReasonType = request.addUpdateWatchlistReasonDto.WatchlistReasonType,
                LastRecordTransactionUserId = request.addUpdateWatchlistReasonDto.LastRecordTransactionUserId,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode
            };

            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateWatchlistReasonMapper());
            });
            var mapper = mappingConfig.CreateMapper();

            var genericRepo = new Mock<IGenericRepository<VehicleDBContext, WatchlistReason>>();
            genericRepo.Setup(r => r.Add(watchlistReasonData)).Returns(Task.FromResult(true));

            var unitOfWork = new Mock<IUnitOfWork<VehicleDBContext>>();
            unitOfWork.Setup(u => u.SaveChanges()).Returns(Task.FromResult(true));

            var mockLogger = new Mock<ILogger<AddUpdateWatchlistReasonHandler>>();

            AddUpdateWatchlistReasonHandler handler = new AddUpdateWatchlistReasonHandler(mapper, genericRepo.Object, unitOfWork.Object, mockLogger.Object);

            // Act
            var returnedData = await handler.Handle(request, CancellationToken.None);

            // Assert
            genericRepo.Verify(x => x.Add(It.IsAny<WatchlistReason>()), Times.Once);
            unitOfWork.Verify(x => x.SaveChanges(), Times.Once);
            Assert.Equal(HttpStatusCode.OK, returnedData.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationSuccessful, returnedData.Message);
        }
    }
}
