using AutoMapper;
using MediatR;
using VICSS.Service.Inspection.Domain;
using VICSS.Service.Inspection.Helper;
using VICSS.Shared.Models.Common;
using VICSS.Shared.Models.Inspection;

namespace VICSS.Service.Inspection.EventHandlers
{
    public class GetStatusofTheStationHandler : IRequestHandler<GetStatusofTheStationRequestDto, GetStatusofTheStationResponseDto>
    {
        private readonly IMapper mapper;
        private readonly ILogger<GetStatusofTheStationHandler> logger;

        public GetStatusofTheStationHandler(IMapper mapper, ILogger<GetStatusofTheStationHandler> logger)
        {
            this.mapper = mapper;
            this.logger = logger;
        }

        public async Task<GetStatusofTheStationResponseDto> Handle(GetStatusofTheStationRequestDto request, CancellationToken cancellationToken)
        {
            LaneStationAppointmentManager appointmentManager = new LaneStationAppointmentManager();
            GetStatusofTheStationResponseDto responseDto = new GetStatusofTheStationResponseDto()
            {
                returnAppointmentNumber = "No appointment"
            };
            string trackingId = Guid.NewGuid().ToString();
            StationNames prevstationName;

            try
            {
                Enum.TryParse(request.Station, out StationNames stationName);
                prevstationName = HelperFunctions.GetPrevEnumValue(stationName);

                if (prevstationName <= 0)
                {
                    return responseDto;
                }

                var activeStationValues = appointmentManager.GetAppointment(request.LaneId, prevstationName) as ValuePariForActiveStation;

                if (activeStationValues != null
                   //&& GlobalDataSaver.SaveActiveVeesStation.ContainsKey((request.Station, request.LaneId)) //Also check Station Active or Not.
                   )
                {
                    /* JUST FOR APRIL DEMO */
                    switch (prevstationName)
                    {
                        case StationNames.A:
                            responseDto.returnAppointmentNumber = activeStationValues.TotalTestCount == 2 ? activeStationValues.AppointmentNumber : "No appointment";
                            break;
                        case StationNames.B:
                        case StationNames.D:
                            responseDto.returnAppointmentNumber = activeStationValues.TotalTestCount == 1 ? activeStationValues.AppointmentNumber : "No appointment";
                            break;
                        case StationNames.C:
                            responseDto.returnAppointmentNumber = activeStationValues.TotalTestCount == 3 ? activeStationValues.AppointmentNumber : "No appointment";
                            break;
                    }
                }
            }
            catch (Exception ex)
            {
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetStatusofTheStationHandler", ex, ToString());
            }

            return responseDto;
        }
    }
}
