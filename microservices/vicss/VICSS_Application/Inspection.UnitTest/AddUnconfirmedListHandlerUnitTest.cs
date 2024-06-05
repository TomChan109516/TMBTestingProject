namespace VICSS.Test.Services.Inspection.UnitTest
{
    using Xunit;
    using Moq;
    using System.Threading;
    using AutoMapper;
    using Microsoft.Extensions.Logging;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;

    public class AddUnconfirmedListHandlerUnitTest
    {
        [Fact]
        public async Task HandleReturnsCreated()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, UnconfirmedList>>();
            var mockMapper = new Mock<IMapper>();
            var mockLogger = new Mock<ILogger<AddUnconfirmedListHandler>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();

            var unconfirmedList = new UnconfirmedList();

            mockMapper.Setup(mapper => mapper.Map<UnconfirmedList>(It.IsAny<AddUnconfirmedListRequestDto>())).Returns(unconfirmedList);

            var handler = new AddUnconfirmedListHandler(mockRepo.Object, mockMapper.Object, mockLogger.Object, _mockUnitOfWork.Object);

            // Act
            var result = await handler.Handle(new AddUnconfirmedListRequestDto(), new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.Created, result.HttpStatusCode);
            Assert.True(result.IsSuccess);
        }

        [Fact]
        public async Task HandleReturnsNotModified()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, UnconfirmedList>>();
            var mockMapper = new Mock<IMapper>();
            var mockLogger = new Mock<ILogger<AddUnconfirmedListHandler>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            mockMapper.Setup(mapper => mapper.Map<UnconfirmedList>(It.IsAny<AddUnconfirmedListRequestDto>())).Returns(value: null);

            var handler = new AddUnconfirmedListHandler(mockRepo.Object, mockMapper.Object, mockLogger.Object, _mockUnitOfWork.Object);

            // Act
            var result = await handler.Handle(new AddUnconfirmedListRequestDto(), new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.NotModified, result.HttpStatusCode);
            Assert.False(result.IsSuccess);
        }

        [Fact]
        public async Task HandleReturnsInternalServerError()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, UnconfirmedList>>();
            var mockMapper = new Mock<IMapper>();
            var mockLogger = new Mock<ILogger<AddUnconfirmedListHandler>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var unconfirmedList = new UnconfirmedList();

            mockMapper.Setup(mapper => mapper.Map<UnconfirmedList>(It.IsAny<AddUnconfirmedListRequestDto>())).Returns(unconfirmedList);
            mockRepo.Setup(repo => repo.Add(unconfirmedList)).ThrowsAsync(new Exception());

            var handler = new AddUnconfirmedListHandler(mockRepo.Object, mockMapper.Object, mockLogger.Object, _mockUnitOfWork.Object);

            // Act
            var result = await handler.Handle(new AddUnconfirmedListRequestDto(), new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
            Assert.False(result.IsSuccess);
        }
    }
}

