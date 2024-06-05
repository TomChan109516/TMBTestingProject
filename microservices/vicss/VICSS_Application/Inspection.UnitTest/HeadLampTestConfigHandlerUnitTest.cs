namespace VICSS.Test.Services.Inspection.UnitTest
{
    using AutoMapper;
    using Moq;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Net;
    using System.Threading;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.EventHandlers;
    using Xunit;

    public class HeadLampTestConfigHandlerUnitTest
    {
        [Fact]
        public async Task HandleValidRequestReturnsSuccess()
        {
            // Arrange
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, TestConfigHeadLamp>>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var request = new HeadLampTestConfigRequestDto
            {
                InspectionId = "test",
                HeadlightMeasuringMethod = "",
                LeftMainLamp = false,
                RightMainLamp = false,
                NumHeadLamp = "1",
                SteeringPosition = "",
                MainBeamAdjustable = "",

            };
            var testList = new List<Test>
            {
                new Test
                {
                    TestId="test",
                    InspectionId = request.InspectionId,
                    EndResult="P",
                    Attempt=1,
                    Mode="Auto",
                    TestItems = new TestItems { TestItem = CommonConstants.HeadlampTest }
                }
            };
            var configList = new List<TestConfigHeadLamp>
            {
                new TestConfigHeadLamp
                {
                    TestId="test",
                    Id="configId",
                    HeadlightMeasuringMethod="",
                    LeftMainLamp=false, 
                    RightMainLamp=false,
                    NumHeadLamp="",
                    SteeringPosition="",
                    VehicleId="1",
                    MainBeamAdjustable="",
                    
                }
            };

            _mockGenericTestRepository
                 .Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<Test, bool>>>()))
                 .ReturnsAsync((Expression<Func<Test, bool>> predicate) => testList.Where(predicate.Compile()).ToList());
            var headLampConfig = new TestConfigHeadLamp { TestId = "test" };
            _mockMapper.Setup(m => m.Map<TestConfigHeadLamp>(It.IsAny<HeadLampTestConfigRequestDto>())).Returns(headLampConfig);
            _mockGenericTestRepository
                  .Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<Test, bool>>>()))
                  .ReturnsAsync((Expression<Func<Test, bool>> predicate) => testList.Where(predicate.Compile()).ToList());
            _mockGenericRepository
              .Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<TestConfigHeadLamp, bool>>>()))
              .ReturnsAsync((Expression<Func<TestConfigHeadLamp, bool>> predicate) => configList.Where(predicate.Compile()).ToList());

            var handler = new HeadLampTestConfigHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockGenericTestRepository.Object, _mockUnitOfWork.Object);
           

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.True(result.IsSuccess);
        }
        [Fact]
        public async Task HandleRequestIsNullReturnsBadRequest()
        {
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, TestConfigHeadLamp>>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            // Arrange
            var handler = new HeadLampTestConfigHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockGenericTestRepository.Object, _mockUnitOfWork.Object);

            // Act
            var result = await handler.Handle(null, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }
        [Fact]
        public async Task HandleNoTestFoundReturnsNotFound()
        {
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, TestConfigHeadLamp>>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            // Arrange
            _mockGenericTestRepository.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Test, bool>>>())).ReturnsAsync(new List<Test>());
            var handler = new HeadLampTestConfigHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockGenericTestRepository.Object, _mockUnitOfWork.Object);
            var request = new HeadLampTestConfigRequestDto { InspectionId = "test" };

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            Assert.Equal(CommonMessages.NoTestFound, result.ErrorMessage);
        }
        [Fact]
        public async Task HandleRepositoryThrowsExceptionReturnsInternalServerError()
        {
            // Arrange
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, TestConfigHeadLamp>>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var request = new HeadLampTestConfigRequestDto
            {
                InspectionId = "test",
            };
            _mockGenericTestRepository.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<Test, bool>>>())).Throws<Exception>();
            var handler = new HeadLampTestConfigHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockGenericTestRepository.Object, _mockUnitOfWork.Object);

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }
    }
}
