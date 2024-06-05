using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VICSS.Infrastructure.DataAccess.Context;
using VICSS.Infrastructure.DataAccess.Entities.Artu;
using VICSS.Infrastructure.DataAccess.Repositories.Interface;
using VICSS.Infrastructure.KafkaWrapper.Interface;
using VICSS.Service.Artu.Implementation;
using VICSS.Service.Artu.Model;
using VICSS.Shared.Models.Common;
using VICSS.Shared.Models.Kafka;
using VICSS.Service.Artu.Interface;
using Confluent.Kafka;

namespace VICSS.Test.Service.Artu.UnitTest
{
    public class SendMessageToInspectionUnitTest
    {
        private readonly Mock<IKafkaConsumer> _mockConsumer;
        private readonly Mock<IKafkaProducer> _mockProducer;
        private readonly Mock<IConfiguration> _mockConfig;
        private readonly Mock<IServiceScopeFactory> _mockScopeFactory;
        private readonly Mock<IMediator> _mockMediator;
        private readonly Mock<IGenericRepository<ArtuDbContext, ArtuConfig>> _mockRepository;
        private readonly Mock<ISendMessageToInspection> _sendMessageToInspection;

        public SendMessageToInspectionUnitTest()
        {
            _mockConsumer = new Mock<IKafkaConsumer>();
            _mockProducer = new Mock<IKafkaProducer>();
            _mockConfig = new Mock<IConfiguration>();
            _mockScopeFactory = new Mock<IServiceScopeFactory>();
            _mockMediator = new Mock<IMediator>();
            _mockRepository = new Mock<IGenericRepository<ArtuDbContext, ArtuConfig>>();
            _sendMessageToInspection = new Mock<ISendMessageToInspection>();
        }

        [Fact]
        public void ReadMessageValidInputReturnsPacket()
        {
            // Arrange
            var _processKafkaMessage = new ProcessKafkaMessage(_mockRepository.Object);
            KafKaTestRequestDto message = new KafKaTestRequestDto
            {
                typeofMessage = CommonConstants.MessageTypeCode[0],
                xmlBody = JsonConvert.SerializeObject(new JObject())
            };

            // Act
            var result = _processKafkaMessage.ReadMessage(message);

            // Assert
            Assert.NotNull(result);
            Assert.IsType<PacketModel>(result);
        }

        [Fact]
        public void ReadMessageInvalidInputReturnsErrorPacket()
        {
            // Arrange
            var _processKafkaMessage = new ProcessKafkaMessage(_mockRepository.Object);
            KafKaTestRequestDto message = new KafKaTestRequestDto
            {
                typeofMessage = "InvalidType",
                xmlBody = JsonConvert.SerializeObject(new JObject())
            };

            // Act
            var result = _processKafkaMessage.ReadMessage(message);

            // Assert
            Assert.NotNull(result);
            Assert.IsType<PacketModel>(result);
            var packet = result as PacketModel;
            Assert.Equal(Encoding.ASCII.GetBytes(CommonErrorMessage.ErrorMessage), packet.CommandString);
        }

        [Fact]
        public void ReadMessageNullInputReturnsErrorPacket()
        {
            // Arrange
            var _processKafkaMessage = new ProcessKafkaMessage(_mockRepository.Object);

            // Act
            var result = _processKafkaMessage.ReadMessage(null);

            // Assert
            Assert.NotNull(result);
            Assert.IsType<PacketModel>(result);
            var packet = result as PacketModel;
            Assert.Equal(Encoding.ASCII.GetBytes(CommonErrorMessage.ErrorMessage), packet.CommandString);
        }
    }
}
