

namespace VICSS.Service.Appointment.Helpers
{
    using Confluent.Kafka;
    using static Confluent.Kafka.ConfigPropertyNames;
    using VICSS.Shared.Models.Inspection;
    using VICSS.Shared.Models.Kafka;
    using AutoMapper;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using System.Text.Json;
    using VICSS.Infrastructure.DataAccess.Entities.Appointment;

    public class CommonFunctions
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<AppointmentDBContext, Appointment> genericRepository;
        private readonly IKafkaProducer producer;
        private readonly IKafkaConsumer consumer;
        private readonly IConfiguration config;

        public CommonFunctions()
        {
            
        }
        public CommonFunctions(IMapper mapper, IGenericRepository<AppointmentDBContext, Appointment> genericRepository, IKafkaProducer producer, IKafkaConsumer consumer, IConfiguration config)
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.producer = producer;
            this.consumer = consumer;
            this.config = config;
        }
        public async Task<List<InspectionDetailsDto>> GetInspectionForAppointments(List<string> inspectionId)
        {
            KafkaRequestInspectionDetailsByIdDto kafkaRequestInspectionDetailsByIdDto = new KafkaRequestInspectionDetailsByIdDto(Guid.NewGuid().ToString(), inspectionId);
            KafkaResponseInspectionDetailsByIdDto kafkaResponseInspectionDetailsByIdDto = new KafkaResponseInspectionDetailsByIdDto();

            string producerServer = config.GetValue<string>("KafkaConfig:getInspectionByIdProducerServer");
            string consumerServer = config.GetValue<string>("KafkaConfig:getInspectionByIdConsumerServer");
            string producerTopic = config.GetValue<string>("KafkaConfig:getInspectionByIdProducerTopic");
            string consumerTopic = config.GetValue<string>("KafkaConfig:getInspectionByIdConsumerTopic");

            var producerConfig = await producer.GetKafkaProducerConfig(producerServer, string.Empty, string.Empty);
            await producer.ProduceMessage(producerConfig, kafkaRequestInspectionDetailsByIdDto, kafkaRequestInspectionDetailsByIdDto.TrackingUuid, producerTopic);


            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, string.Empty, string.Empty);
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestInspectionDetailsByIdDto.TrackingUuid, consumerTopic, CancellationToken.None);

            kafkaResponseInspectionDetailsByIdDto = JsonSerializer.Deserialize<KafkaResponseInspectionDetailsByIdDto>((string)consumedMessage);

            return kafkaResponseInspectionDetailsByIdDto.InspectionDetailsDtos;
        }
    }
}
