using Microsoft.AspNetCore.Mvc;
using SCS_Backend_API.Interfaces;
using SCS_Backend_API.Constants;
using SCS_Backend_API.DTO;
using Newtonsoft.Json;

namespace SCS_Backend_API.Controllers
{
    [ApiController]
    [Route("api/login")]
    public class LoginController : Controller
    {
        #region Private Variables
        private readonly ILoginService _loginService;
        private readonly ICenterService _centerService;
        private readonly ILogger<LoginController> _logger;
        #endregion

        #region Constructor
        public LoginController(ILoginService loginService, ICenterService centerService, ILogger<LoginController> logger)
        {
            _loginService = loginService;
            _centerService = centerService;
            _logger = logger;
        }
        #endregion

        #region Action Methods
        //Login

        /// <summary>
        /// This method checks for User Login Credentials
        /// </summary>
        /// <param name="login"></param>
        /// <returns> Authorized or UnAuthorized </returns>
        [HttpPost]
        [Route("usercredentials")]
        public async Task<IActionResult> Login(LoginDto login)
        {
            try
            {
                _logger.LogInformation("Login processing request : " + JsonConvert.SerializeObject(login));
                string isValid = await _loginService.ValidateCredentials(login);

                if (isValid == CommonMessages.ValidCredentials)
                {
                    return Ok(isValid);
                }
                return Unauthorized(isValid);
            }
            catch (Exception ex)
            {
                _logger.LogError("Login exception : " + ex.Message);
                throw;
            }
        }

        //GetAllCenters

        /// <summary>
        /// This methods fetches the list of Centers 
        /// </summary>
        /// <returns> List of centers</returns>   
        [HttpGet]
        [Route("getcenters")]
        public async Task<IActionResult> GetAllCenters()
        {
            try
            {
                _logger.LogInformation("GetAllCenters processing request");
                var centers = await _centerService.GetAllCenters();
                _logger.LogInformation("GetAllCenters response : " + JsonConvert.SerializeObject(centers));
                return Ok(centers);
            }
            catch (Exception ex)
            {
                _logger.LogError("GetAllCenters exception : " + ex.Message);
                throw;
            }
        }
        #endregion
    }
}
