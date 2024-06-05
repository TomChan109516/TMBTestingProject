namespace VICSS.Service.Artu.Implementation
{
    using System.Diagnostics.CodeAnalysis;
    using System.Net.Sockets;
    using System.Text;
    using System.Xml.Linq;
    using NLog;
    using VICSS.Service.Artu.Helper;
    using VICSS.Service.Artu.Interface;
    using VICSS.Service.Artu.Model;
    using VICSS.Service.Models.Artu;
    using VICSS.Services.Artu.Helper;
    using VICSS.Shared.Models.Common;

    public class ProcessVeesMessage
    {
        #region Private Variable
        private readonly UtilityHelper _utilityHelper;
        private readonly ISendMessageToInspection _sendMessagetoInspection;
        private const int MinimumBufferLength = 9;
        private const string NodeName = "code";
        private readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region Constructor
        public ProcessVeesMessage(ISendMessageToInspection sendMessagetoInspection)
        {
            _utilityHelper = new UtilityHelper();
            this._sendMessagetoInspection = sendMessagetoInspection;
        }
        #endregion

        #region Public Method
        /// <summary>
        /// To unpack and extract xml message from binary message.
        /// </summary>
        /// <param name="recBuffer"></param>
        /// <param name="bufLength"></param>
        /// <param name="laneId"></param>
        /// <param name="stationId"></param>
        /// <returns></returns>
        public async Task<int> UnpackBinaryMessage(byte[] recBuffer, int bufLength, string laneId, string stationId)
        {
            if (recBuffer == null)
            {
                throw new ArgumentNullException(nameof(recBuffer));
            }
            try
            {
                if (bufLength < MinimumBufferLength)
                    return 0;

                _ = BitConverter.ToInt16(recBuffer, 3);
                if (bufLength >= MinimumBufferLength)
                {
                    int result = _utilityHelper.VerifyCheckSum(recBuffer, bufLength);
                    if (result == 1)
                    {
                        ReturnMessageBody returnMessageBody = await ConvertToXmlFromBinary(recBuffer, laneId, stationId);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return 1;
        }

        public async Task<int> UploadResultDataToVICS(string InterfaceID, string testResultXml, string lane, string station)
        {
            string testId = string.Empty;

            if (!string.IsNullOrEmpty(InterfaceID))
            {
                testId = InterfaceID;
            }
            else
            {
                if (testResultXml.Contains(CommonTestDetailConstants.HeadlampTestResult))
                    testId = CommonTestDetailConstants.HeadlampTestId;
                else if (testResultXml.Contains(CommonTestDetailConstants.BrakeTestResult))
                    testId = CommonTestDetailConstants.BrakeTestId;
                else if (testResultXml.Contains(CommonTestDetailConstants.SpeedTestResult))
                    testId = CommonTestDetailConstants.SpeedTestId;
                else if (testResultXml.Contains(CommonTestDetailConstants.SldTestResult))
                    testId = CommonTestDetailConstants.SldTestId;
                else if (testResultXml.Contains(CommonTestDetailConstants.AxleweighTestResult))
                    testId = CommonTestDetailConstants.AxleweighTestId;
                else if (testResultXml.Contains(CommonTestDetailConstants.SddTestResult))
                    testId = CommonTestDetailConstants.SddTestId;
                else if (testResultXml.Contains(CommonTestDetailConstants.FatTestResult))
                    testId = CommonTestDetailConstants.FatTestId;
                else if (testResultXml.Contains(CommonTestDetailConstants.IdleTestResultLpg))
                    testId = CommonTestDetailConstants.IdleTestIdLpg;
                else if (testResultXml.Contains(CommonTestDetailConstants.IdleTestResultPetrol))
                    testId = CommonTestDetailConstants.IdleTestIdPetrol;
                else if (testResultXml.Contains(CommonTestDetailConstants.TaximeterTestResult))
                    testId = CommonTestDetailConstants.TaximeterTestId;
                else if (testResultXml.Contains(CommonTestDetailConstants.LugdownTestResult))
                    testId = CommonTestDetailConstants.LugdownTestId;
                else if (testResultXml.Contains(CommonTestDetailConstants.OhmResult))
                    testId = CommonTestDetailConstants.OhmTestId;
                else if (testResultXml.Contains(CommonTestDetailConstants.OhmTempResult))
                    testId = CommonTestDetailConstants.OhmTempTestId;
                else
                {
                    return 0;
                }

                await this._sendMessagetoInspection.SendTestResults(testResultXml, testId, lane, station);
            }
            return 1;
        }

        [ExcludeFromCodeCoverage]
        /// <summary>
        /// private method to decode the received binary message and convert to xml
        /// </summary>
        /// <param name="recBuffer"></param>
        /// <param name="laneId"></param>
        /// <param name="stationId"></param>
        /// <returns></returns>
        public async Task<ReturnMessageBody> ConvertToXmlFromBinary(byte[] recBuffer, string laneId, string stationId)
        {
            // Ensure recBuffer is not null
            if (recBuffer == null)
            {
                throw new ArgumentNullException(nameof(recBuffer));
            }
            // Ensure laneId and stationId are not null or empty
            if (string.IsNullOrEmpty(laneId) || string.IsNullOrEmpty(stationId))
            {
                throw new ArgumentException(CommonMessages.LaneStationNull);
            }
            //Do check if the the veesStatus is 0 then send only once, and wait till status changes to 1.
            byte recCommand = recBuffer[2];
            ReturnMessageBody returnMessageBody = new ReturnMessageBody
            {
                AcknowledgementModel = new AcknowledgementModel(),
                MessageToKafka = new MessageToKafka()
            };

            switch (recCommand)
            {
                case 1:
                    string artuStatus = CommonConstants.ArtuDefaultStatus;
                    int ret = GetVEESCommandData(out string statusXmlBody, recBuffer);
                   // int veesCurrentStatus = GetXMLCodeNodeValue(statusXmlBody);
                    if (ret > 0)
                    {
                        int veesDefaultStatus; //= CommonConstants.VeesDefaultStatus;                        

                        string nodeValueFromVees = string.Empty;
                        ret = GetNodeValue(out nodeValueFromVees, NodeName, statusXmlBody);
                        if (ret == 1)
                        {
                           int veesCurrentStatus = Convert.ToInt32(nodeValueFromVees);
                           logger.Info($"VEES Current Status: " + veesCurrentStatus);
                           returnMessageBody.MessageToKafka.XmlBody = statusXmlBody;

                            if(GlobalDictionary._currentVeesStatus.ContainsKey((laneId, stationId)))
                            {                                
                                veesDefaultStatus = veesCurrentStatus;
                            }
                            else
                            {
                                // Add veesStatus if dictionary empty
                                GlobalDictionary._currentVeesStatus[(laneId, stationId)] = veesCurrentStatus;
                                veesDefaultStatus = veesCurrentStatus;
                            }

                            logger.Info($"VEES Default Status: " + veesDefaultStatus);
                            if (veesCurrentStatus == 0 && veesDefaultStatus == 0)
                            {
                                    logger.Info($"VEES Default Status: " + veesDefaultStatus + " VEES Current Status: " + veesCurrentStatus + " Sending 19W17");
                                    //Send 19W17 to inspection
                                    await this._sendMessagetoInspection.SendArtuStatusToVics(laneId, stationId, artuStatus, veesCurrentStatus.ToString());
                            }
                            else if (veesCurrentStatus == 0 && veesDefaultStatus == 1)
                            {                                
                                logger.Info($"VEES Default Status: " + veesDefaultStatus + " VEES Current Status: " + veesCurrentStatus + " Sending 19W17");
                                //Send 19W17 to inspection
                                await this._sendMessagetoInspection.SendArtuStatusToVics(laneId, stationId, artuStatus, veesCurrentStatus.ToString());
                               
                            }
                            //Update current value
                            GlobalDictionary._currentVeesStatus[(laneId, stationId)] = veesCurrentStatus;
                        }
                        else
                        {
                            veesDefaultStatus = CommonConstants.VeesDefaultStatus;
                        }
                    }
                    break;
                case 2:
                    {
                        int ctrlcode = 0;
                        ret = GetVEESCommandData(out string veesCtrlXmlBody, recBuffer);
                        if (ret > 0)
                        {
                            string strValue = string.Empty;
                            ret = GetNodeValue(out strValue, NodeName, veesCtrlXmlBody);
                            if (ret == 1)
                            {
                                _ = int.Parse(strValue);
                                returnMessageBody.MessageToKafka.XmlBody = veesCtrlXmlBody;
                            }
                            logger.Info($"[VEES to ARTU] Received response for 0x02: {veesCtrlXmlBody}");
                        }
                    }
                    break;
                case 3:
                    int nCode = 0;
                    int value = GetVEESCommandData(out string vehicleXmlBody, recBuffer);
                    if (value > 0)
                    {
                        string strValue = string.Empty;
                        ret = GetNodeValue(out strValue, NodeName, vehicleXmlBody);
                        if (ret == 1)
                        {
                            _ = int.Parse(strValue);
                            returnMessageBody.MessageToKafka.XmlBody = vehicleXmlBody;
                        }
                        logger.Info($"[VEES to ARTU] Received Acknowledgement for Basic Vehicle Information Sent with XML: {vehicleXmlBody}");
                    }

                    break;
                case 4:
                    int resultValue = GetVEESCommandData(out string testResultXML, recBuffer);
                    if (resultValue > 0)
                    {
                        int uploadStatus = await UploadResultDataToVICS(string.Empty, testResultXML, laneId, stationId);
                        if (uploadStatus == 1)
                        {
                            returnMessageBody.MessageToKafka.XmlBody = testResultXML;
                            returnMessageBody.AcknowledgementModel.Code = 1;
                            returnMessageBody.AcknowledgementModel.Message = CommonMessages.SuccessfullyUploadedToVICS;
                        }
                        else if (uploadStatus == 2)
                        {
                            returnMessageBody.MessageToKafka.XmlBody = testResultXML;
                            returnMessageBody.AcknowledgementModel.Code = 1;
                            returnMessageBody.AcknowledgementModel.Message = CommonMessages.UploadedButVICSNotConnected;
                        }
                        else
                        {
                            returnMessageBody.MessageToKafka.XmlBody = testResultXML;
                            returnMessageBody.AcknowledgementModel.Code = 0;
                            returnMessageBody.AcknowledgementModel.Message = CommonMessages.UploadFailed;
                        }
                        AcknowledgeVees(uploadStatus, laneId, stationId);
                    }
                    else
                    {
                        returnMessageBody.AcknowledgementModel.Code = 0;
                        returnMessageBody.AcknowledgementModel.Message = CommonMessages.CommandNotMatched;
                    }
                    break;
                default:
                    return null!;
            }
            return returnMessageBody;
        }

        /// <summary>
        /// Acknowledge back VEEs, if Test results are received
        /// </summary>
        /// <param name="uploadStatus"></param>
        /// <param name="laneId"></param>
        /// <param name="stationId"></param>
        [ExcludeFromCodeCoverage]
        public void AcknowledgeVees(int uploadStatus, string laneId, string stationId)
        {
            try
            {
                // Create XML using an XML library
                var xmlDocument = new XDocument(
                                  new XDeclaration(CommonConstants.XmlDeclarationVersion, CommonConstants.XmlDeclarationEncoding, null),
                                  new XElement(CommonConstants.XmlCommandElementName,
                                    new XElement(CommonConstants.XmlCodeElementName, CommonConstants.XmlMessageElementContent),
                                    new XElement(CommonConstants.XmlMessageElementName, (uploadStatus == 1) ? CommonMessages.SuccessMessage : CommonMessages.PartialSuccessMessage)
                                  )
                );

                string ackAnswer = xmlDocument.ToString();

                byte[] xmlBytes = Encoding.GetEncoding("GBK").GetBytes(ackAnswer);

                PacketModel packet = _utilityHelper.CreatePacketFromXml(CommonConstants.SendVeesAcknowledgmentCommand, xmlBytes);

                // Check if the lane and station have a connected ID
                if (GlobalDictionary._idForLaneStation.TryGetValue((laneId, stationId), out string? id))
                {
                    // If they do, use that ID to send the message to VEES
                    if (GlobalDictionary._connectedClients.TryGetValue(id, out var clientStatusTuple))
                    {
                        //To display in log
                        logger.Info($"<------------------- Buffer Sent ARTU to VEES [04]: " +
                            $"{BitConverter.ToString(packet.CommandString, 0, packet.PacketLength).Replace("-", " ")} -------------------->");
                        logger.Info($"<------------------- Sending Command {0x04} Acknowledgment to VEES ({laneId}{stationId} - {id}) " +
                            $"with XML:\n{ackAnswer} ------------------->");

                        // Extract the ArtuTcpClient from the tuple
                        ArtuTcpClient? client = clientStatusTuple.client;

                        // Check if client is not null
                        if (client != null)
                        {
                            try
                            {
                                // Send the packet to the client
                                client.Send(packet.CommandString, packet.PacketLength, SocketFlags.None);
                            }
                            catch (Exception ex)
                            {
                                logger.Error($"Error sending acknowledgment: {ex.Message}");
                            }
                        }
                        else
                        {
                            logger.Error("Client is null. Cannot send acknowledgment.");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                logger.Error($"An error occurred while Acknowledging VEES: {ex.Message}");
            }
        }

        #endregion

        #region Private Method

        /// <summary>
        /// gets the xmlData from the binary message
        /// </summary>
        /// <param name="xmlData"></param>
        /// <param name="CmdString"></param>
        /// <returns></returns>
        [ExcludeFromCodeCoverage]
        private int GetVEESCommandData(out string xmlData, byte[] CmdString)
        {
            int DataLength = 0;
            xmlData = string.Empty;

            if (CmdString == null) return 0;
            try
            {
                DataLength = CmdString[4] << 8 | CmdString[3];
                if (DataLength > CmdString.Length - 5)
                {
                    return 0;
                }
                byte[] pstrXML = new byte[DataLength];
                Array.Copy(CmdString, 5, pstrXML, 0, DataLength);
                xmlData = Encoding.ASCII.GetString(pstrXML);

                logger.Info($"Decoded XML from Binary [{CmdString[2]}]: {xmlData}");//Add for which Command is this received

                DataLength = xmlData.Length;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return DataLength;
        }

        [ExcludeFromCodeCoverage]
        /// <summary>
        /// gets the node value from the received xml message
        /// </summary>
        /// <param name="nodeValue"></param>
        /// <param name="NodeName"></param>
        /// <param name="xmlData"></param>
        /// <returns></returns>
        private int GetNodeValue(out string nodeValue, string NodeName, string xmlData)
        {
            int result = 0;
            try
            {
                if (string.IsNullOrEmpty(xmlData))
                {
                    nodeValue = null!;
                    return 0;
                }

                string processedXmlData = xmlData;
                processedXmlData = processedXmlData.Replace("&lt;", "<");
                processedXmlData = processedXmlData.Replace("&gt;", ">");

                // 1. Empty node
                string emptyNode = $"<{NodeName}/>";
                if (processedXmlData.Contains(emptyNode))
                {
                    nodeValue = string.Empty;
                    return 1;
                }

                // 2. Standard node without parameters
                string startNode = $"<{NodeName}>";
                int startIndex = processedXmlData.IndexOf(startNode);
                if (startIndex >= 0)
                {
                    startIndex += startNode.Length;
                    string endNode = $"</{NodeName}>";
                    int endIndex = processedXmlData.IndexOf(endNode, startIndex);
                    if (endIndex >= 0)
                    {
                        nodeValue = processedXmlData.Substring(startIndex, endIndex - startIndex);
                        return 1;
                    }
                }

                // 3. Standard node with parameters
                string startNodeWithParams = $"<{NodeName} ";
                startIndex = processedXmlData.IndexOf(startNodeWithParams);
                if (startIndex >= 0)
                {
                    int endStartIndex = processedXmlData.IndexOf(">", startIndex);
                    startIndex = endStartIndex + 1;
                    string endNode = $"</{NodeName}>";
                    int E = processedXmlData.IndexOf(endNode, startIndex);
                    if (E >= 0)
                    {
                        nodeValue = processedXmlData.Substring(startIndex, E - startIndex);
                        return 1;
                    }
                }

                nodeValue = null!;
            }
            catch
            {
                result = 0;
                nodeValue = null!;
            }
            return result;
        }

        #endregion
    }
}
