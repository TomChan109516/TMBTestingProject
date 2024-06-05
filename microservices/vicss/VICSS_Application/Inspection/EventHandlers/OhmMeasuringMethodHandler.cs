namespace VICSS.Service.Inspection.EventHandlers
{
    using Inspection.Domain;
    using Inspection.Helper;
    using MediatR;

    public class OhmMeasuringMethodHandler : IRequestHandler<OhmMeasuringMethodRequestDto, OhmMeasuringMethodResponseDto>
    {
        public OhmMeasuringMethodHandler()
        {
            
        }
        public async Task<OhmMeasuringMethodResponseDto> Handle(OhmMeasuringMethodRequestDto request, CancellationToken cancellationToken)
        {
            OhmMeasuringMethodResponseDto data = new OhmMeasuringMethodResponseDto();
            data.OhmMeasuringMethods = CommonMethods.OhmMeasuringMethodMockData();

            return data;
        }
    }
}
