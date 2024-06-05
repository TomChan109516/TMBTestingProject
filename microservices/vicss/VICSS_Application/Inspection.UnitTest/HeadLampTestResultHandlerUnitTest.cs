namespace VICSS.Test.Services.Inspection.UnitTest
{
    using AutoMapper;
    using Moq;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System.Net;
    using System.Threading;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.EventHandlers;
    using Xunit;

    public class HeadLampTestResultHandlerTests
    {
        [Fact]
        public async Task HandleRequestIsNullReturnsBadRequest()
        {
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, TestResultHeadLamp>>();
            var _mockGenericTestItemRepository = new Mock<IGenericRepository<InspectionDBContext, TestItems>>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockGenericStationRepository = new Mock<IGenericRepository<InspectionDBContext, Station>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var handler = new HeadLampTestResultHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockGenericTestItemRepository.Object, _mockGenericTestRepository.Object, _mockGenericStationRepository.Object, _mockUnitOfWork.Object);
            var result = await handler.Handle(null, CancellationToken.None);
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }

        [Fact]
        public async Task HandleValidRequestReturnsOk()
        {
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, TestResultHeadLamp>>();
            var _mockGenericTestItemRepository = new Mock<IGenericRepository<InspectionDBContext, TestItems>>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockGenericStationRepository = new Mock<IGenericRepository<InspectionDBContext, Station>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var request = new HeadLampTestResultRequestDto()
            {
                TestDto=new TestDto() { InspectionId="test", AbortSuspendTestReasonId = "" },
                SaveHeadLampTestResultDto=new SaveHeadLampTestResultDto { Result="P", SkipTestReasonId = "" }
            };
            _mockGenericStationRepository.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Station, bool>>>(), It.IsAny<Expression<Func<Station, object>>>())).ReturnsAsync(new List<Station> { new Station() });

            var testList = new List<Test>
            {
                new Test
                {
                    TestId="test",
                    InspectionId = request.TestDto.InspectionId,
                    EndResult="P",
                    Attempt=1,
                    Mode="Auto",
                    TestItems = new TestItems { TestItem = CommonConstants.HeadlampTest }
                }
            };
            var resultList = new List<TestResultHeadLamp>
            {
                new TestResultHeadLamp
                {
                    TestId="test",
                    Result="P"
                }
            };

            _mockGenericTestRepository
                .Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<Test, bool>>>()))
                .ReturnsAsync((Expression<Func<Test, bool>> predicate) => testList.Where(predicate.Compile()).ToList());


            _mockGenericRepository
               .Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<TestResultHeadLamp, bool>>>()))
               .ReturnsAsync((Expression<Func<TestResultHeadLamp, bool>> predicate) => resultList.Where(predicate.Compile()).ToList());

            _mockMapper.Setup(x => x.Map<Test>(It.IsAny<object>())).Returns(new Test());
            _mockMapper.Setup(x => x.Map<TestResultHeadLamp>(It.IsAny<object>())).Returns(new TestResultHeadLamp());

            var handler = new HeadLampTestResultHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockGenericTestItemRepository.Object, _mockGenericTestRepository.Object, _mockGenericStationRepository.Object, _mockUnitOfWork.Object);
            var result = await handler.Handle(request, CancellationToken.None);
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

        [Fact]
        public async Task HandleStationNotFoundReturnsBadRequest()
        {
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, TestResultHeadLamp>>();
            var _mockGenericTestItemRepository = new Mock<IGenericRepository<InspectionDBContext, TestItems>>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockGenericStationRepository = new Mock<IGenericRepository<InspectionDBContext, Station>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var request = new HeadLampTestResultRequestDto()
            {
                TestDto = new TestDto() { InspectionId = "test" },
                SaveHeadLampTestResultDto = new SaveHeadLampTestResultDto { Result = "P" }
            };
            _mockGenericStationRepository.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Station, bool>>>(), It.IsAny<Expression<Func<Station, object>>>())).ReturnsAsync(new List<Station>());

            var handler = new HeadLampTestResultHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockGenericTestItemRepository.Object, _mockGenericTestRepository.Object, _mockGenericStationRepository.Object, _mockUnitOfWork.Object);
            var result = await handler.Handle(request, CancellationToken.None);
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
        }


        [Fact]
        public async Task HandleExceptionThrownReturnsInternalServerError()
        {
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, TestResultHeadLamp>>();
            var _mockGenericTestItemRepository = new Mock<IGenericRepository<InspectionDBContext, TestItems>>();
            var _mockGenericTestRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockGenericStationRepository = new Mock<IGenericRepository<InspectionDBContext, Station>>();
            var _mockUnitOfWork = new Mock<IUnitOfWork<InspectionDBContext>>();
            var request = new HeadLampTestResultRequestDto();
            _mockGenericStationRepository.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Station, bool>>>(), It.IsAny<Expression<Func<Station, object>>>())).Throws(new Exception());

            var handler = new HeadLampTestResultHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockGenericTestItemRepository.Object, _mockGenericTestRepository.Object, _mockGenericStationRepository.Object, _mockUnitOfWork.Object);
            var result = await handler.Handle(request, CancellationToken.None);
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }
    }
}
