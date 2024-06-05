namespace VICSS.Test.Service.Inspection.UnitTest
{
    using Xunit;
    using Microsoft.Extensions.Configuration;
    using VICSS.Service.Inspection.EventHandlers;
    using VICSS.Service.Inspection.Domain;
    using System.Threading;
    using System.Threading.Tasks;
    using static VICSS.Service.Inspection.Helper.CommonMethods;
    using System.Net;
    using VICSS.Shared.Models.Common;

    public class GetDetailsByIpHandlerTests
    {
        private readonly GetDetailsByIpHandler _handler;
        private readonly IConfiguration _configuration;

        public GetDetailsByIpHandlerTests()
        {
            var inMemorySettings = new Dictionary<string, string> {
                {"IpDetails:127.0.0.1:LaneId", "LaneId"},
                {"IpDetails:127.0.0.1:StationId", "StationId"},
            };

            _configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(inMemorySettings)
                .Build();

            _handler = new GetDetailsByIpHandler(new IpDetailsProvider(_configuration));
        }

        [Fact]
        public async Task HandleValidIpReturnsSuccessResponse()
        {
            // Arrange
            var request = new IpRequestDto { IpAddress = "127.0.0.1" };

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, response.HttpStatusCode);
            Assert.Equal("LaneId", response.LaneId);
            Assert.Equal("StationId", response.StationId);
        }

        [Fact]
        public async Task HandleInvalidIpReturnsNotFoundResponse()
        {
            // Arrange
            var request = new IpRequestDto { IpAddress = "invalid" };

            // Act
            var response = await _handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, response.HttpStatusCode);
            Assert.Equal(CommonErrorMessage.LoginErrorMessage, response.ErrorMessage);
        }

    }
}