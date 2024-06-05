namespace VICSS.Service.Inspection.EventHandlers
{
    using Inspection.Domain;
    using MediatR;
    using System.Net;
    using VICSS.Shared.Models.Common;
    using static VICSS.Service.Inspection.Helper.CommonMethods;
    using System.Threading;
    using System.Threading.Tasks;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Service.Inspection.Helper;

    /// <summary>
    /// Handles user login requests.
    /// </summary>
    public class UserLoginHandler : IRequestHandler<UserLoginRequestDto, UserLoginResponseDto>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserLoginHandler"/> class.
        /// </summary>
        public UserLoginHandler()
        { }

        /// <summary>
        /// Handles the request to login a user.
        /// </summary>
        /// <param name="request">The request containing the user's credentials and IP address.</param>
        /// <param name="cancellationToken">A token to monitor for cancellation requests.</param>
        /// <returns>A response indicating the result of the login attempt.</returns>
        public async Task<UserLoginResponseDto> Handle(UserLoginRequestDto request, CancellationToken cancellationToken)
        {
            UserLoginResponseDto response = new();
            try
            {
                var machineIpAddress = request.IpAddress; //HelperFunctions.GetClientIpAddress(request.Context); //HelperFunctions.GetClientIP();
                request.IpAddress = machineIpAddress;

                if (UserValidator.ValidateUser(request.UserID, request.Password))
                {
                    response.Message = CommonErrorMessage.SuccessLoginMessage;
                    response.IsSuccess = true;
                    response.HttpStatusCode = HttpStatusCode.OK;

                    var userDetails = IpAddressMapper.MapIpAddressToUserDetails(request.IpAddress);
                    if (userDetails.LaneId != null)
                    {
                        response.IpAddress = request.IpAddress;
                        response.LaneId = userDetails.LaneId;
                        response.StationId = userDetails.StationId;
                        response.UserName = userDetails.UserName;
                    }
                    else
                    {
                        response.Message = CommonErrorMessage.IpAdressErrorMessage;
                        response.IsSuccess = false;
                        response.HttpStatusCode = HttpStatusCode.NotFound;
                    }
                }
                else
                {
                    response.Message = CommonErrorMessage.CredentialsErrorMessage;
                    response.IsSuccess = false;
                    response.HttpStatusCode = HttpStatusCode.NotFound;
                }
            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.InternalServerError;
            }

            return response;
        }
    }
}