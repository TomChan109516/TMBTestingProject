namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using System.Text.Json;
    using System.Threading;
    using System.Threading.Tasks;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.Helper;
    using VICSS.Shared.Models.Artu;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;


    /*
    public class CheckTestStatusHandler : IRequestHandler<GetHeadlampTestDataRequestDto, GetStatusResponseDto>
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

        /// <summary>
        /// Initializes a new instance of the <see cref="CheckTestStatusHandler"/> class.
        /// </summary>
        public CheckTestStatusHandler
            (IMapper mapper, IKafkaConsumer consumer, IKafkaProducer kafkaProducer, IConfiguration config)
        {
            this.mapper = mapper;
            this.consumer = consumer;
            this.producer = kafkaProducer;

            StartTestConsumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            StartTestProducerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            userId = config.GetValue<string>("KafkaConfig:UserName");
            password = config.GetValue<string>("KafkaConfig:Password");
        }

        /// <summary>
        /// Handles the request to check the status of a headlamp test and acknowledges the Artu system.
        /// </summary>

        public async Task<GetTestStatusResponseDto> Handle(GetHeadlampTestDataRequestDto request, CancellationToken cancellationToken)
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
            return response;
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

            var producerConfig = await producer.GetKafkaProducerConfig(StartTestProducerServer, userId, password);
            await producer.ProduceMessage(producerConfig, requestDto, requestDto.eventID, KafkaTopicsConstant.GetArtuTestResultConsumerTopic);
        }
    }*/
}
