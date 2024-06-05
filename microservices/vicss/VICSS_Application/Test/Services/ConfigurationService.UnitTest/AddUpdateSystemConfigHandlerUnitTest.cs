namespace VICSS.Test.Servics.ConfigurationService.UnitTest
{
    using Moq;
    using VICSS.Service.ConfigurationService.Mappers;

    public class AddUpdateSystemConfigHandlerUnitTest
    {
        [Fact]
        public async Task Handle_NullRequest_ReturnsBadRequest()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateSystemConfigMapper());
            });

            IMapper mockMapper = mappingConfig.CreateMapper();            
            var mockLogger = new Mock<ILogger<AddUpdateSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<ConfigurationServiceDBContext>>();
            var handler = new AddUpdateSystemConfigHandler(mockMapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            SystemConfigRequestDto request = null;

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_ValidAddRequest_ReturnsOk()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateSystemConfigMapper());
            });

            IMapper mockMapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<ConfigurationServiceDBContext>>();
            var handler = new AddUpdateSystemConfigHandler(mockMapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = new SystemConfigRequestDto(           
                new Shared.Models.ConfigurationService.SystemConfigDto
                {

                    SystemConfigId = "testId",
                    SystemConfigDescription = "testDescription",
                    SystemConfigText = "testText",
                    UserId = "testUser"
                }
            );

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Equal("Operation Successful", result.Message);
        }

        [Fact]
        public async Task Handle_ValidUpdateRequest_ReturnsOk()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateSystemConfigMapper());
            });

            IMapper mockMapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<ConfigurationServiceDBContext>>();
            

            var request = new SystemConfigRequestDto(
                new Shared.Models.ConfigurationService.SystemConfigDto
                {
                    Id="001",
                    SystemConfigId = "testId",
                    SystemConfigDescription = "testDescription",
                    SystemConfigText = "testText",
                    UserId = "testUser"
                }
            );

            var systemConfig1 = new SystemConfig();
            systemConfig1.Id = "001";
            systemConfig1.SystemConfigId = "Test_ID_1";
            systemConfig1.SystemConfigText = "Test_Config_1";
            systemConfig1.SystemConfigDescription = "Test ID 1";

            var systemConfig2 = new SystemConfig();
            systemConfig1.Id = "002";
            systemConfig1.SystemConfigId = "Test_ID_2";
            systemConfig1.SystemConfigText = "Test_Config_2";
            systemConfig1.SystemConfigDescription = "Test ID 2";

            var systemConfigs = new List<SystemConfig> { systemConfig1, systemConfig2 };

            //mockRepo.Setup(x => x.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ReturnsAsync(systemConfigs.Where(x => x.Id == request.addUpdateSystemConfigRequestDto.Id).FirstOrDefault());
            mockRepo.Setup(x => x.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ReturnsAsync(systemConfigs[0]);

            var handler = new AddUpdateSystemConfigHandler(mockMapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_AddSystemConfig_ThrowsException_ReturnsInternalServerError()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateSystemConfigMapper());
            });

            IMapper mockMapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<ConfigurationServiceDBContext>>();
            var handler = new AddUpdateSystemConfigHandler(mockMapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = new SystemConfigRequestDto(
                new Shared.Models.ConfigurationService.SystemConfigDto
                {                    
                    SystemConfigId = "testId",
                    SystemConfigDescription = "testDescription",
                    SystemConfigText = "testText",
                    UserId = "testUser"
                }
            );
            mockRepo.Setup(x => x.Add(It.IsAny<SystemConfig>())).ThrowsAsync(new Exception());

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_UpdateSystemConfig_ThrowsException_ReturnsInternalServerError()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateSystemConfigMapper());
            });

            IMapper mockMapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<ConfigurationServiceDBContext>>();
            var handler = new AddUpdateSystemConfigHandler(mockMapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            var request = new SystemConfigRequestDto(
                new Shared.Models.ConfigurationService.SystemConfigDto
                {
                    Id = "001",
                    SystemConfigId = "testId",
                    SystemConfigDescription = "testDescription",
                    SystemConfigText = "testText",
                    UserId = "testUser"
                }
            );
            mockRepo.Setup(x => x.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ThrowsAsync(new Exception());

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }

        [Fact]
        public async Task Handle_ValidUpdateRequest_ReturnsNotFound()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new AddUpdateSystemConfigMapper());
            });

            IMapper mockMapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<AddUpdateSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var mockUnitOfWork = new Mock<IUnitOfWork<ConfigurationServiceDBContext>>();


            var request = new SystemConfigRequestDto(
                new Shared.Models.ConfigurationService.SystemConfigDto
                {
                    Id = "001",
                    SystemConfigId = "testId",
                    SystemConfigDescription = "testDescription",
                    SystemConfigText = "testText",
                    UserId = "testUser"
                }
            ); 
            
            SystemConfig systemConfigs = null;
            
            mockRepo.Setup(x => x.GetByQueryFirstOrDefault(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ReturnsAsync(systemConfigs);

            var handler = new AddUpdateSystemConfigHandler(mockMapper, mockRepo.Object, mockUnitOfWork.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            Assert.Equal("Record Not Found", result.Message);
        }
    }
}
