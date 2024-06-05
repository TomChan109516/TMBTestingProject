using System.Text;
using VICSS.Service.Artu.Model;
using VICSS.Services.Artu.Helper;

namespace VICSS.Test.Service.Artu.UnitTest
{
    public class UtilityHelperUnitTest
    {
        private readonly UtilityHelper _utilityHelper;

        public UtilityHelperUnitTest()
        {
            _utilityHelper = new UtilityHelper();
        }

        [Fact]
        public void CreatePacketFromXml_ShouldReturnPacketModel()
        {
            // Arrange
            int cmd = 1;
            byte[] xml = Encoding.ASCII.GetBytes("<test>data</test>");

            // Act
            var result = _utilityHelper.CreatePacketFromXml(cmd, xml);

            // Assert
            Assert.NotNull(result);
            Assert.IsType<PacketModel>(result);
        }

        [Fact]
        public void CRC16_ShouldReturnChecksum()
        {
            // Arrange
            byte[] data = Encoding.ASCII.GetBytes("test data");

            // Act
            var result = _utilityHelper.CRC16(data);

            // Assert
            Assert.IsType<ushort>(result);
        }

        [Fact]
        public void VerifyCheckSum_ShouldReturnOne_WhenChecksumIsValid()
        {
            // Arrange
            byte[] buffer = new byte[] { 0x02, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00 };
            ushort crc = _utilityHelper.CRC16(buffer.Skip(2).ToArray());
            buffer = buffer.Concat(new byte[] { (byte)(crc & 0xFF), (byte)((crc >> 8) & 0xFF), 0x10, 0x11 }).ToArray();
            int bufferLength = buffer.Length;

            // Act
            var result = _utilityHelper.VerifyCheckSum(buffer, bufferLength);

            // Assert
            Assert.Equal(1, result);
        }

        [Fact]
        public void VerifyCheckSum_ShouldReturnZero_WhenChecksumIsInvalid()
        {
            // Arrange
            byte[] buffer = new byte[] { 0x02, 0x01, 0x01, 0x00, 0x00, 0xFF, 0xFF, 0x10, 0x11 };
            int bufferLength = buffer.Length;

            // Act
            var result = _utilityHelper.VerifyCheckSum(buffer, bufferLength);

            // Assert
            Assert.Equal(0, result);
        }

        [Fact]
        public void CreatePacketFromXml_ShouldHandleDifferentCommands()
        {
            byte[] xml = Encoding.ASCII.GetBytes("<test>data</test>");

            // Test with cmd = 2
            var result = _utilityHelper.CreatePacketFromXml(2, xml);
            Assert.NotNull(result);
            Assert.IsType<PacketModel>(result);

            // Test with cmd = 3
            result = _utilityHelper.CreatePacketFromXml(3, xml);
            Assert.NotNull(result);
            Assert.IsType<PacketModel>(result);

            // Test with cmd = 4
            result = _utilityHelper.CreatePacketFromXml(4, xml);
            Assert.NotNull(result);
            Assert.IsType<PacketModel>(result);
        }

        [Fact]
        public void CreatePacketFromXml_ShouldHandleDifferentXmlData()
        {
            int cmd = 1;

            // Test with different XML data
            byte[] xml = Encoding.ASCII.GetBytes("<test>different data</test>");
            var result = _utilityHelper.CreatePacketFromXml(cmd, xml);
            Assert.NotNull(result);
            Assert.IsType<PacketModel>(result);
        }

        [Fact]
        public void CRC16_ShouldHandleDifferentDataValues()
        {
            // Test with different data
            byte[] data = Encoding.ASCII.GetBytes("different data");
            var result = _utilityHelper.CRC16(data);
            Assert.IsType<ushort>(result);
        }

        [Fact]
        public void VerifyCheckSum_ShouldHandleDifferentBufferLengths()
        {
            // Test with different buffer length
            byte[] buffer = new byte[] { 0x02, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x10, 0x11, 0x12 };
            int bufferLength = buffer.Length;
            var result = _utilityHelper.VerifyCheckSum(buffer, bufferLength);
            Assert.Equal(0, result);
        }
    }
}