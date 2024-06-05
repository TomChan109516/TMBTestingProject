using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_Backend_API;
using SCS_Backend_API.Controllers;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;


namespace SCS_API_Unit_Tests.Controllers
{
    public class LoginControllerUnitTest
    {
        private Mock<ILoginService> mockLoginService;
        private Mock<ICenterService> mockCenterService;
        private Mock<ILogger<LoginController>> mockLogger;
        private LoginController controller;
        public LoginControllerUnitTest()
        {
            mockLoginService = new Mock<ILoginService>();
            mockCenterService = new Mock<ICenterService>();
            mockLogger = new Mock<ILogger<LoginController>>();
            controller = new LoginController(mockLoginService.Object, mockCenterService.Object, mockLogger.Object);
        }
        [Fact]
        public async Task Login_Successfull_ReturnsOk()
        {
            LoginDto log = new LoginDto()
            {
                UserName = "test",
                Password = "password",
                CenterId = "TY1"
            };
            mockLoginService.Setup(x => x.ValidateCredentials(It.IsAny<LoginDto>())).ReturnsAsync("Login Successful!");
            var result = await controller.Login(log);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal("Login Successful!", objectResult.Value);
            
        }

        [Fact]
        public async Task Login_Failed_ReturnsUnauthorized_ByWrongUsername()
        {
            LoginDto log = new LoginDto()
            {
                UserName = "test",
                Password = "password",
                CenterId = "TY1"
            };
            mockLoginService.Setup(x => x.ValidateCredentials(It.IsAny<LoginDto>())).ReturnsAsync("Invalid Username or Password");
            var result = await controller.Login(log);
            var objectResult = Assert.IsType<UnauthorizedObjectResult>(result);
            Assert.Equal("Invalid Username or Password", objectResult.Value);
        }


        [Fact]
        public async Task Login_Failed_ReturnsUnauthorized_ByWrongPassword()
        {
            LoginDto log = new LoginDto()
            {
                UserName = "test",
                Password = "password",
                CenterId = "TY1"
            };
            mockLoginService.Setup(x => x.ValidateCredentials(It.IsAny<LoginDto>())).ReturnsAsync("Invalid Username or Password");
            var result = await controller.Login(log);
            var objectResult = Assert.IsType<UnauthorizedObjectResult>(result);
            Assert.Equal("Invalid Username or Password", objectResult.Value);
        }

         [Fact]
        public async Task Login_Failed_ReturnsUnauthorized_ByWrongCenter()
        {
            LoginDto log = new LoginDto()
            {
                UserName = "test",
                Password = "password",
                CenterId = "TY1"
            };
            mockLoginService.Setup(x => x.ValidateCredentials(It.IsAny<LoginDto>())).ReturnsAsync("Entered wrong center");
            var result = await controller.Login(log);
            var objectResult = Assert.IsType<UnauthorizedObjectResult>(result);
            Assert.Equal("Entered wrong center", objectResult.Value);
        }

        [Fact]
        public async Task Login_Failed_ExceptionOccurs_ReturnsInternalServerError()
        {
            LoginDto log = new LoginDto()
            {
                UserName = "test",
                Password = "password",
                CenterId = "TY1"
            };
            mockLoginService.Setup(x => x.ValidateCredentials(It.IsAny<LoginDto>())).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.Login(log));
            Assert.Equal("Simulated Error", result.Message);

        }


        [Fact]
        public async Task GetAllCenters_ReturnsListOfCenters()
        {
            var data1 = new CenterResponseDto
            {
                data = new List<CenterDto> { new CenterDto() { CenterId = "Ty2", CenterName = "test" } },
                StatusCode = 200,
                Message = "Centers Fetched Succesfully"

            };

            mockCenterService.Setup(x => x.GetAllCenters()).ReturnsAsync(data1);
            var result = await controller.GetAllCenters() as OkObjectResult;

            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, result.StatusCode);
            Assert.NotNull(result);
            Assert.Equal(data1, result.Value);
        }

        [Fact]
        public async Task GetAllCenters_ReturnsInternalServerError()
        {
            mockCenterService.Setup(x => x.GetAllCenters()).ThrowsAsync(new Exception("Simulated Error"));

            var result = await Assert.ThrowsAsync<Exception>(async () => await controller.GetAllCenters());
            Assert.Equal("Simulated Error", result.Message);
        }
    }
}
