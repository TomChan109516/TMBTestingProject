namespace VICSS.Service.Inspection.EventHandlers
{
    using System.Linq;
    using System.Net;
    using System.Reflection;
    using System.Text.Json;
    using MediatR;
    using VICSS.Infrastructure.Configuration.KafkaConfiguration;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Infrastructure.KafkaWrapper.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;
    using VICSS.Shared.Models.Inspection;
    using VICSS.Shared.Models.Kafka;
    using VICSS.Shared.Models.LaneConfiguration;

    public class AvailableQuotaForSelectedDateHandler : IRequestHandler<GetAvailableQuotaForSelectedDateRequestDto, GetAvailableQuotaForSelectedDateResponseDto>
    {
        private readonly IGenericRepository<InspectionDBContext, InspectionScheduleDetail> genericRepository;
        private readonly ILogger<AvailableQuotaForSelectedDateHandler> logger;
        private readonly IKafkaProducer producer;
        private readonly IKafkaConsumer consumer;
        private readonly IConfiguration config;

        public AvailableQuotaForSelectedDateHandler(IGenericRepository<InspectionDBContext, InspectionScheduleDetail> genericRepository, ILogger<AvailableQuotaForSelectedDateHandler> logger, IKafkaProducer producer, IKafkaConsumer consumer, IConfiguration config)
        {
            this.genericRepository = genericRepository;
            this.logger = logger;
            this.producer = producer;
            this.consumer = consumer;
            this.config = config;
        }

        /// <summary>
        /// Retrives timeslot based on inspection schedule ID,weekday name,vehicle class and exam code.
        /// </summary>
        /// <param name="request"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public async Task<GetAvailableQuotaForSelectedDateResponseDto> Handle(GetAvailableQuotaForSelectedDateRequestDto request, CancellationToken cancellationToken)
        {
            GetAvailableQuotaForSelectedDateResponseDto getAvailableQuotaForSelectedDateResponseDto = new GetAvailableQuotaForSelectedDateResponseDto();
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AvailableQuotaForSelectedDateHandler", "AvailableQuotaForSelectedDateHandler Initiated");

                //To Do
                //This just takes quota from DB and sends to front end.
                //Additional logic will be required to find out remaining quota for a specific lane.
                //Additional logic to be added.
                if (ValidateRequest(request.examSlotAvailabilityDetailsRequestDto))
                {

                    //select inspection schedule based on id and weekday 
                    List<InspectionScheduleDetail> selectedData = (List<InspectionScheduleDetail>)await genericRepository.GetByQuery(
                        query =>
                            query.InspectionScheduleId == request.examSlotAvailabilityDetailsRequestDto.InspectionScheduleId &&
                            query.WeekDayName.ToUpper() == request.examSlotAvailabilityDetailsRequestDto.WeekDayName.ToUpper(),
                         param1 => param1.InspectionSchedules, param2 => param2.InspectionScheduleExamCodes, param3 => param3.InspectionScheduleVhclCls
                         );

                    if (selectedData?.Count > 0)
                    {
                        List<LanesByCenterIdDto> laneTimeSlotDetails = await GetLanesByCentreId(selectedData.FirstOrDefault().InspectionSchedules.CentreId, trackingId);

                        //Prepare response if vehicle class and exam code is matched.
                        selectedData.ForEach(item =>
                            {
                                if (
                                    item.InspectionScheduleVhclCls?.Where(vehicleClass => vehicleClass.VehicleClassId == request.examSlotAvailabilityDetailsRequestDto.VehicleClassId).Count() > 0 &&
                                    item.InspectionScheduleExamCodes?.Where(vehicleExam => request.examSlotAvailabilityDetailsRequestDto.InspectionTypeId.Contains(vehicleExam.InspectionTypeId)).Count() > 0
                                    )
                                {

                                    var laneTimeSlots = laneTimeSlotDetails.FirstOrDefault(i => (i.LaneId == item.PhysicalLaneId || i.LaneId == item.VirtualLaneId))?.laneTimeSlots;

                                    var laneTimeSlot = laneTimeSlots?.Where(filter => item.TimeSlot.StartsWith(filter.TimeSlotBegin.ToString(CommonConstants.LaneTimeSlotTimeFormat)))?.FirstOrDefault()?.TimeSlotId;

                                    getAvailableQuotaForSelectedDateResponseDto.examSlotsAvailabilityDtos.Add(new ExamSlotsAvailabilityDto
                                    {
                                        Quota = item.Quota,
                                        TimeSlot = item.TimeSlot,
                                        PhysicalLaneId = item.PhysicalLaneId,
                                        VirtualLaneId = item.VirtualLaneId,
                                        DayOfSession = CommonConstants.DaySessionCode.FirstOrDefault(x => item.DaySessionCode.StartsWith(x)),
                                        LaneTimeSlotId = laneTimeSlot,
                                    });
                                }
                            }
                        );
                        getAvailableQuotaForSelectedDateResponseDto.examSlotsAvailabilityDtos  = getAvailableQuotaForSelectedDateResponseDto.examSlotsAvailabilityDtos.OrderBy(slot => slot.TimeSlot).ToList();
                        getAvailableQuotaForSelectedDateResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        getAvailableQuotaForSelectedDateResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    getAvailableQuotaForSelectedDateResponseDto.HttpStatusCode = HttpStatusCode.BadRequest;
                }

            }
            catch (Exception ex)
            {

                getAvailableQuotaForSelectedDateResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                //getAvailableQuotaForSelectedDateResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                getAvailableQuotaForSelectedDateResponseDto.ErrorMessage = ex.Message.ToString();
                //To Do
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "AvailableQuotaForSelectedDateHandler", ex.ToString());
            }

            return getAvailableQuotaForSelectedDateResponseDto;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="centreId"></param>
        /// <returns></returns>
        private async Task<List<LanesByCenterIdDto>> GetLanesByCentreId(string centreId, string trackingId)
        {
            List<LanesByCenterIdDto> lanesByCenterIdDtos = new List<LanesByCenterIdDto>();

            List<string> centreIds = new List<string> { centreId };
            KafkaRequestLaneDetailsByCentreIdDto kafkaRequestLaneDetailsByCentreIdDto = new KafkaRequestLaneDetailsByCentreIdDto(trackingId, centreIds);
            //KafkaResponseLaneDetailsByCentreIdDto kafkaResponseLaneDetailsByCentreIdDto = new KafkaResponseLaneDetailsByCentreIdDto();

            string producerServer = config.GetValue<string>("KafkaConfig:ProducerServer");
            string consumerServer = config.GetValue<string>("KafkaConfig:ConsumerServer");
            string userId = config.GetValue<string>("KafkaConfig:UserName");
            string password = config.GetValue<string>("KafkaConfig:Password");

            var producerConfig = await producer.GetKafkaProducerConfig(producerServer, userId, password);
            await producer.ProduceMessage(producerConfig, kafkaRequestLaneDetailsByCentreIdDto, kafkaRequestLaneDetailsByCentreIdDto.TrackingUuid, KafkaTopicsConstant.GetLaneDetailsByCentreProducerTopic);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetLanesByCentreId", "Message Sent");

            //Wait for response and consume message
            var consumerConfig = await consumer.GetKafkaConsumerConfig(consumerServer, userId, password, String.Format("{0}-{1}", KafkaConsumerGroupConstant.GeLaneDetailsByCentreConsumerGroupForResponse, kafkaRequestLaneDetailsByCentreIdDto.TrackingUuid));
            consumerConfig.AutoOffsetReset = Confluent.Kafka.AutoOffsetReset.Earliest;
            var consumedMessage = await consumer.ConsumeMessageByEventId(consumerConfig, kafkaRequestLaneDetailsByCentreIdDto.TrackingUuid, KafkaTopicsConstant.GetLaneDetailsByCentreConsumerTopic, CancellationToken.None);

            var kafkaResponseLaneDetailsByCentreIdDto = JsonSerializer.Deserialize<KafkaResponseLaneDetailsByCentreIdDto>((string)consumedMessage);

            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetLanesByCentreId", "Message Recieved");

            return kafkaResponseLaneDetailsByCentreIdDto.LanesDto;
        }

        /// <summary>
        /// validate request.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        private bool ValidateRequest(ExamSlotAvailabilityDetailsRequestDto request)
        {
            bool status = false;

            if (!string.IsNullOrEmpty(request.Date.ToString()) &&
                !string.IsNullOrEmpty(request.WeekDayName) &&
                !string.IsNullOrEmpty(request.VehicleClassId) &&
                !string.IsNullOrEmpty(request.InspectionScheduleId) &&
                (request.InspectionTypeId?.Count > 0)
                )
            {
                status = true;
            }
            return status;
        }
    }
}
