namespace VICSS.Service.Inspection.EventHandlers
{
    using AutoMapper;
    using MediatR;
    using System.Net;
    using VICSS.Infrastructure.DataAccess.Context;
    using VICSS.Infrastructure.DataAccess.Entities.Inspection;
    using VICSS.Infrastructure.DataAccess.Repositories.Interface;
    using VICSS.Service.Inspection.Domain;
    using VICSS.Shared.Models.Common;


    public class GetAllTestResultsHandler : IRequestHandler<GetAllTestResultsRequestDto, GetAllTestResultsResponseDto>
    {
        private readonly IMapper mapper;
        private readonly IGenericRepository<InspectionDBContext, Test> genericRepository;
        private readonly ILogger<GetAllTestResultsHandler> logger;

        public GetAllTestResultsHandler(
            IMapper mapper,
            IGenericRepository<InspectionDBContext, Test> genericRepository,
            ILogger<GetAllTestResultsHandler> logger
            )
        {
            this.mapper = mapper;
            this.genericRepository = genericRepository;
            this.logger = logger;
        }

        public async Task<GetAllTestResultsResponseDto> Handle(GetAllTestResultsRequestDto request, CancellationToken cancellationToken)
        {
            GetAllTestResultsResponseDto getAllTestResultsResponseDto = new GetAllTestResultsResponseDto();
            string trackingId = Guid.NewGuid().ToString();
            try
            {
                logger.LogInformation(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetAllTestResultsHandler", "GetAllTestResultsHandler initiated");
                if (request.InspectionId != null)
                {
                    var testDetails = await GetTestDetails(request.InspectionId);
                    if (testDetails != null)
                    {
                        ProcessTestResultHeights(testDetails, getAllTestResultsResponseDto);
                        ProcessTestResultHeadLamps(testDetails, getAllTestResultsResponseDto);
                        ProcessTestResultVisuals(testDetails, getAllTestResultsResponseDto);
                        ProcessTestResultAxleWeights(testDetails, getAllTestResultsResponseDto);
                        ProcessTestResultBrakes(testDetails, getAllTestResultsResponseDto);
                        ProcessTestResultSpeedometers(testDetails, getAllTestResultsResponseDto);
                        ProcessTestResultTaximeters(testDetails, getAllTestResultsResponseDto);
                        ProcessTestResultUndercarriages(testDetails, getAllTestResultsResponseDto);
                        ProcessTestResultExhaust(testDetails, getAllTestResultsResponseDto);
                        ProcessTestResultTilting(testDetails, getAllTestResultsResponseDto);
                        getAllTestResultsResponseDto.HttpStatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        getAllTestResultsResponseDto.HttpStatusCode = HttpStatusCode.NotFound;
                        getAllTestResultsResponseDto.ErrorMessage = CommonMessages.NoTestsFound;
                    }
                }
            }
            catch (Exception ex)
            {
                getAllTestResultsResponseDto.HttpStatusCode = HttpStatusCode.InternalServerError;
                getAllTestResultsResponseDto.ErrorMessage = CommonErrorMessage.ErrorMessage;
                logger.LogError(CommonErrorMessage.ApplicationErrorFormat, trackingId, CommonConstants.InspectionServiceName, "GetAllTestResultsHandler", ex.ToString());
            }

            return getAllTestResultsResponseDto;
        }

        private async Task<List<Test>> GetTestDetails(string inspectionId)
        {
            return (List<Test>)await genericRepository.GetByQuery(
                x => x.InspectionId == inspectionId, param => param.TestItems);
        }

        private void ProcessTestResultHeights(List<Test> testDetails, GetAllTestResultsResponseDto responseDto)
        {
            var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.OverheadHeightMeasurement);
            if (result != null)
            {
                responseDto.OhmResult = result.EndResult;
                responseDto.OhmTestId = result.TestId;
            }
        }

        private void ProcessTestResultHeadLamps(List<Test> testDetails, GetAllTestResultsResponseDto responseDto)
        {
            var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.HeadlampTest);
            if (result != null)
            {
                responseDto.HeadlampResult = result.EndResult;
                responseDto.HeadlampTestId = result.TestId;
            }
        }

        private void ProcessTestResultVisuals(List<Test> testDetails, GetAllTestResultsResponseDto responseDto)
        {
            var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.VisualInspection);
            if (result != null)
            {
                responseDto.VisualResult = result.EndResult;
                responseDto.VisualTestId = result.TestId;
            }
        }
        private void ProcessTestResultAxleWeights(List<Test> testDetails, GetAllTestResultsResponseDto responseDto)
        {
            var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.AxleWeightbridgeTest);
            if (result != null)
            {
                responseDto.AxleWeightResult = result.EndResult;
                responseDto.AxleWeightTestId = result.TestId;
            }
        }

        private void ProcessTestResultBrakes(List<Test> testDetails, GetAllTestResultsResponseDto responseDto)
        {
            var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.BrakeRollerTest);
            if (result != null)
            {
                responseDto.BrakeResult = result.EndResult;
                responseDto.BrakeTestId = result.TestId;
            }
        }
        private void ProcessTestResultSpeedometers(List<Test> testDetails, GetAllTestResultsResponseDto responseDto)
        {
            var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.SpeedometerTest);
            if (result != null)
            {
                responseDto.SpeedometerResult = result.EndResult;
                responseDto.SpeedometerTestId = result.TestId;
            }
        }
        private void ProcessTestResultTaximeters(List<Test> testDetails, GetAllTestResultsResponseDto responseDto)
        {
            var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.TaximeterTest);
            if (result != null)
            {
                responseDto.TaximeterResult = result.EndResult;
                responseDto.TaximeterTestId = result.TestId;
            }
        }
        private void ProcessTestResultUndercarriages(List<Test> testDetails, GetAllTestResultsResponseDto responseDto)
        {
            var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.UnderCarriageInspection);
            if (result != null)
            {
                responseDto.UnderCarriageResult = result.EndResult;
                responseDto.UnderCarriageTestId = result.TestId;
            }
        }
        private void ProcessTestResultExhaust(List<Test> testDetails, GetAllTestResultsResponseDto responseDto)
        {
            var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.ExhaustEmissionTestPetrol);
            if (result != null)
            {
                responseDto.ExhaustResult = result.EndResult;
                responseDto.ExhaustTestId = result.TestId;
            }
        }
        private void ProcessTestResultTilting(List<Test> testDetails, GetAllTestResultsResponseDto responseDto)
        {
            var result = testDetails.FirstOrDefault(a => a.TestItems.TestItem == CommonConstants.TiltingTest);
            if (result != null)
            {
                responseDto.TiltingTestResult = result.EndResult;
                responseDto.TiltingTestId = result.TestId;
            }
        }

    }
}