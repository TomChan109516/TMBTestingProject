namespace VICSS.Test.Services.Inspection.UnitTest
{
    using Xunit;
    using Moq;
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.EventHandlers;
    using VICSS.Shared.Models.Common;
    using System.Threading;
    using Microsoft.Extensions.Logging;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;

    public class SaveAllTestResultHandlerTests
    {
        [Fact]
        public async Task HandleShouldReturnBadRequestWhenInspectionIdIsNull()
        {
            Mock<IMapper> _mapperMock = new Mock<IMapper>();
            Mock<IGenericRepository<InspectionDBContext, Test>> _genericRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            Mock<IUnitOfWork<InspectionDBContext>> _unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            Mock<ILogger<SaveAllTestResultHandler>> _loggerMock = new Mock<ILogger<SaveAllTestResultHandler>>();
            SaveAllTestResultHandler _handler = new SaveAllTestResultHandler(_mapperMock.Object, _genericRepositoryMock.Object, _unitOfWorkMock.Object, _loggerMock.Object);

            var request = new SaveAllTestResultRequestDto { InspectionId = null };
            var result = await _handler.Handle(request, CancellationToken.None);
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }

        [Fact]
        public async Task HandleShouldReturnInternalServerError()
        {
            Mock<IMapper> _mapperMock = new Mock<IMapper>();
            Mock<IGenericRepository<InspectionDBContext, Test>> _genericRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            Mock<IUnitOfWork<InspectionDBContext>> _unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            Mock<ILogger<SaveAllTestResultHandler>> _loggerMock = new Mock<ILogger<SaveAllTestResultHandler>>();
            SaveAllTestResultHandler _handler = new SaveAllTestResultHandler(_mapperMock.Object, _genericRepositoryMock.Object, _unitOfWorkMock.Object, _loggerMock.Object);

            _genericRepositoryMock.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Test, bool>>>(), It.IsAny<Expression<Func<Test, object>>[]>())).Throws(new Exception());

            var request = new SaveAllTestResultRequestDto { InspectionId = "test", OhmTestId = "test", OhmResult = "test" };
            var result = await _handler.Handle(request, CancellationToken.None);
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }

        [Fact]
        public async Task HandleValidRequestReturnsOk()
        {
            Mock<IMapper> _mapperMock = new Mock<IMapper>();
            Mock<IGenericRepository<InspectionDBContext, Test>> _genericRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            Mock<IUnitOfWork<InspectionDBContext>> _unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            Mock<ILogger<SaveAllTestResultHandler>> _loggerMock = new Mock<ILogger<SaveAllTestResultHandler>>();
            SaveAllTestResultHandler _handler = new SaveAllTestResultHandler(_mapperMock.Object, _genericRepositoryMock.Object, _unitOfWorkMock.Object, _loggerMock.Object);

            // Arrange
            var request = new SaveAllTestResultRequestDto { InspectionId = "test", OhmTestId = "test", OhmResult = "test" };
            var testDetails = new List<Test> { new Test
            {
                TestId="test",
                InspectionId = "test",
                EndResult="P",
                Attempt=1,
                Mode="Auto",
                TestResultHeights = new List<TestResultHeight>()
                {
                    new TestResultHeight
                    {
                        Id="test",
                        TestId="test",
                        Result = "P"
                    }
                },
                TestItems = new TestItems { TestItem = CommonConstants.OverheadHeightMeasurement }

            } };
            _genericRepositoryMock.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Test, bool>>>(), It.IsAny<Expression<Func<Test, object>>[]>())).ReturnsAsync(testDetails);

            // Act
            var result = await _handler.Handle(request, CancellationToken.None);

            // Assert
            //_genericRepositoryMock.Verify(x => x.Update(It.IsAny<Test>()), Times.Once);
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }
    }
}