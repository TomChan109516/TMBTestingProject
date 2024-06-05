using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_API_Unit_Tests.Helper;
using SCS_Backend_API.Controllers;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;


namespace SCS_API_Unit_Tests.Controllers
{
    public class PaymentControllerUnitTest
    {
        private readonly Mock<IPaymentService> mockPaymentService;
        private readonly Mock<ILogger<PaymentController>> mockLogger;
        private readonly PaymentController controller;
        public PaymentControllerUnitTest()
        {
            mockPaymentService = new Mock<IPaymentService>();
            mockLogger = new Mock<ILogger<PaymentController>>();
            controller = new PaymentController(mockPaymentService.Object, mockLogger.Object);
        }
        [Fact]
        public async Task DeletePayment_Returns200Status()
        {
            var data = MockData.DeletePaymentResponseData();
            long request = 1;
            mockPaymentService.Setup(i => i.DeletePayment(request)).ReturnsAsync(data);

            var result = await controller.DeletePayment(request);

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);
        }
        [Fact]
        public async Task DeletePayment_ReturnsBadRequestForInvalidAppointNumber()
        {
            var data = MockData.DeletePaymentResponseData;

            mockPaymentService.Setup(i => i.DeletePayment(It.IsAny<long>())).ReturnsAsync(data);
            var result = await controller.DeletePayment(It.IsAny<long>()) as ObjectResult;
            Assert.Equal("Appointment Number should be greater than 0", result?.Value);
            Assert.Equal(400, result?.StatusCode);


        }
        [Fact]
        public async Task DeletePayment_ReturnsInternalServerError()
        {
            long request = 1;

            mockPaymentService.Setup(x => x.DeletePayment(request)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.DeletePayment(request));
            Assert.Equal("Simulated Error", result.Message);
        }

        [Fact]
        public async Task ConfirmPayment_Returns200Status()
        {
            var request = new List<ConfirmPayment> { new ConfirmPayment { AppointmentNumber = 1 } };
           var data = new List<ConfirmPaymentResponse> { new ConfirmPaymentResponse
           { StatusCode=200,
               Message="Succesfull",
               data=new ConfirmPayment { AppointmentNumber=1} } };
            
            mockPaymentService.Setup(i => i.ConfirmPayment(request)).ReturnsAsync(data);

            var result = await controller.ConfirmPayment(request);

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
            Assert.Equal(data, objectResult.Value);
        }
        [Fact]
        public async Task ConfirmPayment_ReturnsInternalServerError()
        {
            var request = new List<ConfirmPayment> { new ConfirmPayment { AppointmentNumber = 1 } };

            mockPaymentService.Setup(x => x.ConfirmPayment(request)).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.ConfirmPayment(request));
            Assert.Equal("Simulated Error", result.Message);
        }
        [Fact]
        public async Task SearchPayment_Returns200Status()
        {
          
            mockPaymentService.Setup(i => i.SearchPayment(It.IsAny<SearchPayment>())).ReturnsAsync(It.IsAny<SearchPaymentResponse>());

            var result = await controller.SearchPayment(It.IsAny<SearchPayment>());

            Assert.NotNull(result);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);
       
        }
        [Fact]
        public async Task SearchPayment_ReturnsInternalServerError()
        {
          
            mockPaymentService.Setup(x => x.SearchPayment(It.IsAny<SearchPayment>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.SearchPayment(It.IsAny<SearchPayment>()));
            Assert.Equal("Simulated Error", result.Message);
        }
    }
}
