using AutoMapper;
using MediatR;
using System.Text.Json;
using VICSS.Infrastructure.Configuration.KafkaConfiguration;
using VICSS.Infrastructure.KafkaWrapper.Interface;
using VICSS.Service.Inspection.Domain;
using VICSS.Service.Inspection.Helper;
using VICSS.Shared.Models.Artu;
using VICSS.Shared.Models.Common;
using VICSS.Shared.Models.Kafka;

namespace VICSS.Service.Inspection.EventHandlers
{
    public class TestStatusEventHandler : IRequestHandler<GetTestStatusRequestDto, GetTestStatusResponseDto>
    {
        private readonly IMapper mapper;
        private readonly string StartTestConsumerServer;
        private readonly string StartTestProducerServer;
        private readonly string StartTestConsumerTopic;
        private readonly string StartTestProducerTopic;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;
        private readonly ILogger<TestStatusEventHandler> logger;
        private string trackingId = Guid.NewGuid().ToString();

        public TestStatusEventHandler(
            IMapper mapper, IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config, ILogger<TestStatusEventHandler> logger)
        {
            this.mapper = mapper;
            this.consumer = consumer;
            this.producer = kafkaProducer;

            StartTestConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            StartTestProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
            this.logger = logger;
        }

        public async Task<GetTestStatusResponseDto> Handle(GetTestStatusRequestDto request, CancellationToken cancellationToken)
        {
            GetTestStatusResponseDto responseDto = new();
            Enum.TryParse(request.TestName.ToUpper(), out TestType testType);


            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "TestStatusEventHandler", $"Request for {testType.ToString()}");

            switch (testType)
            {
                case TestType.HT:
                    responseDto = ResponseHeadLampTestData(request);
                    break;
                case TestType.OHM:
                    request.StationId = "A";
                    responseDto = ResponseOHMTestData(request);
                    break;
                case TestType.Break:
                    break;
                default:
                    break;
            }

            return responseDto;
        }


        private GetTestStatusResponseDto ResponseHeadLampTestData(GetTestStatusRequestDto request)
        {
            GetTestStatusResponseDto response = new();

            if (GlobalDataSaver.SaveHeadLampTestData != null && GlobalDataSaver.SaveHeadLampTestData.ContainsKey(request.AppointmentNumber))
            {
                var values = GlobalDataSaver.SaveHeadLampTestData[request.AppointmentNumber];
                if (values != null && values.LaneNo == request.LaneId)
                {
                    AcknoweldgeArtu();
                    response.HeadLampData = values;
                    response.Message = CommonMessages.TestCompleted;

                    GlobalDataSaver.SaveHeadLampTestData.Remove(request.AppointmentNumber);
                }
                else
                {
                    response.Message = CommonMessages.TestInProgress;
                }
            }
            else
            {
                response.Message = CommonMessages.TestInProgress;
            }

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "TestStatusEventHandler", $"ResponseHeadLampTestData : {JsonSerializer.Serialize(response)}");
            return response;
        }

        private GetTestStatusResponseDto ResponseOHMTestData(GetTestStatusRequestDto request)
        {
            var key = (request.LaneId, request.StationId);

            GetTestStatusResponseDto responseDto = new();

            if (GlobalDataSaver.SaveOhmTestResult != null &&
                GlobalDataSaver.SaveOhmTestResult.ContainsKey(key))
            {
                var values = GlobalDataSaver.SaveOhmTestResult[key];

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "TestStatusEventHandler", $"Values after filteration {JsonSerializer.Serialize(values)}");

                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "TestStatusEventHandler", $"Current date time {DateTime.Now.ToString()}");

                if (values != null && values.LaneNo == request.LaneId &&
                    values.InspectionEndTime.Date == DateTime.Today
                    && DateTime.SpecifyKind(values.InspectionEndTime, DateTimeKind.Utc) > DateTime.UtcNow.AddMinutes(-10)
                    ) //Check if the test end only before 5 mins only. 
                {
                    AcknoweldgeArtu();
                    responseDto.OhmResultDto = values;
                    responseDto.Message = CommonMessages.TestCompleted;

                    GlobalDataSaver.SaveOhmTestResult.Remove(key);
                    logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                    "TestStatusEventHandler", "Data recieved and sent to SSE Event for OHM test.");

                }
                else
                {
                    responseDto.Message = CommonMessages.TestInProgress;
                }
            }
            else
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "TestStatusEventHandler", $"Dictonary Is Null or doesn't match with the key");
                responseDto.Message = CommonMessages.TestInProgress;
            }

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "TestStatusEventHandler", $"ResponseOHMTestData :  {JsonSerializer.Serialize(responseDto)}");

            /* OLD CODE
            if (GlobalDataSaver.SaveOhmTestData != null && GlobalDataSaver.SaveOhmTestData.ContainsKey(request.AppointmentNumber))
            {
                var values = GlobalDataSaver.SaveOhmTestData[request.AppointmentNumber];
                if (values != null && values.LaneNo == request.LaneId)
                {
                    AcknoweldgeArtu();
                    responseDto.OhmResultDto = values;
                    responseDto.Message = CommonMessages.TestCompleted;

                    GlobalDataSaver.SaveOhmTestData.Remove(request.AppointmentNumber);

                    logger.LogInformation($"HeadLamp Test Acknoweldg Done  " +
                        $"{JsonSerializer.Serialize(responseDto.OhmResultDto)}");
                }
                else
                {
                    responseDto.Message = CommonMessages.TestInProgress;
                }
            }
            else
            {
                responseDto.Message = CommonMessages.TestInProgress;
            }
            */

            return responseDto;
        }

        /// <summary>
        /// Acknowledges the Artu system after checking the test status.
        /// </summary>
        private async void AcknoweldgeArtu()
        {
            GetArtuMessageResponseDto message = new();
            message.code = CommonConstants.Code[1];
            message.message = CommonMessages.OperationSuccessful;
            string data = JsonSerializer.Serialize(message);
            KafKaTestRequestDto requestDto = new KafKaTestRequestDto()
            {
                eventID = Guid.NewGuid().ToString(),
                typeofMessage = CommonConstants.MessageTypeCode[3],
                xmlBody = data
            };

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "TestStatusEventHandler", "AcknoweldgeArtu Going to Acknoweldge Artu");

            var producerConfig = await producer.GetKafkaProducerConfig(StartTestProducerServer, userId, password);
            await producer.ProduceMessage(producerConfig, requestDto, requestDto.eventID, KafkaTopicsConstant.GetArtuTestResultConsumerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName,
                                "TestStatusEventHandler", "Acknoweldge Artu Done");
        }
    }
}

