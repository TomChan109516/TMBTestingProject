using Newtonsoft.Json;
namespace VICSS.Service.Inspection.Helper
{
    using NLog;
    using System.Text.Json;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Artu;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;

    /// <summary>
    /// Processes Kafka messages related to inspections.
    /// </summary>
    public class ProcessKafkaMessage
    {
        private readonly Logger logger = LogManager.GetCurrentClassLogger();

        /// <summary>
        /// Reads and processes a Kafka message.
        /// </summary>
        public object ReadMessage(KafKaTestRequestDto recievedMessage)
        {
            try
            {
                //Enum.TryParse(recievedMessage.typeofMessage, out MessageTypeCode messageType);

                if (recievedMessage != null && !string.IsNullOrEmpty(recievedMessage.typeofMessage) &&
                    recievedMessage.typeofMessage == CommonConstants.MessageTypeCode[0])
                {

                    StartInspectionXmlCondition startInspectionXmlCondition = ExtractWriteCondition(recievedMessage.xmlBody);
                    ProcessFirstMessageFromArtu(startInspectionXmlCondition);

                    logger.Info($"------------------------------ ProcessKafkaMessage VEES STATUS -----------------------------------------");

                    return null!;
                }

                if (recievedMessage != null && !string.IsNullOrEmpty(recievedMessage.typeofMessage) &&
                    recievedMessage.typeofMessage == CommonConstants.MessageTypeCode[2])
                {

                    logger.Info($"------------------------------ ProcessKafkaMessage HLT TEST RESULT -----------------------------------------" +
                        $"Data recieved for HLT test result {recievedMessage.xmlBody}");

                    HeadLampTestResultDto testData = ExtractHeadlampTest(recievedMessage.xmlBody);
                    HLTTestDataMessageFromArtu(testData);

                    return null!;
                }

                if (recievedMessage != null && !string.IsNullOrEmpty(recievedMessage.typeofMessage) &&
                    (recievedMessage.typeofMessage == CommonConstants.MessageTypeCode[4]
                    || recievedMessage.typeofMessage == CommonConstants.MessageTypeCode[5]))
                {

                    logger.Info($"------------------------------ ProcessKafkaMessage OHM TEST RESULT -----------------------------------------" +
                        $"Data recieved for OHM test result {recievedMessage.xmlBody}");

                    var ohmTestResult = ExtractOhmTest(recievedMessage.xmlBody);
                    if (ohmTestResult != null)
                        OhmTestDataMessageFromArtu(ohmTestResult);


                    return null!;
                }
            }
            catch (Exception EX)
            {
                logger.Error(EX);
            }
            return null;
        }

        /// <summary>
        /// Processes the first message from Artu.
        /// </summary>
        private void ProcessFirstMessageFromArtu(StartInspectionXmlCondition xmlDto)
        {
            if (GlobalDataSaver.SaveActiveVeesStation == null)
                GlobalDataSaver.SaveActiveVeesStation = [];


            if (xmlDto.Artu_Status == CommonConstants.Code[1])
            {
                if (!GlobalDataSaver.SaveActiveVeesStation.ContainsKey((xmlDto.Station, xmlDto.Lane_No)))
                {
                    //Do Other's checking also , Checking with the Current 
                    GlobalDataSaver.SaveActiveVeesStation.Add((xmlDto.Station, xmlDto.Lane_No), xmlDto);
                }

            }
        }


        /// <summary>
        /// Processes test data messages from Artu.
        /// </summary>
        private void HLTTestDataMessageFromArtu(HeadLampTestResultDto xmlDto)
        {
            if (GlobalDataSaver.SaveHeadLampTestData == null)
                GlobalDataSaver.SaveHeadLampTestData = [];


            if (xmlDto != null && !GlobalDataSaver.SaveHeadLampTestData.ContainsKey(xmlDto.AppointmentNo))
            {
                if (xmlDto.LeftMainIntensity > 0 || xmlDto.LeftMainVOffset > 0)
                {
                    //Do Other's checking also , Checking with the Current 
                    GlobalDataSaver.SaveHeadLampTestData.Add(xmlDto.AppointmentNo, xmlDto);
                }
            }
            else if (GlobalDataSaver.SaveHeadLampTestData.ContainsKey(xmlDto.AppointmentNo))
                GlobalDataSaver.SaveHeadLampTestData[xmlDto.AppointmentNo] = xmlDto;

        }

        private void OhmTestDataMessageFromArtu(OhmResultDto xmlDto)
        {
            var key = (xmlDto.LaneNo, "A");
            if (GlobalDataSaver.SaveOhmTestResult == null)
                GlobalDataSaver.SaveOhmTestResult = [];


            logger.Info($"OhmTestDataMessageFromArtu , XMLDTO value is {JsonSerializer.Serialize(xmlDto)}");

            if (xmlDto != null && !GlobalDataSaver.SaveOhmTestResult.ContainsKey(key))
            {
                /*
                if (xmlDto.AppointmentNo.ToString().ToLower().IndexOf(tempString.ToLower()) >= 0)
                {
                    xmlDto.AppointmentNo = xmlDto.AppointmentNo.Substring(xmlDto.AppointmentNo.ToString().ToLower().IndexOf(tempString.ToLower()));
                }
                */

                //Do Other's checking also , Checking with the Current 
                GlobalDataSaver.SaveOhmTestResult.Add(key, xmlDto);
            }
        }

        /// <summary>
        /// Extracts write condition from a JSON string.
        /// </summary>
        private StartInspectionXmlCondition ExtractWriteCondition(string json)
        {
            var root = JsonConvert.DeserializeObject<StartInspectionXmlDoc>(json);
            return root.startInspectionRootXmls.startInspectionXmls;
        }

        /// <summary>
        /// Extracts headlamp test data from a JSON string.
        /// </summary>
        private HeadLampTestResultDto ExtractHeadlampTest(string json)
        {
            var root = JsonConvert.DeserializeObject<HeadLampTestResult>(json);
            return root.headLampTestResultDto;
        }

        private OhmResultDto ExtractOhmTest(string json)
        {
            logger.Info($"OhmTestDataMessageFromArtu , Json Received {json}");
            var root = JsonConvert.DeserializeObject<OhmTestResult>(json);

            logger.Info($"OhmTestDataMessageFromArtu , Json after de-serialized {JsonSerializer.Serialize(root)}");
            return root.OhmTestResultDto;
        }
    }
}