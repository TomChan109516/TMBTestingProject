namespace VICSS.Service.Inspection.EventHandlers
{
    using MediatR;
    using System.Net;
    using VICSS.Service.Inspection.Domain;
    using static VICSS.Service.Inspection.Helper.CommonMethods;
    using VICSS.Shared.Models.Common;
    public class TabletLoginHandler : IRequestHandler<TabletLoginRequestDto, TabletLoginResponseDto>
    {
        private readonly ILogger<TabletLoginHandler> logger;
        IConfiguration configuration;

        public TabletLoginHandler(ILogger<TabletLoginHandler> logger, IConfiguration configuration)
        {
            this.logger = logger;
            this.configuration = configuration;
        }
        public async Task<TabletLoginResponseDto> Handle(TabletLoginRequestDto request, CancellationToken cancellationToken)
        {
            TabletLoginResponseDto response = new();
            Dictionary<string, string> _ipDetails;
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "TabletLoginHandler", "TabletLoginHandler has started");

                _ipDetails = configuration.GetSection("IpDetails")
                    .GetChildren()
                    .ToDictionary(
                        x => x.Key,
                        x => x.GetSection("DeviceType").Value
                    );

                if (_ipDetails != null && _ipDetails.ContainsKey(request.IpAddress))
                {
                    response.IpAddress = _ipDetails[request.IpAddress];
                    response.Message = CommonErrorMessage.SuccessLoginMessage;
                    response.IsSuccess = true;
                    response.HttpStatusCode = HttpStatusCode.OK;
                }
                else
                {
                    response.IpAddress = string.Empty;
                    response.Message = CommonErrorMessage.IpAdressErrorMessage;
                    response.IsSuccess = false;
                    response.HttpStatusCode = HttpStatusCode.NotFound;
                }

            }
            catch (Exception ex)
            {
                response.HttpStatusCode = HttpStatusCode.InternalServerError;
                response.ErrorMessage = CommonErrorMessage.InternalServerError;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "TabletLoginHandler", ex.ToString());

            }
            logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "TabletLoginHandler", "TabletLoginHandler service completed.");

            return response;
        }
    }
}
