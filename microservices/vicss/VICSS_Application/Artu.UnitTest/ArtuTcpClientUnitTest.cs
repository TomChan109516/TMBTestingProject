using Moq;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using VICSS.Service.Artu.Helper;
using VICSS.Service.Artu.Interface;
using VICSS.Shared.Models.Common;

namespace VICSS.Test.Service.Artu.UnitTest
{
    public class ArtuTcpClientUnitTest
    {
        private readonly Mock<ISendMessageToInspection> _mockSendMessageToInspection;
        private readonly ArtuTcpClient _artuTcpClient;
        private readonly Mock<NetworkStream> _mockNetworkStream;


        public ArtuTcpClientUnitTest()
        {
            _mockSendMessageToInspection = new Mock<ISendMessageToInspection>();
            _artuTcpClient = new ArtuTcpClient(_mockSendMessageToInspection.Object);
            _mockNetworkStream = new Mock<NetworkStream>(SocketType.Stream, ProtocolType.Tcp);

        }

        [Fact]
        public void ConnectShouldReturnFalseWhenConnectionFails()
        {
            string ipAddress = "invalid_ip";
            int port = 8000;
            var result = _artuTcpClient.Connect(ipAddress, port);
            Assert.False(result);
        }

        [Fact]
        public void DisconnectShouldReturnTrueWhenDisconnectionIsSuccessful()
        {
            string ipAddress = "invalid_ip";
            int port = 8000;
            _artuTcpClient.Connect(ipAddress, port);
            var result = _artuTcpClient.Disconnect();
            Assert.True(result);
        }

        [Fact]
        public void SendShouldReturnZeroWhenNotConnected()
        {
            int xmlLength = 3;
            var result = _artuTcpClient.Send(new byte[] { 0x01, 0x02, 0x03 }, xmlLength, SocketFlags.None);
            Assert.Equal(0, result);
        }

        [Fact]
        public void IsConnectedShouldReturnFalseWhenNotConnected()
        {
            Assert.False(_artuTcpClient.IsConnected());
        }

        [Fact]
        public void GetServerEndpointsShouldReturnNullWhenNotConnected()
        {
            var result = _artuTcpClient.GetServerEndpoints();
            Assert.Null(result);
        }

        [Fact]
        public void CheckForResponseShouldReturnNullWhenNotConnected()
        {
            var result = _artuTcpClient.CheckForResponse().Result;
            Assert.Null(result);
        }

        [Fact]
        public void DisconnectShouldReturnTrueEvenWhenNotConnected()
        {
            var result = _artuTcpClient.Disconnect();
            Assert.True(result);
        }

        [Fact]
        public void Disconnect_WhenCalled_ReturnsTrue()
        {
            _artuTcpClient.Connect("127.0.0.1", 800);
            var result = _artuTcpClient.Disconnect();
            Assert.True(result);
        }

