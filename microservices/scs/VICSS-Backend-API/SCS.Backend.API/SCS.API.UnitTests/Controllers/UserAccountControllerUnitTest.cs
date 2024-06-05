using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using SCS_API_Unit_Tests.Helper;
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
    public class UserAccountControllerUnitTest
    {
        private Mock<IUserAccountService> mockUserAccountService;
        private Mock<ILogger<UserAccountController>> mockLogger;
        private UserAccountController controller;
        public UserAccountControllerUnitTest()
        {
            mockUserAccountService = new Mock<IUserAccountService>();
            mockLogger = new Mock<ILogger<UserAccountController>>();
            controller = new UserAccountController(mockUserAccountService.Object, mockLogger.Object);
        }

        [Fact]
        public async Task CreateUserAccount_Returns200OKStatus()
        {
            var data = "success";

            mockUserAccountService.Setup(i => i.CreateUser(It.IsAny<CreateUserDto>())).ReturnsAsync(data);
            var result = await controller.CreateUserAccount(It.IsAny<CreateUserDto>());
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);

        }
        [Fact]
        public async Task CreateUserAccount_ReturnsBadRequest()
        {
            var data = "Unsuccessfull";

            mockUserAccountService.Setup(i => i.CreateUser(It.IsAny<CreateUserDto>())).ReturnsAsync(data);
            var result = await controller.CreateUserAccount(It.IsAny<CreateUserDto>()) as BadRequestObjectResult;
            Assert.Equal(400, result?.StatusCode);
            Assert.IsType<BadRequestObjectResult>(result);    

        }
        [Fact]
        public async Task EditUserAccount_Returns200OKStatus()
        {
            var data = "success";

            mockUserAccountService.Setup(i => i.UpdateUser(It.IsAny<EditUserDto>())).ReturnsAsync(data);
            var result = await controller.EditUserAccount(It.IsAny<EditUserDto>());
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);

        }
        [Fact]
        public async Task EditUserAccount_ReturnsBadRequest()
        {
            var data = "Unsuccessfull";

            mockUserAccountService.Setup(i => i.UpdateUser(It.IsAny<EditUserDto>())).ReturnsAsync(data);
            var result = await controller.EditUserAccount(It.IsAny<EditUserDto>()) as BadRequestObjectResult;
            Assert.Equal(400, result?.StatusCode);
            Assert.IsType<BadRequestObjectResult>(result);

        }
        [Fact]
        public async Task GetUsers_Returns200OKStatus()
        {
            var data = new List<SearchUserDto> { MockData.SearchUserDtoData() };

            mockUserAccountService.Setup(i => i.SearchUsers(It.IsAny<SearchUserRequestDto>())).ReturnsAsync(data);
            var result = await controller.GetUsers(It.IsAny<SearchUserRequestDto>());
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);

        }
        [Fact]
        public async Task GetUsersById_Returns200OKStatus()
        {
            var data = MockData.SearchUserDtoData();
            var request = "1";

            mockUserAccountService.Setup(i => i.GetUserDetails(request)).ReturnsAsync(data);
            var result = await controller.GetUserById(request);
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);

        }
        [Fact]
        public async Task DeleteUser_Returns200OKStatus()
        {
            var data = "success";

            mockUserAccountService.Setup(i => i.DeleteUser(It.IsAny<string>())).ReturnsAsync(data);
            var result = await controller.DeleteUser(It.IsAny<string>());
            var objectResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(200, objectResult.StatusCode);

        }
        [Fact]
        public async Task DeleteUser_ReturnsBadRequest()
        {
            var data = "Unsuccessfull";

            mockUserAccountService.Setup(i => i.DeleteUser(It.IsAny<string>())).ReturnsAsync(data);
            var result = await controller.DeleteUser(It.IsAny<string>()) as BadRequestObjectResult;
            Assert.Equal(400, result?.StatusCode);
            Assert.IsType<BadRequestObjectResult>(result);

        }
    }
}
