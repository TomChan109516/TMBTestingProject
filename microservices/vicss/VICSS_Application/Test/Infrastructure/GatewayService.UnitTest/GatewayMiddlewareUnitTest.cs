//To be addressed 
namespace VICSS.Test.Infrastructure.GatewayService.UnitTest
{
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Hosting;
    using Moq;
    using Moq.Protected;
    using System.Net;
    using VICSS.Infrastructure.GatewayService.Helper;

    public class GatewayMiddlewareUnitTest
    {
        [Fact]
        public async Task Invoke_NoMatchingConfig_SetsStatusCodeTo404()
        {
            // Arrange
            var mockRequestDelegate = new Mock<RequestDelegate>();
            var mockEnvironment = new Mock<IHostEnvironment>();
            var mockIConfigurationSectionFolderName = new Mock<IConfigurationSection>();
            var mockIConfigurationSectionFileName = new Mock<IConfigurationSection>();
            var mockConfiguration = new Mock<IConfiguration>();

            mockEnvironment.Setup(e => e.ContentRootPath).Returns(string.Empty);

            mockIConfigurationSectionFolderName.Setup(x => x.Value).Returns("InputJson");
            mockIConfigurationSectionFileName.Setup(x => x.Value).Returns("GatewayConfig.json");

            mockConfiguration.Setup(c => c.GetSection(It.IsAny<String>())).Returns(mockIConfigurationSectionFolderName.Object);
            mockConfiguration.Setup(c => c.GetSection("ConfigPath:FolderName")).Returns(mockIConfigurationSectionFolderName.Object);
            mockConfiguration.Setup(c => c.GetSection("ConfigPath:FileName")).Returns(mockIConfigurationSectionFileName.Object);

            var middleware = new GatewayMiddleware(mockRequestDelegate.Object, mockEnvironment.Object, mockConfiguration.Object, null);

            var context = new DefaultHttpContext();
            context.Request.Path = "/nonexistentpath";

            // Act
            await middleware.Invoke(context);

            // Assert
            Assert.Equal(404, context.Response.StatusCode);
        }

        [Fact]
        public async Task Invoke_MatchingConfig_SetsStatusCodeTo200()
        {
            // Arrange
            var mockRequestDelegate = new Mock<RequestDelegate>();
            var mockEnvironment = new Mock<IHostEnvironment>();
            var mockIConfigurationSection = new Mock<IConfigurationSection>();
            var mockIConfigurationSectionFolderName = new Mock<IConfigurationSection>();
            var mockIConfigurationSectionFileName = new Mock<IConfigurationSection>();
            var mockConfiguration = new Mock<IConfiguration>();
            var mockHttpMessageHandler = new Mock<HttpMessageHandler>();

            mockEnvironment.Setup(e => e.ContentRootPath).Returns(string.Empty);

            mockIConfigurationSection.Setup(x => x.Value).Returns("https://localhost:7056");
            mockIConfigurationSectionFolderName.Setup(x => x.Value).Returns("InputJson");
            mockIConfigurationSectionFileName.Setup(x => x.Value).Returns("GatewayConfig.json");

            mockConfiguration.Setup(c => c.GetSection(It.IsAny<String>())).Returns(mockIConfigurationSection.Object);
            mockConfiguration.Setup(c => c.GetSection("ConfigPath:FolderName")).Returns(mockIConfigurationSectionFolderName.Object);
            mockConfiguration.Setup(c => c.GetSection("ConfigPath:FileName")).Returns(mockIConfigurationSectionFileName.Object);

            var mockHttpResponse = new HttpResponseMessage(HttpStatusCode.OK);
            mockHttpResponse.Headers.Add("CenterId", "1234");

            mockHttpMessageHandler
                .Protected()
                .Setup<Task<HttpResponseMessage>>(
                    "SendAsync",
                    ItExpr.IsAny<HttpRequestMessage>(),
                    ItExpr.IsAny<CancellationToken>()
                )
                .ReturnsAsync(mockHttpResponse);

            var mockHttpClient = new HttpClient(mockHttpMessageHandler.Object);

            var middleware = new GatewayMiddleware(mockRequestDelegate.Object, mockEnvironment.Object, mockConfiguration.Object, mockHttpClient);

            var context = new DefaultHttpContext();
            context.Request.Path = "/vehicledetails";
            context.Request.Method = "POST";
            context.Request.Headers.Add("CenterId", "1234");

            // Act
            await middleware.Invoke(context);

            // Assert
            mockHttpMessageHandler.Protected().Verify(
                "SendAsync",
                Times.Once(),
                ItExpr.IsAny<HttpRequestMessage>(),
                ItExpr.IsAny<CancellationToken>());
            Assert.Equal(200, context.Response.StatusCode);
        }

