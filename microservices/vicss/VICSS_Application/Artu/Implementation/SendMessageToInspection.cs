namespace VICSS.Service.Artu.Implementation
{
    using System.Diagnostics.CodeAnalysis;
    using System.Xml;
    using System.Xml.Linq;
    using Azure.Core;
    using MediatR;
    using Newtonsoft.Json;
    using NLog;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Artu.Domain;
    using VICSS.Service.Artu.EventHandlers;
    using VICSS.Service.Artu.Helper;
    using VICSS.Service.Artu.Interface;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;

    [ExcludeFromCodeCoverage]
    public class SendMessageToInspection : ISendMessageToInspection
    {
        #region Private Variable
        private readonly string startInspectionProducerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region Constructor
        [ExcludeFromCodeCoverage]
        public SendMessageToInspection(IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, IServiceScopeFactory scopeFactory, IMediator mediator)
        {
            this.consumer = consumer;
            this.producer = kafkaProducer;
            this.startInspectionProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            this.userId = config.GetValue<string>("KafkaConfig:UserName");
            this.password = config.GetValue<string>("KafkaConfig:Password");
        }
        #endregion

        #region Public Method
        /// <summary>
        /// To send the 19W17 to Inspection service using Kafka
        /// </summary>
        /// <param name="lane"></param>
        /// <param name="station"></param>
        /// <param name="artuStatus"></param>
        /// <param name="veesStatus"></param>
        /// <returns></returns>
        /// 

        [ExcludeFromCodeCoverage]
        public Task SendArtuStatusToVics(string lane, string station, string artuStatus, string veesStatus)
        {
            logger.Info($"SendArtuStatusToVics initiated");
            SetVeesStatus request = new SetVeesStatus
            {
                //Set the properties of the request
                LaneId = lane,
                StationId = station,
                artu_status = artuStatus,
                vees_status = veesStatus
            };

            //Create XML document from request
            XDocument xmlDoc = new XDocument(
                new XElement("root",
                    new XElement("WriteCondition",
                        new XElement("lane_no", request.LaneId),
                        new XElement("station", request.StationId),
                        new XElement("art_status", request.artu_status),
                        new XElement("vee_status", request.vees_status)
                    )
                )
            );
            string xmlstring = xmlDoc.ToString();

            ProcessMessageForKafka(xmlstring, CommonConstants.MessageTypeCode[0], lane, station);
            return Task.CompletedTask;
        }

        /// <summary>
        /// To get the data to Inspection service for test result
        /// </summary>
        /// <param name="testResultXml"></param>
        /// <param name="testId"></param>
        /// <param name="lane"></param>
        /// <param name="station"></param>
        /// <returns></returns>

        [ExcludeFromCodeCoverage]
        public async Task SendTestResults(string testResultXml, string testId, string lane, string station)
        {
            logger.Info($"<-----------------------------------------ARTU received test data {testResultXml} ----------------------------------------->");

            logger.Info($"ARTU received test type {testId}");

            ArtuTestResultRequestDto requestDto = new()
            {
                TestResult = testResultXml,
                TypeOfMessage = testId
            };

            _ = SendTestResultToInspection(requestDto);

        }

        /// <summary>
        /// Kafka producer Method to send message to inspection service
        /// </summary>
        /// <param name="request"></param>
        /// 

        [ExcludeFromCodeCoverage]
        public async Task SendTestResultToInspection(ArtuTestResultRequestDto request)
        {
            try
            {
                // Load the XML string into an XmlDocument
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(request.TestResult);

                // Convert the XmlDocument to a JSON string
                string jsonBody = JsonConvert.SerializeXmlNode(doc);

                KafKaTestRequestDto requestDto = new()
                {
                    eventID = Guid.NewGuid().ToString(),
                    typeofMessage = request.TypeOfMessage,
                    xmlBody = jsonBody
                };
                // log at what time this message is sent
                // check when the response is received, if it is not received, discard the message and remove from dictionary.
                var producerConfig = await producer.GetKafkaProducerConfig(startInspectionProducerServer, userId, password);
                await producer.ProduceMessage(producerConfig, requestDto, requestDto.eventID, KafkaTopicsConstant.GetArtuTestResultProducerTopic);
                logger.Info($"[{request.TypeOfMessage} Message] ARTU to VICS");
                logger.Info($"<----------------------------------------- Sent Test Result to Inspection Service: {request.TypeOfMessage}, {request.TestResult}----------------------------------------->");
            }
            catch (Exception ex)
            {
                logger.Error($"ArtuTestResultHandler Exception: {ex.Message}");
            }
        }

        #endregion

        #region PrivateMethod

        [ExcludeFromCodeCoverage]
        private void ProcessMessageForKafka(string xmlMessage, string typeOfMessage, string lane, string station)
        {
            string JsonMessage = ConvertXmltoString(xmlMessage);

            KafKaTestRequestDto requestDto = new()
            {
                eventID = Guid.NewGuid().ToString(),
                typeofMessage = typeOfMessage,
                xmlBody = JsonMessage
            };
            _ = SendMessageToKafka(requestDto, lane, station);
        }

        /// <summary>
        /// Send 19W17 to inspection service using Kafka producer
        /// </summary>
        /// <param name="kafkaTestRequest"></param>
        /// <param name="lane"></param>
        /// <param name="station"></param>
        /// 

        [ExcludeFromCodeCoverage]
        private async Task SendMessageToKafka(KafKaTestRequestDto kafkaTestRequest, string lane, string station)
        {
            try
            {
                var producerConfig = await producer.GetKafkaProducerConfig(startInspectionProducerServer, userId, password);
                await producer.ProduceMessage(producerConfig, kafkaTestRequest, kafkaTestRequest.eventID, KafkaTopicsConstant.GetArtuStatusProducerTopic);
                logger.Info($"<-----------------------------------------[{kafkaTestRequest.typeofMessage} Message] ARTU to VICS Communication ----------------------------------------->");
                logger.Info($"<-----------------------------------------Sent 19W17 to Inspection Service from ARTU: " +
                    $"{kafkaTestRequest.eventID}, {kafkaTestRequest.typeofMessage}, {kafkaTestRequest.xmlBody}----------------------------------------->");

                string keyTypeOfMessage = kafkaTestRequest.typeofMessage;
                GlobalDictionary._responseLaneStation.TryAdd(keyTypeOfMessage, (lane, station));
            }
            catch (Exception ex)
            {
                logger.Error(ex, $"An error occurred: {ex.Message}");
                logger.Info($"Stacktrace: {ex.StackTrace}");
            }
        }

        /// <summary>
        /// To convert the xml to string value
        /// </summary>
        /// <param name="xmlMessage"></param>
        /// <returns></returns>
        /// 

        [ExcludeFromCodeCoverage]
        private string ConvertXmltoString(string xmlMessage)
        {

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xmlMessage);

            return JsonConvert.SerializeXmlNode(doc);
        }
        #endregion
    }
}
