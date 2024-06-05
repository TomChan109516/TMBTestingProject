namespace VICSS.Test.Servics.ConfigurationService.UnitTest
{
    using VICSS.Shared.Models.ConfigurationService;

    public class DisableSystemConfigHandlerUnitTest
    {
        [Fact]
        public async Task Handle_NullRequest_ReturnsBadRequest()
        {
            // Arrange            
            var mockLogger = new Mock<ILogger<DisableSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<ConfigurationServiceDBContext>>();
            var handler = new DisableSystemConfigHandler(mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            DisableSystemConfigRequestDto request = new DisableSystemConfigRequestDto();

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_ValidRequest_ReturnsOk()
        {
            // Arrange            
            var mockLogger = new Mock<ILogger<DisableSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<ConfigurationServiceDBContext>>();
            var handler = new DisableSystemConfigHandler(mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = new DisableSystemConfigRequestDto
            {
                disableSystemConfig = new DeleteSystemConfigRequestDto { Id = "001", UserId= "test User"} ,
            };
            var systemConfig = new SystemConfig { Id = "testId", LastRecordTransactionTypeCode = 'I' };
            mockRepo.Setup(x => x.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ReturnsAsync(systemConfig);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }


        [Fact]
        public async Task Handle_ExceptionThrown_ReturnsInternalServerError()
        {
            // Arrange            
            var mockLogger = new Mock<ILogger<DisableSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<ConfigurationServiceDBContext>>();
            var handler = new DisableSystemConfigHandler(mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = new DisableSystemConfigRequestDto
            {
                disableSystemConfig = new DeleteSystemConfigRequestDto { Id = "001", UserId = "test User" },
            };
            mockRepo.Setup(x => x.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ThrowsAsync(new Exception());

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_RequestForDeletedRecord_ReturnsInternalServerError()
        {
            // Arrange            
            var mockLogger = new Mock<ILogger<DisableSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<ConfigurationServiceDBContext>>();
            var handler = new DisableSystemConfigHandler(mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = new DisableSystemConfigRequestDto
            {
                disableSystemConfig = new DeleteSystemConfigRequestDto { Id = "001", UserId = "test User" },
            };
            var systemConfig = new SystemConfig { Id = "testId", LastRecordTransactionTypeCode = 'D' };
            mockRepo.Setup(x => x.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ReturnsAsync(systemConfig);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }
    }
}
