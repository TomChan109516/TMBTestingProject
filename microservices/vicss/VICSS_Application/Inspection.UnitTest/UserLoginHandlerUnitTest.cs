    namespace VICSS.Test.Service.Inspection.UnitTest
    {
        using Xunit;
        using Moq;
        using Microsoft.Extensions.Configuration;
        using VICSS.Service.Inspection.EventHandlers;
        using VICSS.Service.Inspection.Domain;
        using System.Threading;
        using System.Threading.Tasks;
        using static VICSS.Service.Inspection.Helper.CommonMethods;
        using System.Net;

        public class UserLoginHandlerTests
        {
            private readonly UserLoginHandler _handler;
            private readonly Mock<IConfiguration> _configurationMock;

            public UserLoginHandlerTests()
            {
                _configurationMock = new Mock<IConfiguration>();
                _handler = new UserLoginHandler();
            }

            [Fact]
            public async Task HandleValidUserReturnsSuccessResponse()
            {
                // Arrange
                var request = new UserLoginRequestDto { UserID = "test", Password = "password", IpAddress = "127.0.0.1" };

                var inMemorySettings = new Dictionary<string, string> {
            {"Users:test", "password"},
            {"IpDetails:127.0.0.1:LaneId", "LaneId"},
            {"IpDetails:127.0.0.1:StationId", "StationId"},
            {"IpDetails:127.0.0.1:UserName", "UserName"},
        };

                IConfiguration configuration = new ConfigurationBuilder()
                    .AddInMemoryCollection(inMemorySettings)
                    .Build();

                UserValidator.Initialize(configuration);
                IpAddressMapper.Initialize(configuration);

                // Act
                var response = await _handler.Handle(request, CancellationToken.None);

                // Assert
                Assert.True(response.IsSuccess);
                Assert.Equal(HttpStatusCode.OK, response.HttpStatusCode);
            }
        [Fact]
        public async Task HandleInvalidUserReturnsFailureResponse()
        {
            // Arrange
            var request = new UserLoginRequestDto { UserID = "invalid", Password = "password", IpAddress = "127.0.0.1" };

            var inMemorySettings = new Dictionary<string, string> {
        {"Users:test", "password"},
        {"IpDetails:127.0.0.1:LaneId", "LaneId"},
        {"IpDetails:127.0.0.1:StationId", "StationId"},
        {"IpDetails:127.0.0.1:UserName", "UserName"},
    };

            IConfiguration configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(inMemorySettings)
                .Build();

            UserValidator.Initialize(configuration);
            IpAddressMapper.Initialize(configuration);

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(response.IsSuccess);
            Assert.Equal(HttpStatusCode.NotFound, response.HttpStatusCode);
        }

        [Fact]
        public async Task HandleInvalidPasswordReturnsFailureResponse()
        {
            // Arrange
            var request = new UserLoginRequestDto { UserID = "test", Password = "invalid", IpAddress = "127.0.0.1" };

            var inMemorySettings = new Dictionary<string, string> {
        {"Users:test", "password"},
        {"IpDetails:127.0.0.1:LaneId", "LaneId"},
        {"IpDetails:127.0.0.1:StationId", "StationId"},
        {"IpDetails:127.0.0.1:UserName", "UserName"},
    };

            IConfiguration configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(inMemorySettings)
                .Build();

            UserValidator.Initialize(configuration);
            IpAddressMapper.Initialize(configuration);

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(response.IsSuccess);
            Assert.Equal(HttpStatusCode.NotFound, response.HttpStatusCode);
        }

        [Fact]
        public async Task HandleInvalidIpAddressReturnsFailureResponse()
        {
            // Arrange
            var request = new UserLoginRequestDto { UserID = "test", Password = "password", IpAddress = "invalid" };

            var inMemorySettings = new Dictionary<string, string> {
        {"Users:test", "password"},
        {"IpDetails:127.0.0.1:LaneId", "LaneId"},
        {"IpDetails:127.0.0.1:StationId", "StationId"},
        {"IpDetails:127.0.0.1:UserName", "UserName"},
    };

            IConfiguration configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(inMemorySettings)
                .Build();

            UserValidator.Initialize(configuration);
            IpAddressMapper.Initialize(configuration);

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.False(response.IsSuccess);
            Assert.Equal(HttpStatusCode.NotFound, response.HttpStatusCode);
        }



    }
    }