        [Fact]
        public async Task Invoke_MatchingConfig_SetsStatusCodeTo200WithContentType()
        {
            // Arrange
            var mockRequestDelegate = new Mock<RequestDelegate>();
            var mockEnvironment = new Mock<IHostEnvironment>();
            var mockIConfigurationSection = new Mock<IConfigurationSection>();
            var mockIConfigurationSectionFolderName = new Mock<IConfigurationSection>();
            var mockIConfigurationSectionFileName = new Mock<IConfigurationSection>();
            var mockConfiguration = new Mock<IConfiguration>();
            var mockHttpMessageHandler = new Mock<HttpMessageHandler>();

            mockEnvironment.Setup(e => e.ContentRootPath).Returns(string.Empty);

            mockIConfigurationSection.Setup(x => x.Value).Returns("https://localhost:7056");
            mockIConfigurationSectionFolderName.Setup(x => x.Value).Returns("InputJson");
            mockIConfigurationSectionFileName.Setup(x => x.Value).Returns("GatewayConfig.json");

            mockConfiguration.Setup(c => c.GetSection(It.IsAny<String>())).Returns(mockIConfigurationSection.Object);
            mockConfiguration.Setup(c => c.GetSection("ConfigPath:FolderName")).Returns(mockIConfigurationSectionFolderName.Object);
            mockConfiguration.Setup(c => c.GetSection("ConfigPath:FileName")).Returns(mockIConfigurationSectionFileName.Object);

            var mockHttpResponse = new HttpResponseMessage(HttpStatusCode.OK);
            mockHttpResponse.Headers.Add("CenterId", "1234");

            mockHttpMessageHandler
                .Protected()
                .Setup<Task<HttpResponseMessage>>(
                    "SendAsync",
                    ItExpr.IsAny<HttpRequestMessage>(),
                    ItExpr.IsAny<CancellationToken>()
                )
                .ReturnsAsync(mockHttpResponse);

            var mockHttpClient = new HttpClient(mockHttpMessageHandler.Object);

            var middleware = new GatewayMiddleware(mockRequestDelegate.Object, mockEnvironment.Object, mockConfiguration.Object, mockHttpClient);

            var context = new DefaultHttpContext();
            context.Request.Path = "/vehicledetails";
            context.Request.Method = "GET";
            context.Request.Headers.Add("Accept", "application/json");
            context.Request.Headers.Add("Content-Type", "text/event-stream");

            // Act
            await middleware.Invoke(context);

            // Assert
            mockHttpMessageHandler.Protected().Verify(
                "SendAsync",
                Times.Once(),
                ItExpr.IsAny<HttpRequestMessage>(),
                ItExpr.IsAny<CancellationToken>());
            Assert.Equal(200, context.Response.StatusCode);
        }

        [Fact]
        public async Task Invoke_ExceptionThrown_SetsStatusCodeTo500()
        {
            // Arrange
            var mockRequestDelegate = new Mock<RequestDelegate>();
            var mockEnvironment = new Mock<IHostEnvironment>();
            var mockIConfigurationSection = new Mock<IConfigurationSection>();
            var mockIConfigurationSectionFolderName = new Mock<IConfigurationSection>();
            var mockIConfigurationSectionFileName = new Mock<IConfigurationSection>();
            var mockConfiguration = new Mock<IConfiguration>();

            mockEnvironment.Setup(e => e.ContentRootPath).Returns(string.Empty);

            mockIConfigurationSection.Setup(x => x.Value).Returns("https://localhost:7056");
            mockIConfigurationSectionFolderName.Setup(x => x.Value).Returns("InputJson");
            mockIConfigurationSectionFileName.Setup(x => x.Value).Returns("GatewayConfig.json");

            mockConfiguration.Setup(c => c.GetSection(It.IsAny<String>())).Returns(mockIConfigurationSection.Object);
            mockConfiguration.Setup(c => c.GetSection("ConfigPath:FolderName")).Returns(mockIConfigurationSectionFolderName.Object);
            mockConfiguration.Setup(c => c.GetSection("ConfigPath:FileName")).Returns(mockIConfigurationSectionFileName.Object);

            var middleware = new GatewayMiddleware(mockRequestDelegate.Object, mockEnvironment.Object, mockConfiguration.Object, null);

            var context = new DefaultHttpContext();
            context.Request.Path = "/vehicledetails";

            // Act
            await middleware.Invoke(context);

            // Assert
            Assert.Equal(500, context.Response.StatusCode);
        }
    }
}
