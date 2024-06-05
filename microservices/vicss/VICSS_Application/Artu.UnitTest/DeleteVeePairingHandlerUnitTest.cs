
using Moq;
using System.Net;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Entities.Artu;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using VICSS.Service.Artu.Domain;
using VICSS.Service.Artu.EventHandlers;
using VICSS.Shared.Models.Common;

namespace VICSS.Test.Service.Artu.UnitTest
{
    public class DeletePairingCommandHandlerUnitTest
    {
        private readonly Mock<IGenericRepository<ArtuDbContext, ArtuConfig>> _mockRepo;
        private readonly Mock<IUnitOfWork<ArtuDbContext>> _mockUnitOfWork;
        private readonly DeleteVeePairingHandler _handler;

        public DeletePairingCommandHandlerUnitTest()
        {
            _mockRepo = new Mock<IGenericRepository<ArtuDbContext, ArtuConfig>>();
            _mockUnitOfWork = new Mock<IUnitOfWork<ArtuDbContext>>();
            _handler = new DeleteVeePairingHandler(_mockRepo.Object, _mockUnitOfWork.Object);
        }

        [Fact]
        public void HandleValidRequestDeletesEntity()
        {
            // Arrange
            var request = new DeleteVeePairingRequestDto { Id = "1" };
            var artuConfig = new ArtuConfig();
            _mockRepo.Setup(r => r.GetById(It.IsAny<string>())).ReturnsAsync(artuConfig);

            // Act
            var response = _handler.Handle(request, CancellationToken.None).Result;

            // Assert
            _mockRepo.Verify(r => r.Delete(artuConfig), Times.Once);
            _mockUnitOfWork.Verify(u => u.SaveChanges(), Times.Once);
            Assert.True(response.IsSuccess);
            Assert.Equal(HttpStatusCode.OK, response.HttpStatusCode);
        }

        [Fact]
        public void HandleInvalidRequestReturnsBadRequest()
        {
            // Arrange
            var request = new DeleteVeePairingRequestDto { Id = "1" };
            _mockRepo.Setup(r => r.GetById(It.IsAny<string>())).ReturnsAsync((ArtuConfig)null);

            // Act
            var response = _handler.Handle(request, CancellationToken.None).Result;

            // Assert
            _mockRepo.Verify(r => r.Delete(It.IsAny<ArtuConfig>()), Times.Never);
            _mockUnitOfWork.Verify(u => u.SaveChanges(), Times.Never);
            Assert.False(response.IsSuccess);
            Assert.Equal(HttpStatusCode.BadRequest, response.HttpStatusCode);
            Assert.Equal(CommonMessages.IdNotFound, response.Message);
        }

        [Fact]
        public void HandleExceptionThrownReturnsInternalServerError()
        {
            // Arrange
            var request = new DeleteVeePairingRequestDto { Id = "1" };
            _mockRepo.Setup(r => r.GetById(It.IsAny<string>())).ThrowsAsync(new Exception());

            // Act
            var response = _handler.Handle(request, CancellationToken.None).Result;

            // Assert
            _mockRepo.Verify(r => r.Delete(It.IsAny<ArtuConfig>()), Times.Never);
            _mockUnitOfWork.Verify(u => u.SaveChanges(), Times.Never);
            Assert.False(response.IsSuccess);
            Assert.Equal(HttpStatusCode.InternalServerError, response.HttpStatusCode);
        }

        [Fact]
        public void Handle_ShouldReturnBadRequest_WhenIdIsEmpty()
        {
            // Arrange
            var request = new DeleteVeePairingRequestDto
            {
                Id = string.Empty
            };

            // Act
            var result = _handler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.Equal(CommonMessages.EmptyFields, result.Message);
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }

        [Fact]
        public void Handle_ShouldReturnBadRequest_WhenIdIsNull()
        {
            // Arrange
            var request = new DeleteVeePairingRequestDto
            {
                Id = null
            };

            // Act
            var result = _handler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.Equal(CommonMessages.EmptyFields, result.Message);
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }
    }
}
