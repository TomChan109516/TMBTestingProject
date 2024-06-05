namespace VICSS.Test.Services.Inspection.UnitTest
{
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;
    using Moq;
    using System.Threading;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.EventHandlers;
    using Xunit;
    using static VICSS.Service.Inspection.Helper.CommonMethods;

    public class TabletLoginHandlerUnitTest
    {

        /*FOR NOW SKIPPING UT

        [Fact]
        public async Task HandleValidCredentialsReturnsSuccessResponse()
        {
            // Arrange
            Mock<IConfiguration> _configurationMock = new Mock<IConfiguration>();
            Mock<ILogger<TabletLoginHandler>> _loggerMock = new Mock<ILogger<TabletLoginHandler>>();
            TabletLoginHandler _handler = new TabletLoginHandler(_loggerMock.Object);
            var inMemorySettings = new Dictionary<string, string> {
            {"Users:test", "password"},
            {"IpDetails:127.0.0.1:LaneId", "LaneId"},
            {"IpDetails:127.0.0.1:StationId", "StationId"},
            {"IpDetails:127.0.0.1:UserName", "UserName"},
            {"IpDetails:127.0.0.1:DeviceType", "Tablet"},
        };

            IConfiguration configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(inMemorySettings)
                .Build();

            UserValidator.Initialize(configuration);
            TabletIpAddressMapper.Initialize(configuration);
            var request = new TabletLoginRequestDto { UserID = "test", Password = "password", IpAddress = "127.0.0.1" };
            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.True(response.IsSuccess);
            Assert.Equal(HttpStatusCode.OK, response.HttpStatusCode);
        }

        [Fact]
        public async Task HandleInvalidCredentialsReturnsErrorResponse()
        {
            // Arrange
            Mock<IConfiguration> _configurationMock = new Mock<IConfiguration>();
            Mock<ILogger<TabletLoginHandler>> _loggerMock = new Mock<ILogger<TabletLoginHandler>>();
            TabletLoginHandler _handler = new TabletLoginHandler(_loggerMock.Object);
            var inMemorySettings = new Dictionary<string, string> {
            {"Users:test", "password"},
            {"IpDetails:127.0.0.1:LaneId", "LaneId"},
            {"IpDetails:127.0.0.1:StationId", "StationId"},
            {"IpDetails:127.0.0.1:UserName", "UserName"},
            {"IpDetails:127.0.0.1:DeviceType", "Tablet"},
        };

            IConfiguration configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(inMemorySettings)
                .Build();

            UserValidator.Initialize(configuration);
            TabletIpAddressMapper.Initialize(configuration);
            var request = new TabletLoginRequestDto
            {
                UserID = "invalidUser",
                Password = "invalidPassword",
                IpAddress = "60.243.75.43"
            };
           

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(response.IsSuccess);
            Assert.Equal(HttpStatusCode.NotFound, response.HttpStatusCode);
        }

        [Fact]
        public async Task HandleInvalidIpAddressReturnsErrorResponse()
        {
            // Arrange
            Mock<IConfiguration> _configurationMock = new Mock<IConfiguration>();
            Mock<ILogger<TabletLoginHandler>> _loggerMock = new Mock<ILogger<TabletLoginHandler>>();
            TabletLoginHandler _handler = new TabletLoginHandler(_loggerMock.Object);
            var inMemorySettings = new Dictionary<string, string> {
            {"Users:test", "password"},
            {"IpDetails:127.0.0.1:LaneId", "LaneId"},
            {"IpDetails:127.0.0.1:StationId", "StationId"},
            {"IpDetails:127.0.0.1:UserName", "UserName"},
            {"IpDetails:127.0.0.1:DeviceType", "Tablet"},
        };

            IConfiguration configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(inMemorySettings)
                .Build();

            UserValidator.Initialize(configuration);
            TabletIpAddressMapper.Initialize(configuration);
            var request = new TabletLoginRequestDto
            {
                UserID = "test",
                Password = "password",
                IpAddress = "invalidIpAddress"
            };
           
            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(response.IsSuccess);
            Assert.Equal(HttpStatusCode.NotFound, response.HttpStatusCode);
        }
    }

        */
    }
}
