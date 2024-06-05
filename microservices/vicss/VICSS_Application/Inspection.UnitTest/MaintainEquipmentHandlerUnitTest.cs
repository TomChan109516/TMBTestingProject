namespace VICSS.Test.Services.Inspection.UnitTest
{
    using Microsoft.AspNetCore.Routing;
    using Microsoft.Extensions.Logging;
    using AutoMapper;
    using Moq;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.EventHandlers;
    using VICSS.Shared.Models.Common;
    using Xunit;
    using System.Threading.Tasks;
    using System.Threading;
    using VICSS.Service.Inspection.Interface;
    using Azure.Core;

    public class MaintainEquipmentHandlerTests
    {
        private readonly Mock<IMapper> _mapperMock;
        private readonly Mock<IGenericRepository<InspectionDBContext, Equipment>> _repositoryMock;
        private readonly Mock<IUnitOfWork<InspectionDBContext>> _unitOfWorkMock;
        private readonly Mock<ICommonMethods> _methodMock;
        private readonly Mock<ILogger<MaintainEquipmentHandler>> _loggerMock;

        private readonly MaintainEquipmentHandler _handler;

        public MaintainEquipmentHandlerTests()
        {
            _mapperMock = new Mock<IMapper>();
            _repositoryMock = new Mock<IGenericRepository<InspectionDBContext, Equipment>>();
            _unitOfWorkMock = new Mock<IUnitOfWork<InspectionDBContext>>();
            _loggerMock = new Mock<ILogger<MaintainEquipmentHandler>>();
            _methodMock = new Mock<ICommonMethods>();
            _handler = new MaintainEquipmentHandler(_mapperMock.Object, _repositoryMock.Object, _unitOfWorkMock.Object, _methodMock.Object, _loggerMock.Object);
        }

        [Fact]
        public async Task HandleReturnsCreated()
        {
            // Arrange
            var request = new MaintainEquipmentRequestDto { Id = null, UserId ="admin" };
            _mapperMock.Setup(x => x.Map<Equipment>(It.IsAny<MaintainEquipmentRequestDto>())).Returns(new Equipment());
            _methodMock.Setup(x => x.GetStationDetailsbyLane(It.IsAny<string>(), It.IsAny<string>())).ReturnsAsync(new Station() {Id = "1" });
            _repositoryMock.Setup(x => x.Add(It.IsAny<Equipment>())).Returns(Task.CompletedTask);
            _unitOfWorkMock.Setup(x => x.SaveChanges());

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.True(response.IsSuccess);
            Assert.Equal(HttpStatusCode.Created, response.HttpStatusCode);
        }
        [Fact]
        public async Task HandleReturnsModified()
        {
            // Arrange
            var request = new MaintainEquipmentRequestDto { Id = "4", UserId = "admin" };
            _mapperMock.Setup(x => x.Map<Equipment>(It.IsAny<MaintainEquipmentRequestDto>())).Returns(new Equipment());
            _methodMock.Setup(x => x.GetStationDetailsbyLane(It.IsAny<string>(), It.IsAny<string>())).ReturnsAsync(new Station() { Id = "1" });
            _repositoryMock.Setup(x => x.Update(It.IsAny<Equipment>()));
            _unitOfWorkMock.Setup(x => x.SaveChanges());

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.True(response.IsSuccess);
            Assert.Equal(HttpStatusCode.OK, response.HttpStatusCode);
        }

        [Fact]
        public async Task HandleReturnsNotModified()
        {
            // Act
            var response = await _handler.Handle(null, CancellationToken.None);

            // Assert
            Assert.False(response.IsSuccess);
            Assert.Equal(HttpStatusCode.BadRequest, response.HttpStatusCode);
        }
        [Fact]
        public async Task HandleReturnsInternalServerError()
        {
            // Arrange
            var request = new MaintainEquipmentRequestDto { Id = "4", UserId = "admin" };
            _mapperMock.Setup(x => x.Map<Equipment>(It.IsAny<MaintainEquipmentRequestDto>())).Returns(new Equipment());
            _methodMock.Setup(x => x.GetStationDetailsbyLane(It.IsAny<string>(), It.IsAny<string>())).ThrowsAsync(new Exception()); 

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(response.IsSuccess);
            Assert.Equal(HttpStatusCode.InternalServerError, response.HttpStatusCode);
        }
    }
}



