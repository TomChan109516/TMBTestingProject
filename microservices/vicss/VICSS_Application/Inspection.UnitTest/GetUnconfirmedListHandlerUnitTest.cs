namespace Inspection.UnitTest
{
    using Xunit;
    using Moq;
    using System.Collections.Generic;
    using System.Threading;
    using AutoMapper;
    using Microsoft.Extensions.Logging;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;

    public class GetUnconfirmedListHandlerUnitTest
    {
        [Fact]
        public async Task HandleReturnsListOfUnconfirmedList()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, UnconfirmedList>>();
            var mockMapper = new Mock<IMapper>();
            var mockLogger = new Mock<ILogger<GetUnconfirmedListHandler>>();

            var unconfirmedList = new List<UnconfirmedList>
        {
            new UnconfirmedList(),
            new UnconfirmedList()
        };

            var unconfirmedListDto = new List<UnconfirmedListDto>
        {
            new UnconfirmedListDto(),
            new UnconfirmedListDto()
        };

            mockRepo.Setup(repo => repo.GetAll()).ReturnsAsync(unconfirmedList);
            mockMapper.Setup(mapper => mapper.Map<List<UnconfirmedListDto>>(unconfirmedList)).Returns(unconfirmedListDto);

            var handler = new GetUnconfirmedListHandler(mockRepo.Object, mockMapper.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(new GetUnconfirmedListRequestDto(), new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Equal(unconfirmedListDto, result.UnconfirmedList);
        }
        [Fact]
        public async Task HandleReturnsNotFound()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, UnconfirmedList>>();
            var mockMapper = new Mock<IMapper>();
            var mockLogger = new Mock<ILogger<GetUnconfirmedListHandler>>();

            mockRepo.Setup(repo => repo.GetAll()).ReturnsAsync(new List<UnconfirmedList>());

            var handler = new GetUnconfirmedListHandler(mockRepo.Object, mockMapper.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(new GetUnconfirmedListRequestDto(), new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
        }

        [Fact]
        public async Task HandleReturnsInternalServerError()
        {
            // Arrange
            var mockRepo = new Mock<IGenericRepository<InspectionDBContext, UnconfirmedList>>();
            var mockMapper = new Mock<IMapper>();
            var mockLogger = new Mock<ILogger<GetUnconfirmedListHandler>>();

            mockRepo.Setup(repo => repo.GetAll()).ThrowsAsync(new Exception());

            var handler = new GetUnconfirmedListHandler(mockRepo.Object, mockMapper.Object, mockLogger.Object);

            // Act
            var result = await handler.Handle(new GetUnconfirmedListRequestDto(), new CancellationToken());

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
        }

    }
}
