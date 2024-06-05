using Microsoft.EntityFrameworkCore;
using SCS_Backend_API.Constants;
using SCS_Backend_API.Data;
using SCS_Backend_API.DTO;
using SCS_Backend_API.Interfaces;

namespace SCS_Backend_API.Services
{
    public class LoginService : ILoginService
    {
        #region Private Variables
        private readonly AppDBContextEF _context;
        private readonly ILogger<LoginService> _logger;
        #endregion

        #region Constructor
        public LoginService(AppDBContextEF context, ILogger<LoginService> logger)
        {
            _context = context;
            _logger = logger;
        }
        #endregion

        #region Public Services
        //ValidateCredentails

        /// <summary>
        /// This method Validates the User credentails and Center
        /// </summary>
        /// <param name="login"></param>
        /// <returns> Validation Message </returns>
        /// <exception cref="Exception"></exception>
        public async Task<string> ValidateCredentials(LoginDto login)
        {
            try
            {
                _logger.LogInformation("ValidateCredentials service started.");
                var user = await _context.SCS_Logins.FirstOrDefaultAsync(u => u.UserName == login.UserName && u.Password == login.Password);
                //To make CenterName with string
                var center = await _context.SCS_Centers.FirstOrDefaultAsync(c => c.Ctr_Id == login.CenterId);

                if (user != null)
                {
                    if (user.Ctr_Id == center?.Ctr_Id)
                    {
                        return CommonMessages.ValidCredentials;
                    }

                    _logger.LogInformation("ValidateCredentials service completed.");
                    return CommonMessages.InvalidCenter;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.StackTrace);
            }
            return CommonMessages.InvalidCredentials;
        }
        #endregion
    }

}
