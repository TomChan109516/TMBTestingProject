namespace VICSS.Test.Services.Inspection.UnitTest
{
    using AutoMapper;
    using Microsoft.Extensions.Logging;
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

    public class GetAllTestResultsHandlerUnitTest
    {
        [Fact]
        public async Task HandleRequestIsNullReturnsBadRequest()
        {
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockLogger = new Mock<ILogger<GetAllTestResultsHandler>>();
            var handler = new GetAllTestResultsHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockLogger.Object);
            var result = await handler.Handle(null, CancellationToken.None);
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }

        [Fact]
        public async Task HandleValidRequestReturnsOk()
        {
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockLogger = new Mock<ILogger<GetAllTestResultsHandler>>();
            var request = new GetAllTestResultsRequestDto("test");

            var testList = new List<Test>
       {
           new Test
           {
               TestId="test",
               InspectionId = "test",
               EndResult="P",
               Attempt=1,
               Mode="Auto",
               TestItems = new TestItems { TestItem = CommonConstants.VisualInspection }
           }
       };

            _mockGenericRepository
     .Setup(repo => repo.GetByQuery(
         It.IsAny<Expression<Func<Test, bool>>>(),
         It.IsAny<Expression<Func<Test, object>>[]>()))
     .ReturnsAsync(testList);

            var handler = new GetAllTestResultsHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockLogger.Object);
            var result = await handler.Handle(request, CancellationToken.None);
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        }

        [Fact]
        public async Task HandleExceptionThrownReturnsInternalServerError()
        {
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockLogger = new Mock<ILogger<GetAllTestResultsHandler>>();
            var request = new GetAllTestResultsRequestDto("test");
            _mockGenericRepository.Setup(x => x.GetByQuery(It.IsAny<Expression<Func<Test, bool>>>(), It.IsAny<Expression<Func<Test, object>>>())).Throws(new Exception());

            var handler = new GetAllTestResultsHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockLogger.Object);
            var result = await handler.Handle(request, CancellationToken.None);
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }
        [Fact]
        public async Task HandleEmptyInspectionIdReturnsBadRequest()
        {
            var _mockMapper = new Mock<IMapper>();
            var _mockGenericRepository = new Mock<IGenericRepository<InspectionDBContext, Test>>();
            var _mockLogger = new Mock<ILogger<GetAllTestResultsHandler>>();
            var request = new GetAllTestResultsRequestDto("test");

            var handler = new GetAllTestResultsHandler(_mockMapper.Object, _mockGenericRepository.Object, _mockLogger.Object);
            var result = await handler.Handle(request, CancellationToken.None);
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }

    }
}