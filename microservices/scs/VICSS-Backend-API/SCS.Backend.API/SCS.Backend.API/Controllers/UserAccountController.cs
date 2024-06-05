using System.Net;
using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;

namespace SCS_Backend_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAccountController : ControllerBase
    {
        private readonly IUserAccountService userAccountService;
        private readonly ILogger<UserAccountController> logger;

        public UserAccountController(IUserAccountService userAccountService, ILogger<UserAccountController> logger)
        {
            this.logger = logger;
            this.userAccountService = userAccountService;
        }

        [Route("createuser")]
        [HttpPost]        
        public async Task<IActionResult> CreateUserAccount(CreateUserDto createUserDto)
        {
            
            var response = await userAccountService.CreateUser(createUserDto);

            if (response != "success") 
            {
                return BadRequest(response);            
            }

            return Ok(response);
        }

        [Route("edituser")]
        [HttpPost]
        public async Task<IActionResult> EditUserAccount(EditUserDto editUserDto)
        {
            var response = await userAccountService.UpdateUser(editUserDto);

            if(response != "success")
            {
                return BadRequest(response);
            }

            return Ok(response);
        }

        [Route("getuserdetail")]
        [HttpGet]
        public async Task<IActionResult> GetUserById(string userId)
        {
            var response = await userAccountService.GetUserDetails(userId);            

            return Ok(response);
        }


        [Route("deleteuser")]
        [HttpPost]
        public async Task<IActionResult> DeleteUser(string userId)
        {

            var response = await userAccountService.DeleteUser(userId);

            if (response != "success")
            {
                return BadRequest(response);
            }

            return Ok(response);
        }

        [Route("searchusers")]
        [HttpPost]
        public async Task<IActionResult> GetUsers(SearchUserRequestDto searchUserRequestDto)
        {
            var response = await userAccountService.SearchUsers(searchUserRequestDto);

            return Ok(response);
        }
    }
}
