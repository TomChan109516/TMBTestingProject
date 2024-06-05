namespace VICSS.Service.Artu.EventHandlers
{
    using MediatR;
    using NLog;
    using System.Net.Sockets;
    using System.Text;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Artu;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Artu.Domain;
    using VICSS.Service.Artu.Helper;
    using VICSS.Service.Artu.Model;
    using VICSS.Services.Artu.Helper;
    using VICSS.Shared.Models.Common;

    public class VeeCommandControlHandler : IRequestHandler<VeeCommandControlRequestDto, VeeCommandControlResponseDto>
    {
        #region Private Variable
        private readonly IGenericRepository<ArtuDbContext, ArtuConfig> _genericRepository;
        private readonly UtilityHelper _utilityHelper;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region Constructor
        public VeeCommandControlHandler(IGenericRepository<ArtuDbContext, ArtuConfig> genericRepository, UtilityHelper utilityHelper)
        {
            this._genericRepository = genericRepository;
            this._utilityHelper = utilityHelper;
        }
        #endregion

        public async Task<VeeCommandControlResponseDto> Handle(VeeCommandControlRequestDto request, CancellationToken cancellationToken)
        {
            if (request == null)
            {
                logger.Error("Request cannot be null.");
                throw new ArgumentNullException(nameof(request));
            }

            if (!GlobalDictionary._connectedClients.TryGetValue(request.ArtuEndpointId, out var artuTcpClient))
            {
                logger.Error($"Invalid ArtuEndpointId: {request.ArtuEndpointId}");
            }

            try
            {
                var veesCommand = CreateVeesCommand(request.caseNumber);
                artuTcpClient.client.Send(veesCommand.CommandString, veesCommand.PacketLength, SocketFlags.None);

                logger.Info($"<-------------------- Sending Command 0x02 ARTU->VEES with control action: {request.caseNumber}------------------------>");
                logger.Info($"ARTU to VEES [0x02]:", BitConverter.ToString(veesCommand.CommandString, 0, veesCommand.PacketLength).Replace("-", " "));

                return new VeeCommandControlResponseDto { IsSuccess = true, Message = CommonMessages.OperationSuccessful };
            }
            catch (Exception ex)
            {
                logger.Error(ex, "Error while sending command 0x02 to VEES");
                return new VeeCommandControlResponseDto { IsSuccess = false, Message = CommonMessages.OperationUnsuccessful };
            }
        }

        private PacketModel CreateVeesCommand(int actionCommand)
        {
            var xmlTemplate = CommonConstants.xmlAcknowledgmentTemplate;
            var message = GetMessage(actionCommand);
            var xml = string.Format(xmlTemplate, actionCommand, message);
            var bytes = Encoding.GetEncoding(CommonConstants.XmlDeclarationEncoding).GetBytes(xml);

            return _utilityHelper.CreatePacketFromXml(CommonConstants.Send0x02VeesCommand, bytes);
        }

        public string GetMessage(int actionCommand)
        {
            switch (actionCommand)
            {
                case 0: return CommonConstants.StopDetection;
                case 1: return CommonConstants.StartChecking;
                case 2: return CommonConstants.SkipCurrentDevice;
                case 3: return CommonConstants.ClearCurrentResults;
                case 4: return CommonConstants.DetectionCompleted;
                case 9: return CommonConstants.SiteClosed;
                case 10: return CommonConstants.IdleAndOpen;
                default: throw new ArgumentException(CommonConstants.InvalidVeesAction, nameof(actionCommand));
            }
        }
    }
}


