using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using NLog;
using NLog.Fluent;
using System.Collections.Concurrent;
using System.Net;
using System.Text;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Entities.Artu;
using VICSS.Infrastructure.DataAccess.Repositories.Implementation;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using VICSS.Service.Artu.Controller;
using VICSS.Service.Artu.Domain;
using VICSS.Service.Artu.EventHandlers;
using VICSS.Service.Artu.Helper;
using VICSS.Service.Artu.Interface;

namespace VICSS.Test.Service.Artu.UnitTest
{
    public class ArtuControllerUnitTest
    {

        private readonly Mock<IMediator> _mockMediator;
        private readonly ArtuController _mockController;
        private readonly Mock<ISendMessageToInspection> _mockSendMessagetoInspection;
        private readonly ArtuTcpClient _artuTcpClient; 
        private readonly Mock<NLog.ILogger> _mockLogger;

        public ArtuControllerUnitTest()
        {
            _mockMediator = new Mock<IMediator>();
            _mockController = new ArtuController(_mockMediator.Object);
            _mockSendMessagetoInspection = new Mock<ISendMessageToInspection>();
            _artuTcpClient = new ArtuTcpClient(_mockSendMessagetoInspection.Object);
            GlobalDictionary._connectedClients = new ConcurrentDictionary<string, (ArtuTcpClient client, string status)>();
            GlobalDictionary._connectedClients["testEndpoint"] = (this._artuTcpClient, "testStatus");
            GlobalDictionary.MessageJsonDictionary.Clear();
            _mockLogger = new Mock<NLog.ILogger>();
        }

        [Fact]
        public void SendCommand01_ShouldReturnSuccess_WhenCalledWithValidData()
        {
            // Arrange
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes("<xml>test</xml>"));
            _mockController.ControllerContext = new ControllerContext()
            {
                HttpContext = httpContext,
            };
            
            // Act
            var result = _mockController.SendCommand01("testEndpoint").Result;

            // Assert
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Success", result.Value);
        }

        [Fact]
        public void SendCommand02_ShouldReturnSuccess_WhenCalledWithValidData()
        {
            // Arrange
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes("<xml>test</xml>"));
            _mockController.ControllerContext = new ControllerContext()
            {
                HttpContext = httpContext,
            };

            // Act
            var result = _mockController.SendCommand02("testEndpoint").Result;

