namespace VICSS.Test.Services.Inspection.UnitTest
{
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Inspection.Interface;

    public class TiltingTestResultHandlerUnitTest
    {
        [Fact]
        public async Task HandleValidRequestReturnsSuccessResponse()
        {
            // Arrange
            var mapperMock = new Mock<IMapper>();
            var genericRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, TestResultTilting>>();
            var unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            var loggerMock = new Mock<ILogger<TiltingTestResultHandler>>();
            var helperMock = new Mock<ICommonMethods>();
            var genericTestRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, Test>>();

            var handler = new TiltingTestResultHandler(
                mapperMock.Object,
                genericRepositoryMock.Object,
                unitOfWorkMock.Object,
                loggerMock.Object,
                helperMock.Object,
                genericTestRepositoryMock.Object);

            var request = new TiltingTestResultRequestDto
            {
                TestDto = new TestDto() { InspectionId = "test", AbortSuspendTestReasonId = "" },
                TiltingTestResultDto = new TiltingTestResultDto { Result = "P", SkipTestReasonId = "" }
            };
            var test = new Test
            {
                TestId = "test",
                InspectionId = request.TestDto.InspectionId,
                EndResult = "P",
                Attempt = 1,
                Mode = "Auto",
                TestItems = new TestItems { TestItem = CommonConstants.TaximeterTest }
            };
            var resultList = new List<TestResultTilting>
            {
                new TestResultTilting
                {
                    TestId="test",
                    Result="P"
                }
            };

            helperMock.Setup(h => h.GetStation(It.IsAny<TestDto>(), It.IsAny<string>()))
           .ReturnsAsync(new Station());
            helperMock.Setup(h => h.UpdateTest(It.IsAny<TestDto>(), It.IsAny<Station>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
           .ReturnsAsync(test);
            genericRepositoryMock.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<TestResultTilting, bool>>>()))
           .ReturnsAsync((Expression<Func<TestResultTilting, bool>> predicate) => resultList.Where(predicate.Compile()).ToList());
            mapperMock.Setup(x => x.Map<TestResultTilting>(It.IsAny<object>())).Returns(new TestResultTilting());


            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.True(result.IsSuccess);
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            
        }
        [Fact]
        public async Task HandleInvalidRequestReturnsBadResponse()
        {
            // Arrange
            var mapperMock = new Mock<IMapper>();
            var genericRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, TestResultTilting>>();
            var unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            var loggerMock = new Mock<ILogger<TiltingTestResultHandler>>();
            var helperMock = new Mock<ICommonMethods>();
            var genericTestRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, Test>>();

            var handler = new TiltingTestResultHandler(mapperMock.Object,genericRepositoryMock.Object,unitOfWorkMock.Object,loggerMock.Object,helperMock.Object,genericTestRepositoryMock.Object);

            // Act
            var result = await handler.Handle(null, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }
        [Fact]
        public async Task HandleStationNotFoundReturnsBadRequest()
        {
            // Arrange
            var mapperMock = new Mock<IMapper>();
            var genericRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, TestResultTilting>>();
            var unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            var loggerMock = new Mock<ILogger<TiltingTestResultHandler>>();
            var helperMock = new Mock<ICommonMethods>();
            var genericTestRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var handler = new TiltingTestResultHandler(mapperMock.Object, genericRepositoryMock.Object, unitOfWorkMock.Object, loggerMock.Object, helperMock.Object, genericTestRepositoryMock.Object);
            var request = new TiltingTestResultRequestDto
            {
                TestDto = new TestDto() { InspectionId = "test", AbortSuspendTestReasonId = "" },
                TiltingTestResultDto = new TiltingTestResultDto { Result = "P", SkipTestReasonId = "" }
            };
           

            helperMock.Setup(h => h.GetStation(It.IsAny<TestDto>(), It.IsAny<string>()))
           .ReturnsAsync((Station)null);
           
            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode); ;

        }
        [Fact]
        public async Task HandleExceptionThrownReturnsInternalServerError()
        {
            // Arrange
            var mapperMock = new Mock<IMapper>();
            var genericRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, TestResultTilting>>();
            var unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            var loggerMock = new Mock<ILogger<TiltingTestResultHandler>>();
            var helperMock = new Mock<ICommonMethods>();
            var genericTestRepositoryMock = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var handler = new TiltingTestResultHandler(mapperMock.Object, genericRepositoryMock.Object, unitOfWorkMock.Object, loggerMock.Object, helperMock.Object, genericTestRepositoryMock.Object);
            var request = new TiltingTestResultRequestDto
            {
                TestDto = new TestDto() { InspectionId = "test", AbortSuspendTestReasonId = "" },
                TiltingTestResultDto = new TiltingTestResultDto { Result = "P", SkipTestReasonId = "" }
            };


            helperMock.Setup(h => h.GetStation(It.IsAny<TestDto>(), It.IsAny<string>()))
           .Throws(new Exception());

            // Act
            var result = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);

        }

    }
}
