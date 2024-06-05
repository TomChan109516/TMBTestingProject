namespace VICSS.Service.Artu.EventHandlers
{
    using MediatR;

    using NLog;
    using System.Diagnostics.CodeAnalysis;
    using System.Net;
    using System.Threading;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Artu.Domain;
    using VICSS.Service.Artu.Helper;
    using VICSS.Service.Artu.Implementation;
    using VICSS.Service.Artu.Interface;
    using VICSS.Shared.Models.Common;

    public class ToggleConnectionCommandHandler : IRequestHandler<ToggleConnectionRequestDto, ToggleConnectionResponseDto>
    {
        #region Private Variable
        private readonly IGenericRepository<ArtuDbContext, ArtuConfig> _genericRepository;
        private readonly ISendMessageToInspection _sendMessagetoInspection;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();

        #endregion

        #region Constructor 
        public ToggleConnectionCommandHandler(IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository, ISendMessageToInspection sendMessagetoInspection)
        {
            _genericRepository = genericRepository;
            this._sendMessagetoInspection = sendMessagetoInspection;    
        }
        #endregion

        public async Task<ToggleConnectionResponseDto> Handle(ToggleConnectionRequestDto request, CancellationToken cancellationToken)
        
        {
            ToggleConnectionResponseDto data = new ToggleConnectionResponseDto();

            try
            {
                logger.Info("Handling ToggleConnection");
                if (string.IsNullOrEmpty(request.Id))
                {
                    data.Message = CommonMessages.EmptyFields;
                    data.IsSuccess = false;
                    data.HttpStatusCode = HttpStatusCode.BadRequest;
                    logger.Warn("Request Id is null or empty");
                    return data;    
                }

                var toggleConnection = await _genericRepository.GetById(request.Id);

                if (toggleConnection != null)
                {
                    logger.Info($"Found ToggleConnection for Id: {request.Id}");
                    string laneId = toggleConnection.LaneId;
                    string stationId = toggleConnection.StationId;

                    if (string.IsNullOrEmpty(toggleConnection.VeesIp) || string.IsNullOrEmpty(toggleConnection.VeesPort))
                    {
                        data.Message = CommonMessages.EndPointNotFound;
                        data.IsSuccess = false;
                        data.HttpStatusCode = HttpStatusCode.BadRequest;
                        logger.Warn("VeesIp or VeesPort is null or empty");
                        return data;
                    }   

                    var artuTcpClient = new ArtuTcpClient(this._sendMessagetoInspection);

                    if (request.toggleStatus)
                    {
                        // Check if the connection already exists
                        if (IsClientConnectedAndInDictionary(toggleConnection.ArtuConfigId, out var client))
                        {
                            data.Message = CommonMessages.ConnectionExist;
                            data.IsSuccess = false;
                            data.HttpStatusCode = HttpStatusCode.Conflict;
                            return data;
                        }
                        
                        // Connect to the server
                        var connectionResult = artuTcpClient.Connect(toggleConnection.VeesIp, int.Parse(toggleConnection.VeesPort));
                        if (connectionResult)
                        {
                            string serverEndPoint = artuTcpClient.GetServerEndpoints();

                            GlobalDictionary._serverEndpoints[serverEndPoint] = (laneId, stationId);
                            GlobalDictionary._connectedClients[toggleConnection.ArtuConfigId] = (artuTcpClient, CommonConstants.ToggleConnectionOn);
                           
                            string status = GlobalDictionary._connectedClients[toggleConnection.ArtuConfigId].Item2;
                            string messageJson = $"{{\"id\": \"{toggleConnection.ArtuConfigId}\", \"status\": \"{status}\"}}";
                            GlobalDictionary.MessageJsonDictionary[toggleConnection.ArtuConfigId] = messageJson;
                            

                            //Check if the id for Lane and Station is added
                            if (!GlobalDictionary._idForLaneStation.ContainsKey((laneId, stationId)))
                            {
                                GlobalDictionary._idForLaneStation[(laneId, stationId)] = toggleConnection.ArtuConfigId;
                            }
                            data.Message = CommonMessages.OperationSuccessful;
                            data.IsSuccess = true;
                            data.HttpStatusCode = HttpStatusCode.OK;
                            logger.Info($"ToggleConnection for {toggleConnection.ArtuConfigId} " +
                            $"successfully Connected to IP:{toggleConnection.VeesIp} and Port:{toggleConnection.VeesPort} ");
                        }

                        else
                        {
                            data.Message = CommonMessages.OperationUnsuccessful;
                            data.IsSuccess = false;
                            data.HttpStatusCode = HttpStatusCode.NotFound;
                            string messageJson = $"{{\"id\": \"{request.Id}\", \"status\": \"{CommonConstants.ToggleConnectionError}\"}}";
                            GlobalDictionary.MessageJsonDictionary[toggleConnection.ArtuConfigId] = messageJson;
                            logger.Info($"ToggleConnection for {toggleConnection.ArtuConfigId} " +
                            $"failed to find IP:{toggleConnection.VeesIp} and Port:{toggleConnection.VeesPort} ");
                        }
                    }
                    else
                    {
                        //Disconnect server connection
                        bool currentConnectStatus = GlobalDictionary._connectedClients.TryGetValue(toggleConnection.ArtuConfigId, out var clientTuple);
                        if (currentConnectStatus)
                        {
                            var client = clientTuple.client;
                            var resultStatus = client.Disconnect();
                            if (resultStatus)
                            {
                                string messageJson = $"{{\"id\": \"{toggleConnection.ArtuConfigId}\", \"status\": \"{CommonConstants.ToggleConnectionOff}\"}}";
                                GlobalDictionary.MessageJsonDictionary[toggleConnection.ArtuConfigId] = messageJson;
                                GlobalDictionary._connectedClients.Remove(toggleConnection.ArtuConfigId, out var removedClientTuple);

                                data.Message = CommonMessages.OperationSuccessful;
                                data.IsSuccess = true;
                                data.HttpStatusCode = HttpStatusCode.OK;
                                logger.Info($"ToggleConnection for {toggleConnection.ArtuConfigId} " +
                               $"successfully disconnected to IP:{toggleConnection.VeesIp} and Port:{toggleConnection.VeesPort}");
                            }
                            else
                            {
                                data.Message = CommonMessages.ServerDisconnected;
                                data.IsSuccess = false;
                                data.HttpStatusCode = HttpStatusCode.ServiceUnavailable;
                                logger.Info($"ToggleConnection for {toggleConnection.ArtuConfigId} " +
                                $"failed while disconnecting to IP:{toggleConnection.VeesIp} and Port:{toggleConnection.VeesPort}");
                            }
                        }
                        else
                        {
                            data.Message = CommonMessages.OperationUnsuccessful;
                            data.IsSuccess = false;
                            data.HttpStatusCode = HttpStatusCode.NotFound;
                            logger.Warn($"ToggleConnection for {toggleConnection.ArtuConfigId} not found in connected clients");
                        }
                    }
                }
                else
                {
                    data.Message = CommonMessages.OperationUnsuccessful;    
                    data.IsSuccess = false;
                    data.HttpStatusCode = HttpStatusCode.ServiceUnavailable;
                    logger.Warn($"ToggleConnection not found for Id: {request.Id}");
                }
            }
            catch (Exception ex)
            {
                data.Message = CommonMessages.EndPointNotFound;
                data.IsSuccess = false;
                data.HttpStatusCode = HttpStatusCode.InternalServerError;
                string messageJson = $"{{\"id\": \"{request.Id}\", \"status\": \"{CommonConstants.ToggleConnectionError}\"}}";
                GlobalDictionary.MessageJsonDictionary[request.Id] = messageJson;
                logger.Error($"An error occurred while handling ToggleConnection: {ex.Message}");
            }
            return data;
        }

        [ExcludeFromCodeCoverage]
        private bool IsClientConnectedAndInDictionary(string artuConfigId, out ArtuTcpClient client)
        {
            if (GlobalDictionary._connectedClients.TryGetValue(artuConfigId, out var clientStatusTuple))
            {
                client = clientStatusTuple.client;
                return client.IsConnected();
            }
            client = null;
            return false;
        }

    }
}
