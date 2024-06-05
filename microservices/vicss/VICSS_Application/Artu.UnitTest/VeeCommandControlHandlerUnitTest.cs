using Moq;
using System.Net;
using System.Net.Sockets;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Entities.Artu;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using VICSS.Service.Artu.Domain;
using VICSS.Service.Artu.EventHandlers;
using VICSS.Service.Artu.Helper;
using VICSS.Service.Artu.Interface;
using VICSS.Services.Artu.Helper;
using VICSS.Shared.Models.Common;

namespace VICSS.Test.Service.Artu.UnitTest
{
    public class VeeCommandControlHandlerUnitTest
    {
        #region Private Variable
        private readonly Mock<IGenericRepository<ArtuDbContext, ArtuConfig>> _mockRepository;
        private readonly Mock<UtilityHelper> _mockUtilityHelper;
        private readonly VeeCommandControlRequestDto _mockrequest;
        private readonly VeeCommandControlHandler _mockhandler;
        private readonly ArtuTcpClient _mockClient;
        private readonly Mock<ISendMessageToInspection> _mockSendMessageToInspection;

        #endregion

        public VeeCommandControlHandlerUnitTest()
        {
            _mockRepository = new Mock<IGenericRepository<ArtuDbContext, ArtuConfig>>();
            _mockUtilityHelper = new Mock<UtilityHelper>();
            _mockrequest = new VeeCommandControlRequestDto();
            _mockhandler = new VeeCommandControlHandler(_mockRepository.Object, _mockUtilityHelper.Object);
            _mockSendMessageToInspection = new Mock<ISendMessageToInspection>();
            GlobalDictionary._connectedClients.TryAdd("ValidId", (_mockClient, "On"));
        }

        [Fact]
        public void Handle_InvalidArtuEndpointId_ReturnsError()
        {
            // Arrange
            var request = new VeeCommandControlRequestDto
            {
                ArtuEndpointId = "InvalidId",
                caseNumber = 1 // Valid case number
            };

            // Act
            var result = _mockhandler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.False(result.IsSuccess);
        }

        [Fact]
        public void Handle_InvalidCaseNumber_ReturnsError()
        {
            // Arrange
            var request = new VeeCommandControlRequestDto
            {
                ArtuEndpointId = "ValidId",
                caseNumber = 5 // Invalid case number
            };

            // Act
            var result = _mockhandler.Handle(request, CancellationToken.None).Result;

            // Assert
            Assert.False(result.IsSuccess);
        }

        [Theory]
        [InlineData(0, CommonConstants.StopDetection)]
        [InlineData(1, CommonConstants.StartChecking)]
        [InlineData(2, CommonConstants.SkipCurrentDevice)]
        [InlineData(3, CommonConstants.ClearCurrentResults)]
        [InlineData(4, CommonConstants.DetectionCompleted)]
        [InlineData(9, CommonConstants.SiteClosed)]
        [InlineData(10, CommonConstants.IdleAndOpen)]
        public void GetMessage_ValidCommand_ReturnsExpectedMessage(int actionCommand, string expectedMessage)
        {
            // Act
            var result = _mockhandler.GetMessage(actionCommand);

            // Assert
            Assert.Equal(expectedMessage, result);
        }

        [Fact]
        public void GetMessage_InvalidCommand_ThrowsArgumentException()
        {
            // Arrange
            var invalidCommand = 11;

            // Act & Assert
            var ex = Assert.Throws<ArgumentException>(() => _mockhandler.GetMessage(invalidCommand));
            Assert.Equal($"{CommonConstants.InvalidVeesAction} (Parameter 'actionCommand')", ex.Message);
            Assert.Equal("actionCommand", ex.ParamName);
        }

        [Fact]
        public async Task Handle_RequestIsNull_ThrowsArgumentNullException()
        {
            // Arrange
            VeeCommandControlRequestDto request = null!;

            // Act & Assert
            var ex = await Assert.ThrowsAsync<ArgumentNullException>(() => _mockhandler.Handle(request, CancellationToken.None));
            Assert.Equal("request", ex.ParamName);
        }

        [Fact]
        public void Handle_InvalidArtuEndpointId_LogsError()
        {
            // Arrange
            var request = new VeeCommandControlRequestDto { ArtuEndpointId = "invalidId" };

            // Act
            _mockhandler.Handle(request, CancellationToken.None);
        }
    }
}
