namespace VICSS.Test.Service.Inspection.UnitTest
{
    using Microsoft.Extensions.Logging;
    using VICSS.Service.Inspection.Helper;
    using VICSS.Shared.Models.Inspection;


    public class GetStatusofTheStationHandlerTests
    {
        private readonly Mock<IMapper> mockMapper;
        private readonly Mock<ILogger<GetStatusofTheStationHandler>> mockLogger;
        private readonly Mock<LaneStationAppointmentManager> mockAppointmentManager;

        public GetStatusofTheStationHandlerTests()
        {
            mockMapper = new Mock<IMapper>();
            mockLogger = new Mock<ILogger<GetStatusofTheStationHandler>>();
            mockAppointmentManager = new Mock<LaneStationAppointmentManager>();
        }

        [Fact]
        public async Task Handle_ReturnsNoAppointment_WhenPrevStationNameIsLessThanOrEqualToZero()
        {
            // Arrange
            var handler = new GetStatusofTheStationHandler(mockMapper.Object, mockLogger.Object);
            var request = new GetStatusofTheStationRequestDto { Station = "A", LaneId = "1" };

            // Act
            var response = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal("No appointment", response.returnAppointmentNumber);
        }

        /*

        [Fact]
        public async Task Handle_ReturnsAppointmentNumber_WhenPrevStationNameIsAAndTotalTestCountIs2()
        {
            // Arrange
            var handler = new GetStatusofTheStationHandler(mockMapper.Object, mockLogger.Object);
            var request = new GetStatusofTheStationRequestDto { Station = "B", LaneId = "1" };
            mockAppointmentManager.Setup(m => m.GetAppointment(It.IsAny<string>(), It.IsAny<StationNames>()))
                .Returns(new ValuePariForActiveStation { TotalTestCount = 2, AppointmentNumber = "Appointment1" });

            // Act
            var response = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal("Appointment1", response.returnAppointmentNumber);
        }

        [Fact]
        public async Task Handle_ReturnsNoAppointment_WhenPrevStationNameIsAAndTotalTestCountIsNot2()
        {
            // Arrange
            var handler = new GetStatusofTheStationHandler(mockMapper.Object, mockLogger.Object);
            var request = new GetStatusofTheStationRequestDto { Station = "B", LaneId = "1" };
            mockAppointmentManager.Setup(m => m.GetAppointment(It.IsAny<string>(), It.IsAny<StationNames>()))
                .Returns(new ValuePariForActiveStation { TotalTestCount = 1, AppointmentNumber = "Appointment1" });

            // Act
            var response = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal("No appointment", response.returnAppointmentNumber);
        }

        [Fact]
        public async Task Handle_ReturnsNoAppointment_WhenActiveStationValuesIsNull()
        {
            // Arrange
            var handler = new GetStatusofTheStationHandler(mockMapper.Object, mockLogger.Object);
            var request = new GetStatusofTheStationRequestDto { Station = "B", LaneId = "1" };
            mockAppointmentManager.Setup(m => m.GetAppointment(It.IsAny<string>(), It.IsAny<StationNames>()))
                .Returns((ValuePariForActiveStation)null);

            // Act
            var response = await handler.Handle(request, CancellationToken.None);

            // Assert
            Assert.Equal("No appointment", response.returnAppointmentNumber);
        }

        */
    }

}