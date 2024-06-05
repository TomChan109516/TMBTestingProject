namespace VICSS.Services.Artu.Helper
{
    using System.Text;
    using VICSS.Service.Artu.Model;

    public class UtilityHelper
    {
        /// <summary>
        /// Creates a packet from XML data.
        /// </summary>
        /// <param name="cmd">The command to be included in the packet.</param>
        /// <param name="Xml">The XML data to be included in the packet.</param>
        /// <returns>A PacketModel containing the created packet.</returns>
        public PacketModel CreatePacketFromXml(int cmd, byte[] Xml)
        {
            PacketModel packetModel = new PacketModel();
            ushort crc;
            int packetLength = 0;
            int XmlLength = Xml.Length;
            _ = Encoding.ASCII.GetBytes(Xml.ToString());

            int totalSize = XmlLength + 20;
            byte[] CmdString = new byte[totalSize];

            if (cmd == 1)
            {
                CmdString[packetLength++] = 0x02;
                CmdString[packetLength++] = 0x01;
                CmdString[packetLength++] = (byte)cmd;
                CmdString[packetLength++] = 0x00;
                CmdString[packetLength++] = 0x00;
                crc = CRC16(CmdString.Skip(2).Take(packetLength - 2).ToArray());
                CmdString[packetLength++] = (byte)(crc & 0xFF);
                CmdString[packetLength++] = (byte)((crc >> 8) & 0xFF);
                CmdString[packetLength++] = 0x10;
                CmdString[packetLength++] = 0x11;
            }
            else if (cmd == 2 || cmd == 3 || cmd == 4)
            {
                CmdString[packetLength++] = 0x02;
                CmdString[packetLength++] = 0x01;
                CmdString[packetLength++] = (byte)cmd;
                CmdString[packetLength++] = (byte)(XmlLength & 0xFF);
                CmdString[packetLength++] = (byte)((XmlLength >> 8) & 0xFF);
                Array.Copy(Xml, 0, CmdString, packetLength, XmlLength);
                packetLength += XmlLength;
                crc = CRC16(CmdString.Skip(2).Take(packetLength - 2).ToArray());
                CmdString[packetLength++] = (byte)(crc & 0xFF);
                CmdString[packetLength++] = (byte)((crc >> 8) & 0xFF);
                CmdString[packetLength++] = 0x10;
                CmdString[packetLength++] = 0x11;
            }

            packetModel.PacketLength = packetLength;
            packetModel.CommandString = CmdString;

            return packetModel;
        }

        /// <summary>
        /// Calculates the CRC16 checksum of the given data.
        /// </summary>
        /// <param name="dataValue">The data to calculate the checksum for.</param>
        /// <returns>The calculated CRC16 checksum.</returns>
        public ushort CRC16(byte[] dataValue)
        {
            ushort count = 0;
            int usum = 0;
            for (int i = 0; i < dataValue.Length; i++)
                usum += dataValue[i] % 10;
            count = (ushort)usum;
            return count;
        }

        public int VerifyCheckSum(byte[] buffer, int bufferLength)
        {
            if (buffer.Length < 9) return 0;

            ushort CRC = CRC16(buffer.Skip(2).Take(bufferLength - 6).ToArray());

            byte CRC_H = (byte)(CRC >> 8);
            byte CRC_L = (byte)(CRC & 0xFF);
            if (CRC_H == buffer[bufferLength - 3] && CRC_L == buffer[bufferLength - 4])
                return 1;
            return 0;
        }
    }
}