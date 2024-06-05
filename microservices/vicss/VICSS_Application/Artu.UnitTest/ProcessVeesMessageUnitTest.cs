namespace VICSS.Test.Service.Artu.UnitTest
{
    using Moq;
    using System.Net.Sockets;
    using System.Text;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Service.Artu.Helper;
    using VICSS.Service.Artu.Implementation;
    using VICSS.Service.Artu.Interface;
    using VICSS.Service.Artu.Model;
    using VICSS.Service.Models.Artu;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;

    public class ProcessVeesMessageUnitTest
    {
        private readonly Mock<ISendMessageToInspection> _mockSendMessageToInspection;
        private readonly Mock<IArtuTcpClient> _mockArtuTcpClient;
        private readonly ProcessVeesMessage _processVeesMessage;

        public ProcessVeesMessageUnitTest()
        {
            _mockSendMessageToInspection = new Mock<ISendMessageToInspection>();
            _processVeesMessage = new ProcessVeesMessage(_mockSendMessageToInspection.Object);
            _mockArtuTcpClient = new Mock<IArtuTcpClient>();
        }

        [Fact]
        public void UnpackBinaryMessageShouldReturnSuccess()
        {
            // Arrange
            string testData = "Test Data";
            byte[] recBuffer = Encoding.ASCII.GetBytes(testData);
            int bufLength = recBuffer.Length;
            string laneId = "lane1";
            string stationId = "station1";

            // Act
            int result = _processVeesMessage.UnpackBinaryMessage(recBuffer, bufLength, laneId, stationId).Result;

            // Assert
            Assert.Equal(1, result);
        }

        [Fact]
        public void UnpackMsgZeroForSmallBuffer()
        {
            byte[] recBuffer = new byte[5];
            int bufLength = 5;
            string laneId = "lane1";
            string stationId = "station1";

            int result = _processVeesMessage.UnpackBinaryMessage(recBuffer, bufLength, laneId, stationId).Result;

            Assert.Equal(0, result);
        }

        [Fact]
        public void UnpackMsgOneForLargeBuffer()
        {
            byte[] recBuffer = new byte[50];
            int bufLength = 50;
            string laneId = "lane1";
            string stationId = "station1";

            int result = _processVeesMessage.UnpackBinaryMessage(recBuffer, bufLength, laneId, stationId).Result;

            Assert.Equal(1, result);
        }

        [Fact]
        public void UnpackMsgNullBufferException()
        {
            byte[] recBuffer = null;
            int bufLength = 0;
            string laneId = "lane1";
            string stationId = "station1";

            Assert.Throws<AggregateException>(() => _processVeesMessage.UnpackBinaryMessage(recBuffer, bufLength, laneId, stationId).Wait());
        }

        [Fact]
        public void UploadDataWithEmptyInterfaceIdRetNoTestIdInXml()
        {
            string InterfaceID = "";
            string testResultXml = "<Test_Result></Test_Result>";
            string lane = "lane1";
            string station = "station1";

            int result = _processVeesMessage.UploadResultDataToVICS(InterfaceID, testResultXml, lane, station).Result;

            Assert.Equal(0, result);
        }

        [Fact]
        public void UploadDataWithInterfaceIdRetTestIdInXml()
        {
            string InterfaceID = "123";
            string testResultXml = "<Test_Result><Test_ID>123</Test_ID></Test_Result>";
            string lane = "lane1";
            string station = "station1";

            int result = _processVeesMessage.UploadResultDataToVICS(InterfaceID, testResultXml, lane, station).Result;

            Assert.Equal(1, result);
        }

        [Fact]
        public void UploadResultDataExpectedResult()
        {

            string InterfaceID = "interface1";
            string testResultXml = "<TestResult>...</TestResult>";
            string lane = "lane1";
            string station = "station1";

            int result = _processVeesMessage.UploadResultDataToVICS(InterfaceID, testResultXml, lane, station).Result;

            Assert.Equal(1, result);
        }

        [Fact]
        public async Task ConvertToXmlFromBinary_ShouldReturnCorrectMessageBody()
        {
            // Arrange
            byte[] recBuffer = new byte[100];
            recBuffer[0] = 0;
            recBuffer[1] = 0;
            recBuffer[2] = 1;
            string laneId = "lane1";
            string stationId = "station1";

            // Act
            var result = await _processVeesMessage.ConvertToXmlFromBinary(recBuffer, laneId, stationId);

            // Assert
            Assert.NotNull(result);
        }

        [Fact]
        public async Task ConvertToXmlFromBinary_ShouldReturnCorrectMessageBody_WhenRecCommandIsTwo()
        {
            // Arrange
            byte[] recBuffer = new byte[] { 0, 0, 2, 0, 0, 0, 0, 0, 0, 0 };
            string laneId = "lane1";
            string stationId = "station1";

            // Act
            var result = await _processVeesMessage.ConvertToXmlFromBinary(recBuffer, laneId, stationId);

            // Assert
            Assert.NotNull(result);
        }

        [Fact]
        public async Task ConvertToXmlFromBinaryShouldReturnNullWhenBufferIsEmpty()
        {
            // Arrange
            byte[] recBuffer = new byte[] { };
            string laneId = "lane1";
            string stationId = "station1";

            // Act & Assert
            await Assert.ThrowsAsync<IndexOutOfRangeException>(() => _processVeesMessage.ConvertToXmlFromBinary(recBuffer, laneId, stationId));
        }

        [Fact]
        public void ConvertToXmlFromBinaryShouldReturnNotNullWhenBufferIsNotEmpty()
        {
            // Arrange
            byte[] recBuffer = new byte[100];
            recBuffer[0] = 0;
            recBuffer[1] = 0;
            recBuffer[2] = 1;
            string laneId = "lane1";
            string stationId = "station1";

            // Act
            var result = _processVeesMessage.ConvertToXmlFromBinary(recBuffer, laneId, stationId).Result;

            // Assert
            Assert.NotNull(result);
        }

        [Fact]
        public async Task ConvertToXmlFromBinaryShouldThrowExceptionWhenBufferIsNull()
        {
            // Arrange
            byte[] recBuffer = null;
            string laneId = "lane1";
            string stationId = "station1";

            // Act & Assert
            await Assert.ThrowsAsync<ArgumentNullException>(() => _processVeesMessage.ConvertToXmlFromBinary(recBuffer, laneId, stationId));
        }

        [Fact]
        public void UploadResultDataToVICSShouldReturnZeroWhenTestResultXmlIsNull()
        {
            // Arrange
            string InterfaceID = "123";
            string testResultXml = null;
            string lane = "lane1";
            string station = "station1";

            int result = _processVeesMessage.UploadResultDataToVICS(InterfaceID, testResultXml, lane, station).Result;

            Assert.Equal(1, result);
        }

        [Fact]
        public void AcknowledgeVeesNoClientForIdDoesNotSendPacket()
        {
            // Act
            _processVeesMessage.AcknowledgeVees(1, "lane1", "station1");

            // Assert
            _mockArtuTcpClient.Verify(c => c.Send(It.IsAny<byte[]>(), It.IsAny<int>(), It.IsAny<SocketFlags>()), Times.Never);
        }



        [Fact]
        public async Task ConvertToXmlFromBinary_ShouldThrowArgumentNullException_WhenRecBufferIsNull()
        {
            // Arrange
            byte[] recBuffer = null;
            string laneId = "lane1";
            string stationId = "station1";

            // Act & Assert
            await Assert.ThrowsAsync<ArgumentNullException>(() => _processVeesMessage.ConvertToXmlFromBinary(recBuffer, laneId, stationId));
        }

        [Theory]
        [InlineData(null, "station1")]
        [InlineData("lane1", null)]
        [InlineData("", "station1")]
        [InlineData("lane1", "")]
        public async Task ConvertToXmlFromBinary_ShouldThrowArgumentException_WhenLaneIdOrStationIdIsNullOrEmpty(string laneId, string stationId)
        {
            // Arrange
            byte[] recBuffer = new byte[] { 0, 0, 1 };

            // Act & Assert
            await Assert.ThrowsAsync<ArgumentException>(() => _processVeesMessage.ConvertToXmlFromBinary(recBuffer, laneId, stationId));
        }

        [Fact]
        public async Task ConvertToXmlFromBinary_ShouldReturnNull_WhenRecCommandIsInvalid()
        {
            // Arrange
            byte[] recBuffer = new byte[] { 0, 0, 5 }; // Invalid recCommand
            string laneId = "lane1";
            string stationId = "station1";

            // Act
            var result = await _processVeesMessage.ConvertToXmlFromBinary(recBuffer, laneId, stationId);

            // Assert
            Assert.Null(result);
        }

        [Theory]
        [InlineData(CommonTestDetailConstants.HeadlampTestResult, CommonTestDetailConstants.HeadlampTestId)]
        [InlineData(CommonTestDetailConstants.BrakeTestResult, CommonTestDetailConstants.BrakeTestId)]
        [InlineData(CommonTestDetailConstants.SpeedTestResult, CommonTestDetailConstants.SpeedTestId)]
        [InlineData(CommonTestDetailConstants.SldTestResult, CommonTestDetailConstants.SldTestId)]
        [InlineData(CommonTestDetailConstants.AxleweighTestResult, CommonTestDetailConstants.AxleweighTestId)]
        [InlineData(CommonTestDetailConstants.SddTestResult, CommonTestDetailConstants.SddTestId)]
        [InlineData(CommonTestDetailConstants.FatTestResult, CommonTestDetailConstants.FatTestId)]
        [InlineData(CommonTestDetailConstants.IdleTestResultLpg, CommonTestDetailConstants.IdleTestIdLpg)]
        [InlineData(CommonTestDetailConstants.IdleTestResultPetrol, CommonTestDetailConstants.IdleTestIdPetrol)]
        [InlineData(CommonTestDetailConstants.TaximeterTestResult, CommonTestDetailConstants.TaximeterTestId)]
        [InlineData(CommonTestDetailConstants.LugdownTestResult, CommonTestDetailConstants.LugdownTestId)]
        [InlineData(CommonTestDetailConstants.OhmResult, CommonTestDetailConstants.OhmTestId)]
        [InlineData(CommonTestDetailConstants.OhmTempResult, CommonTestDetailConstants.OhmTempTestId)]
        public async Task UploadResultDataToVICS_ReturnsOne_WhenTestResultXmlContainsTestResult(string testResult, string expectedTestId)
        {
            // Arrange
            string interfaceId = "";
            string testResultXml = testResult;
            string lane = "testLane";
            string station = "testStation";

            // Act
            var result = await _processVeesMessage.UploadResultDataToVICS(interfaceId, testResultXml, lane, station);

            // Assert
            Assert.Equal(1, result);
            _mockSendMessageToInspection.Verify(m => m.SendTestResults(testResultXml, expectedTestId, lane, station), Times.Once);
        }

        [Fact]
        public async Task UploadResultDataToVICS_ReturnsZero_WhenTestResultXmlDoesNotContainAnyTestResult()
        {
            // Arrange
            string interfaceId = "";
            string testResultXml = "No test result";
            string lane = "testLane";
            string station = "testStation";

            // Act
            var result = await _processVeesMessage.UploadResultDataToVICS(interfaceId, testResultXml, lane, station);

            // Assert
            Assert.Equal(0, result);
        }

        [Fact]
        public void AcknowledgeVees_DoesNotSendAcknowledge_WhenLaneAndStationDoNotHaveConnectedId()
        {
            // Arrange
            int uploadStatus = 1;
            string laneId = "testLaneId";
            string stationId = "testStationId";

            // Act
            _processVeesMessage.AcknowledgeVees(uploadStatus, laneId, stationId);
        }

        [Fact]
        public async Task ConvertToXmlFromBinary_ShouldReturnNull_WhenRecCommandIsNotRecognized()
        {
            // Arrange
            byte[] recBuffer = new byte[] { 0, 0, 0 };
            string laneId = "lane1";
            string stationId = "station1";

            // Act
            var result = await _processVeesMessage.ConvertToXmlFromBinary(recBuffer, laneId, stationId);

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public async Task ConvertToXmlFromBinary_ShouldReturnNotNull_WhenRecCommandIsOne()
        {
            // Arrange
            byte[] recBuffer = new byte[100];
            recBuffer[0] = 2;
            recBuffer[1] = 1;
            recBuffer[2] = 1;
            string laneId = "lane1";
            string stationId = "station1";

            // Act
            var result = await _processVeesMessage.ConvertToXmlFromBinary(recBuffer, laneId, stationId);

            // Assert
            Assert.NotNull(result);
        }
    }
}
