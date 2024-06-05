using Moq;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Net.Sockets;
using System.Runtime.InteropServices;
using System.Text;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Entities.Artu;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using VICSS.Service.Artu.Helper;
using VICSS.Service.Artu.Implementation;
using VICSS.Service.Artu.Model;
using VICSS.Shared.Models.Common;
using VICSS.Shared.Models.Kafka;

namespace VICSS.Test.Service.Artu.UnitTest
{
    public class ProcessKafkaMessageUnitTest
    {
        private readonly Mock<IGenericRepository<ArtuDbContext, ArtuConfig>> _mockGenericRepository;
        private readonly ProcessKafkaMessage _mockProcessKafkaMessage;

        public ProcessKafkaMessageUnitTest()
        {
            _mockGenericRepository = new Mock<IGenericRepository<ArtuDbContext, ArtuConfig>>();
            _mockProcessKafkaMessage = new ProcessKafkaMessage(_mockGenericRepository.Object);
        }

        [Fact]
        public void GetTableByLaneAndStation_ReturnsArtuConfigId_WhenTableExists()
        {
            // Arrange
            var expectedArtuConfigId = "testId";
            var laneId = "lane1";
            var stationId = "station1";
            var tables = new List<ArtuConfig> { new ArtuConfig { LaneId = laneId, StationId = stationId, ArtuConfigId = expectedArtuConfigId } };
            _mockGenericRepository.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<ArtuConfig, bool>>>())).ReturnsAsync(tables);

            // Act
            var result = _mockProcessKafkaMessage.GetTableByLaneAndStation(laneId, stationId).Result;

            // Assert
            Assert.Equal(expectedArtuConfigId, result);
        }

        [Fact]
        public void GetTableByLaneAndStation_ThrowsException_WhenTableDoesNotExist()
        {
            // Arrange
            var laneId = "lane1";
            var stationId = "station1";
            var tables = new List<ArtuConfig>();
            _mockGenericRepository.Setup(r => r.GetByQuery(It.IsAny<Expression<Func<ArtuConfig, bool>>>())).ReturnsAsync(tables);

            // Act & Assert
            Assert.Throws<AggregateException>(() => _mockProcessKafkaMessage.GetTableByLaneAndStation(laneId, stationId).Result);
        }

    [Fact]
  public void ReadMessage_LogsError_WhenExceptionIsThrown()
        {
            // Arrange
            var recievedMessage = new KafKaTestRequestDto
            {
                typeofMessage = CommonConstants.MessageTypeCode[0],
                xmlBody = "invalid xml" // This will cause an exception when trying to parse it
            };
            // Act
            var result = _mockProcessKafkaMessage.ReadMessage(recievedMessage);
            // Assert
            Assert.IsType<string>(result);
            Assert.Contains("Unexpected character encountered while parsing value: i. Path '', line 0, position 0.", (string?)result);
        }

        [Fact]
  public void ReadMessage_WhenMessageTypeCodeIsNotZero_ShouldReturnErrorPacket()
        {
            // Arrange
            var recievedMessage = new KafKaTestRequestDto
            {
                typeofMessage = "not zero",
                xmlBody = "<xml>test</xml>"
            };
            // Act
            var result = _mockProcessKafkaMessage.ReadMessage(recievedMessage);
            // Assert
            Assert.IsType<PacketModel>(result);
            var packet = result as PacketModel;
            Assert.Equal(CommonErrorMessage.ErrorMessage, Encoding.ASCII.GetString(packet.CommandString));
        }

        [Fact]
        public void ReadMessage_WhenExceptionOccurs_ShouldReturnErrorMessage()
        {
            // Arrange
            var recievedMessage = new KafKaTestRequestDto
            {
                typeofMessage = CommonConstants.MessageTypeCode[0],
                xmlBody = "invalid xml" // This will cause an exception when trying to parse it
            };
            // Act
            var result = _mockProcessKafkaMessage.ReadMessage(recievedMessage);
            // Assert
            Assert.IsType<string>(result);
            Assert.Equal("Unexpected character encountered while parsing value: i. Path '', line 0, position 0.", result);
        }

        [Fact]
        public void ReadMessage_WhenExceptionIsThrown_ShouldReturnErrorMessage()
        {
            // Arrange
            var recievedMessage = new KafKaTestRequestDto
            {
                typeofMessage = CommonConstants.MessageTypeCode[0],
                xmlBody = "invalid xml" // This will cause an exception when trying to parse it
            };
            // Act
            var result = _mockProcessKafkaMessage.ReadMessage(recievedMessage);
            // Assert
            Assert.IsType<string>(result);
            Assert.Contains("Unexpected character encountered while parsing value", (string?)result);
        }
    }
}
