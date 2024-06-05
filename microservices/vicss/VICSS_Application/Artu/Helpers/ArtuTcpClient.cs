namespace VICSS.Service.Artu.Helper
{
    using System.Diagnostics.CodeAnalysis;
    using System.Net;
    using System.Net.Sockets;
    using System.Text;
    using NLog;
    using VICSS.Service.Artu.Implementation;
    using VICSS.Service.Artu.Interface;
    using VICSS.Service.Artu.Model;
    using VICSS.Services.Artu.Helper;
    using VICSS.Shared.Models.Common;

    public class ArtuTcpClient : IArtuTcpClient
    {
        #region Private Variable
        public TcpClient? _tcpClient;
        public NetworkStream? _networkStream;
        private bool _closeConnection;
        private readonly UtilityHelper _utilityHelper;
        private readonly TimeSpan _commandDelay = TimeSpan.FromSeconds(20);
        private readonly ISendMessageToInspection _sendMessagetoInspection;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region Constructor
        public ArtuTcpClient(ISendMessageToInspection sendMessagetoInspection)
        {
            this._closeConnection = false;
            this._tcpClient = null;
            this._networkStream = null;
            this._utilityHelper = new UtilityHelper();
            this._sendMessagetoInspection = sendMessagetoInspection;
        }
        #endregion

        #region Public Method
        /// <summary>
        /// Connects to a TCP server at the specified IP address and port.
        /// </summary>
        /// <param name="ipAddress">The IP address of the server.</param>
        /// <param name="port">The port number of the server.</param>
        /// 

        [ExcludeFromCodeCoverage]
        public bool Connect(string ipAddress, int port)
        {
            try
            {
                // Endpoint of the Artu Client
                IPEndPoint endPoint = new IPEndPoint(IPAddress.Parse(ipAddress), port);

                _tcpClient = new TcpClient();
                _tcpClient.Connect(endPoint);

                //starts a stream
                _networkStream = _tcpClient.GetStream();

                //This is to get Vees status after every 20 seconds
                _ = Task.Run(async () =>
                {
                    int cmd = 1;
                    //Once the connection is established, we need to keep asking vees for the status
                    while (!_closeConnection && IsConnected())
                    {
                        try
                        {
                            string commandString = string.Empty;
                            byte[] commandBytes = Encoding.UTF8.GetBytes(commandString);

                            //creates a binary packet that is sent to vees
                            PacketModel veesCommand = _utilityHelper.CreatePacketFromXml(cmd, commandBytes);

                            //Sends message to Vees Server
                            Send(veesCommand.CommandString, veesCommand.PacketLength, SocketFlags.None);

                            logger.Info($"<----------------------------------------- ARTU to VEES Communication for IpAddress:{ipAddress} and Port:{port} - Get VEES Status [0x01]: " +
                                $"{BitConverter.ToString(veesCommand.CommandString, 0, veesCommand.PacketLength).Replace("-", " ")} ----------------------------------------->");

                            //send the message to vees server after every 20 seconds
                            await Task.Delay(_commandDelay);
                        }
                        catch (Exception ex)
                        {
                            logger.Error($"Error while sending to VEES for IpAddress:{ipAddress} and Port:{port}: {ex.Message}");
                        }
                    }
                });

                // This task will continuously check for responses from the server
                _ = Task.Run(async () =>
                {
                    try
                    {
                        while (!_closeConnection && IsConnected())
                        {
                            //Checks the response from the server
                            var response = await CheckForResponse();
                        }
                    }
                    catch (Exception ex)
                    {
                        logger.Error($"Error while receiving from VEES: {ex.Message}");
                    }
                });
                return true;
            }
            catch (Exception ex)
            {
                logger.Error($"ArtuTcpClient Error while connection: {ex.Message}");
                return false;
            }
        }

        /// <summary>
        /// Function to disconnect connection with vees
        /// </summary>
        public bool Disconnect()
        {
            try
            {
                // Get the remote endpoint before closing the connection
                string? remoteEndPoint = _tcpClient?.Client?.RemoteEndPoint?.ToString();

                // Close the network stream
                _networkStream?.Close();

                // Close the TCP client
                _tcpClient?.Close();

                // Set the fields to their default values
                _networkStream = null;
                _tcpClient = null;
                _closeConnection = true;

                // Print a message to the console
                logger.Info($"The connection with server {remoteEndPoint} has been disconnected.");
                return true;
            }
            catch (Exception ex)
            {
                logger.Error($"An error occurred while disconnecting from the server: {ex.Message}");
                return false;
            }
        }

        /// <summary>
        /// Sends data to the TCP server. Sends the xml data converted into byte format.
        /// </summary>
        /// <param name="xmlData">The data to send.</param>
        /// <param name="xmlLength">The length of the data.</param>
        /// <param name="socketFlags">The socket flags to use when sending the data.</param>
        /// <returns>1 if the data was sent successfully, 0 otherwise.</returns>
        public int Send(byte[] xmlData, int xmlLength, SocketFlags socketFlags)
        {
            try
            {
                if (!IsConnected())
                {
                    return 0;
                }
                _networkStream?.Write(xmlData, 0, xmlLength);
                return 1;
            }
            catch (Exception ex)
            {
                logger.Error($"An error occurred while sending data: {ex.Message}");
                return -1;
            }
        }

        /// <summary>
        /// Gets the IP address and port number of the server.
        /// </summary>
        /// <returns>A string containing the IP address and port number of the server.</returns>
        /// 

        [ExcludeFromCodeCoverage]
        public string GetServerEndpoints()
        {
            try
            {
                if (_tcpClient != null)
                {
                    IPEndPoint? remoteEndpoint = _tcpClient.Client.RemoteEndPoint as IPEndPoint;
                    if (remoteEndpoint != null)
                    {
                        return $"{remoteEndpoint.Address}:{remoteEndpoint.Port}";
                    }
                }
                return null!;
            }
            catch (Exception ex)
            {
                logger.Error($"An error occurred while getting server endpoints: {ex.Message}");
                return null!;
            }
        }
        #endregion

        #region Private Method
        /// <summary>
        /// Checks if the client is connected to the server.
        /// </summary>
        /// <returns>true if the client is connected to the server, false otherwise.</returns>
        public bool IsConnected()
        {
            if (_tcpClient is not null
                && _tcpClient.Connected
                && _networkStream is not null)
                return true;
            return false;
        }

        /// <summary>
        /// Checks for a response from the server.
        /// </summary>
        /// <returns>A string containing the server's response, or null if no response was received.</returns>
        [ExcludeFromCodeCoverage]
        public async Task<string?> CheckForResponse()
        {
            if (_networkStream != null && _networkStream.DataAvailable)
            {
                byte[] recBuffer = new byte[102400];

                //The unused variables will be used for logging, read the first 5 bytes of the buffer
                _ = await _networkStream.ReadAsync(recBuffer, 0, 5);

                //check if the buffer header is correct
                if (recBuffer[0] != 0x02 || recBuffer[1] != 0x01)
                {
                    return CommonMessages.HeaderNotMatching;
                }

                //extract the xmlLength
                var xmlLength = ((recBuffer[4] << 8) + recBuffer[3]);
                int readLength = xmlLength + 4;
                int prevBytes = 5;

                //read the rest of bytes
                int recBufLength = await _networkStream.ReadAsync(recBuffer, prevBytes, readLength);

                if (recBufLength != readLength)
                {
                    return CommonMessages.InvalidLength;
                }

                string data = Encoding.GetEncoding("GBK").GetString(recBuffer, prevBytes, xmlLength);
                //Print the XML Data to the check on console
                logger.Info($"Received Data from VEES to ARTU: {data}");

                //The unused variables will be used for logging
                int totalLength = prevBytes + recBufLength;

                if (totalLength > 0)
                {
                    //To display on console
                    logger.Info($"<----------------------------------------- Received response buffer from VEES to ARTU [0x{recBuffer[2]}]: " +
                        $"{BitConverter.ToString(recBuffer, 0, totalLength).Replace("-", " ")} ----------------------------------------->");

                    // Using the RemoteEndPoint property.To Fetch the ip and port details
                    IPEndPoint? remoteEndPoint = _tcpClient?.Client.RemoteEndPoint as IPEndPoint;
                    if (remoteEndPoint != null)
                    {
                        //Console log to check which server has sent the message
                        logger.Info("Message received from IPAddress - " + remoteEndPoint.Address + " and Port - " + remoteEndPoint.Port);
                    }

                    // Get the server endpoint(IP and port)
                    string serverEndpoint = GetServerEndpoints();
                    // Get the lane and station values for this server endpoint
                    if (GlobalDictionary._serverEndpoints.TryGetValue(serverEndpoint, out var laneStation))
                    {
                        // laneStation is a tuple containing the laneId and stationId
                        string laneId = laneStation.laneId;
                        string stationId = laneStation.stationId;


                        ProcessVeesMessage processVeesMessage = new ProcessVeesMessage(this._sendMessagetoInspection);
                        _ = await processVeesMessage.UnpackBinaryMessage(recBuffer, totalLength, laneId, stationId);
                    }
                }
                //Handle this null
                return null!;
            }
            //Handle this null
            return null;
        }
        #endregion
    }

}