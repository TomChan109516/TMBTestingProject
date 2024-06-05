namespace VICSS.Service.Inspection.EventHandlers
{
    using MediatR;
    using System.Net;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;
    public class StartTestHandler : IRequestHandler<StartTestDtoRequest, StartTestDtoResponse>
    {

        public async Task<StartTestDtoResponse> Handle(StartTestDtoRequest request, CancellationToken cancellationToken)
        {
            StartTestDtoResponse response = new();
            response.Message = CommonMessages.TestStarted;
            response.HttpStatusCode =HttpStatusCode.OK;
            return response;
        }
    }
}
