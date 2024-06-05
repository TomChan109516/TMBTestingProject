namespace VICSS.Test.Service.Artu.UnitTest
{
    using AutoMapper;
    using Moq;
    using System.Linq.Expressions;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Artu.Domain;
    using VICSS.Service.Artu.EventHandlers;
    using VICSS.Shared.Models.Common;

    public class AddVeePairingHandlerTest
    {
        private readonly Mock<IGenericRepository<ArtuDbContext, ArtuConfig>> _mockRepo;
        private readonly Mock<IUnitOfWork<ArtuDbContext>> _mockUnitOfWork;
        private readonly Mock<IMapper> _mockMapper;
        private readonly AddVeePairingHandler _handler;

        public AddVeePairingHandlerTest()
        {
            _mockRepo = new Mock<IGenericRepository<ArtuDbContext, ArtuConfig>>();
            _mockUnitOfWork = new Mock<IUnitOfWork<ArtuDbContext>>();
            _mockMapper = new Mock<IMapper>();
            _handler = new AddVeePairingHandler(_mockRepo.Object, _mockUnitOfWork.Object, _mockMapper.Object);
        }

        [Fact]
        public void HandleValidRequestAddsNewArtuConfig()
        {
            // Arrange
            var request = new AddVeePairingRequestDto
            {
                LaneId = "Lane1",
                StationId = "Station1",
                VeesIp = "192.168.1.1",
                VeesPort = "8080",
                MaxLogAge = 10,
                VEEHeartBeatInterval = 5,
                Description = "Test",
                UserId = "User1"
            };
            _mockRepo.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<ArtuConfig, bool>>>())).ReturnsAsync(new List<ArtuConfig>());
            _mockRepo.Setup(x => x.Add(It.IsAny<ArtuConfig>()));
            _mockUnitOfWork.Setup(x => x.SaveChanges());
            _mockMapper.Setup(x => x.Map<ArtuConfig>(request)).Returns(new ArtuConfig());

            // Act
            var result =  _handler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.Equal(HttpStatusCode.Created, result.HttpStatusCode);
            Assert.True(result.IsSuccess);
            Assert.Equal(CommonMessages.OperationSuccessful, result.Message);
        }

        [Fact]
        public void HandleDuplicateArtuConfigReturnsConflict()
        {
            // Arrange
            var request = new AddVeePairingRequestDto
            {
                LaneId = "Lane1",
                StationId = "Station1",
                VeesIp = "192.168.1.1",
                VeesPort = "8080",
                MaxLogAge = 10,
                VEEHeartBeatInterval = 5,
                Description = "Test",
                UserId = "User1"
            };
            _mockRepo.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<ArtuConfig, bool>>>())).ReturnsAsync(new List<ArtuConfig> { new ArtuConfig() });

            // Act
            var result =  _handler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.Conflict, result.HttpStatusCode);
        }

        [Fact]
        public void HandleInvalidRequestReturnsBadRequest()
        {
            // Arrange
            var request = new AddVeePairingRequestDto
            {
                LaneId = "",
                StationId = "",
                VeesIp = "",
                VeesPort = "",
                MaxLogAge = 0,
                VEEHeartBeatInterval = 0,
                Description = "",
                UserId = ""
            };

            // Act
            var result =  _handler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }

        [Fact]
        public void Handle_ShouldReturnInternalServerError_WhenExceptionIsThrown()
        {
            // Arrange
            var request = new AddVeePairingRequestDto
            {
                LaneId = "lane1",
                StationId = "station1",
                VeesIp = "192.168.1.1",
                VeesPort = "8000",
                MaxLogAge = 1,
                VEEHeartBeatInterval = 1,
                Description = "description",
                UserId = "user1"
            };
            _mockRepo.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<ArtuConfig, bool>>>())).ThrowsAsync(new Exception());

            // Act
            var result = _handler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.Equal(CommonErrorMessage.InternalServerError, result.Message);
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }
    }
}
