using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_Backend_API.Controllers;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCS_API_Unit_Tests.Controllers
{
    public class AttachmentControllerUnitTest
    {
        private readonly Mock<IAttachmentService> mockAttachmentService;
        private readonly Mock<ILogger<AttachmentController>> mockLogger;
        private readonly AttachmentController controller;
        public AttachmentControllerUnitTest()
        {
            mockAttachmentService = new Mock<IAttachmentService>();
            mockLogger = new Mock<ILogger<AttachmentController>>();
            controller = new AttachmentController(mockAttachmentService.Object, mockLogger.Object);
        }

        [Fact]
        public async Task GetAppointmentHistory_Returns200OKStatus()
        {
            var data = new List<AppointmentHistory_AttachmentResponse>
            {
                new AppointmentHistory_AttachmentResponse
                {
                    AppointmentNumber= 1,
                    AppointmentDate= DateTime.Now,
                    CentreCode="TY1",
                    ChassisNumber="TestChassisNumber",
                    PrimaryExamCode="001",
                    LaneId="1",
                    Result="pass"
                }
            };
            var chassisNumber = "test";
            mockAttachmentService.Setup(i=>i.GetAppointmentHistory(chassisNumber)).ReturnsAsync(data);
            var result = await controller.GetAppointmentHistory(chassisNumber);
           var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            
        }
        [Fact]
        public async Task GetAppointmentHistory_ReturnsBadRequestForInvalidChassisNumber()
        {
            var data = new List<AppointmentHistory_AttachmentResponse>
            {
                new AppointmentHistory_AttachmentResponse
                {
                    AppointmentNumber= 1,
                    AppointmentDate= DateTime.Now,
                    CentreCode="TY1",
                    ChassisNumber="TestChassisNumber",
                    PrimaryExamCode="001",
                    LaneId="1",
                    Result="pass"
                }
            };

            mockAttachmentService.Setup(i => i.GetAppointmentHistory(It.IsAny<string>())).ReturnsAsync(data);
            var result = await controller.GetAppointmentHistory(It.IsAny<string>()) as BadRequestObjectResult ;
            Assert.Equal("Chassis Number is required", result?.Value);
            Assert.Equal(400, result?.StatusCode);


        }
        [Fact]
        public async Task DeletePayment_ReturnsInternalServerError()
        {
            string request = "test";

            mockAttachmentService.Setup(i => i.GetAppointmentHistory(request)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetAppointmentHistory(request));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task SearchAttachment_Returns200OKStatus()
        {
            var data = new List<AttachmentResponse>
            {
                new AttachmentResponse
                {
                    AppointmentNumber= 1,
                    SubmissionDateTime= DateTime.Now,
                    AdditionalMessage="",                   
                    File= "a",
                    Description="", 
                    CentreCode="TY1",
                    ChassisNumber="TestChassisNumber",

                }
            };
            long appointmentNumber = 1;
            var chassisNumber = "test";
            mockAttachmentService.Setup(i => i.SearchAttachment(chassisNumber,appointmentNumber)).ReturnsAsync(data);
            var result = await controller.SearchAttachment(chassisNumber,appointmentNumber);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);

        }
        [Fact]
        public async Task SearchAttachment_ReturnsBadRequestForInvalidChassisNumber()
        {
            var data=new List<AttachmentResponse>
            {
                new AttachmentResponse
                {
                    AppointmentNumber= 1,
                    SubmissionDateTime= DateTime.Now,
                    AdditionalMessage="",
                    File= "a",
                    Description="",
                    CentreCode="TY1",
                    ChassisNumber="TestChassisNumber",

                }
            };
            long appointmentNumber = 1;
           
            mockAttachmentService.Setup(i => i.SearchAttachment(It.IsAny<string>(),appointmentNumber)).ReturnsAsync(data);
            var result = await controller.SearchAttachment(It.IsAny<string>(),appointmentNumber) as BadRequestObjectResult;
            Assert.Equal("Chassis Number is required", result?.Value);
            Assert.Equal(400, result?.StatusCode);


        }
        [Fact]
        public async Task SearchAttachment_ReturnsInternalServerError()
        {
            string request = "test";
            long num = 1;

            mockAttachmentService.Setup(i => i.SearchAttachment(request,num)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.SearchAttachment(request,num));
            Assert.Equal("Simulated Error", result.Message);
        }


        [Fact]
        public async Task AddAttachment_Returns200OKStatus()
        {
            var data = "Succesfull";
            mockAttachmentService.Setup(i => i.AddAttachment(It.IsAny<AttachmentDto>())).ReturnsAsync(data);
            var result = await controller.AddAttachment(It.IsAny<AttachmentDto>());
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);

        }
        [Fact]
        public async Task AddAttachment_ReturnsInternalServerError()
        {
           
            mockAttachmentService.Setup(i => i.AddAttachment(It.IsAny<AttachmentDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.AddAttachment(It.IsAny<AttachmentDto>()));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task DeleteAttachment_Returns200OKStatus()
        {
            var data = "Succesfull";
            var fileName = "TestFileName";
            var chassisNumber = "test";
            mockAttachmentService.Setup(i => i.DeleteAttachment(chassisNumber,fileName)).ReturnsAsync(data);
            var result = await controller.DeleteAttachment(chassisNumber,fileName);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);

        }
        [Fact]
        public async Task DeleteAttachment_ReturnsBadRequestForInvalidChassisNumber()
        {
            var data = "Succesfull";
            var fileName = "TestFileName";
            mockAttachmentService.Setup(i => i.DeleteAttachment(It.IsAny<string>(), fileName)).ReturnsAsync(data);
            var result = await controller.DeleteAttachment(It.IsAny<string>(), fileName) as BadRequestObjectResult;
            Assert.Equal("Chassis Number is required", result?.Value);
            Assert.Equal(400, result?.StatusCode);

        }
        [Fact]
        public async Task DeleteAttachment_ReturnsBadRequestForInvalidFileName()
        {
            var data = "Succesfull";
            var chassisNumber = "test";
            mockAttachmentService.Setup(i => i.DeleteAttachment(chassisNumber,It.IsAny<string>())).ReturnsAsync(data);
            var result = await controller.DeleteAttachment(chassisNumber,It.IsAny<string>()) as BadRequestObjectResult;
            Assert.Equal("File Name is required", result?.Value);
            Assert.Equal(400, result?.StatusCode);

        }
        [Fact]
        public async Task DeleteAttachment_ReturnsInternalServerError()
        {
            var fileName = "TestFileName";
            var chassisNumber = "test";
            mockAttachmentService.Setup(i => i.DeleteAttachment(chassisNumber,fileName)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.DeleteAttachment(chassisNumber, fileName));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task DownloadAttachment_ReturnsFileResult()
        {
            string fileName = "123";
            var chassisNumber = "test";
            mockAttachmentService.Setup(i => i.DownloadAttachment(chassisNumber, fileName)).ReturnsAsync(new byte[] {1,2,3});
            var result = await controller.DownloadAttachment(chassisNumber, fileName);
            var objectResult = Assert.IsType<FileContentResult>(result);
            Assert.Equal("application/octet-stream", objectResult.ContentType);

        }

        [Fact]
        public async Task DownloadAttachment_ReturnsBadRequest()
        {
            string fileName = "123";
            var chassisNumber = "test";
            mockAttachmentService.Setup(i => i.DownloadAttachment(chassisNumber, fileName)).ReturnsAsync(null as byte[]);
            var result = await controller.DownloadAttachment(chassisNumber, fileName);
           Assert.IsType<BadRequestObjectResult>(result);
           

        }

    }
}
