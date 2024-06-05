namespace VICSS.Test.Service.Inspection.UnitTest
{
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;
    using NLog;
    using VICSS.Infrastructure.KafkaWrapper.Interface;


    public class AvailableQuotaForSelectedDateHandlerUnitTest
    {
        [Fact]

        public void AvailableQuotaForSelectedDateErrorTestCase()
        {                        
            // Arrange
            var mockRepository = new Mock<IGenericRepository<InspectionDBContext, InspectionScheduleDetail>>();
            var logger = new Mock<ILogger<AvailableQuotaForSelectedDateHandler>>();
            var kafkaProducer = new Mock<IKafkaProducer>();
            var kafkaConsumer = new Mock<IKafkaConsumer>();
            var configMock = new Mock<IConfiguration>();

            // Setup the repository to throw an exception when GetByQuery is called
            mockRepository.Setup(repo => repo.GetByQuery(It.IsAny<Expression<Func<InspectionScheduleDetail, bool>>>(), It.IsAny<Expression<Func<InspectionScheduleDetail, object>>[]>()))
                .ThrowsAsync(new Exception());

            var handler = new AvailableQuotaForSelectedDateHandler(mockRepository.Object,logger.Object,kafkaProducer.Object,kafkaConsumer.Object, configMock.Object);

            // Act
            var returnedData = handler.Handle(new GetAvailableQuotaForSelectedDateRequestDto(new Shared.Models.Inspection.ExamSlotAvailabilityDetailsRequestDto { WeekDayName="friday", InspectionScheduleId="001",VehicleClassId = "001",InspectionTypeId = new List<string>{ "001" ,"002"}, Date = DateTime.Now }), CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.InternalServerError, returnedData.Result.HttpStatusCode);
            //Assert.Equal(CommonErrorMessage.ErrorMessage, returnedData.Result.ErrorMessage);
        }

        [Fact]
        public void AvailableQuotaForSelectedDateDataNotFoundTestCase()
        {            
            // Arrange            
            var mockRepository = new Mock<IGenericRepository<InspectionDBContext, InspectionScheduleDetail>>();
            var logger = new Mock<ILogger<AvailableQuotaForSelectedDateHandler>>();
            var kafkaProducer = new Mock<IKafkaProducer>();
            var kafkaConsumer = new Mock<IKafkaConsumer>();
            var configMock = new Mock<IConfiguration>();

            var handler = new AvailableQuotaForSelectedDateHandler(mockRepository.Object, logger.Object, kafkaProducer.Object, kafkaConsumer.Object, configMock.Object);
            var request = new GetAvailableQuotaForSelectedDateRequestDto(new Shared.Models.Inspection.ExamSlotAvailabilityDetailsRequestDto
            {

                InspectionScheduleId = "001",
                WeekDayName = "Monday",
                VehicleClassId = "001",
                InspectionTypeId = new List<string> { "001" }

            });
            mockRepository.Setup(repo => repo.GetByQuery(
                It.IsAny<Expression<Func<InspectionScheduleDetail, bool>>>(),
                It.IsAny<Expression<Func<InspectionScheduleDetail, object>>[]>()))
                .ReturnsAsync(new List<InspectionScheduleDetail>());

            // Act
            var returnedData = handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.NotFound, returnedData.Result.HttpStatusCode);
            Assert.Empty(returnedData.Result.examSlotsAvailabilityDtos);

        }

        //[Fact]
        public void AvailableQuotaForSelectedDateDataFoundTestCase()
        {            
            //Arrange
            var mockRepository = new Mock<IGenericRepository<InspectionDBContext, InspectionScheduleDetail>>();
            var logger = new Mock<ILogger<AvailableQuotaForSelectedDateHandler>>();
            var kafkaProducer = new Mock<IKafkaProducer>();
            var kafkaConsumer = new Mock<IKafkaConsumer>();
            var configMock = new Mock<IConfiguration>();
            var handler = new AvailableQuotaForSelectedDateHandler(mockRepository.Object, logger.Object, kafkaProducer.Object, kafkaConsumer.Object, configMock.Object);
            var request = new GetAvailableQuotaForSelectedDateRequestDto(new Shared.Models.Inspection.ExamSlotAvailabilityDetailsRequestDto
            {
                InspectionScheduleId = "001",
                WeekDayName = "Monday",
                VehicleClassId = "001",
                InspectionTypeId =new List<string> { "001" }
            });
            var inspectionScheduleDetail = new InspectionScheduleDetail
            {
                InspectionScheduleId = "001",
                WeekDayName = "Monday",
                Quota = 10,
                TimeSlot = "10:00-10:45",
                PhysicalLaneId = "001",
                VirtualLaneId = "001",
                DaySessionCode = "AM",
                InspectionScheduleVhclCls = new List<InspectionScheduleVhclCls> { new InspectionScheduleVhclCls { VehicleClassId = "001" } },
                InspectionScheduleExamCodes = new List<InspectionScheduleExamCode> { new InspectionScheduleExamCode { InspectionTypeId = "001" } }
            };

            mockRepository.Setup(repo => repo.GetByQuery(
                It.IsAny<Expression<Func<InspectionScheduleDetail, bool>>>(),
                It.IsAny<Expression<Func<InspectionScheduleDetail, object>>[]>()))
                .ReturnsAsync(new List<InspectionScheduleDetail> { inspectionScheduleDetail });
            // Act
            var returnedData = handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal(HttpStatusCode.OK, returnedData.Result.HttpStatusCode);
            Assert.Single(returnedData.Result.examSlotsAvailabilityDtos);
            Assert.Equal(10, returnedData.Result.examSlotsAvailabilityDtos[0].Quota);
            Assert.Equal("10:00-10:45", returnedData.Result.examSlotsAvailabilityDtos[0].TimeSlot);
        }
    }
}
