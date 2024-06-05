namespace VICSS.Service.Vehicle.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Net;
    using System.Text.Json;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Vehicle;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Vehicle.Domain;
    using VICSS.Shared.Models.Centre;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Kafka;
    using VICSS.Shared.Models.Vehicle;

    public class SearchWatchlistReasonHandler : IRequestHandler<SearchWatchlistReasonRequestDto, SearchWatchlistReasonResponseDto>
    {
        private readonly IGenericRepository<VehicleDBContext, WatchlistReason> genericRepository;
        private readonly ILogger<SearchWatchlistReasonHandler> logger;
        private readonly IKafkaProducer producer;
        private readonly IKafkaConsumer consumer;
        private readonly IConfiguration config;
        public SearchWatchlistReasonHandler(
            IGenericRepository<VehicleDBContext, WatchlistReason> genericRepository,
            IMapper mapper,
            ILogger<SearchWatchlistReasonHandler> logger,
            IKafkaConsumer consumer,
            IKafkaProducer producer,
            IConfiguration config)
        {
            this.genericRepository = genericRepository;
            this.logger = logger;
            this.producer = producer;
            this.consumer = consumer;
            this.config = config;
        }
        public async Task<SearchWatchlistReasonResponseDto> Handle(SearchWatchlistReasonRequestDto request, CancellationToken cancellationToken)
        {
            SearchWatchlistReasonResponseDto response = new();
            List<WatchlistReason> watchlistReasons = null;
            string trackingId = Guid.NewGuid().ToString();

            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchWatchlistReasonHandler", $"SearchWatchlistReasonHandler Initiated With RequestData {JsonSerializer.Serialize(request)}");

                if (AreAllStringPropertiesNullOrEmpty(request))
                {
                    watchlistReasons = (List<WatchlistReason>)await genericRepository.GetByQuery(wr => wr.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode);
                }
                else
                {
                    watchlistReasons = (List<WatchlistReason>)await genericRepository.GetByQuery(CreateSearchQuery(request));
                }
                if (watchlistReasons.Count > 0)
                {
                    var taskCentreData = Task.Run(() => GetCentres(CommonConstants.AllStatus, trackingId));
                    taskCentreData.Wait(cancellationToken);
                    var centreData = taskCentreData.Result;
                    if (centreData != null)
                    {
                        response.searchWatchlistReason = (from WatchlistReason in watchlistReasons
                                                          join centre in centreData on WatchlistReason.CentreId equals centre.CentreId
                                                          select new SearchWatchlistReasonDto
                                                          {
                                                              Id = WatchlistReason.Id,
                                                              CentreId = WatchlistReason.CentreId,
                                                              CentreCode = centre.CentreCode,
                                                              WatchlistReasonType = WatchlistReason.WatchlistReasonType.
                                                              ToString().Contains(CommonConstants.WatchlistReasonTypeWatch)
                                                              ? CommonConstants.WatchlistReasonTypeWatchString : CommonConstants.WatchlistReasonTypeAlertString,
                                                              ReasonCode = WatchlistReason.ReasonCode,
                                                              Description = WatchlistReason.Description,
                                                              ActiveIndicator = WatchlistReason.ActiveIndicator,
                                                              SystemRecordIndicator = WatchlistReason.SystemRecordIndicator
                                                          }).ToList();
                        response.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        response.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    response.HttpStatusCode = HttpStatusCode.NotFound;
                }

            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "SearchWatchlistReasonHandler", ex.ToString());
            }
            return response;
        }
        private async Task<List<CentresDto>> GetCentres(string status, string trackingId)
        {
            string producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            string consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            string userId = config.GetValue<string>("KafkaConfig:UserName");
            string password = config.GetValue<string>("KafkaConfig:Password");

            KafkaRequestCentreDto kafkaRequestCentreDto = new KafkaRequestCentreDto(trackingId, status);

            //Produce message
            var producerConfig = await producer.GetKafkaProducerConfig(producerServer, userId, password);
            await producer.ProduceMessage(producerConfig, kafkaRequestCentreDto, kafkaRequestCentreDto.TrackingUuid, KafkaTopicsConstant.GetCenterProducerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetCentres", "Message produced at GetCentres");

            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, userId, password, String.Format("{0}-{1}", KafkaConsumerGroupConstant.GetCentreConsumerGroupForResponse, trackingId));
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestCentreDto.TrackingUuid, KafkaTopicsConstant.GetCenterConsumerTopic, CancellationToken.None);

            KafkaResponseCentreDto kafkaResponseCentreDto = JsonSerializer.Deserialize<KafkaResponseCentreDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.AppointmentServiceName, "GetCentres", "Message Recieved at GetCentres");

            return kafkaResponseCentreDto.centres;
        }

        private Expression<Func<WatchlistReason, bool>> CreateSearchQuery(SearchWatchlistReasonRequestDto request)
        {
            return watchlistReason =>
            (string.IsNullOrEmpty(request.CentreId) || watchlistReason.CentreId == request.CentreId) &&
            (request.WatchlistReasonType == null || request.WatchlistReasonType.Length == 0 || request.WatchlistReasonType.Contains(watchlistReason.WatchlistReasonType)) &&
            (string.IsNullOrEmpty(request.ReasonCode) || watchlistReason.ReasonCode == request.ReasonCode) &&
            (string.IsNullOrEmpty(request.Description) || watchlistReason.Description == request.Description) &&
            (watchlistReason.ActiveIndicator == request.ActiveIndicator) &&
            (string.IsNullOrEmpty(request.SystemRecordIndicator) || watchlistReason.SystemRecordIndicator == request.SystemRecordIndicator) &&
            (watchlistReason.LastRecordTransactionTypeCode != CommonConstants.DeleteTranTypeCode);
        }

        public static bool AreAllStringPropertiesNullOrEmpty(object obj)
        {
            return obj.GetType().GetProperties()
                .Where(p => p.PropertyType == typeof(string))
                .All(p => string.IsNullOrEmpty((string)p.GetValue(obj)));
        }
    }
}
