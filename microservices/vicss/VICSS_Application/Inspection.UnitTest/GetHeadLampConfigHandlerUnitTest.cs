namespace VICSS.Test.Service.Inspection.UnitTest
{
    using Microsoft.Extensions.Logging;
    using Moq;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    public class GetHeadLampConfigHandlerUnitTest
    {
        [Fact]
        public async Task Handle_ReturnsNotFound_WhenNoHeadLampConfigFound()
        {
            // Arrange

            Mock<IMapper> mockMapper = new Mock<IMapper>();
            Mock<IGenericRepository<InspectionDBContext, Test>> mockRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            Mock<ILogger<GetHeadLampConfigHandler>> mockLogger = new Mock<ILogger<GetHeadLampConfigHandler>>();
            var request = new GetHeadLampConfigRequestDto("test");
            GetHeadLampConfigHandler handler = new GetHeadLampConfigHandler(mockMapper.Object, mockRepository.Object, mockLogger.Object);

            // Set up the mock to return a test, but no headlamp configuration
            mockRepository
                .Setup(repo => repo.GetByQuery(
                    It.IsAny<Expression<Func<Test, bool>>>(),
                    It.IsAny<Expression<Func<Test, object>>[]>()))
                .ReturnsAsync(new List<Test> { (Test)null });

            mockMapper
                .Setup(m => m.Map<GetHeadLampConfigResponseDto>(It.IsAny<TestConfigHeadLamp>()))
                .Returns((GetHeadLampConfigResponseDto)null);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            Assert.Equal(CommonMessages.NoTestDataFound, result.ErrorMessage);
        }
        [Fact]
        public async Task HandleValidRequestReturnsSuccess()
        {
            // Arrange
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockLogger = new Mock<ILogger<GetHeadLampConfigHandler>>();
            var request = new GetHeadLampConfigRequestDto("test");
            var response = new GetHeadLampConfigResponseDto()
            {
                NumHeadLamp = string.Empty
            };
            var headLamp = new TestConfigHeadLamp
            {
                Id = "test",
                TestId = "test",
                VehicleId = "test",
                NumHeadLamp = string.Empty,
                MainBeamAdjustable = string.Empty,
                HeadlightMeasuringMethod = string.Empty,
                SteeringPosition = string.Empty,
                LeftMainLamp = false,
                RightMainLamp = false,
                LastRecordTransactionDateTime = DateTime.UtcNow,
                LastRecordTransactionUserId = "test",
                LastRecordTransactionTypeCode = CommonConstants.InsertTranTypeCode,
            };
                var testList = new List<Test>
            {
                new Test
                {
                    TestId="test",
                    InspectionId ="test",
                    EndResult="P",
                    Attempt=1,
                    Mode="Auto",
                    TestConfigHeadLamps = new List<TestConfigHeadLamp>()
                    {
                        headLamp                        
                    },
                    TestItems = new TestItems { TestItem = CommonConstants.HeadlampTest }
                }
            };

            _mockGenericTestRepository
                .Setup(repo => repo.GetByQuery(
                    It.IsAny<Expression<Func<Test, bool>>>(),
                    It.IsAny<Expression<Func<Test, object>>[]>()))
                .ReturnsAsync(testList);
            _mockMapper.Setup(m => m.Map<GetHeadLampConfigResponseDto>(It.IsAny<TestConfigHeadLamp>())).Returns(response);

            var handler = new GetHeadLampConfigHandler(_mockMapper.Object, _mockGenericTestRepository.Object, _mockLogger.Object);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

        [Fact]
        public async Task HandleNoTestFoundReturnsNotFound()
        {
            // Arrange
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockLogger = new Mock<ILogger<GetHeadLampConfigHandler>>();
            _mockGenericTestRepository.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Test, bool>>>(), It.IsAny<Expression<Func<Test, object>>[]>())).ReturnsAsync(new List<Test>());
            var handler = new GetHeadLampConfigHandler(_mockMapper.Object, _mockGenericTestRepository.Object, _mockLogger.Object);
            var request = new GetHeadLampConfigRequestDto("test");

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            Assert.Equal(CommonMessages.NoTestDataFound, result.ErrorMessage);
        }

        [Fact]
        public async Task HandleRepositoryThrowsExceptionReturnsInternalServerError()
        {
            // Arrange
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockLogger = new Mock<ILogger<GetHeadLampConfigHandler>>();
            var request = new GetHeadLampConfigRequestDto("test");
            _mockGenericTestRepository.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Test, bool>>>(), It.IsAny<Expression<Func<Test, object>>[]>())).Throws<Exception>();
            var handler = new GetHeadLampConfigHandler(_mockMapper.Object, _mockGenericTestRepository.Object, _mockLogger.Object);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
            Assert.Equal(CommonErrorMessage.InternalServerError, result.ErrorMessage);
        }
    }
}