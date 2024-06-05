
using Azure.Core;
using MediatR;
using Microsoft.Extensions.Logging;
using Moq;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Entities.Artu;
using VICSS.Infrastructure.DataAccess.Entities.Inspection;
using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using VICSS.Service.Artu.Domain;
using VICSS.Service.Artu.EventHandlers;
using VICSS.Service.Artu.Helper;
using VICSS.Service.Artu.Interface;
using VICSS.Shared.Models.Common;

namespace VICSS.Test.Service.Artu.UnitTest
{
    public class ToggleConnectionHandlerUnitTest
    {
        private readonly Mock<IGenericRepository<ArtuDbContext, ArtuConfig>> _mockRepo;
        private readonly ToggleConnectionCommandHandler _mockHandler;
        private readonly Mock<ISendMessageToInspection> _mockSendMessageToInspection;
        private readonly Mock<IArtuTcpClient> _mockArtuTcpClient;

        public ToggleConnectionHandlerUnitTest()
        {
            _mockRepo = new Mock<IGenericRepository<ArtuDbContext, ArtuConfig>>();
            _mockSendMessageToInspection = new Mock<ISendMessageToInspection>();
            _mockArtuTcpClient = new Mock<IArtuTcpClient>();
            _mockHandler = new ToggleConnectionCommandHandler(_mockRepo.Object, _mockSendMessageToInspection.Object);
        }

        //Test when the Id field in the request is empty or null.
        [Fact]
        public void HandleShouldReturnBadRequestWhenIdIsEmpty()
        {
            string mockId = string.Empty;
            // Arrange
            var mockRequest = new ToggleConnectionRequestDto { Id = mockId };

            // Act
            var mockResult = _mockHandler.Handle(mockRequest, CancellationToken.None).Result;

            // Assert
            Assert.False(mockResult.IsSuccess);
            Assert.Equal(HttpStatusCode.BadRequest, mockResult.HttpStatusCode);
            Assert.Equal(CommonMessages.EmptyFields, mockResult.Message);
        }

        [Fact]
        public void HandleShouldReturnServiceUnavailableWhenToggleConnectionIsNull()
        {
            string mockId = "123";
            // Arrange
            var mockHandler = new ToggleConnectionCommandHandler(_mockRepo.Object, _mockSendMessageToInspection.Object);
            var mockRequest = new ToggleConnectionRequestDto { Id = mockId };
            _ = _mockRepo.Setup(x => x.GetById(mockRequest.Id)).ReturnsAsync((ArtuConfig)null);

            // Act
            var result = mockHandler.Handle(mockRequest, CancellationToken.None).Result;

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.ServiceUnavailable, result.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationUnsuccessful, result.Message);
        }

        [Fact]
        public void HandleShouldReturnBadRequestWhenVeesIpOrVeesPortIsEmpty()
        {
            string mockId = "123";
            string mockVeesIp = string.Empty;
            string mockVeesPort = string.Empty;

            // Arrange
            var mockHandler = new ToggleConnectionCommandHandler(_mockRepo.Object, _mockSendMessageToInspection.Object);
            var mockRequest = new ToggleConnectionRequestDto { Id = mockId };
            var toggleConnection = new ArtuConfig { VeesIp = mockVeesIp, VeesPort = mockVeesPort };
            _mockRepo.Setup(x => x.GetById(mockRequest.Id)).ReturnsAsync(toggleConnection);

            // Act
            var mockResult = mockHandler.Handle(mockRequest, CancellationToken.None).Result;

            // Assert
            Assert.False(mockResult.IsSuccess);
            Assert.Equal(HttpStatusCode.BadRequest, mockResult.HttpStatusCode);
            Assert.Equal(CommonMessages.EndPointNotFound, mockResult.Message);
        }

