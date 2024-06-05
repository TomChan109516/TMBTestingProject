namespace VICSS.Service.Inspection.EventHandlers
{
    using MediatR;
    using System.Net;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;
    using static VICSS.Service.Inspection.Helper.CommonMethods;
    using System.Threading;
    using System.Threading.Tasks;
    using VICSS.Service.Inspection.Helper;

    /// <summary>
    /// Handles the retrieval of IP details.
    /// </summary>
    public class GetDetailsByIpHandler : IRequestHandler<IpRequestDto, IpResponseDto>
    {
        private readonly IpDetailsProvider _ipDetailsProvider;

        /// <summary>
        /// Initializes a new instance of the <see cref="GetDetailsByIpHandler"/> class.
        /// </summary>
        /// <param name="ipDetailsProvider">The provider for IP details.</param>
        public GetDetailsByIpHandler(IpDetailsProvider ipDetailsProvider)
        {
            _ipDetailsProvider = ipDetailsProvider;
        }

        /// <summary>
        /// Handles the request to get IP details.
        /// </summary>
        /// <param name="request">The request containing the IP address.</param>
        /// <param name="cancellationToken">A token to monitor for cancellation requests.</param>
        /// <returns>A response containing the IP details.</returns>
        public async Task<IpResponseDto> Handle(IpRequestDto request, CancellationToken cancellationToken)
        {
            IpResponseDto response = new();
            response.IpAddress = request.IpAddress;
            try
            {
                var machineIpAddress = request.IpAddress; //HelperFunctions.GetClientIpAddress(request.Context);
                var details = _ipDetailsProvider.GetDetailsByIp(machineIpAddress);

                if (details.LaneId != null && details.StationId != null && !string.IsNullOrEmpty(machineIpAddress))
                {
                    response.IpAddress = machineIpAddress;
                    response.LaneId = details.LaneId;
                    response.StationId = details.StationId;
                    response.DeviceType = details.DeviceType;
                    response.HttpStatusCode = details.StatusCode;
                }
                else if (!string.IsNullOrEmpty(machineIpAddress))
                {
                    response.IpAddress = machineIpAddress;
                    response.HttpStatusCode = HttpStatusCode.NotFound;
                    response.ErrorMessage = CommonErrorMessage.LoginErrorMessage;
                }
            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.InternalServerError;
            }

            return await Task.FromResult(response).ConfigureAwait(false);
        }


    }
}