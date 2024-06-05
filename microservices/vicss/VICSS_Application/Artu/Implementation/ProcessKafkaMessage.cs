namespace VICSS.Service.Artu.Implementation
{
    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;
    using NLog;
    using System.Diagnostics.CodeAnalysis;
    using System.Diagnostics.Eventing.Reader;
    using System.Net.Sockets;
    using System.Text;
    using System.Xml;
    using System.Xml.Linq;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Artu.Helper;
    using VICSS.Service.Artu.Model;
    using VICSS.Services.Artu.Helper;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;

    public class ProcessKafkaMessage
    {
        private readonly IGenericRepository<ArtuDbContext, ArtuConfig> _genericRepository;
        private const int PacketCommand = 3;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();

        /// <summary>
        /// Processes Kafka messages related to inspections.
        /// </summary>
        public ProcessKafkaMessage(IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository)
        {
            _genericRepository = genericRepository;
        }

        /// <summary>
        /// Read message from inspection and send message to Vees
        /// </summary>
        /// <param name="recievedMessage"></param>
        /// <returns></returns>
        [ExcludeFromCodeCoverage]
        public object ReadMessage(KafKaTestRequestDto recievedMessage)
        {
            try
            {
				if (recievedMessage != null && !string.IsNullOrEmpty(recievedMessage.typeofMessage) && recievedMessage.typeofMessage == CommonConstants.MessageTypeCode[0])
				{
                    // Create a new instance of the UtilityHelper class
                    UtilityHelper utilityHelper = new UtilityHelper();

                    // Parse the XML body of the received message into a JObject
                    JObject jsonObject = JObject.Parse(recievedMessage.xmlBody);

                    // Deserialize the JObject into an XNode with a root element named "InspectionConfiguration"
                    XNode xmlNode = JsonConvert.DeserializeXNode(jsonObject.ToString(), CommonConstants.InspectionConfiguration);

                    string xmlString = CommonConstants.XmlDeclaration + "\n" + xmlNode;

                    logger.Info("Successfully converted json message to XML");

                    byte[] xmlBytes = Encoding.ASCII.GetBytes(xmlString.ToString());

                    // Create a packet from the XML byte array
                    PacketModel packet = utilityHelper.CreatePacketFromXml(PacketCommand, xmlBytes);
                    string keyTypeOfMessage = recievedMessage.typeofMessage;

                    if (GlobalDictionary._responseLaneStation.TryGetValue(keyTypeOfMessage, out var laneStation))
                    {
                        var data = GlobalDictionary._responseLaneStation[keyTypeOfMessage];

                        string laneId = laneStation.laneId;
                        string stationId = laneStation.stationId;

                        // Get the key associated with the lane and station IDs
                        string key = GetTableByLaneAndStation(laneId, stationId).Result;

                        if (GlobalDictionary._connectedClients.TryGetValue(key, out var value))

                        {
                            ArtuTcpClient client = value.client;

                            // Send the packet to the client
                            int sendResult = client.Send(packet.CommandString, packet.PacketLength, SocketFlags.None);
                            logger.Info($"<--------------- ProcessKafkaMessage: Status for Sending message {sendResult} to VEES ------------>");


                            //To display in log
                            logger.Info($"<----------------------------------------- Buffer Sent from ARTU to VEES [03]: " +
                                $"{BitConverter.ToString(packet.CommandString, 0, packet.PacketLength).Replace("-", " ")} ----------------------------------------->");

                            logger.Info($" <----------------------------------------- Sending Command {PacketCommand} to VEES ({laneId}{stationId} - {key}) with XML:\n{xmlNode} ----------------------------------------->");
                        }
                        GlobalDictionary._responseLaneStation.Remove(recievedMessage.typeofMessage, out _);
                    }
                    return packet;
                }
                else
                {
                    string errorMessage = CommonErrorMessage.ErrorMessage;
                    byte[] errorMessageBytes = Encoding.ASCII.GetBytes(errorMessage);

                    var errorPacket = new PacketModel
                    {
                        CommandString = errorMessageBytes,
                        PacketLength = errorMessageBytes.Length
                    };
                    return errorPacket;
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex, $"An error occurred while sending message from inspection: {ex.Message}");
                return ex.Message;
            }
        }

        /// <summary>
        /// Get table Id from lane and station
        /// </summary>
        /// <param name="laneId"></param>
        /// <param name="stationId"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public async Task<string> GetTableByLaneAndStation(string laneId, string stationId)
        {
            IEnumerable<ArtuConfig> tables = await _genericRepository.GetByQuery(t => t.LaneId == laneId && t.StationId == stationId);
            ArtuConfig table = tables.FirstOrDefault();

            if (table == null)
            {
                throw new Exception(CommonErrorMessage.IDNotFound);
            }
            return table.ArtuConfigId;
        }
    }
}
