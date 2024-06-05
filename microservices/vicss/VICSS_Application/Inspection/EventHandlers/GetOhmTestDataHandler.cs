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
    public class GetOhmTestDataHandler : IRequestHandler<GetOhmDataResultRequestDto, GetOhmDataResultResponseDto>
    {
        private readonly IMapper mapper;
        private readonly string StartTestConsumerServer;
        private readonly string StartTestProducerServer;
        private readonly string userId;
        private readonly string password;
        private readonly IKafkaConsumer consumer;
        private readonly IKafkaProducer producer;

        /// <summary>
        /// Initializes a new instance of the <see cref="GetOhmTestDataHandler"/> class.
        /// </summary>
        public GetOhmTestDataHandler
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
        public async Task<GetOhmDataResultResponseDto> Handle(GetOhmDataResultRequestDto request, CancellationToken cancellationToken)
        {
            GetOhmDataResultResponseDto response = new();
            if (GlobalDataSaver.SaveOhmTestData != null && GlobalDataSaver.SaveOhmTestData.ContainsKey(request.AppointmentNumber))
            {
                var values = GlobalDataSaver.SaveOhmTestData[request.AppointmentNumber];
                if (values != null && values.LaneNo == request.LaneId)
                {
                    AcknoweldgeArtu();
                    response.OhmResultDto = values;
                    response.Message = CommonMessages.TestCompleted;

                    GlobalDataSaver.SaveOhmTestData.Remove(request.AppointmentNumber);
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
    }
}