            // Assert
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Success", result.Value);
        }

        [Fact]
        public void SendCommand03_ShouldReturnSuccess_WhenCalledWithValidData()
        {
            // Arrange
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes("<xml>test</xml>"));
            _mockController.ControllerContext = new ControllerContext()
            {
                HttpContext = httpContext,
            };

            // Act
            var result = _mockController.SendCommand03("testEndpoint").Result;

            // Assert
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Success", result.Value);
        }

        [Fact]
        public void SendCommand04_ShouldReturnSuccess_WhenCalledWithValidData()
        {
            // Arrange
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes("<xml>test</xml>"));
            _mockController.ControllerContext = new ControllerContext()
            {
                HttpContext = httpContext,
            };

            // Act
            var result = _mockController.SendCommand04("testEndpoint").Result;

            // Assert
            Assert.Equal(200, result.StatusCode);
            Assert.Equal("Success", result.Value);
        }

        [Fact]
        public void AddVeePairingReturnsExpectedResult()
        {
            // Arrange
            var requestDto = new AddVeePairingRequestDto();
            var responseDto = new AddVeePairingResponseDto
            {
                HttpStatusCode = HttpStatusCode.OK,
            };
            _mockMediator.Setup(m => m.Send(requestDto, CancellationToken.None)).ReturnsAsync(responseDto);

            // Act
            var resultTask = _mockController.AddVeePairing(requestDto);
            resultTask.Wait();
            var result = resultTask.Result;

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.OK, jsonResult.StatusCode);
            var returnValue = Assert.IsType<AddVeePairingResponseDto>(jsonResult.Value);
            Assert.Equal(responseDto, returnValue);
        }

        [Fact]
        public void AddVeePairingUnsuccessfulResult()
        {
            // Arrange
            var request = new AddVeePairingRequestDto();
            var response = new AddVeePairingResponseDto { HttpStatusCode = HttpStatusCode.BadRequest };
            _mockMediator.Setup(m => m.Send(It.IsAny<AddVeePairingRequestDto>(), It.IsAny<CancellationToken>()))
                         .ReturnsAsync(response);

            // Act
            var resultTask = _mockController.AddVeePairing(request);
            resultTask.Wait();
            var result = resultTask.Result;

            // Assert
            Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.BadRequest, result.StatusCode);
        }

        [Fact]
        public void AddVeePairingNullRequest()
        {
            // Arrange
            var request = (AddVeePairingRequestDto)null;

            // Act
            var resultTask = _mockController.AddVeePairing(request);
            resultTask.Wait();
            var result = resultTask.Result;

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.BadRequest, jsonResult.StatusCode);
        }

        [Fact]
        public void ToggleConnectionSuccessfulResult()
        {
            // Arrange
            var request = new ToggleConnectionRequestDto();
            var response = new ToggleConnectionResponseDto { HttpStatusCode = HttpStatusCode.OK };
            _mockMediator.Setup(m => m.Send(It.IsAny<ToggleConnectionRequestDto>(), It.IsAny<CancellationToken>()))
                         .ReturnsAsync(response);

            // Act
            var resultTask = _mockController.ToggleConnection(request);
            resultTask.Wait();
            var result = resultTask.Result;

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.OK, jsonResult.StatusCode);
        }

        [Fact]
        public void ToggleConnectionNullRequest()
        {
            // Arrange
            var request = (ToggleConnectionRequestDto)null;

            // Act
            var resultTask = _mockController.ToggleConnection(request);
            resultTask.Wait();
            var result = resultTask.Result;

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.BadRequest, jsonResult.StatusCode);
        }

        [Fact]
        public void DeleteVeePairingReturnsExpectedResult()
        {
            // Arrange
            var requestDto = new DeleteVeePairingRequestDto();
            var responseDto = new DeleteVeePairingResponseDto
            {
                HttpStatusCode = HttpStatusCode.OK,
            };
            _mockMediator.Setup(m => m.Send(requestDto, CancellationToken.None)).ReturnsAsync(responseDto);

            // Act
            var resultTask = _mockController.DeleteVeePairing(requestDto);
            resultTask.Wait();
            var result = resultTask.Result;

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.OK, jsonResult.StatusCode);
            var returnValue = Assert.IsType<DeleteVeePairingResponseDto>(jsonResult.Value);
            Assert.Equal(responseDto, returnValue);
        }

        [Fact]
        public void DeleteVeePairingUnsuccessfulResult()
        {
            // Arrange
            var request = new DeleteVeePairingRequestDto();
            var response = new DeleteVeePairingResponseDto { HttpStatusCode = HttpStatusCode.BadRequest };
            _mockMediator.Setup(m => m.Send(It.IsAny<DeleteVeePairingRequestDto>(), It.IsAny<CancellationToken>()))
                         .ReturnsAsync(response);

            // Act
            var resultTask = _mockController.DeleteVeePairing(request);
            resultTask.Wait();
            var result = resultTask.Result;

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.BadRequest, jsonResult.StatusCode);
        }

        [Fact]
        public void DeleteVeePairingNullRequest()
        {
            // Arrange
            var request = (DeleteVeePairingRequestDto)null;

            // Act
            var result = _mockController.DeleteVeePairing(request).Result;

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.BadRequest, jsonResult.StatusCode);
        }

        [Fact]
        public void GetLogsReturnsExpectedResultWhenSuccessful()
        {
            // Act
            var result = _mockController.GetLogs();

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.OK, jsonResult.StatusCode);
        }

        [Fact]
        public void GetAllEntitiesSuccessfulResult()
        {
            // Arrange
            var response = new GetAllTableDetailsResponseDto { HttpStatusCode = HttpStatusCode.OK };
            _mockMediator.Setup(m => m.Send(It.IsAny<GetAllTableDetailsRequestDto>(), It.IsAny<CancellationToken>()))
                         .ReturnsAsync(response);

            // Act
            var resultTask = _mockController.GetAllEntities();
            resultTask.Wait();
            var result = resultTask.Result;

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.OK, jsonResult.StatusCode);
        }

        [Fact]
        public void GetAllEntitiesUnsuccessfulResult()
        {
            // Arrange
            var response = new GetAllTableDetailsResponseDto { HttpStatusCode = HttpStatusCode.BadRequest };
            _mockMediator.Setup(m => m.Send(It.IsAny<GetAllTableDetailsRequestDto>(), It.IsAny<CancellationToken>()))
                         .ReturnsAsync(response);

            // Act
            var resultTask = _mockController.GetAllEntities();
            resultTask.Wait();
            var result = resultTask.Result;

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.BadRequest, jsonResult.StatusCode);
        }

        [Fact]
        public void SendCommand01_InvalidArtuEndpointId_ThrowsKeyNotFoundException()
        {
            // Arrange
            var artuEndpointId = "invalidId";
            var xml = "<root><element>value</element></root>";
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes(xml));
            _mockController.ControllerContext.HttpContext = httpContext;

            // Act & Assert
            Assert.ThrowsAsync<KeyNotFoundException>(() => _mockController.SendCommand01(artuEndpointId));
        }

        [Fact]
        public void SendCommand02_InvalidArtuEndpointId_ThrowsKeyNotFoundException()
        {
            // Arrange
            var artuEndpointId = "invalidId";
            var xml = "<root><element>value</element></root>";
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes(xml));
            _mockController.ControllerContext.HttpContext = httpContext;

            // Act & Assert
            Assert.ThrowsAsync<KeyNotFoundException>(() => _mockController.SendCommand02(artuEndpointId));
        }

        [Fact]
        public void SendCommand03_InvalidArtuEndpointId_ThrowsKeyNotFoundException()
        {
            // Arrange
            var artuEndpointId = "invalidId";
            var xml = "<root><element>value</element></root>";
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes(xml));
            _mockController.ControllerContext.HttpContext = httpContext;

            // Act & Assert
            Assert.ThrowsAsync<KeyNotFoundException>(() => _mockController.SendCommand03(artuEndpointId));
        }

        [Fact]
        public void SendCommand04_InvalidArtuEndpointId_ThrowsKeyNotFoundException()
        {
            // Arrange
            var artuEndpointId = "invalidId";
            var xml = "<root><element>value</element></root>";
            var httpContext = new DefaultHttpContext();
            httpContext.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes(xml));
            _mockController.ControllerContext.HttpContext = httpContext;

            // Act & Assert
            Assert.ThrowsAsync<KeyNotFoundException>(() => _mockController.SendCommand04(artuEndpointId));
        }

        [Fact]
        public async Task VeeCommandControl_ValidRequest_ReturnsOk()
        {
            // Arrange
            var request = new VeeCommandControlRequestDto { ArtuEndpointId = "1", caseNumber = 1 };
            var response = new VeeCommandControlResponseDto { HttpStatusCode = HttpStatusCode.OK };
            _mockMediator.Setup(m => m.Send(request, CancellationToken.None)).ReturnsAsync(response);

            // Act
            var result = await _mockController.VeeCommandControl(request);

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.OK, jsonResult.StatusCode);
            Assert.Equal(response, jsonResult.Value);
        }

        [Fact]
        public async Task VeeCommandControl_InvalidRequest_ReturnsBadRequest()
        {
            // Arrange
            var request = new VeeCommandControlRequestDto { ArtuEndpointId = "", caseNumber = 1 };

            // Act
            var result = await _mockController.VeeCommandControl(request);

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.BadRequest, jsonResult.StatusCode);
            Assert.Equal("Bad Request", jsonResult.Value);
        }

        [Fact]
        public async Task VeeCommandControl_NullRequest_ReturnsBadRequest()
        {
            // Arrange
            VeeCommandControlRequestDto request = null!;

            // Act
            var result = await _mockController.VeeCommandControl(request);

            // Assert
            var jsonResult = Assert.IsType<JsonResult>(result);
            Assert.Equal((int)HttpStatusCode.BadRequest, jsonResult.StatusCode);
            Assert.Equal("Bad Request", jsonResult.Value);
        }

        [Fact]
        public async Task UpdateToggleStatus_ShouldAddHeadersToResponse()
        {
            // Arrange
            var cts = new CancellationTokenSource();
            cts.CancelAfter(1000); // Cancel after 1 second to prevent infinite loop

            var httpContext = new DefaultHttpContext();
            _mockController.ControllerContext = new ControllerContext()
            {
                HttpContext = httpContext,
            };

            // Act
            await _mockController.UpdateToggleStatus(cts.Token);

            // Assert
            Assert.Equal("text/event-stream", _mockController.Response.Headers["Content-Type"]);
            Assert.Equal("no-cache", _mockController.Response.Headers["Cache-Control"]);
            Assert.Equal("keep-alive", _mockController.Response.Headers["Connection"]);
        }

        [Fact]
        public async Task UpdateToggleStatusShouldLogErrorWhenExceptionIsThrown()
        {
            // Arrange
            var cts = new CancellationTokenSource();
            cts.CancelAfter(1000); // Cancel after 1 second to prevent infinite loop

            var mockUpdateToggleStatusHandler = new Mock<UpdateToggleStatusHandler>();
            mockUpdateToggleStatusHandler.Setup(h => h.Handle(It.IsAny<CancellationToken>())).Throws(new Exception("Test exception"));

            var httpContext = new DefaultHttpContext();
            _mockController.ControllerContext = new ControllerContext()
            {
                HttpContext = httpContext,
            };

            // Act
            await _mockController.UpdateToggleStatus(cts.Token);

        }

        [Fact]
        public void UpdateToggleStatus_ShouldHandleExceptions()
        {
            // Arrange
            var httpContext = new DefaultHttpContext();
            var memoryStream = new MemoryStream();
            httpContext.Response.Body = memoryStream;

            _mockController.ControllerContext = new ControllerContext()
            {
                HttpContext = httpContext,
            };

            var updateToggleStatusHandler = new Mock<UpdateToggleStatusHandler>(null);
            updateToggleStatusHandler.Setup(x => x.Handle(It.IsAny<CancellationToken>()))
                .ThrowsAsync(new Exception("Test exception"));

            // Create a CancellationToken that will cancel the operation after 1 second
            var cancellationTokenSource = new CancellationTokenSource();
            cancellationTokenSource.CancelAfter(TimeSpan.FromSeconds(1));

            // Act
            // Run the method in a separate task to avoid blocking the test thread
            Task.Run(() => _mockController.UpdateToggleStatus(cancellationTokenSource.Token)).Wait();

            // Assert
            memoryStream.Seek(0, SeekOrigin.Begin);
            var reader = new StreamReader(memoryStream);
            var responseBody = reader.ReadToEnd();

            Assert.Equal(string.Empty, responseBody);
        }

    }
}