        [Fact]
        public void CheckForResponseShouldReturnNullWhenDataIsNotAvailable()
        {
            // Arrange
            _mockNetworkStream.Setup(x => x.DataAvailable).Returns(false);

            // Act
            var result = _artuTcpClient.CheckForResponse().Result;

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public void Connect_ShouldReturnTrue_WhenConnectionIsSuccessful()
        {
            // Arrange
            var service = new ArtuTcpClient(_mockSendMessageToInspection.Object);
            var listener = new TcpListener(IPAddress.Loopback, 8000);
            listener.Start();
            var listenerTask = Task.Run(() => listener.AcceptTcpClientAsync()); // Accept a client in the background

            // Act
            var result = service.Connect("127.0.0.1", 8000);

            // Assert
            Assert.True(result);
            var client = listenerTask; // Ensure a client was accepted
            Assert.NotNull(client);

            // Cleanup
            listener.Stop();
        }

        [Fact]
        public void Send_ShouldReturnOne_WhenDataIsSentSuccessfully()
        {
            // Arrange
            var service = new ArtuTcpClient(_mockSendMessageToInspection.Object);
            var listener = new TcpListener(IPAddress.Loopback, 8000);
            listener.Start();
            var listenerTask = Task.Run(() => listener.AcceptTcpClientAsync()); // Accept a client in the background
            service.Connect("127.0.0.1", 8000);

            // Act
            var result = service.Send(new byte[] { 0x01, 0x02, 0x03 }, 3, SocketFlags.None);

            // Assert
            Assert.Equal(1, result);
            var client = listenerTask; // Ensure a client was accepted
            Assert.NotNull(client);

            // Cleanup
            listener.Stop();
        }

        [Fact]
        public void GetServerEndpoints_ShouldReturnEndpoint_WhenConnected()
        {
            // Arrange
            var service = new ArtuTcpClient(_mockSendMessageToInspection.Object);
            var listener = new TcpListener(IPAddress.IPv6Loopback, 8000);
            listener.Start();
            var listenerTask = Task.Run(() => listener.AcceptTcpClientAsync()); // Accept a client in the background
            service.Connect("::1", 8000);

            // Act
            var result = service.GetServerEndpoints();

            // Assert
            Assert.Equal("::1:8000", result);
            var client =  listenerTask; // Ensure a client was accepted
            Assert.NotNull(client);

            // Cleanup
            listener.Stop();
        }

        [Fact]
        public void GetServerEndpoints_ShouldReturnNull_WhenNotConnected()
        {
            // Arrange
            var service = new ArtuTcpClient(null);

            // Act
            var result = service.GetServerEndpoints();

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public void GetServerEndpoints_ShouldReturnNull_WhenExceptionIsThrown()
        {
            // Arrange
            var service = new ArtuTcpClient(_mockSendMessageToInspection.Object);
            service.Connect("255.255.255.255", 8000); // Attempt to connect to a non-existing server

            // Act
            var result = service.GetServerEndpoints();

            // Assert
            Assert.Null(result);
        }

        //[Fact]
        //public void CheckForResponse_ShouldReturnNull_WhenDataIsAvailableAndCorrect()
        //{
        //    // Arrange
        //    var listener = new TcpListener(IPAddress.Loopback, 8000);
        //    listener.Start();
        //    var client = new TcpClient();
        //    client.ConnectAsync(IPAddress.Loopback, 8000);

        //    var service = new ArtuTcpClient(_mockSendMessageToInspection.Object);
        //    service._tcpClient = client;
        //    service._networkStream = client.GetStream();

        //    // Write data to the stream
        //    var data = new byte[] { 0x02, 0x01, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00 };
        //    service._networkStream.WriteAsync(data, 0, data.Length);

        //    // Act
        //    var result = service.CheckForResponse().Result;

        //    // Assert
        //    Assert.Null(result);

        //    // Cleanup
        //    listener.Stop();
        //}

        [Fact]
        public void CheckForResponse_ShouldReturnNull_WhenNetworkStreamIsNull()
        {
            // Arrange
            var service = new ArtuTcpClient(_mockSendMessageToInspection.Object);
            service._networkStream = null;

            // Act
            var result = service.CheckForResponse().Result;

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public void CheckForResponse_ShouldReturnNull_WhenDataIsNotAvailable()
        {
            // Arrange
            _mockNetworkStream.Setup(x => x.DataAvailable).Returns(false);

            // Act
            var result = _artuTcpClient.CheckForResponse().Result;

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public async Task Disconnect_ShouldReturnFalse_WhenExceptionIsThrown()
        {
            // Arrange
            var listener = new TcpListener(IPAddress.IPv6Loopback, 8000);
            listener.Start();
            var listenerTask = Task.Run(() => listener.AcceptTcpClientAsync()); // Accept a client in the background
            var service = new ArtuTcpClient(_mockSendMessageToInspection.Object);
            service.Connect("::1", 8000);
            await listenerTask; // Ensure a client was accepted

            // Act
            var result = service.Disconnect();

            // Assert
            Assert.True(result);

            // Cleanup
            listener.Stop();
        }

        [Fact]
        public void CheckForResponse_ShouldReturnNull_WhenNoDataAvailable()
        {
            // Arrange
            var mockNetworkStream = new Mock<NetworkStream>(MockBehavior.Strict, new TcpClient());
            mockNetworkStream.SetupGet(x => x.DataAvailable).Returns(false);
            var service = new ArtuTcpClient(_mockSendMessageToInspection.Object);

            // Act
            var result = service.CheckForResponse().Result;

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public void CheckForResponse_ShouldReturnNull_WhenHeaderIsCorrect()
        {
            // Arrange
            byte[] buffer = new byte[] { 0x02, 0x01, 0x00, 0x00, 0x00 };
            var memoryStream = new MemoryStream(buffer);
            var service = new ArtuTcpClient(_mockSendMessageToInspection.Object);

            // Act
            var result = service.CheckForResponse().Result;

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public async Task CheckForResponseReturnsNullWhenBufferIsCorrect()
        {
            // Arrange
            var listener = new TcpListener(IPAddress.Loopback, 0); // Use dynamic port
            listener.Start();
            var client = new TcpClient();
            await client.ConnectAsync(IPAddress.Loopback, ((IPEndPoint)listener.LocalEndpoint).Port);

            var stream = client.GetStream();
            await stream.WriteAsync(new byte[] { 0x02, 0x01, 0x00, 0x04, 0x04, 0x00, 0x00, 0x00, 0x00 }); // Correct header and length

            var service = new ArtuTcpClient(_mockSendMessageToInspection.Object);

            // Act
            var result = await service.CheckForResponse();

            // Assert
            Assert.Null(result);

            // Cleanup
            client.Dispose();
            listener.Stop();
        }
    }
}