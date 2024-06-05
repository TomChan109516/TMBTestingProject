using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_Backend_API.Controllers;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCS_API_Unit_Tests.Controllers
{
    public class AppointmentEnquiryControllerUnitTest
    {
        private Mock<IAppointmentService> mockAppointmentService;
        private Mock<IExamService> mockExamService;
        private Mock<ILogger<AppointmentController>> mockLogger;
        private AppointmentEnquiryController controller;
        public AppointmentEnquiryControllerUnitTest()
        {
            mockAppointmentService = new Mock<IAppointmentService>();
            mockExamService = new Mock<IExamService>();
            mockLogger = new Mock<ILogger<AppointmentController>>();
            controller = new AppointmentEnquiryController(mockAppointmentService.Object, mockExamService.Object, mockLogger.Object);
        }

        [Fact]
        public async Task GetAppointmentHistory_Returns200Status()
        {
            var data = new AppointmentHistoryResponse 
            {
                data = new List<AppointmentHistoryDto> 
                {
                    new AppointmentHistoryDto 
                    { 
                        AppointmentNumber=1,
                        AppointmentDate=DateTime.Now,
                        Reason="Test Reason"} },
                StatusCode = 200, 
                Message = "Succesfull" 
            };
            long appointmentNumber = 1;
            mockAppointmentService.Setup(i => i.GetAppointmentHistory(appointmentNumber)).ReturnsAsync(data);
            var result = await controller.GetAppointmentHistory(appointmentNumber);
            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);

        }
        [Fact]
        public async Task GetAppointmentHistory_ReturnsInternalServerError()
        {

            mockAppointmentService.Setup(x => x.GetAppointmentHistory(It.IsAny<long>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetAppointmentHistory(It.IsAny<long>()));
            Assert.Equal("Simulated Error", result.Message);
        }
    }
}
