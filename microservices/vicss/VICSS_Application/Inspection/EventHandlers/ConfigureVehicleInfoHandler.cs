using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net;
using VICSS.Service.Inspection.Domain;
using VICSS.Service.Inspection.Helper;
using VICSS.Shared.Models.Artu;
using VICSS.Shared.Models.Common;

namespace VICSS.Service.Inspection.EventHandlers
{
    public class ConfigureVehicleInfoHandler : IRequestHandler<ArtuInspectionConfigurationDto, ArtuInspectionConfigurationDtoResponse>
    {
        private readonly ILogger<GetExamCodeHandler> logger;
        private readonly IMapper mapper;

        public ConfigureVehicleInfoHandler(ILogger<GetExamCodeHandler> logger, IMapper mapper)
        {
            this.logger = logger;
            this.mapper = mapper;
        }

        public async Task<ArtuInspectionConfigurationDtoResponse> Handle(ArtuInspectionConfigurationDto request, CancellationToken cancellationToken)
        {
            var response = new ArtuInspectionConfigurationDtoResponse();
            if (request == null)
            {
                logger.LogInformation("Blank value was sent");
                response.HttpStatusCode = HttpStatusCode.BadRequest;
                return response;
            }

            logger.LogInformation($"Sent Value {JsonConvert.SerializeObject(request)}");

            SingletoneVehicleInfo singletoneVehicle = SingletoneVehicleInfo.Instance;

            //Setting Values
            singletoneVehicle.artuInspectionConfiguration = mapper.Map<ArtuInspectionConfigurationDto>(request);

            logger.LogInformation($"Single Tone value created Sunncessully" +
                $" {JsonConvert.SerializeObject(singletoneVehicle.artuInspectionConfiguration)}");

            response.HttpStatusCode = HttpStatusCode.Created;
            return response;
        }
    }
}
