namespace VICSS.Test.Service.Artu.UnitTest
{
    using AutoMapper;
    using Moq;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Artu.Domain;
    using VICSS.Service.Artu.EventHandlers;

    public class GetAllTableDetailsHandlerUnitTest
    {
        private readonly Mock<IGenericRepository<ArtuDbContext, ArtuConfig>> _mockRepo;
        private readonly Mock<IUnitOfWork<ArtuDbContext>> _mockUnitOfWork;
        private readonly Mock<IMapper> _mockMapper;
        private readonly GetAllTableDetails _handler;

        public GetAllTableDetailsHandlerUnitTest()
        {
            _mockRepo = new Mock<IGenericRepository<ArtuDbContext, ArtuConfig>>();
            _mockUnitOfWork = new Mock<IUnitOfWork<ArtuDbContext>>();
            _mockMapper = new Mock<IMapper>();
            _handler = new GetAllTableDetails(_mockRepo.Object, _mockMapper.Object);
        }

        [Fact]
        public async Task HandleReturnsEntitiesWhenGetAllSucceeds()
        {
            // Arrange
            var entities = new List<ArtuConfig> { new ArtuConfig(), new ArtuConfig() };
            var entityDtos = new List<EntityDto> { new EntityDto(), new EntityDto() };
            _mockRepo.Setup(r => r.GetAll()).ReturnsAsync(entities);
            _mockMapper.Setup(m => m.Map<List<EntityDto>>(entities)).Returns(entityDtos);

            // Act
            var result = await _handler.Handle(new GetAllTableDetailsRequestDto(), CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Equal(entityDtos, result.Entities);
        }

        [Fact]
        public async Task HandleReturnsInternalServerErrorWhenGetAllThrowsException()
        {
            // Arrange
            _mockRepo.Setup(r => r.GetAll()).ThrowsAsync(new Exception("Test exception"));

            // Act
            var result = await _handler.Handle(new GetAllTableDetailsRequestDto(), CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
            Assert.Equal("Test exception", result.ErrorMessage);
        }

        [Fact]
        public async Task HandleReturnsEmptyListWhenGetAllReturnsEmpty()
        {
            // Arrange
            var entities = new List<ArtuConfig>();
            _mockRepo.Setup(r => r.GetAll()).ReturnsAsync(entities);
            _mockMapper.Setup(m => m.Map<List<EntityDto>>(entities)).Returns(new List<EntityDto>());

            // Act
            var result = await _handler.Handle(new GetAllTableDetailsRequestDto(), CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Empty(result.Entities);
        }

        [Fact]
        public async Task Handle_ShouldReturnNotFound_WhenNoEntitiesAreFound()
        {
            // Arrange
            var request = new GetAllTableDetailsRequestDto();
            _mockRepo.Setup(x => x.GetAll()).ReturnsAsync(new List<ArtuConfig>());
            _mockMapper.Setup(x => x.Map<List<EntityDto>>(It.IsAny<List<ArtuConfig>>())).Returns((List<EntityDto>)null);

            // Act
            var result = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
        }
    }
}

