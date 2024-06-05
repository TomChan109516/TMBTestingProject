namespace VICSS.Test.Servics.ConfigurationService.UnitTest
{
    using VICSS.Service.ConfigurationService.Mappers;
    using VICSS.Shared.Models.Common;

    public class SearchSystemConfigHandlerUnitTest
    {
        [Fact]
        public async Task Handle_EmptyRequest_ReturnsAllRecords()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchSystemConfigMapper());
            });

            IMapper mockMapper = mappingConfig.CreateMapper();            
            var mockLogger = new Mock<ILogger<SearchSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            
            var request = new Shared.Models.ConfigurationService.SearchSystemConfigRequestDto();

            var systemConfig1 = new SystemConfig();
            systemConfig1.Id = "001";
            systemConfig1.SystemConfigId = "Test_ID_1";
            systemConfig1.SystemConfigText = "Test_Config_1";
            systemConfig1.SystemConfigDescription = "Test ID 1";
            systemConfig1.LastRecordTransactionTypeCode = 'I';

            var systemConfig2 = new SystemConfig();
            systemConfig2.Id = "002";
            systemConfig2.SystemConfigId = "Test_ID_2";
            systemConfig2.SystemConfigText = "Test_Config_2";
            systemConfig2.SystemConfigDescription = "Test ID 2";
            systemConfig2.LastRecordTransactionTypeCode = 'U';

            var systemConfig3 = new SystemConfig();
            systemConfig3.Id = "003";
            systemConfig3.SystemConfigId = "Test_ID_3";
            systemConfig3.SystemConfigText = "Test_Config_3";
            systemConfig3.SystemConfigDescription = "Test ID 3";
            systemConfig3.LastRecordTransactionTypeCode = 'D';

            var systemConfigs = new List<SystemConfig> { systemConfig1 , systemConfig2, systemConfig3 };
            mockRepo.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ReturnsAsync(systemConfigs.Where(x => x.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode).ToList());

            var handler = new SearchSystemConfigHandler(mockRepo.Object, mockMapper, mockLogger.Object);

            // Act
            var result = await handler.Handle(new Service.ConfigurationService.Domain.SearchSystemConfigRequestDto(request), CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Equal(2, result.searchSystemConfig.Count);
            Assert.Equal(systemConfigs[0].Id, result.searchSystemConfig[0].Id);
        }

        [Fact]
        public async Task Handle_RequestWithDescription_ReturnsFilteredRecords()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchSystemConfigMapper());
            });

            IMapper mockMapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<SearchSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var handler = new SearchSystemConfigHandler(mockRepo.Object, mockMapper, mockLogger.Object);

            var request = new Shared.Models.ConfigurationService.SearchSystemConfigRequestDto("Test_ID_2","Test ID 2");

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
            
            mockRepo.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ReturnsAsync(systemConfigs.Where(x => x.SystemConfigDescription == request.SystemConfigDescription).ToList());

            // Act
            var result = await handler.Handle(new Service.ConfigurationService.Domain.SearchSystemConfigRequestDto(request), CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Single(result.searchSystemConfig);
            Assert.Equal(request.SystemConfigDescription, result.searchSystemConfig[0].SystemConfigDescription);
        }

        [Fact]
        public async Task Handle_RequestWithNoMatchingRecords_ReturnsEmptyList()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchSystemConfigMapper());
            });

            IMapper mockMapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<SearchSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var handler = new SearchSystemConfigHandler(mockRepo.Object, mockMapper, mockLogger.Object);

            var request = new Shared.Models.ConfigurationService.SearchSystemConfigRequestDto("Test_ID_3", "Test ID 3");

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

            mockRepo.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ReturnsAsync(systemConfigs.Where(x => x.SystemConfigId == request.SystemConfigId).ToList());

            // Act
            var result = await handler.Handle(new Service.ConfigurationService.Domain.SearchSystemConfigRequestDto(request), CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            Assert.Empty(result.searchSystemConfig);
        }

        [Fact]
        public async Task Handle_InternalServerError()
        {
            // Arrange
            var mappingConfig = new MapperConfiguration(mapperConfig =>
            {
                mapperConfig.AddProfile(new SearchSystemConfigMapper());
            });

            IMapper mockMapper = mappingConfig.CreateMapper();
            var mockLogger = new Mock<ILogger<SearchSystemConfigHandler>>();
            var mockRepo = new Mock<IGenericRepository<ConfigurationServiceDBContext, SystemConfig>>();
            var handler = new SearchSystemConfigHandler(mockRepo.Object, mockMapper, mockLogger.Object);

            var request = new Shared.Models.ConfigurationService.SearchSystemConfigRequestDto("Test_ID_3", "Test ID 3");

            mockRepo.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<SystemConfig, bool>>>())).ThrowsAsync(new Exception());

            // Act
            var result = await handler.Handle(new Service.ConfigurationService.Domain.SearchSystemConfigRequestDto(request), CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
            Assert.Empty(result.searchSystemConfig);
            Assert.Equal("Error Occured. Check Error Logs for more details", result.ErrorMessage);
        }
    }
}