        [Fact]
        public void HandleShouldReturnConflictWhenConnectionAlreadyExists()
        {
            string mockId = "123";
            string mockVeesIp = "127.0.0.1";
            string mockVeesPort = "8080";
            string mockArtuConfigId = "456";

            // Arrange
            var mockHandler = new ToggleConnectionCommandHandler(_mockRepo.Object, _mockSendMessageToInspection.Object);
            var mockRequest = new ToggleConnectionRequestDto { Id = mockId, toggleStatus = true };
            var mockToggleConnection = new ArtuConfig { VeesIp = mockVeesIp, VeesPort = mockVeesPort, ArtuConfigId = mockArtuConfigId };
            _mockRepo.Setup(x => x.GetById(mockRequest.Id)).ReturnsAsync(mockToggleConnection);

            var mockArtuTcpClient = new Mock<ArtuTcpClient>(_mockSendMessageToInspection.Object);
            GlobalDictionary._connectedClients[mockToggleConnection.ArtuConfigId] = (mockArtuTcpClient.Object, "testStatus");

            // Act
            var result = mockHandler.Handle(mockRequest, CancellationToken.None).Result;

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationUnsuccessful, result.Message);
        }

        [Fact]
        public async Task HandleShouldReturnNotFoundWhenToggleStatusIsFalseAndConnectionDoesNotExist()
        {
            string mockId = "123";
            // Arrange
            var request = new ToggleConnectionRequestDto { Id = mockId, toggleStatus = false };
            _mockRepo.Setup(x => x.GetById(request.Id)).ReturnsAsync((ArtuConfig)null);

            // Act
            var result = _mockHandler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.ServiceUnavailable, result.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationUnsuccessful, result.Message);
        }

        [Fact]
        public void Handle_ShouldReturnInternalServerError_WhenExceptionIsThrown()
        {
            string mockId = "123";
            // Arrange
            var mockRequest = new ToggleConnectionRequestDto { Id = mockId };
            _mockRepo.Setup(x => x.GetById(mockRequest.Id)).Throws(new Exception());

            // Act
            var result = _mockHandler.Handle(mockRequest, CancellationToken.None).Result;

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.InternalServerError, result.HttpStatusCode);
            Assert.Equal(CommonMessages.EndPointNotFound, result.Message);
        }

        [Fact]
        public void Handle_Fails_When_Client_Is_Not_Connected()
        {
            // Arrange
            var mockLogger = new Mock<ILogger<ToggleConnectionCommandHandler>>();
            var mockRepository = new Mock<IGenericRepository<ArtuDbContext, ArtuConfig>>();
            var mockHandler = new ToggleConnectionCommandHandler(mockRepository.Object, _mockSendMessageToInspection.Object);
            var request = new ToggleConnectionRequestDto { Id = "testId", toggleStatus = false };

            mockRepository.Setup(r => r.GetById(It.IsAny<string>())).ReturnsAsync(new ArtuConfig { ArtuConfigId = "testId", VeesIp = "testIp", VeesPort = "testPort" });

            // Act
            var result = mockHandler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.NotFound, result.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationUnsuccessful, result.Message);
        }

        [Fact]
        public void Handle_ShouldReturnNotFound_WhenClientNotFoundInConnectedClients()
        {
            // Arrange
            var request = new ToggleConnectionRequestDto { Id = "testId", toggleStatus = false };

            // Act
            var result = _mockHandler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.False(result.IsSuccess);
            Assert.Equal(HttpStatusCode.ServiceUnavailable, result.HttpStatusCode);
        }

        [Fact]
        public void Handle_ClientNotConnectedButConnectFails_ReturnsNotFound()
        {
            // Arrange
            var VeesIp = "127.0.0.1";
            var VeesPort = "8000";
            var request = new ToggleConnectionRequestDto { Id = "testId", toggleStatus = true };
            var toggleConnection = new ToggleConnectionCommandHandler(_mockRepo.Object, _mockSendMessageToInspection.Object);
            _mockRepo.Setup(x => x.GetById(It.IsAny<string>())).ReturnsAsync(new ArtuConfig());
            _mockArtuTcpClient.Setup(c => c.Connect(VeesIp, int.Parse(VeesPort))).Returns(false);

            // Act
            var result = _mockHandler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
            Assert.Equal("End point not found.", result.Message);
            Assert.False(result.IsSuccess);
        }

        [Fact]
        public void Handle_ClientConnectedButDisconnectFails_ReturnsServiceUnavailable()
        {
            // Arrange
            var VeesIp = "127.0.0.1";
            var VeesPort = "8000";
            var LaneId = "30";
            var StationId = "A";
            var request = new ToggleConnectionRequestDto { Id = "testId", toggleStatus = false };
            var toggleConnection = new ToggleConnectionCommandHandler(_mockRepo.Object, _mockSendMessageToInspection.Object);
            _mockRepo.Setup(x => x.GetById(It.IsAny<string>())).ReturnsAsync(new ArtuConfig());
            _mockArtuTcpClient.Setup(c => c.Disconnect()).Returns(false);

            // Act
            var result = _mockHandler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.Equal(HttpStatusCode.BadRequest, result.HttpStatusCode);
            Assert.Equal(CommonMessages.EndPointNotFound, result.Message);
            Assert.False(result.IsSuccess);
        }

        //[Fact]
        //public void Handle_ClientNotConnectedAndConnectSucceeds_ReturnsOk()
        //{
        //    // Arrange
        //    var VeesIp = "127.0.0.1";
        //    var VeesPort = "8000";
        //    var laneId = "lane1";
        //    var stationId = "station1";
        //    var artuConfigId = "3c91023";
        //    var request = new ToggleConnectionRequestDto { Id = "testId", toggleStatus = true };
        //    var toggleConnection = new ToggleConnectionCommandHandler(_mockRepo.Object, _mockSendMessageToInspection.Object);
        //    _mockRepo.Setup(x => x.GetById(It.IsAny<string>())).ReturnsAsync(new ArtuConfig { VeesIp = VeesIp, VeesPort = VeesPort, LaneId = laneId, StationId = stationId, ArtuConfigId = artuConfigId });
        //    _mockArtuTcpClient.Setup(c => c.Connect(VeesIp, int.Parse(VeesPort))).Returns(true);
        //    GlobalDictionary._idForLaneStation[(laneId, stationId)] = request.Id;

        //    // Start a TcpListener to simulate a server
        //    var listener = new TcpListener(IPAddress.Parse(VeesIp), int.Parse(VeesPort));
        //    listener.Start();

        //    // Act
        //    var result = toggleConnection.Handle(request, CancellationToken.None).Result;

        //    // Stop the TcpListener
        //    listener.Stop();

        //    // Assert
        //    Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
        //    Assert.Equal(CommonMessages.OperationSuccessful, result.Message);
        //    Assert.True(result.IsSuccess);
        //}

        [Fact]
        public void Handle_ClientConnectedAndDisconnectSucceeds_ReturnsOk()
        {
            // Arrange
            var VeesIp = "127.0.0.1";
            var VeesPort = "8000";
            var laneId = "lane1";
            var stationId = "station1";
            var artuConfigId = "3c91023";
            var request = new ToggleConnectionRequestDto { Id = "testId", toggleStatus = true };
            var toggleConnection = new ToggleConnectionCommandHandler(_mockRepo.Object, _mockSendMessageToInspection.Object);
            _mockRepo.Setup(x => x.GetById(It.IsAny<string>())).ReturnsAsync(new ArtuConfig { VeesIp = VeesIp, VeesPort = VeesPort, LaneId = laneId, StationId = stationId, ArtuConfigId = artuConfigId });
            _mockArtuTcpClient.Setup(c => c.Disconnect());
            GlobalDictionary._idForLaneStation[(laneId, stationId)] = request.Id;

            // Start a TcpListener to simulate a server
            var listener = new TcpListener(IPAddress.Parse(VeesIp), int.Parse(VeesPort));
            listener.Start();

            // Act
            var result = toggleConnection.Handle(request, CancellationToken.None).Result;

            // Stop the TcpListener
            listener.Stop();

            // Assert
            Assert.Equal(HttpStatusCode.OK, result.HttpStatusCode);
            Assert.Equal(CommonMessages.OperationSuccessful, result.Message);
            Assert.True(result.IsSuccess);
        }
    }
}

